[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.23697438.svg)](https://doi.org/10.5281/zenodo.23697438)
# MBMC Portal

Web-based solid waste grievance tracking system (student research prototype).
Not affiliated with MBMC or any government body.
# 🏛️ Demo- Mira Bhayandar Municipal Corporation (MBMC)
## Solid Waste Management & Citizen Grievance Redressal Portal

A production-grade, zero-dependency static web application designed specifically for **Mira Bhayandar Municipal Corporation (मिरा भाईंदर महानगरपालिका)** under the **Swachh Bharat Abhiyan (Clean India Mission)**. It provides an authentic government-styled citizen grievance redressal system, public tracking ledger with audit logs, ward-by-ward waste density analytics, and a sanitary inspector management console.

Styled strictly following **National Civic Web Portal Standards** (Deep Navy and Gold palette, official serif headers, bilingual Marathi/English ribbons, accessibility font-scaling, MBMC municipal crest, and the official Clean India / Swachh Bharat spectacles logo).

---

## 🌟 Key Features

### 1. 🏛️ Official MBMC Visual Identity & Clean India Logo
- **Official Top Ribbon**: Maharashtra state civic hierarchy bar (`GOVERNMENT OF MAHARASHTRA | MIRA BHAYANDAR MUNICIPAL CORPORATION (MBMC) | महाराष्ट्र शासन`) with bilingual indicator (`English / मराठी`).
- **Official Clean India (Swachh Bharat) Emblem**:
  - Iconic spectacles vector logo with **"स्वच्छ"** on the left lens, **"भारत"** on the right lens, tricolor bridge, and tagline *"एक कदम स्वच्छता की ओर / CLEAN INDIA MISSION"*.
- **MBMC Crest Seal**:
  - Authentic municipal seal with Mira-Bhayandar coastal creek waves, rising sun, and laurel wreath (`MBMC • ESTD 2002`).
- **Accessibility Controls**:
  - Font Sizing Controls: **`A-`**, **`A`**, **`A+`** with dynamic CSS scale switching.
  - High-Contrast Theme Toggle for visually impaired citizens (WCAG 2.1 AA compliant).
  - Screen Reader **Skip-to-Content** keyboard accessibility link.
- **Toll-Free Helpline**:
  - `📞 1800-22-4848 / 022-28119272`
- **Motto**:
  - `“स्वच्छ, सुंदर आणि प्लास्टिकमुक्त मिरा-भाईंदर”`

### 2. 📝 Citizen Grievance Reporting System ("Report an Issue")
- **Covers all 8 MBMC Wards**:
  - **Ward 1**: Bhayandar West (Uttan Coastal / Rai / Morva)
  - **Ward 2**: Bhayandar West (Maxus Mall / 60 Feet Rd / Mandvi)
  - **Ward 3**: Bhayandar East (Station Rd / Jesal Park / Navghar)
  - **Ward 4**: Bhayandar East (Indralok / Cabin Rd / Goddev)
  - **Ward 5**: Mira Road East (Naya Nagar / Shanti Nagar / Lodha)
  - **Ward 6**: Mira Road East (Kanakia Park / Beverly Park / Jangid)
  - **Ward 7**: Mira Road East (Kashimira / Western Express Highway / Hatkesh)
  - **Ward 8**: Mira Road (Silver Park / Poonam Sagar / Pleasant Park)
- **Grievant Identification**: Optional anonymous filing mode or Name & Phone for SMS dispatch updates.
- **Location & GPS Detection**: Landmark input with interactive **`📍 Detect GPS`** coordinate simulator.
- **Grievance Classification**: Overflowing Bins, Missed Ghanta Gadi Pickups, Illegal C&D Debris Dumping, Damaged Bins, Hazardous Bio-Medical Waste, and Gutter Silt.
- **Priority / Urgency Selector**: Low (48h SLA), Medium (24h SLA), High (12h SLA), and Critical (6h emergency response).
- **Photographic Evidence Upload**: Drag-and-drop file upload with live client-side preview.
- **Official Acknowledgement Receipt**:
  - Generates authentic reference identifiers (e.g., `MBMC-2026-00101`).
  - Printable official receipt card with simulated digital verification QR code, SLA target deadlines, and direct one-click ledger tracking.

### 3. 📋 Public Grievance Ledger & Live Tracking
- **Search & Multi-Filter Toolbar**:
  - Instant live search by Reference ID, Street Landmark, or Category keyword.
  - Granular dropdown filters for MBMC Wards, Status (*Pending / In Progress / Resolved*), and Priority level.
- **Public Audit Dossier & Timeline**:
  - Expandable modal showcasing chronological audit trail (Filing → Verification → Compactor Dispatched → Cleared).
  - Photographic evidence display.
  - Official inspector inspection remarks and assigned compactor truck identification (`MBMC Compactor #MH-04-MB-4412`).
- **Export & Print**:
  - **Export Public Ledger as CSV** (RFC 4180 standard compliant).
  - **Print Ledger** with custom `@media print` layout styled like an official municipal gazette.

### 4. 🗺️ Ward-by-Ward Waste Density Analytics
- Overview grid across all 8 MBMC wards.
- Real-time computation of **Total Logged**, **Active Backlog**, **Cleared Reports**, and **Clearance Rate Percentage**.
- Direct drill-down: Clicking any ward card automatically filters the public ledger to that ward.

### 5. 🛡️ Sanitary Inspector & Staff Management Console
- **Simulated Officer Authentication**: Role switch for Field Sanitary Inspectors (`Officer S. K. Verma, SI-04`).
- **Live Ticket Workflow Actions**:
  - Transition status from `Pending` &rarr; `In Progress` &rarr; `Resolved`.
  - Assign municipal compactor trucks and Ghanta Gadi tippers.
  - Record official resolution remarks and completion timestamps.
  - Instant persistence to `localStorage`.

---

## 📁 File Structure

```text
smart-waste-management/
├── index.html       # Semantic single-page application structure & modals
├── styles.css       # Government visual identity, Clean India badge styles, print styles
├── app.js           # State management, MBMC seed database, search/filter engine, CSV exporter
├── vercel.json      # Zero-config static deployment settings
└── README.md        # Comprehensive documentation
```

---

## 🚀 How to Run Locally

Because this project is built using vanilla Web standards (HTML5, CSS3, ES6 JavaScript), **no build step or package installation is required**.

### Option A: Open directly in browser
Simply double-click `index.html` or right-click and open with your preferred browser (Chrome, Edge, Firefox, Safari).

### Option B: Using a lightweight local HTTP server
Using Python:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

---

## ☁️ Deploy to Vercel (Zero-Configuration)

This application is 100% static and configured for instant zero-configuration deployment on Vercel:

1. Initialize git and commit:
   ```bash
   git init
   git add .
   git commit -m "Updated to Mira Bhayandar Municipal Corporation with Clean India Logo"
   ```
2. Push to your GitHub repository and import directly into Vercel with zero configuration!

---

## 🏛️ Administrative Headquarters
**Mira Bhayandar Municipal Corporation (मिरा भाईंदर महानगरपालिका)**  
Indira Gandhi Bhavan, Chhatrapati Shivaji Maharaj Marg,  
Bhayandar West, District Thane, Maharashtra - 401101  
**Toll-Free Sanitation Helpline:** 1800-22-4848 / 022-28119272

---

## 🔌 Backend Setup (Supabase) - required for a real, multi-user portal

Without this, the site runs in **local demo mode** (data stays in each visitor's browser).

1. Create a free project at supabase.com.
2. **SQL Editor** → paste all of `schema.sql` → Run. (Tables, Row Level Security, photo bucket, realtime, flood guard.)
3. **Project Settings → API** → copy *Project URL* and *anon public key* into `config.js`. Never use the `service_role` key in the frontend.
4. **Authentication → Users → Add user** (email + password) for each officer. Then in SQL Editor:
   `update profiles set role = 'inspector' where id = '<that user's uuid>';`
   (roles: `inspector`, `ward_officer`, `admin`).
5. Commit and push; Vercel redeploys automatically.

**How it works:** citizens file grievances anonymously (insert-only). Everyone can read the public ledger, but name/phone live in `grievance_private`, readable only by staff. Only signed-in staff can change status. Photos are compressed in the browser and stored in the `evidence` bucket. Ledger updates live via Supabase Realtime.
