/**
 * MIRA BHAYANDAR MUNICIPAL CORPORATION (MBMC)
 * Solid Waste Management & Grievance Redressal Portal
 * Core Application Logic & State Engine
 */

// --- Initial Seed Data (Realistic MBMC Municipal Records) ---
const INITIAL_REPORTS_DB = [
  {
    id: "MBMC-2026-00101",
    citizenName: "Ramesh Sharma",
    citizenPhone: "+91 98201 43210",
    isAnonymous: false,
    ward: "Ward 6 - Mira Road East (Kanakia / Beverly Park)",
    zone: "Mira Road Zone",
    location: "Near Kanakia Cinema & Beverly Park Junction, Kanakia Road",
    coordinates: "19.2812° N, 72.8690° E",
    category: "Overflowing Municipal Bin",
    urgency: "High",
    description: "Two commercial large green bins are overflowing onto the pedestrian footpath for the past 24 hours. Stray cattle and dogs scattering garbage.",
    photoUrl: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'><rect width='400' height='300' fill='%23e2e8f0'/><rect x='80' y='100' width='100' height='140' fill='%2315803d'/><rect x='210' y='100' width='100' height='140' fill='%2315803d'/><path d='M70 95 L190 95 L180 70 L80 70 Z' fill='%23166534'/><circle cx='130' cy='60' r='18' fill='%23ef4444'/><text x='200' y='270' font-family='sans-serif' font-size='14' text-anchor='middle' fill='%23334155'>[MBMC Photo Evidence: Kanakia Bin #MBMC-6B]</text></svg>",
    status: "In Progress",
    assignedCrew: "MBMC Compactor Unit Alpha (#MH-04-MB-4412)",
    inspector: "Officer S. K. Verma (SI-04)",
    createdAt: "2026-08-23T08:30:00.000Z",
    updatedAt: "2026-08-23T14:15:00.000Z",
    slaDeadline: "2026-08-24T08:30:00.000Z",
    officerNotes: "Compactor vehicle dispatched from Mira Road depot. Warning notice issued to nearby fast food vendors.",
    timeline: [
      { time: "2026-08-23 08:30", title: "Grievance Logged", desc: "Citizen Ramesh Sharma submitted report via MBMC portal." },
      { time: "2026-08-23 10:15", title: "Triaged & Verified", desc: "Mira Road Zonal Control Room confirmed high-density waste alert." },
      { time: "2026-08-23 14:15", title: "Crew Assigned & Dispatched", desc: "Assigned to MBMC Compactor Unit Alpha with Hydraulic Loader #MH-04-MB-4412." }
    ]
  },
  {
    id: "MBMC-2026-00102",
    citizenName: "Anita Mukherjee",
    citizenPhone: "+91 98192 34567",
    isAnonymous: false,
    ward: "Ward 3 - Bhayandar East (Station Rd / Jesal Park)",
    zone: "Bhayandar East Zone",
    location: "Jesal Park Chowpatty Road, Opposite Municipal Primary School",
    coordinates: "19.3031° N, 72.8540° E",
    category: "Missed Garbage Pickup",
    urgency: "Medium",
    description: "Door-to-door morning Ghanta Gadi tipper skipped wings C & D in housing society today. Wet waste accumulating.",
    photoUrl: "",
    status: "Resolved",
    assignedCrew: "MBMC Ghanta Gadi Tipper #08",
    inspector: "Officer P. K. Patil (SI-12)",
    createdAt: "2026-08-22T09:00:00.000Z",
    updatedAt: "2026-08-22T17:45:00.000Z",
    slaDeadline: "2026-08-23T09:00:00.000Z",
    officerNotes: "Afternoon secondary collection route cleared all 48 households. Driver instructed to adhere to GPS route map.",
    timeline: [
      { time: "2026-08-22 09:00", title: "Grievance Logged", desc: "Reported via MBMC Citizen Portal." },
      { time: "2026-08-22 11:30", title: "Triaged by Bhayandar East Office", desc: "Routed to Ward 3 Sanitation Inspector." },
      { time: "2026-08-22 14:00", title: "Tipper Vehicle Re-routed", desc: "Special afternoon Ghanta Gadi dispatched." },
      { time: "2026-08-22 17:45", title: "Grievance Resolved", desc: "Collection completed and verified by society chairman." }
    ]
  },
  {
    id: "MBMC-2026-00103",
    citizenName: "Anonymous Citizen",
    citizenPhone: "Confidential",
    isAnonymous: true,
    ward: "Ward 1 - Bhayandar West (Uttan / Rai / Morva)",
    zone: "Bhayandar West Zone",
    location: "Uttan Coastal Road near Morva Creek Culvert",
    coordinates: "19.2940° N, 72.7915° E",
    category: "Illegal Dumping / Debris",
    urgency: "Critical",
    description: "Unidentified dumper truck dumped 3 tons of mixed building demolition rubble & packaging debris in mangroves buffer area at 2:00 AM.",
    photoUrl: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'><rect width='400' height='300' fill='%23cbd5e1'/><polygon points='120,240 180,130 280,240' fill='%2364748b'/><polygon points='190,240 260,110 340,240' fill='%23475569'/><rect x='80' y='210' width='40' height='30' fill='%23eab308'/><text x='200' y='270' font-family='sans-serif' font-size='14' text-anchor='middle' fill='%230f172a'>[MBMC Photo Evidence: Uttan Debris Site]</text></svg>",
    status: "Pending",
    assignedCrew: "MBMC Encroachment & JCB Cell",
    inspector: "Officer A. K. Choudhury (Enforcement Division)",
    createdAt: "2026-08-24T06:15:00.000Z",
    updatedAt: "2026-08-24T06:15:00.000Z",
    slaDeadline: "2026-08-24T18:15:00.000Z",
    officerNotes: "CCTV footage requested from Uttan police check-post. MBMC JCB loader requisitioned for clearing debris.",
    timeline: [
      { time: "2026-08-24 06:15", title: "Critical Alert Registered", desc: "Citizen submitted anonymous complaint with geotagged photo." },
      { time: "2026-08-24 07:00", title: "Sent to Enforcement Cell", desc: "Flagged for immediate heavy machinery mobilization and FIR filing." }
    ]
  },
  {
    id: "MBMC-2026-00104",
    citizenName: "Dr. Vikram Sethi",
    citizenPhone: "+91 98205 99881",
    isAnonymous: false,
    ward: "Ward 2 - Bhayandar West (Maxus Mall / 60 Feet Rd)",
    zone: "Bhayandar West Zone",
    location: "60 Feet Road, Near Maxus Mall Flyover pillar 12",
    coordinates: "19.3082° N, 72.8420° E",
    category: "Damaged / Missing Bin",
    urgency: "Low",
    description: "Twin blue and green segregation litter bins on sidewalk damaged due to vehicle scraping. Lids missing.",
    photoUrl: "",
    status: "Resolved",
    assignedCrew: "MBMC Workshop Repair Unit #03",
    inspector: "Officer M. L. Gupta (SI-02)",
    createdAt: "2026-08-21T11:20:00.000Z",
    updatedAt: "2026-08-22T16:00:00.000Z",
    slaDeadline: "2026-08-23T11:20:00.000Z",
    officerNotes: "Replaced with 2 new heavy-duty FRP segregation bins anchored to pavement with steel bolts.",
    timeline: [
      { time: "2026-08-21 11:20", title: "Grievance Logged", desc: "Filed by local resident." },
      { time: "2026-08-21 15:00", title: "Work Order Issued", desc: "Stores issued 2 new replacement segregation bins." },
      { time: "2026-08-22 16:00", title: "Installation Completed", desc: "New bins installed and verified on 60 Feet Road." }
    ]
  },
  {
    id: "MBMC-2026-00105",
    citizenName: "Sunil Bajaj",
    citizenPhone: "+91 98210 11223",
    isAnonymous: false,
    ward: "Ward 5 - Mira Road East (Naya Nagar / Shanti Nagar)",
    zone: "Mira Road Zone",
    location: "Naya Nagar Main Market, Near Lodha Complex Gate 1",
    coordinates: "19.2845° N, 72.8622° E",
    category: "Overflowing Municipal Bin",
    urgency: "High",
    description: "Community waste collection point overflowing due to Sunday market rush. Trash spilling onto road.",
    photoUrl: "",
    status: "In Progress",
    assignedCrew: "MBMC Bulk Compactor Truck #14",
    inspector: "Officer D. Singh (SI-09)",
    createdAt: "2026-08-24T07:45:00.000Z",
    updatedAt: "2026-08-24T09:30:00.000Z",
    slaDeadline: "2026-08-24T19:45:00.000Z",
    officerNotes: "Hydraulic compactor and bobcat loader deployed for evacuation to Uttan Waste Processing Facility.",
    timeline: [
      { time: "2026-08-24 07:45", title: "Grievance Logged", desc: "High priority market waste alert." },
      { time: "2026-08-24 09:30", title: "Action Initiated", desc: "Compactor truck on site. Loading in progress." }
    ]
  },
  {
    id: "MBMC-2026-00106",
    citizenName: "Meenakshi Sundaram",
    citizenPhone: "+91 94441 55667",
    isAnonymous: false,
    ward: "Ward 7 - Mira Road East (Kashimira / WE Highway)",
    zone: "Mira Road Zone",
    location: "Kashimira Junction service road near Hatkesh Industrial Area",
    coordinates: "19.2730° N, 72.8755° E",
    category: "Hazardous / Medical Waste",
    urgency: "Critical",
    description: "Black polythene bags containing clinic syringes and used medical cotton dumped near open drainage.",
    photoUrl: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'><rect width='400' height='300' fill='%23fee2e2'/><circle cx='200' cy='140' r='50' fill='%23dc2626'/><text x='200' y='148' font-family='sans-serif' font-size='26' font-weight='bold' text-anchor='middle' fill='%23ffffff'>☣</text><text x='200' y='240' font-family='sans-serif' font-size='14' text-anchor='middle' fill='%23991b1b'>[MBMC Biohazard Containment Protocol]</text></svg>",
    status: "In Progress",
    assignedCrew: "MBMC Specialized Bio-Medical Vehicle #01",
    inspector: "Chief Medical Health Officer Dr. K. R. Iyer",
    createdAt: "2026-08-24T05:00:00.000Z",
    updatedAt: "2026-08-24T07:15:00.000Z",
    slaDeadline: "2026-08-24T11:00:00.000Z",
    officerNotes: "Biohazard protocol activated. Cordoned off by MBMC Health Marshals. Clinic trace investigation initiated.",
    timeline: [
      { time: "2026-08-24 05:00", title: "Emergency Biohazard Reported", desc: "Automated high-priority alert triggered." },
      { time: "2026-08-24 06:10", title: "Area Cordoned", desc: "Health Marshals secured perimeter." },
      { time: "2026-08-24 07:15", title: "Bio-Vehicle En Route", desc: "Authorized bio-waste incinerator vehicle dispatched." }
    ]
  },
  {
    id: "MBMC-2026-00107",
    citizenName: "Gurpreet Kaur",
    citizenPhone: "+91 98200 22334",
    isAnonymous: false,
    ward: "Ward 4 - Bhayandar East (Indralok / Cabin Rd)",
    zone: "Bhayandar East Zone",
    location: "Indralok Phase 3 Commercial Complex backside",
    coordinates: "19.3015° N, 72.8590° E",
    category: "Illegal Dumping / Debris",
    urgency: "Medium",
    description: "Hotel restaurant kitchen wet waste dumped behind market lane instead of using organic wet waste compactor.",
    photoUrl: "",
    status: "Resolved",
    assignedCrew: "MBMC Sanitation Enforcement Squad East",
    inspector: "Officer T. S. Rawat (SI-18)",
    createdAt: "2026-08-20T14:30:00.000Z",
    updatedAt: "2026-08-21T18:00:00.000Z",
    slaDeadline: "2026-08-21T14:30:00.000Z",
    officerNotes: "Lane cleared and washed with disinfectant. Spot fine of INR 5,000 imposed under Maharashtra SWM Bye-laws.",
    timeline: [
      { time: "2026-08-20 14:30", title: "Grievance Logged", desc: "Citizen complaint submitted." },
      { time: "2026-08-21 10:00", title: "Inspection Conducted", desc: "Ward Inspector conducted physical spot check." },
      { time: "2026-08-21 18:00", title: "Cleared & Challaned", desc: "Site cleared, challan receipt #MBMC-CH-994 issued." }
    ]
  },
  {
    id: "MBMC-2026-00108",
    citizenName: "Venkatesh Rao",
    citizenPhone: "+91 98840 77665",
    isAnonymous: false,
    ward: "Ward 8 - Mira Road (Silver Park / Poonam Sagar)",
    zone: "Mira Road Zone",
    location: "Silver Park Signal & Poonam Sagar Road junction",
    coordinates: "19.2890° N, 72.8660° E",
    category: "Overflowing Municipal Bin",
    urgency: "High",
    description: "Heavy rain washed silt into roadside drain; community bin overturned spilling into stormwater channel.",
    photoUrl: "",
    status: "Pending",
    assignedCrew: "Pending Shift Allocation",
    inspector: "Officer N. C. Joshi (SI-21)",
    createdAt: "2026-08-24T08:10:00.000Z",
    updatedAt: "2026-08-24T08:10:00.000Z",
    slaDeadline: "2026-08-24T20:10:00.000Z",
    officerNotes: "Super-sucker drain desilting machine requisitioned from Bhayandar Central Workshop.",
    timeline: [
      { time: "2026-08-24 08:10", title: "Grievance Logged", desc: "Logged with high urgency alert." }
    ]
  },
  {
    id: "MBMC-2026-00109",
    citizenName: "Pooja Trivedi",
    citizenPhone: "+91 98200 44556",
    isAnonymous: false,
    ward: "Ward 6 - Mira Road East (Kanakia / Beverly Park)",
    zone: "Mira Road Zone",
    location: "Jangid Complex Service Lane near Shanti Park",
    coordinates: "19.2830° N, 72.8710° E",
    category: "Missed Garbage Pickup",
    urgency: "Medium",
    description: "Society dry recyclable waste collection truck did not arrive as per Monday morning 10:00 AM slot.",
    photoUrl: "",
    status: "Resolved",
    assignedCrew: "MBMC Dry Waste Carrier #02",
    inspector: "Officer S. K. Verma (SI-04)",
    createdAt: "2026-08-22T11:00:00.000Z",
    updatedAt: "2026-08-22T15:30:00.000Z",
    slaDeadline: "2026-08-23T11:00:00.000Z",
    officerNotes: "Carrier vehicle had flat tire; replacement vehicle completed dry waste collection by 3:00 PM.",
    timeline: [
      { time: "2026-08-22 11:00", title: "Grievance Logged", desc: "Reported by building secretary." },
      { time: "2026-08-22 15:30", title: "Resolved", desc: "Dry waste collected and weighed at MBMC MRF Centre." }
    ]
  },
  {
    id: "MBMC-2026-00110",
    citizenName: "Harish Chandra",
    citizenPhone: "+91 98711 66554",
    isAnonymous: false,
    ward: "Ward 3 - Bhayandar East (Station Rd / Jesal Park)",
    zone: "Bhayandar East Zone",
    location: "Station Road Vegetable Market corner, Bhayandar East",
    coordinates: "19.3045° N, 72.8520° E",
    category: "Overflowing Municipal Bin",
    urgency: "High",
    description: "Vegetable market organic waste leaves and stalks overflowing onto 25 feet of sidewalk near railway footbridge.",
    photoUrl: "",
    status: "In Progress",
    assignedCrew: "MBMC Organic Waste Loader #05",
    inspector: "Officer P. K. Patil (SI-12)",
    createdAt: "2026-08-24T06:45:00.000Z",
    updatedAt: "2026-08-24T08:00:00.000Z",
    slaDeadline: "2026-08-24T18:45:00.000Z",
    officerNotes: "Special compost collection trip initiated for delivery to MBMC Bio-Methanation Plant in Uttan.",
    timeline: [
      { time: "2026-08-24 06:45", title: "Grievance Logged", desc: "Market association filed early morning alert." },
      { time: "2026-08-24 08:00", title: "Tippers on Site", desc: "MBMC Loader #05 currently processing organic waste." }
    ]
  },
  {
    id: "MBMC-2026-00111",
    citizenName: "Anonymous Citizen",
    citizenPhone: "Confidential",
    isAnonymous: true,
    ward: "Ward 2 - Bhayandar West (Maxus Mall / 60 Feet Rd)",
    zone: "Bhayandar West Zone",
    location: "Mandvi Galli & Balaji Nagar crossing, Bhayandar West",
    coordinates: "19.3100° N, 72.8460° E",
    category: "Damaged / Missing Bin",
    urgency: "Low",
    description: "Pedestrian waste bin dislodged from concrete platform due to water pipe laying work.",
    photoUrl: "",
    status: "Pending",
    assignedCrew: "MBMC Civil Works Maintenance Team",
    inspector: "Officer M. L. Gupta (SI-02)",
    createdAt: "2026-08-24T09:15:00.000Z",
    updatedAt: "2026-08-24T09:15:00.000Z",
    slaDeadline: "2026-08-26T09:15:00.000Z",
    officerNotes: "Work order queued for welding and cement re-grouting team.",
    timeline: [
      { time: "2026-08-24 09:15", title: "Grievance Logged", desc: "Logged via mobile responsive portal." }
    ]
  },
  {
    id: "MBMC-2026-00112",
    citizenName: "Jasleen Sahni",
    citizenPhone: "+91 98118 77665",
    isAnonymous: false,
    ward: "Ward 8 - Mira Road (Silver Park / Poonam Sagar)",
    zone: "Mira Road Zone",
    location: "Pleasant Park Road near GCC Club boundary wall",
    coordinates: "19.2780° N, 72.8730° E",
    category: "Illegal Dumping / Debris",
    urgency: "High",
    description: "Tree pruning branches and dry garden waste dumped on road side blocking two-wheeler parking.",
    photoUrl: "",
    status: "Resolved",
    assignedCrew: "MBMC Green Waste Shredder Crew #01",
    inspector: "Officer T. S. Rawat (SI-18)",
    createdAt: "2026-08-21T09:40:00.000Z",
    updatedAt: "2026-08-22T12:15:00.000Z",
    slaDeadline: "2026-08-22T09:40:00.000Z",
    officerNotes: "Mobile wood chipper unit shredded all garden branches into organic mulch for MBMC municipal parks.",
    timeline: [
      { time: "2026-08-21 09:40", title: "Grievance Logged", desc: "Citizen reported blocked pathway." },
      { time: "2026-08-21 14:00", title: "Crew Assigned", desc: "Horticulture tractor & shredder assigned." },
      { time: "2026-08-22 12:15", title: "Resolved & Cleared", desc: "All 1.5 tons of green waste cleared and chipped." }
    ]
  }
];

