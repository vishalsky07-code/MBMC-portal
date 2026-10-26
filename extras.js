/* Extras: Leaflet map picker, real GPS, SLA overdue banner, PWA registration */
(function () {
  const CENTER = [19.2952, 72.8544]; // Mira Bhayandar
  let map, marker;

  function setPin(lat, lng, zoom) {
    app.picked = { lat, lng };
    if (marker) marker.setLatLng([lat, lng]); else marker = L.marker([lat, lng]).addTo(map);
    if (zoom) map.setView([lat, lng], zoom);
    document.getElementById("pickMapHint").textContent = `Pin set: ${lat.toFixed(5)}, ${lng.toFixed(5)}`;
  }

  function initMap() {
    if (map || typeof L === "undefined") return;
    map = L.map("pickMap").setView(CENTER, 13);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19, attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);
    map.on("click", e => setPin(e.latlng.lat, e.latlng.lng));
  }

  window.mbmcClearPin = function () {
    if (marker) { marker.remove(); marker = null; }
    const hint = document.getElementById("pickMapHint");
    if (hint) hint.textContent = "Tap the map to drop a pin, or use Detect GPS.";
  };

  window.mbmcDetectGps = function (appRef) {
    const btn = appRef.gpsHelperBtn;
    if (!navigator.geolocation) { appRef.showToast("Geolocation is not supported on this device.", "info"); return; }
    btn.textContent = "📍 Detecting...";
    navigator.geolocation.getCurrentPosition(p => {
      initMap();
      setPin(p.coords.latitude, p.coords.longitude, 17);
      btn.textContent = "📍 GPS Set ✓";
      appRef.showToast("Your location has been pinned on the map.", "info");
    }, () => {
      btn.textContent = "📍 Detect GPS";
      appRef.showToast("Location permission denied. Tap the map to pin manually.", "info");
    }, { enableHighAccuracy: true, timeout: 10000 });
  };

  // SLA overdue banner in the ledger view
  function overdueCount() {
    return app.reports.filter(r => r.status !== "Resolved" && Date.now() > new Date(r.slaDeadline).getTime()).length;
  }
  function updateOverdue() {
    const view = document.getElementById("view-ledger");
    if (!view) return;
    let b = document.getElementById("overdueBanner");
    if (!b) {
      b = document.createElement("div");
      b.id = "overdueBanner"; b.className = "overdue-banner"; b.setAttribute("role", "status");
      view.insertBefore(b, view.children[1] || null);
    }
    const n = overdueCount();
    b.hidden = n === 0;
    b.textContent = `${n} grievance${n === 1 ? "" : "s"} past SLA deadline - flagged for escalation to the Ward Officer.`;
  }

  document.addEventListener("DOMContentLoaded", () => {
    const origSwitch = app.switchView.bind(app);
    app.switchView = function (v) {
      origSwitch(v);
      if (v === "report") { initMap(); setTimeout(() => map && map.invalidateSize(), 150); }
    };
    const origRender = app.renderAll.bind(app);
    app.renderAll = function () { origRender(); updateOverdue(); };
    updateOverdue();
  });

  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
  }
})();
