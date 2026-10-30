# BORCELLE — Neumorphic E-Learning Student Dashboard

A fully responsive, highly detailed industrial design & CAD student dashboard built for the **BORCELLE** platform using **React**, **Vite**, and **Tailwind CSS**.

The interface strictly implements a **Neumorphic (Soft UI)** design system with coordinated light and dark drop shadows, inset shadows for pressed states and input tracks, smooth curvature, and crisp typography.

---

## 🎨 Neumorphic Design System Specifications

- **Background Canvas**: Soft light grayish-blue (`#e6edf3`)
- **Primary Text**: Dark navy (`#0f172a` / `#1e293b`)
- **Secondary / Muted Text**: Slate (`#64748b`)
- **Accent Blues**: `#2563eb` & `#3b82f6` (Pill active states, primary CTA, performance curve)
- **Positive Indicator**: `#10b981` (Completed status, 7-day mastery gain)
- **Warning / Review**: `#f59e0b` (Needs Revision, pending critiques)
- **Drop Shadow (Raised / Extruded)**: `box-shadow: 6px 6px 14px #c3cdd7, -6px -6px 14px #ffffff`
- **Inset Shadow (Pressed / Tracks)**: `box-shadow: inset 4px 4px 8px #c3cdd7, inset -4px -4px 8px #ffffff`

---

## 🚀 Key Dashboard Architecture & Sections

### 1. Left Sidebar
- **Brand Identity**: "BORCELLE" logo with 3D isometric studio cube badge and "Studio Lab • CAD" subtitle.
- **Pill Navigation**: Active pill state with soft blue highlight and inset depth.
  - *Dashboard*, *Courses & Catalog (8 Tracks)*, *Capstone Projects*, *Mentor Feedback*, *Community*.
- **Promo Card**: Raised neumorphic card titled **"Upgrade to Pro Studio"** with perks and interactive CTA.
- **User Profile Widget**: Bottom fixed card for **"Om, Junior Designer"** with active online indicator and settings trigger.

### 2. Top Header & Instant Course Search
- **Search Bar**: Wide, pill-shaped input with inset depressed shadow (`neu-inset`), search icon, and `⌘K` keyboard shortcut trigger.
- **Instant Course Search Matches**: Dynamically filters accredited courses by title, code, software, or instructor with instant "Check Info →" modals.
- **Actions**:
  - Circular neumorphic button for **Notifications** (with unread badge pulse and dropdown popover).
  - Circular neumorphic button for **Help & Documentation**.
  - Solid blue **"+ Resume Project"** primary CTA button with blue gradient and icon.
  - Responsive hamburger drawer for mobile viewports.

### 3. Greeting & KPI Cards
- **Greeting**: *"Welcome back, Om 👋"* with industrial CAD track subtitle and a **14-Day CAD Streak** badge.
- **4 Raised KPI Cards**:
  1. **Course Progress**: `78.4%` (`+12.8%` vs last month, `Compass` icon, 14 of 18 modules completed). Clicking navigates directly to the Course Catalog.
  2. **Active Projects**: `4 Live` (`+2 briefs`, `Boxes` icon, 2 in review, 2 in modeling).
  3. **Instructor Critiques**: `18 Reviews` (`4 Pending`, `MessageSquareQuote` icon, latest from Dr. Vance).
  4. **Certificates Earned**: `3 Verified` (`Next in 8d`, `Award` icon, Surface Topology certification).

### 4. Course Catalog & Curriculum Explorer (Courses Tab)
- **8 Comprehensive Accredited Tracks**:
  1. `CAD-402`: Advanced Surface Modeling & G2 Continuity (Rhino 8 + Grasshopper)
  2. `ID-309`: Consumer Electronics Ergonomics & GD&T (Fusion 360)
  3. `GEN-501`: Generative Lattice & Topology Optimization (nTopology & Grasshopper)
  4. `VIS-204`: Photorealistic CAD Rendering & Material Physics (Blender 4.2 / KeyShot)
  5. `AERO-601`: Aerospace Composite Structures & High-Speed Aerodynamics (CATIA & OpenFOAM)
  6. `BIO-405`: Biomechanical Prosthetics & Compliant Mechanisms (Rhino 8 & SolidWorks)
  7. `AUTO-502`: Automotive Concept Styling & Exterior Surfacing (Autodesk Alias & Rhino 8)
  8. `GDT-201`: ISO & ASME Geometric Dimensioning and Tolerancing (GD&T) (SolidWorks & Fusion 360)
