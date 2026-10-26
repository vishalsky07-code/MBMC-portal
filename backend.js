/* Supabase backend adapter. If config.js is empty, the app falls back to localStorage demo mode. */
(function () {
  const cfg = window.MBMC_CONFIG || {};
  const B = (window.mbmcBackend = { enabled: false, user: null, isStaff: false });
  if (!cfg.SUPABASE_URL || !cfg.SUPABASE_ANON_KEY || !window.supabase) return;
  const sb = window.supabase.createClient(cfg.SUPABASE_URL, cfg.SUPABASE_ANON_KEY);
  B.enabled = true; B.sb = sb;

  // ---- row <-> report mapping ----
  const toRow = r => {
    const { citizenName, citizenPhone, ...pub } = r;
    return { id: r.id, ward: r.ward, status: r.status, urgency: r.urgency,
      created_at: r.createdAt, updated_at: r.updatedAt, sla_deadline: r.slaDeadline, data: pub };
  };
  const fromRow = (row, priv) => ({
    ...row.data, id: row.id, status: row.status, updatedAt: row.updated_at,
    citizenName: priv ? priv.citizen_name : "Withheld (public view)",
    citizenPhone: priv ? priv.citizen_phone : "Withheld"
  });

  B.fetchAll = async function () {
    const { data: rows, error } = await sb.from("grievances").select("*").order("created_at", { ascending: false }).limit(1000);
    if (error) throw error;
    let privMap = {};
    if (B.isStaff) {
      const { data: p } = await sb.from("grievance_private").select("*");
      (p || []).forEach(x => (privMap[x.id] = x));
    }
    return rows.map(r => fromRow(r, privMap[r.id]));
  };

  // Compress to max 1280px / JPEG 0.7 before upload
  function compress(dataUrl) {
    return new Promise(res => {
      const img = new Image();
      img.onload = () => {
        const k = Math.min(1, 1280 / Math.max(img.width, img.height));
        const c = document.createElement("canvas");
        c.width = img.width * k; c.height = img.height * k;
        c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
        c.toBlob(b => res(b), "image/jpeg", 0.7);
      };
      img.onerror = () => res(null);
      img.src = dataUrl;
    });
  }

  B.insert = async function (report) {
    if (report.photoUrl && report.photoUrl.startsWith("data:")) {
      const blob = await compress(report.photoUrl);
      if (blob) {
        const path = `${report.id}-${crypto.randomUUID().slice(0, 8)}.jpg`;
        const up = await sb.storage.from("evidence").upload(path, blob, { contentType: "image/jpeg" });
        report.photoUrl = up.error ? "" : sb.storage.from("evidence").getPublicUrl(path).data.publicUrl;
      } else report.photoUrl = "";
    }
    const { error } = await sb.from("grievances").insert(toRow(report));
    if (error) throw error;
    await sb.from("grievance_private").insert({ id: report.id, citizen_name: report.citizenName, citizen_phone: report.citizenPhone });
  };

  B.update = async function (r) {
    const { error } = await sb.from("grievances").update(toRow(r)).eq("id", r.id);
    if (error) throw error;
  };

  async function refresh() {
    try { app.reports = await B.fetchAll(); app.renderAll(); } catch (e) { app.showToast("Could not load grievances: " + e.message, "info"); }
  }

  async function loadSession() {
    const { data } = await sb.auth.getSession();
    B.user = data.session ? data.session.user : null; B.isStaff = false;
    if (B.user) {
      const { data: p } = await sb.from("profiles").select("role").eq("id", B.user.id).maybeSingle();
      B.isStaff = !!p && ["inspector", "ward_officer", "admin"].includes(p.role);
    }
    app.isOfficerMode = B.isStaff;
    app.updateOfficerUI();
  }

  B.toggleOfficer = async function () {
    if (B.user) { await sb.auth.signOut(); await loadSession(); await refresh(); app.showToast("Signed out.", "info"); return; }
    const email = prompt("Officer email:"); if (!email) return;
    const password = prompt("Password:"); if (!password) return;
    const { error } = await sb.auth.signInWithPassword({ email: email.trim(), password });
    if (error) { app.showToast("Login failed: " + error.message, "info"); return; }
    await loadSession();
    if (!B.isStaff) { await sb.auth.signOut(); await loadSession(); app.showToast("This account has no officer role.", "info"); return; }
    await refresh(); app.showToast("Officer console enabled.", "success");
  };

  document.addEventListener("DOMContentLoaded", async () => {
    app.generateReferenceID = () => "MBMC-" + new Date().getFullYear() + "-" + String(crypto.getRandomValues(new Uint32Array(1))[0] % 10000000).padStart(7, "0");
    localStorage.removeItem(OFFICER_MODE_KEY);
    await loadSession(); await refresh();
    sb.channel("grievances-live").on("postgres_changes", { event: "*", schema: "public", table: "grievances" }, refresh).subscribe();
  });
})();
