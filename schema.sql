-- MBMC grievance backend. Run once in Supabase -> SQL Editor.
create table profiles (id uuid primary key references auth.users on delete cascade,
  role text not null default 'citizen' check (role in ('citizen','inspector','ward_officer','admin')));
create or replace function is_staff() returns boolean language sql security definer stable set search_path = public as
$$ select exists (select 1 from profiles where id = auth.uid() and role in ('inspector','ward_officer','admin')) $$;

create table grievances (
  id text primary key check (id ~ '^MBMC-[0-9]{4}-[0-9]{7}$'),
  ward text not null, status text not null default 'Pending' check (status in ('Pending','In Progress','Resolved')),
  urgency text not null check (urgency in ('Low','Medium','High','Critical')),
  created_at timestamptz not null default now(), updated_at timestamptz not null default now(),
  sla_deadline timestamptz, data jsonb not null);
create table grievance_private (id text primary key references grievances on delete cascade, citizen_name text, citizen_phone text);
create index on grievances (status, created_at desc);

alter table profiles enable row level security;
alter table grievances enable row level security;
alter table grievance_private enable row level security;

create policy "read own profile" on profiles for select using (id = auth.uid());
create policy "public read grievances" on grievances for select using (true);
create policy "anyone files pending" on grievances for insert with check (status = 'Pending' and length(data::text) < 20000);
create policy "staff update grievances" on grievances for update using (is_staff()) with check (is_staff());
create policy "anyone adds private" on grievance_private for insert with check (true);
create policy "staff read private" on grievance_private for select using (is_staff());

-- Server-side flood guard: max 40 new grievances per minute overall
create or replace function throttle() returns trigger language plpgsql as $$
begin
  if (select count(*) from grievances where created_at > now() - interval '1 minute') > 40 then
    raise exception 'Too many submissions, try again shortly';
  end if; return new; end $$;
create trigger grievances_throttle before insert on grievances for each row execute function throttle();

-- Auto-create a citizen profile for every new auth user
create or replace function handle_new_user() returns trigger language plpgsql security definer set search_path = public as
$$ begin insert into profiles (id) values (new.id); return new; end $$;
create trigger on_auth_user_created after insert on auth.users for each row execute function handle_new_user();

-- Photo storage (2 MB max, images only)
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('evidence','evidence',true,2097152,array['image/jpeg','image/png','image/webp']) on conflict do nothing;
create policy "anyone uploads evidence" on storage.objects for insert with check (bucket_id = 'evidence');
create policy "public reads evidence" on storage.objects for select using (bucket_id = 'evidence');

-- Realtime updates
alter publication supabase_realtime add table grievances;

-- AFTER creating an officer in Authentication -> Users, make them staff:
-- update profiles set role = 'inspector' where id = '<user-uuid>';