// --- Municipal Storage & State Handler ---
const STORAGE_KEY = "MBMC_WASTE_REPORTS_DB_V2";
const OFFICER_MODE_KEY = "MBMC_OFFICER_AUTH_STATE";

class MunicipalWasteApp {
  constructor() {
    this.reports = this.loadReports();
    this.currentView = "overview";
    this.currentFilter = {
      searchQuery: "",
      ward: "All",
      status: "All",
      urgency: "All",
      category: "All"
    };
    this.isOfficerMode = localStorage.getItem(OFFICER_MODE_KEY) === "true";
    this.selectedReportForOfficer = null;
    this.uploadedImageData = "";

    this.initElements();
    this.initEventListeners();
    this.initAccessibility();
    this.renderAll();
  }

  // --- Storage Management ---
  loadReports() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error("Failed to load local storage reports:", e);
    }
    // Default seed
    localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_REPORTS_DB));
    return [...INITIAL_REPORTS_DB];
  }

  saveReports() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.reports));
    } catch (e) {
      console.error("Failed to save reports to local storage:", e);
    }
    this.updateKPIs();
    this.renderWardOverview();
  }

  resetToDefaultData() {
    if (confirm("Reset MBMC database to official demo records? All newly entered reports will be restored to default seed.")) {
      this.reports = [...INITIAL_REPORTS_DB];
      this.saveReports();
      this.renderAll();
      this.showToast("MBMC Database restored to default seed dataset.", "info");
    }
  }

  // --- Element Initialization ---
  initElements() {
    // Navigation Links
    this.navLinks = document.querySelectorAll(".nav-tab-link");
    this.portalViews = document.querySelectorAll(".portal-view");
    this.breadcrumbCurrent = document.getElementById("breadcrumbCurrent");

    // Overview KPIs
    this.kpiTotal = document.getElementById("kpiTotal");
    this.kpiPending = document.getElementById("kpiPending");
    this.kpiProgress = document.getElementById("kpiProgress");
    this.kpiResolved = document.getElementById("kpiResolved");
    this.kpiRate = document.getElementById("kpiRate");
    this.kpiAvgTime = document.getElementById("kpiAvgTime");

    // Report Form
    this.reportForm = document.getElementById("citizenReportForm");
    this.photoInput = document.getElementById("reportPhoto");
    this.dropzone = document.getElementById("uploadDropzone");
    this.previewContainer = document.getElementById("uploadPreviewContainer");
    this.previewImg = document.getElementById("uploadPreviewImg");
    this.previewMeta = document.getElementById("uploadPreviewMeta");
    this.removePhotoBtn = document.getElementById("removePhotoBtn");
    this.gpsHelperBtn = document.getElementById("gpsHelperBtn");
    this.locationInput = document.getElementById("reportLocation");
    this.anonCheckbox = document.getElementById("isAnonymous");
    this.citizenNameGroup = document.getElementById("citizenNameGroup");
    this.citizenPhoneGroup = document.getElementById("citizenPhoneGroup");

    // Ledger & Search
    this.ledgerSearchInput = document.getElementById("ledgerSearch");
    this.filterWardSelect = document.getElementById("filterWard");
    this.filterStatusSelect = document.getElementById("filterStatus");
    this.filterCategorySelect = document.getElementById("filterCategory");
    this.filterUrgencySelect = document.getElementById("filterUrgency");
    this.filterResetBtn = document.getElementById("filterResetBtn");
    this.ledgerTableBody = document.getElementById("ledgerTableBody");
    this.ledgerCountBadge = document.getElementById("ledgerCountBadge");
    this.exportCsvBtn = document.getElementById("exportCsvBtn");
    this.printLedgerBtn = document.getElementById("printLedgerBtn");

    // Ward Grid Container
    this.wardGridContainer = document.getElementById("wardGridContainer");

    // Officer View Elements
    this.officerToggleBtn = document.getElementById("officerToggleBtn");
    this.officerLedgerTableBody = document.getElementById("officerLedgerTableBody");
    this.officerStatusBadge = document.getElementById("officerStatusBadge");

    // Modals
    this.receiptModal = document.getElementById("receiptModal");
    this.detailModal = document.getElementById("detailModal");
    this.officerModal = document.getElementById("officerActionModal");

    // Modal Close Buttons
    document.querySelectorAll("[data-close-modal]").forEach(btn => {
      btn.addEventListener("click", () => this.closeAllModals());
    });
  }

  // --- Event Listeners ---
  initEventListeners() {
    // Nav Tab Switching
    this.navLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        const viewId = link.getAttribute("data-view");
        this.switchView(viewId);
      });
    });

    // Quick action buttons from overview
    document.querySelectorAll("[data-navigate-view]").forEach(btn => {
      btn.addEventListener("click", () => {
        const targetView = btn.getAttribute("data-navigate-view");
        this.switchView(targetView);
      });
    });

    // Anonymous toggle
    if (this.anonCheckbox) {
      this.anonCheckbox.addEventListener("change", (e) => {
        const checked = e.target.checked;
        const nameInput = document.getElementById("citizenName");
        const phoneInput = document.getElementById("citizenPhone");
        if (checked) {
          nameInput.value = "";
          phoneInput.value = "";
          nameInput.disabled = true;
          phoneInput.disabled = true;
          nameInput.placeholder = "Citizen opted for anonymous filing";
          phoneInput.placeholder = "Confidential (Not required)";
        } else {
          nameInput.disabled = false;
          phoneInput.disabled = false;
          nameInput.placeholder = "e.g. Anand Kulkarni";
          phoneInput.placeholder = "e.g. +91 98201 23456";
        }
      });
    }

    // GPS Helper Simulation
    if (this.gpsHelperBtn) {
      this.gpsHelperBtn.addEventListener("click", () => {
        this.gpsHelperBtn.innerHTML = "📍 Detecting...";
        setTimeout(() => {
          const sampleCoords = [
            "19.2815° N, 72.8685° E (Kanakia Road, Mira Road East)",
            "19.3080° N, 72.8425° E (60 Feet Road, Near Maxus Mall, Bhayandar West)",
            "19.3035° N, 72.8538° E (Jesal Park Chowpatty, Bhayandar East)",
            "19.2942° N, 72.7920° E (Uttan Coastal Village, Bhayandar West)"
          ];
          const randomCoord = sampleCoords[Math.floor(Math.random() * sampleCoords.length)];
          this.locationInput.value = (this.locationInput.value ? this.locationInput.value + " | Geotag: " : "Geotagged: ") + randomCoord;
          this.gpsHelperBtn.innerHTML = "📍 GPS Set ✓";
          this.showToast("GPS Geocoordinates attached to MBMC grievance location.", "info");
        }, 400);
      });
    }

    // Photo Upload & Preview
    if (this.dropzone && this.photoInput) {
      this.dropzone.addEventListener("click", () => this.photoInput.click());
      this.dropzone.addEventListener("dragover", (e) => {
        e.preventDefault();
        this.dropzone.style.borderColor = "var(--gov-navy)";
      });
      this.dropzone.addEventListener("dragleave", () => {
        this.dropzone.style.borderColor = "var(--border-dark)";
      });
      this.dropzone.addEventListener("drop", (e) => {
        e.preventDefault();
        this.dropzone.style.borderColor = "var(--border-dark)";
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
          this.handlePhotoFile(e.dataTransfer.files[0]);
        }
      });
      this.photoInput.addEventListener("change", (e) => {
        if (e.target.files && e.target.files[0]) {
          this.handlePhotoFile(e.target.files[0]);
        }
      });
    }

    if (this.removePhotoBtn) {
      this.removePhotoBtn.addEventListener("click", () => {
        this.uploadedImageData = "";
        this.photoInput.value = "";
        this.previewContainer.style.display = "none";
        this.dropzone.style.display = "block";
      });
    }

    // Urgency radio styling sync
    document.querySelectorAll('input[name="reportUrgency"]').forEach(radio => {
      radio.addEventListener("change", (e) => {
        document.querySelectorAll(".urgency-radio-label").forEach(lbl => {
          lbl.classList.remove("selected-critical", "selected-high", "selected-medium", "selected-low");
        });
        const selectedVal = e.target.value.toLowerCase();
        const parentLabel = e.target.closest(".urgency-radio-label");
        if (parentLabel) {
          parentLabel.classList.add(`selected-${selectedVal}`);
        }
      });
    });

    // Form Submission
    if (this.reportForm) {
      this.reportForm.addEventListener("submit", (e) => this.handleReportSubmit(e));
    }

    // Ledger Search & Filters
    const triggerLedgerFilter = () => {
      this.currentFilter.searchQuery = (this.ledgerSearchInput.value || "").trim().toLowerCase();
      this.currentFilter.ward = this.filterWardSelect.value;
      this.currentFilter.status = this.filterStatusSelect.value;
      this.currentFilter.category = this.filterCategorySelect.value;
      this.currentFilter.urgency = this.filterUrgencySelect.value;
      this.renderLedger();
    };

    if (this.ledgerSearchInput) this.ledgerSearchInput.addEventListener("input", triggerLedgerFilter);
    if (this.filterWardSelect) this.filterWardSelect.addEventListener("change", triggerLedgerFilter);
    if (this.filterStatusSelect) this.filterStatusSelect.addEventListener("change", triggerLedgerFilter);
    if (this.filterCategorySelect) this.filterCategorySelect.addEventListener("change", triggerLedgerFilter);
    if (this.filterUrgencySelect) this.filterUrgencySelect.addEventListener("change", triggerLedgerFilter);

    if (this.filterResetBtn) {
      this.filterResetBtn.addEventListener("click", () => {
        this.ledgerSearchInput.value = "";
        this.filterWardSelect.value = "All";
        this.filterStatusSelect.value = "All";
        this.filterCategorySelect.value = "All";
        this.filterUrgencySelect.value = "All";
        triggerLedgerFilter();
      });
    }

    // Export & Print
    if (this.exportCsvBtn) {
      this.exportCsvBtn.addEventListener("click", () => this.exportLedgerCSV());
    }
    if (this.printLedgerBtn) {
      this.printLedgerBtn.addEventListener("click", () => window.print());
    }

    // Officer Toggle Button
    if (this.officerToggleBtn) {
      this.officerToggleBtn.addEventListener("click", () => {
        this.isOfficerMode = !this.isOfficerMode;
        localStorage.setItem(OFFICER_MODE_KEY, this.isOfficerMode);
        this.updateOfficerUI();
        this.showToast(this.isOfficerMode ? "MBMC Sanitary Inspector Console: Enabled" : "Returned to Citizen Public View", "info");
      });
    }

    // Officer Update Form in Modal
    const officerForm = document.getElementById("officerStatusUpdateForm");
    if (officerForm) {
      officerForm.addEventListener("submit", (e) => this.handleOfficerStatusUpdate(e));
    }

    // Reset Data Database Button
    const resetDataBtn = document.getElementById("resetDataBtn");
    if (resetDataBtn) {
      resetDataBtn.addEventListener("click", () => this.resetToDefaultData());
    }
  }

  // --- Accessibility Controls ---
  initAccessibility() {
    const btnSm = document.getElementById("fontScaleSm");
    const btnMd = document.getElementById("fontScaleMd");
    const btnLg = document.getElementById("fontScaleLg");
    const themeBtn = document.getElementById("themeToggleBtn");

    const setFontSize = (size) => {
      document.documentElement.setAttribute("data-font-size", size);
      [btnSm, btnMd, btnLg].forEach(b => b && b.classList.remove("active"));
      if (size === "sm" && btnSm) btnSm.classList.add("active");
      if (size === "md" && btnMd) btnMd.classList.add("active");
      if (size === "lg" && btnLg) btnLg.classList.add("active");
      localStorage.setItem("MBMC_FONT_SCALE", size);
    };

    if (btnSm) btnSm.addEventListener("click", () => setFontSize("sm"));
    if (btnMd) btnMd.addEventListener("click", () => setFontSize("md"));
    if (btnLg) btnLg.addEventListener("click", () => setFontSize("lg"));

    const savedFont = localStorage.getItem("MBMC_FONT_SCALE") || "md";
    setFontSize(savedFont);

    if (themeBtn) {
      themeBtn.addEventListener("click", () => {
        const isHighContrast = document.documentElement.getAttribute("data-theme") === "high-contrast";
        if (isHighContrast) {
          document.documentElement.removeAttribute("data-theme");
          themeBtn.innerHTML = "⚙ High Contrast: OFF";
          localStorage.setItem("MBMC_THEME", "default");
        } else {
          document.documentElement.setAttribute("data-theme", "high-contrast");
          themeBtn.innerHTML = "⚙ High Contrast: ON";
          localStorage.setItem("MBMC_THEME", "high-contrast");
        }
      });

      if (localStorage.getItem("MBMC_THEME") === "high-contrast") {
        document.documentElement.setAttribute("data-theme", "high-contrast");
        themeBtn.innerHTML = "⚙ High Contrast: ON";
      }
    }
  }

  // --- Photo File Handling ---
  handlePhotoFile(file) {
    if (!file.type.startsWith("image/")) {
      alert("Please upload a valid image file (JPG, PNG, WebP).");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert("Image size exceeds 5 MB limit. Please select a smaller photo.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      this.uploadedImageData = e.target.result;
      this.previewImg.src = this.uploadedImageData;
      this.previewMeta.innerHTML = `<strong>${file.name}</strong><br><span style="color:var(--text-light);">${(file.size / 1024).toFixed(1)} KB - Geotagged Photo Ready</span>`;
      this.previewContainer.style.display = "flex";
      this.dropzone.style.display = "none";
    };
    reader.readAsDataURL(file);
  }

  // --- Navigation & View Switching ---
  switchView(viewId) {
    this.currentView = viewId;
    this.navLinks.forEach(link => {
      if (link.getAttribute("data-view") === viewId) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    this.portalViews.forEach(view => {
      if (view.id === `view-${viewId}`) {
        view.classList.add("active-view");
      } else {
        view.classList.remove("active-view");
      }
    });

    // Update breadcrumb label
    const viewLabels = {
      "overview": "Overview & City Dashboard",
      "report": "Citizen Grievance Redressal (File Report)",
      "ledger": "Public Ledger & Real-Time Tracking",
      "analytics": "Ward-by-Ward Waste Density Analytics",
      "officer": "MBMC Staff & Inspector Console"
    };
    if (this.breadcrumbCurrent) {
      this.breadcrumbCurrent.textContent = viewLabels[viewId] || "Dashboard";
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // --- Generate Official Reference ID ---
  generateReferenceID() {
    const currentYear = new Date().getFullYear();
    const count = this.reports.length + 1;
    const padded = String(count).padStart(5, "0");
    return `MBMC-${currentYear}-${padded}`;
  }

  // --- Form Submission Handler ---
  handleReportSubmit(e) {
    e.preventDefault();

    const isAnon = this.anonCheckbox ? this.anonCheckbox.checked : false;
    const name = isAnon ? "Anonymous Citizen" : (document.getElementById("citizenName").value || "Citizen").trim();
    const phone = isAnon ? "Confidential" : (document.getElementById("citizenPhone").value || "Not provided").trim();
    const ward = document.getElementById("reportWard").value;
    const location = (document.getElementById("reportLocation").value || "").trim();
    const category = document.getElementById("reportCategory").value;
    const urgencyRadio = document.querySelector('input[name="reportUrgency"]:checked');
    const urgency = urgencyRadio ? urgencyRadio.value : "Medium";
    const description = (document.getElementById("reportDescription").value || "").trim();

    if (!ward || !location || !category || !description) {
      alert("Please fill in all required official grievance fields marked with *.");
      return;
    }

    // Extract zone from ward name
    let zone = "Mira Road Zone";
    if (ward.includes("Bhayandar West")) zone = "Bhayandar West Zone";
    if (ward.includes("Bhayandar East")) zone = "Bhayandar East Zone";

    const refId = this.generateReferenceID();
    const now = new Date();
    
    // SLA calculation based on urgency
    let slaHours = 24;
    if (urgency === "Critical") slaHours = 6;
    if (urgency === "High") slaHours = 12;
    if (urgency === "Low") slaHours = 48;
    const slaDeadlineDate = new Date(now.getTime() + slaHours * 60 * 60 * 1000);

    const newReport = {
      id: refId,
      citizenName: name,
      citizenPhone: phone,
      isAnonymous: isAnon,
      ward: ward,
      zone: zone,
      location: location,
      coordinates: "GPS Tagged Location (" + (19.27 + Math.random() * 0.04).toFixed(4) + "° N, " + (72.84 + Math.random() * 0.03).toFixed(4) + "° E)",
      category: category,
      urgency: urgency,
      description: description,
      photoUrl: this.uploadedImageData || "",
      status: "Pending",
      assignedCrew: "Queued for MBMC Sanitary Inspector Allocation",
      inspector: "Ward Sanitation Desk",
      createdAt: now.toISOString(),
      updatedAt: now.toISOString(),
      slaDeadline: slaDeadlineDate.toISOString(),
      officerNotes: "Grievance registered under MBMC Swachh Bharat Protocol with SLA: SWM-" + slaHours + "H.",
      timeline: [
        {
          time: now.toISOString().replace("T", " ").substring(0, 16),
          title: "Grievance Registered",
          desc: `Logged via MBMC Citizen Portal with Priority [${urgency}]. Reference ID generated.`
        },
        {
          time: now.toISOString().replace("T", " ").substring(0, 16),
          title: "Triaged to MBMC Ward Control Room",
          desc: `Transmitted to ${ward} Field Unit.`
        }
      ]
    };

    // Prepend to database
    this.reports.unshift(newReport);
    this.saveReports();

    // Reset Form
    this.reportForm.reset();
    this.uploadedImageData = "";
    if (this.previewContainer) this.previewContainer.style.display = "none";
    if (this.dropzone) this.dropzone.style.display = "block";
    if (this.anonCheckbox) this.anonCheckbox.checked = false;
    document.getElementById("citizenName").disabled = false;
    document.getElementById("citizenPhone").disabled = false;

    // Show Acknowledgement Receipt
    this.openReceiptModal(newReport);
    this.renderAll();
    this.showToast(`Grievance registered successfully with MBMC: ${refId}`, "success");
  }

  // --- Modal: Official Receipt ---
  openReceiptModal(report) {
    const formattedDate = new Date(report.createdAt).toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short"
    });
    const slaFormatted = new Date(report.slaDeadline).toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short"
    });

    const receiptHtml = `
      <div class="official-receipt-box">
        <div class="receipt-watermark">MBMC SWACHHATA</div>
        <div class="receipt-header-strip">
          <div style="font-size: 0.8rem; text-transform: uppercase; font-weight: 700; color: var(--gov-gold); letter-spacing: 1px;">
            MIRA BHAYANDAR MUNICIPAL CORPORATION (मिरा भाईंदर महानगरपालिका)
          </div>
          <h3 class="receipt-title">CITIZEN GRIEVANCE ACKNOWLEDGEMENT RECEIPT</h3>
          <div style="font-size: 0.78rem; color: var(--text-muted);">Swachh Bharat Mission (Urban) • Solid Waste Management Rules 2016</div>
        </div>

        <div style="text-align: center; margin-bottom: 16px;">
          <div style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-light);">Official Grievance Reference Identifier</div>
          <div style="font-family: var(--font-mono); font-size: 1.6rem; font-weight: 800; color: var(--gov-navy); letter-spacing: 1px; margin-top: 4px;">
            ${report.id}
          </div>
        </div>

        <div class="receipt-qr-simulation">
          <svg width="80" height="80" viewBox="0 0 100 100">
            <rect width="100" height="100" fill="#ffffff"/>
            <rect x="10" y="10" width="30" height="30" fill="#000000"/>
            <rect x="15" y="15" width="20" height="20" fill="#ffffff"/>
            <rect x="20" y="20" width="10" height="10" fill="#000000"/>
            <rect x="60" y="10" width="30" height="30" fill="#000000"/>
            <rect x="65" y="15" width="20" height="20" fill="#ffffff"/>
            <rect x="70" y="20" width="10" height="10" fill="#000000"/>
            <rect x="10" y="60" width="30" height="30" fill="#000000"/>
            <rect x="15" y="65" width="20" height="20" fill="#ffffff"/>
            <rect x="20" y="70" width="10" height="10" fill="#000000"/>
            <rect x="50" y="50" width="15" height="15" fill="#000000"/>
            <rect x="70" y="70" width="20" height="20" fill="#000000"/>
          </svg>
          <span style="font-size: 0.55rem; font-family: monospace; text-transform: uppercase;">MBMC e-Verified</span>
        </div>

        <div class="receipt-meta-grid">
          <div class="receipt-meta-item">
            <strong>Grievant Name</strong>
            <span>${this.escapeHTML(report.citizenName)}</span>
          </div>
          <div class="receipt-meta-item">
            <strong>Contact Phone</strong>
            <span>${this.escapeHTML(report.citizenPhone)}</span>
          </div>
          <div class="receipt-meta-item">
            <strong>Filing Timestamp</strong>
            <span>${formattedDate}</span>
          </div>
          <div class="receipt-meta-item">
            <strong>Target SLA Deadline</strong>
            <span style="color: var(--urgency-high); font-weight: 700;">${slaFormatted}</span>
          </div>
          <div class="receipt-meta-item">
            <strong>MBMC Ward / Zone</strong>
            <span>${this.escapeHTML(report.ward)}</span>
          </div>
          <div class="receipt-meta-item">
            <strong>Category & Urgency</strong>
            <span>${this.escapeHTML(report.category)} (${report.urgency})</span>
          </div>
        </div>

        <div style="background: #f1f5f9; padding: 10px 14px; border: 1px solid var(--border-color); font-size: 0.82rem; margin-bottom: 12px;">
          <strong>Incident Location:</strong> ${this.escapeHTML(report.location)}<br>
          <strong>Summary Note:</strong> ${this.escapeHTML(report.description)}
        </div>

        <div style="font-size: 0.72rem; color: var(--text-light); text-align: center; border-top: 1px solid var(--border-color); padding-top: 8px;">
          Please retain this Reference ID for all MBMC communications. You can monitor live clearance on the Public Tracking Ledger.
        </div>
      </div>
    `;

    document.getElementById("receiptModalBody").innerHTML = receiptHtml;
    
    // Copy button setup
    const copyBtn = document.getElementById("copyRefIdBtn");
    if (copyBtn) {
      copyBtn.onclick = () => {
        navigator.clipboard.writeText(report.id).then(() => {
          this.showToast(`MBMC Reference ID copied: ${report.id}`, "info");
        });
      };
    }

    // Track button in modal
    const trackBtn = document.getElementById("trackInLedgerBtn");
    if (trackBtn) {
      trackBtn.onclick = () => {
        this.closeAllModals();
        this.switchView("ledger");
        this.ledgerSearchInput.value = report.id;
        this.currentFilter.searchQuery = report.id.toLowerCase();
        this.renderLedger();
      };
    }

    this.receiptModal.classList.add("active-modal");
  }

  // --- Modal: View Detail & Audit Trail ---
  openDetailModal(reportId) {
    const report = this.reports.find(r => r.id === reportId);
    if (!report) return;

    const formattedDate = new Date(report.createdAt).toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" });
    const formattedUpdate = new Date(report.updatedAt).toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" });

    let statusBadgeClass = "status-pending";
    if (report.status === "In Progress") statusBadgeClass = "status-in-progress";
    if (report.status === "Resolved") statusBadgeClass = "status-resolved";

    let urgencyBadgeClass = `urgency-${report.urgency.toLowerCase()}`;

    let timelineItemsHtml = "";
    report.timeline.forEach((step, index) => {
      const isLast = index === report.timeline.length - 1;
      timelineItemsHtml += `
        <div class="timeline-step ${report.status === 'Resolved' ? 'completed' : (isLast ? 'active' : 'completed')}">
          <div class="timeline-dot"></div>
          <div class="timeline-time">${step.time}</div>
          <div class="timeline-title">${this.escapeHTML(step.title)}</div>
          <div class="timeline-desc">${this.escapeHTML(step.desc)}</div>
        </div>
      `;
    });

    const detailHtml = `
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color); padding-bottom: 12px; margin-bottom: 16px; flex-wrap: wrap; gap: 8px;">
        <div>
          <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-light);">MBMC Reference Identifier</span>
          <h3 style="font-family: var(--font-mono); font-size: 1.3rem; color: var(--gov-navy);">${report.id}</h3>
        </div>
        <div style="display: flex; gap: 8px; align-items: center;">
          <span class="urgency-badge ${urgencyBadgeClass}">${report.urgency} Urgency</span>
          <span class="status-badge ${statusBadgeClass}">${report.status}</span>
        </div>
      </div>

      <div class="form-grid-2col" style="margin-bottom: 16px; font-size: 0.86rem;">
        <div>
          <strong style="color: var(--text-muted); font-size: 0.75rem; text-transform: uppercase;">MBMC Ward & Zone:</strong><br>
          ${this.escapeHTML(report.ward)} (${this.escapeHTML(report.zone)})
        </div>
        <div>
          <strong style="color: var(--text-muted); font-size: 0.75rem; text-transform: uppercase;">Category:</strong><br>
          ${this.escapeHTML(report.category)}
        </div>
        <div>
          <strong style="color: var(--text-muted); font-size: 0.75rem; text-transform: uppercase;">Grievant Details:</strong><br>
          ${this.escapeHTML(report.citizenName)} (${this.escapeHTML(report.citizenPhone)})
        </div>
        <div>
          <strong style="color: var(--text-muted); font-size: 0.75rem; text-transform: uppercase;">Assigned MBMC Crew:</strong><br>
          ${this.escapeHTML(report.assignedCrew)}
        </div>
        <div>
          <strong style="color: var(--text-muted); font-size: 0.75rem; text-transform: uppercase;">Date Filed:</strong><br>
          ${formattedDate}
        </div>
        <div>
          <strong style="color: var(--text-muted); font-size: 0.75rem; text-transform: uppercase;">Last Action Timestamp:</strong><br>
          ${formattedUpdate}
        </div>
      </div>

      <div style="background: #f8fafc; border: 1px solid var(--border-color); padding: 12px 14px; border-radius: var(--radius-formal); margin-bottom: 16px; font-size: 0.88rem;">
        <strong style="color: var(--gov-navy);">Location Landmark:</strong> ${this.escapeHTML(report.location)}<br>
        <strong style="color: var(--gov-navy);">GPS Coordinates:</strong> <span style="font-family: var(--font-mono); font-size: 0.8rem;">${report.coordinates || 'N/A'}</span><br>
        <strong style="color: var(--gov-navy);">Grievance Details:</strong> ${this.escapeHTML(report.description)}
      </div>

      ${report.photoUrl ? `
        <div style="margin-bottom: 16px;">
          <strong style="display: block; font-size: 0.78rem; text-transform: uppercase; color: var(--text-muted); margin-bottom: 6px;">Photographic Evidence / Site Inspection</strong>
          <div style="max-height: 220px; overflow: hidden; border: 1px solid var(--border-color); border-radius: var(--radius-formal); display: flex; justify-content: center; background: #000000;">
            <img src="${report.photoUrl}" alt="Inspection Evidence" style="max-height: 220px; width: 100%; object-fit: contain;">
          </div>
        </div>
      ` : ''}

      <div style="background: var(--bg-card-alt); border: 1px solid var(--border-color); padding: 12px 14px; border-radius: var(--radius-formal); margin-bottom: 16px;">
        <strong style="color: var(--gov-navy); font-size: 0.85rem;">Sanitary Inspector Inspection & Resolution Remarks:</strong>
        <p style="font-size: 0.85rem; color: var(--text-main); margin-top: 4px;">${this.escapeHTML(report.officerNotes || 'Awaiting field inspector report.')}</p>
        <div style="font-size: 0.75rem; color: var(--text-light); margin-top: 4px;">Supervising Officer: ${this.escapeHTML(report.inspector || 'MBMC Ward Sanitary Inspector')}</div>
      </div>

      <div>
        <h4 style="font-family: var(--font-serif); font-size: 0.95rem; color: var(--gov-navy); margin-bottom: 8px;">Official Chronological Audit Trail</h4>
        <div class="timeline-list">
          ${timelineItemsHtml}
        </div>
      </div>
    `;

    document.getElementById("detailModalBody").innerHTML = detailHtml;
    this.detailModal.classList.add("active-modal");
  }

  // --- Modal: Officer Action Update ---
  openOfficerModal(reportId) {
    const report = this.reports.find(r => r.id === reportId);
    if (!report) return;

    this.selectedReportForOfficer = report;
    document.getElementById("officerModalRefId").textContent = report.id;
    document.getElementById("officerStatusSelect").value = report.status;
    document.getElementById("officerCrewInput").value = report.assignedCrew || "";
    document.getElementById("officerNotesInput").value = report.officerNotes || "";

    this.officerModal.classList.add("active-modal");
  }

  handleOfficerStatusUpdate(e) {
    e.preventDefault();
    if (!this.selectedReportForOfficer) return;

    const newStatus = document.getElementById("officerStatusSelect").value;
    const newCrew = (document.getElementById("officerCrewInput").value || "MBMC Sanitation Duty Team").trim();
    const newNotes = (document.getElementById("officerNotesInput").value || "").trim();

    const now = new Date();
    const timeString = now.toISOString().replace("T", " ").substring(0, 16);

    const reportIndex = this.reports.findIndex(r => r.id === this.selectedReportForOfficer.id);
    if (reportIndex !== -1) {
      const oldStatus = this.reports[reportIndex].status;
      this.reports[reportIndex].status = newStatus;
      this.reports[reportIndex].assignedCrew = newCrew;
      this.reports[reportIndex].officerNotes = newNotes;
      this.reports[reportIndex].updatedAt = now.toISOString();

      // Add timeline entry
      let timelineTitle = `Status Updated to [${newStatus}]`;
      if (newStatus === "Resolved") timelineTitle = "Grievance Resolved & Site Cleared";
      if (newStatus === "In Progress" && oldStatus !== "In Progress") timelineTitle = "MBMC Compactor Dispatched";

      this.reports[reportIndex].timeline.push({
        time: timeString,
        title: timelineTitle,
        desc: `Action by Officer S. K. Verma (SI-04). Remarks: "${newNotes || 'Standard MBMC clearance completed'}" | Crew: ${newCrew}`
      });

      this.saveReports();
      this.closeAllModals();
      this.renderAll();
      this.showToast(`Report ${this.selectedReportForOfficer.id} successfully updated to [${newStatus}].`, "success");
    }
  }

  closeAllModals() {
    if (this.receiptModal) this.receiptModal.classList.remove("active-modal");
    if (this.detailModal) this.detailModal.classList.remove("active-modal");
    if (this.officerModal) this.officerModal.classList.remove("active-modal");
    this.selectedReportForOfficer = null;
  }

  // --- Dynamic KPI Calculations ---
  updateKPIs() {
    const total = this.reports.length;
    const pending = this.reports.filter(r => r.status === "Pending").length;
    const inProgress = this.reports.filter(r => r.status === "In Progress").length;
    const resolved = this.reports.filter(r => r.status === "Resolved").length;
    const rate = total > 0 ? ((resolved / total) * 100).toFixed(1) : "0.0";

    if (this.kpiTotal) this.kpiTotal.textContent = total;
    if (this.kpiPending) this.kpiPending.textContent = pending;
    if (this.kpiProgress) this.kpiProgress.textContent = inProgress;
    if (this.kpiResolved) this.kpiResolved.textContent = resolved;
    if (this.kpiRate) this.kpiRate.textContent = `${rate}%`;
    if (this.kpiAvgTime) this.kpiAvgTime.textContent = "14.8 Hrs";
  }

  // --- Render Public Ledger Table ---
  renderLedger() {
    if (!this.ledgerTableBody) return;

    // Filter reports
    const filtered = this.reports.filter(report => {
      // Search query (Ref ID, location, description, or ward)
      if (this.currentFilter.searchQuery) {
        const q = this.currentFilter.searchQuery;
        const matchesId = report.id.toLowerCase().includes(q);
        const matchesLoc = report.location.toLowerCase().includes(q);
        const matchesDesc = report.description.toLowerCase().includes(q);
        const matchesWard = report.ward.toLowerCase().includes(q);
        const matchesCategory = report.category.toLowerCase().includes(q);
        if (!matchesId && !matchesLoc && !matchesDesc && !matchesWard && !matchesCategory) {
          return false;
        }
      }

      // Ward Filter
      if (this.currentFilter.ward !== "All" && !report.ward.includes(this.currentFilter.ward)) {
        return false;
      }

      // Status Filter
      if (this.currentFilter.status !== "All" && report.status !== this.currentFilter.status) {
        return false;
      }

      // Category Filter
      if (this.currentFilter.category !== "All" && report.category !== this.currentFilter.category) {
        return false;
      }

      // Urgency Filter
      if (this.currentFilter.urgency !== "All" && report.urgency !== this.currentFilter.urgency) {
        return false;
      }

      return true;
    });

    if (this.ledgerCountBadge) {
      this.ledgerCountBadge.textContent = `${filtered.length} of ${this.reports.length} Records`;
    }

    if (filtered.length === 0) {
      this.ledgerTableBody.innerHTML = `
        <tr>
          <td colspan="7" class="table-empty-state">
            <div class="empty-state-icon">🔍</div>
            <h4 style="color: var(--gov-navy); margin-bottom: 4px;">No MBMC Grievance Records Found</h4>
            <p style="font-size: 0.85rem;">No registered grievances match your current search query or active filter criteria.</p>
            <button class="gov-btn gov-btn-secondary gov-btn-sm" style="margin-top: 10px;" id="inlineResetFilterBtn">Reset All Filters</button>
          </td>
        </tr>
      `;
      const inlineReset = document.getElementById("inlineResetFilterBtn");
      if (inlineReset) {
        inlineReset.addEventListener("click", () => {
          if (this.filterResetBtn) this.filterResetBtn.click();
        });
      }
      return;
    }

    let rowsHtml = "";
    filtered.forEach(report => {
      const formattedDate = new Date(report.createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      });

      let statusBadgeClass = "status-pending";
      if (report.status === "In Progress") statusBadgeClass = "status-in-progress";
      if (report.status === "Resolved") statusBadgeClass = "status-resolved";

      let urgencyBadgeClass = `urgency-${report.urgency.toLowerCase()}`;

      // Category icons
      let catIcon = "🗑️";
      if (report.category.includes("Missed")) catIcon = "🚛";
      if (report.category.includes("Dumping")) catIcon = "⚠️";
      if (report.category.includes("Damaged")) catIcon = "🔧";
      if (report.category.includes("Hazardous")) catIcon = "☣️";

      rowsHtml += `
        <tr>
          <td>
            <span class="ref-id-badge">${report.id}</span>
          </td>
          <td>
            <div style="font-weight: 600; font-size: 0.85rem; color: var(--gov-navy);">${this.escapeHTML(report.ward.split(" - ")[1] || report.ward)}</div>
            <div style="font-size: 0.74rem; color: var(--text-light);">${this.escapeHTML(report.location.substring(0, 35))}${report.location.length > 35 ? '...' : ''}</div>
          </td>
          <td>
            <div class="category-tag">
              <span>${catIcon}</span>
              <span>${this.escapeHTML(report.category)}</span>
            </div>
          </td>
          <td>
            <span class="urgency-badge ${urgencyBadgeClass}">${report.urgency}</span>
          </td>
          <td>
            <span class="status-badge ${statusBadgeClass}">${report.status}</span>
          </td>
          <td style="font-size: 0.8rem; color: var(--text-muted); white-space: nowrap;">
            ${formattedDate}
          </td>
          <td style="text-align: right; white-space: nowrap;">
            <button class="gov-btn gov-btn-secondary gov-btn-sm" onclick="app.openDetailModal('${report.id}')" title="View Full Timeline & Photos">
              👁 Track
            </button>
            ${this.isOfficerMode ? `
              <button class="gov-btn gov-btn-gold gov-btn-sm" onclick="app.openOfficerModal('${report.id}')" style="margin-left: 4px;" title="Update Status & Dispatch Crew">
                ⚙ Update
              </button>
            ` : ''}
          </td>
        </tr>
      `;
    });

    this.ledgerTableBody.innerHTML = rowsHtml;
  }

  // --- Render Ward Overview Analytics ---
  renderWardOverview() {
    if (!this.wardGridContainer) return;

    const wardsList = [
      { id: "Ward 1", name: "Ward 1 - Uttan / Rai / Morva", zone: "Bhayandar West", population: "92,000", density: "Coastal & Fishery Zone" },
      { id: "Ward 2", name: "Ward 2 - Maxus Mall / 60 Feet Rd", zone: "Bhayandar West", population: "145,000", density: "Commercial & Residential" },
      { id: "Ward 3", name: "Ward 3 - Station Rd / Jesal Park", zone: "Bhayandar East", population: "178,000", density: "High Density Market Corridor" },
      { id: "Ward 4", name: "Ward 4 - Indralok / Cabin Rd", zone: "Bhayandar East", population: "135,000", density: "Residential & Commercial" },
      { id: "Ward 5", name: "Ward 5 - Naya Nagar / Shanti Nagar", zone: "Mira Road", population: "198,000", density: "High Density Urban" },
      { id: "Ward 6", name: "Ward 6 - Kanakia / Beverly Park", zone: "Mira Road", population: "185,000", density: "Mixed Commercial Hub" },
      { id: "Ward 7", name: "Ward 7 - Kashimira / WE Highway", zone: "Mira Road", population: "160,000", density: "Highway, Transit & Industrial" },
      { id: "Ward 8", name: "Ward 8 - Silver Park / Poonam Sagar", zone: "Mira Road", population: "172,000", density: "Urban Residential Corridor" }
    ];

    let cardsHtml = "";

    wardsList.forEach(w => {
      const wardReports = this.reports.filter(r => r.ward.includes(w.id));
      const total = wardReports.length;
      const active = wardReports.filter(r => r.status !== "Resolved").length;
      const resolved = wardReports.filter(r => r.status === "Resolved").length;
      const critical = wardReports.filter(r => r.urgency === "Critical" && r.status !== "Resolved").length;
      const clearanceRate = total > 0 ? Math.round((resolved / total) * 100) : 100;

      cardsHtml += `
        <div class="ward-stat-card" onclick="app.filterByWardDirect('${w.id}')" title="Click to view all ${w.id} reports in the ledger">
          <div class="ward-card-header">
            <div>
              <div class="ward-title">${w.name}</div>
              <div style="font-size: 0.75rem; color: var(--text-light);">${w.density}</div>
            </div>
            <span class="ward-zone-tag">${w.zone}</span>
          </div>

          <div class="ward-metrics-row">
            <span><strong>${total}</strong> Total Logged</span>
            <span><strong style="color: ${active > 0 ? 'var(--urgency-high)' : 'var(--text-main)'};">${active}</strong> Active Backlog</span>
            <span><strong style="color: #16a34a;">${resolved}</strong> Cleared</span>
          </div>

          <div class="ward-progress-bar-bg">
            <div class="ward-progress-fill" style="width: ${clearanceRate}%;"></div>
          </div>

          <div class="ward-card-footer">
            <span>Clearance Rate: <strong>${clearanceRate}%</strong></span>
            ${critical > 0 ? `<span style="color: var(--urgency-critical); font-weight: 700;">⚠️ ${critical} Critical</span>` : `<span style="color: #16a34a;">✓ Stable</span>`}
          </div>
        </div>
      `;
    });

    this.wardGridContainer.innerHTML = cardsHtml;
  }

  // --- Render Officer View ---
  renderOfficerConsole() {
    if (!this.officerLedgerTableBody) return;

    let rowsHtml = "";
    this.reports.forEach(report => {
      let statusBadgeClass = "status-pending";
      if (report.status === "In Progress") statusBadgeClass = "status-in-progress";
      if (report.status === "Resolved") statusBadgeClass = "status-resolved";

      rowsHtml += `
        <tr>
          <td>
            <span class="ref-id-badge">${report.id}</span>
          </td>
          <td>
            <div style="font-weight: 600; font-size: 0.85rem;">${this.escapeHTML(report.ward.split(" - ")[0])}</div>
            <div style="font-size: 0.74rem; color: var(--text-muted);">${this.escapeHTML(report.location.substring(0, 30))}...</div>
          </td>
          <td>
            <div style="font-size: 0.82rem;">${this.escapeHTML(report.category)}</div>
            <span class="urgency-badge urgency-${report.urgency.toLowerCase()}">${report.urgency}</span>
          </td>
          <td>
            <span class="status-badge ${statusBadgeClass}">${report.status}</span>
          </td>
          <td>
            <div style="font-size: 0.8rem; font-weight: 500;">${this.escapeHTML(report.assignedCrew || 'Unassigned')}</div>
          </td>
          <td style="text-align: right;">
            <button class="gov-btn gov-btn-gold gov-btn-sm" onclick="app.openOfficerModal('${report.id}')">
              ⚙ Manage Status
            </button>
          </td>
        </tr>
      `;
    });

    this.officerLedgerTableBody.innerHTML = rowsHtml;
  }

  updateOfficerUI() {
    if (this.officerStatusBadge) {
      this.officerStatusBadge.textContent = this.isOfficerMode ? "MBMC OFFICER CONSOLE: ACTIVE" : "CITIZEN MODE";
      this.officerStatusBadge.style.background = this.isOfficerMode ? "var(--gov-gold)" : "rgba(255,255,255,0.2)";
    }
    if (this.officerToggleBtn) {
      this.officerToggleBtn.innerHTML = this.isOfficerMode ? "🔒 Switch to Citizen View" : "🛡️ Sanitary Officer Access";
    }
    this.renderLedger();
    this.renderOfficerConsole();
  }

  // --- Helper: Direct Ward Filter Trigger ---
  filterByWardDirect(wardId) {
    this.switchView("ledger");
    if (this.filterWardSelect) {
      this.filterWardSelect.value = wardId;
      this.currentFilter.ward = wardId;
      this.renderLedger();
      this.showToast(`Filtered public ledger for MBMC ${wardId}.`, "info");
    }
  }

  // --- Export Public Ledger to CSV (RFC 4180) ---
  exportLedgerCSV() {
    if (!this.reports || this.reports.length === 0) {
      alert("No records available to export.");
      return;
    }

    const headers = [
      "MBMC Reference ID",
      "Ward",
      "Zone",
      "Location Landmark",
      "Category",
      "Urgency",
      "Status",
      "Grievant Name",
      "Assigned Crew",
      "Date Logged (ISO)",
      "Resolution Remarks"
    ];

    const escapeCSV = (str) => {
      if (str === null || str === undefined) return '""';
      const text = String(str).replace(/"/g, '""');
      return `"${text}"`;
    };

    const rows = this.reports.map(r => [
      escapeCSV(r.id),
      escapeCSV(r.ward),
      escapeCSV(r.zone),
      escapeCSV(r.location),
      escapeCSV(r.category),
      escapeCSV(r.urgency),
      escapeCSV(r.status),
      escapeCSV(r.citizenName),
      escapeCSV(r.assignedCrew),
      escapeCSV(r.createdAt),
      escapeCSV(r.officerNotes)
    ]);

    const csvContent = "\uFEFF" + [headers.join(","), ...rows.map(e => e.join(","))].join("\r\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `MBMC_Solid_Waste_Ledger_${new Date().toISOString().substring(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    this.showToast("MBMC Waste Management Ledger downloaded as CSV.", "success");
  }

  // --- Toast Notifications ---
  showToast(message, type = "info") {
    let container = document.getElementById("toastContainer");
    if (!container) {
      container = document.createElement("div");
      container.id = "toastContainer";
      container.className = "toast-container";
      document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = "gov-toast";
    let icon = "ℹ️";
    if (type === "success") icon = "✅";
    if (type === "warning") icon = "⚠️";

    toast.innerHTML = `<span>${icon}</span> <span>${this.escapeHTML(message)}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transition = "opacity 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  // --- Security Utility: HTML Escaping ---
  escapeHTML(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // --- Master Render ---
  renderAll() {
    this.updateKPIs();
    this.renderLedger();
    this.renderWardOverview();
    this.renderOfficerConsole();
    this.updateOfficerUI();
  }
}

// Global Application Instance
let app;
document.addEventListener("DOMContentLoaded", () => {
  app = new MunicipalWasteApp();
  window.app = app;
});
