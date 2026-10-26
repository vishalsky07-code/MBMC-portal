-- Run ONCE in Supabase -> SQL Editor (after schema.sql). Adds ward-wise access + tamper-proof audit log.
alter table profiles add column if not exists display_name text;
alter table profiles add column if not exists ward text;  -- e.g. 'Ward 2'. NULL = all wards.

create or replace function can_edit(g_ward text) returns boolean language sql security definer stable set search_path = public as $$
  select exists (select 1 from profiles p where p.id = auth.uid() and (
    p.role = 'admin' or (p.role in ('inspector','ward_officer') and (p.ward is null or p.ward = split_part(g_ward,' - ',1)))))
$$;

drop policy if exists "staff update grievances" on grievances;
create policy "staff update own ward" on grievances for update using (can_edit(ward)) with check (can_edit(ward));

create table if not exists audit_log (
  id bigserial primary key, grievance_id text not null, actor uuid, actor_label text,
  action text not null, from_status text, to_status text, created_at timestamptz not null default now());
alter table audit_log enable row level security;
create policy "staff read audit" on audit_log for select using (is_staff());
-- No insert/update/delete policies: rows can only be written by the trigger below.

create or replace function log_grievance() returns trigger language plpgsql security definer set search_path = public as $$
declare who text;
begin
  select coalesce(display_name, 'staff') into who from profiles where id = auth.uid();
  if tg_op = 'INSERT' then
    insert into audit_log (grievance_id, action, to_status) values (new.id, 'filed', new.status);
  elsif old.status is distinct from new.status then
    insert into audit_log (grievance_id, actor, actor_label, action, from_status, to_status)
    values (new.id, auth.uid(), who, 'status_change', old.status, new.status);
  end if;
  return new;
end $$;
drop trigger if exists grievances_audit on grievances;
create trigger grievances_audit after insert or update on grievances for each row execute function log_grievance();

-- Example: give an officer a name and restrict to one ward:
-- update profiles set display_name = 'Officer Vishal', ward = 'Ward 2' where id = '<uid>';