- **Discipline Filtering**: All, Surface Modeling, Industrial Design, Generative & AI, Materials & Rendering, Aerospace & Automotive.
- **View Modes**: All Courses, My Enrolled Tracks, Explore New Courses.
- **In-Depth Course Details Modal (`CourseDetailsModal.jsx`)**:
  - **Overview Tab**: Detailed course description, core learning outcomes checklist, software licenses & NVIDIA RTX A6000 cloud GPU environments provided, and prerequisites.
  - **Curriculum & Syllabus Breakdown Tab**: Interactive step-by-step module breakdown with topic lists, lesson count, duration, and downloadable CAD exercise files (`.step`, `.3dm`, `.ntop`, `.gh`).
  - **Faculty & Mentorship Tab**: Lead instructor profile, industry bio (Ex-BMW, Apple, Dyson, Formula 1), and 1-on-1 critique booking.
  - **Certification & Reviews Tab**: Verified ASME and Industrial Guild accreditation credential ID, seal preview, and student ratings.
  - **Action Controls**: Instant enrollment, "Resume Course Studio", and "Download Syllabus (.PDF)".

### 4. Main Content Area (Central Column)
- **Active Projects & Modules**:
  - Interactive Filter Tabs: `All (6)`, `In Progress (3)`, `Needs Revision (1)`, `Completed (2)`.
  - Rich project cards featuring:
    - 3D render placeholder thumbnails with specialized isometric SVG CAD wireframes (Drone Airframe, Haptic Controller, Watch Bezel, Venturi Diffuser, Bionic Joint, Kinetic Luminaire).
    - Project name, mesh complexity, faculty reviewer, and sprint deadline.
    - Software tag (`Rhino 8`, `Fusion 360`, `SolidWorks`, `Blender 4.2`).
    - Neumorphic status pills (Active Emerald, Needs Revision Amber, Completed Blue).
    - Inset progress bars with extruded colored fills.
    - Contextual action menus ("Launch CAD Studio", "Inspect Topology", "Download STEP").
- **Learning Outcomes Overview**:
  - Raised neumorphic card featuring an interactive **Donut Chart** (Recharts) visualizing:
    - Projects Completed (45%)
    - In Progress (35%)
    - Pending Review (20%)
  - Center neumorphic badge with **80% Mastery** score.
- **Recent Activity Stream**:
  - Live timeline: *Feedback received on 3D mesh*, *New downloadable brief available*, *Revision requested by Dr. Aris*, *Generative Lattice FEA passed*, *Community spotlight nomination*.

### 5. Right Column (Widgets)
- **Quick Actions**:
  - Vertical list of actions with circular neumorphic containers:
    - *Upload Capstone* (STEP / IGES drag & drop modal)
    - *View Sandboxes* (Cloud GPU CAD instances)
    - *Request Critique* (Faculty 1-on-1 review booking)
    - *Download Briefs* (Semester 2 STEP starter packs)
- **Skill Transfer Performance**:
  - Smooth 7-day spline area chart with gradient underfill (`#2563eb`) tracking consistency and CAD hours logged.
- **Top Skills Progress**:
  - Progress bars with inset tracks:
    - 3D Parametric Modeling (`92%` • Expert)
    - CAD Tolerancing & Drafting (`85%` • Advanced)
    - SubD Surface Texturing (`74%` • Proficient)
    - Generative Lattice Optimization (`68%` • Intermediate)
- **Live Mentor Session Card**:
  - Live countdown widget for 1-on-1 critique session with **Dr. Aris Thorne**.

---

## 🛠️ How to Run Locally

```bash
# Navigate to the project directory
cd C:\Users\Om\.gemini\antigravity\scratch\borcelle-dashboard

# Start the Vite development server
npm run dev
```

The application will be accessible at `http://localhost:5173`.
