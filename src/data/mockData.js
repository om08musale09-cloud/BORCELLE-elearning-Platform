export const studentProfile = {
  name: "Om",
  fullName: "Om",
  role: "Junior Designer",
  specialization: "Industrial CAD & Parametric Surfaces",
  semester: "Semester 2 • Capstone Studio",
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  badgeLevel: "Lvl 4 Studio Scholar",
  streakDays: 14,
  completionRate: "78.4%",
};

export const kpiMetrics = [
  {
    id: "course-progress",
    title: "Course Progress",
    value: "78.4%",
    change: "+12.8%",
    trendDirection: "up",
    period: "vs last month",
    icon: "Compass",
    color: "blue",
    description: "14 of 18 Modules Finished",
  },
  {
    id: "active-projects",
    title: "Active Projects",
    value: "4 Live",
    change: "+2 briefs",
    trendDirection: "up",
    period: "this semester",
    icon: "Boxes",
    color: "emerald",
    description: "2 in review, 2 in active modeling",
  },
  {
    id: "instructor-critiques",
    title: "Instructor Critiques",
    value: "18",
    change: "4 Pending",
    trendDirection: "warning",
    period: "awaiting review",
    icon: "MessageSquareQuote",
    color: "amber",
    description: "Latest from Dr. Vance 2h ago",
  },
  {
    id: "certificates-earned",
    title: "Certificates Earned",
    value: "3",
    change: "Next in 8d",
    trendDirection: "up",
    period: "Capstone Ready",
    icon: "Award",
    color: "purple",
    description: "Surface Topology Certification",
  },
];

export const coursesData = [
  {
    id: "cad-402",
    code: "CAD-402",
    title: "Advanced Surface Modeling & G2 Continuity",
    tagline: "Master Class-A curvature continuity, zebra reflection diagnostics, and aerodynamic surfaces for automotive & aerospace.",
    category: "Surface Modeling",
    level: "Advanced (Level 4)",
    duration: "8 Weeks • 48 Hours",
    schedule: "Self-Paced + Weekly Live Critiques",
    modulesCount: 14,
    completedModules: 12,
    progress: 88,
    isEnrolled: true,
    rating: 4.9,
    reviewsCount: 342,
    enrolledStudents: 1280,
    software: "Rhino 8 + Grasshopper",
    color: "#2563eb",
    bgGradient: "from-blue-600 to-indigo-600",
    instructor: {
      name: "Prof. Marcus Vance",
      title: "Former Senior Exterior Surfacing Lead @ BMW Group",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
      bio: "20+ years designing high-speed aerodynamic shells, fighter jet fairings, and luxury concept vehicles. Senior Fellow at BORCELLE Geometry Labs."
    },
    description: "This studio course immerses students into the rigorous standards of Class-A surfacing and G2/G3 curvature continuity. Learn how top automotive studios build seamless reflection lines, analyze zebra curvature combs, and prepare complex multi-surface assemblies for precision tooling.",
    learningOutcomes: [
      "Achieve flawless G0, G1, G2, and G3 continuity across complex intersecting blends",
      "Diagnose surface pinches, inflection points, and tangency flaws using Zebra reflection analysis",
      "Build parametric surface generators and algorithmic panel patterns with Grasshopper",
      "Execute high-tolerance STEP and IGES model exports for CNC 5-axis milling and composite layup molds",
      "Pass the BORCELLE Professional Level 4 Surface Topology Certification Examination"
    ],
    softwareProvided: [
      { name: "Rhino 8 Studio License", type: "Full Academic Cloud Access" },
      { name: "Grasshopper Parametric Engine", type: "Pre-configured plugins" },
      { name: "BORCELLE Cloud GPU Sandbox", type: "NVIDIA RTX A6000 48GB" }
    ],
    prerequisites: [
      "Basic understanding of 3D curves & coordinate systems (CAD-201 or equivalent)",
      "Familiarity with standard mechanical engineering or industrial design drafting"
    ],
    certificateInfo: {
      title: "Verified Master of Class-A Surface Topology",
      accreditedBy: "BORCELLE Academic Industrial Guild & ASME Standard Affiliate",
      credentialId: "BC-CERT-2026-CAD402",
      verificationUrl: "verify.borcelle.edu/cert/om-cad402"
    },
    syllabus: [
      {
        number: "01",
        title: "NURBS Foundations, Degree vs. Spans, and Curve Control",
        duration: "3.5 hrs",
        lessonsCount: 4,
        status: "Completed",
        summary: "Mathematical foundations of Non-Uniform Rational B-Splines, single-span bezier curves vs. multi-span knot vectors.",
        topics: ["Control polygon manipulation", "Degree 3 vs Degree 5/7 curves", "Weight vectors and rational forms", "Avoiding phantom inflection points"],
        downloadableFile: "Module01_CurveBasics_Exercise.step"
      },
      {
        number: "02",
        title: "Curvature Analysis: Zebra Combs & Gaussian Deviation",
        duration: "4.0 hrs",
        lessonsCount: 5,
        status: "Completed",
        summary: "In-depth visual diagnostic tools to inspect surface continuity and reflection highlight stability.",
        topics: ["Zebra map calibration", "Curvature combs (radius vs curvature)", "Draft angle analysis for tooling", "Gaussian and Mean curvature evaluation"],
        downloadableFile: "Module02_Continuity_TestModels.3dm"
      },
      {
        number: "03",
        title: "G2 Fillets, Blend Curves & Transition Patches",
        duration: "5.2 hrs",
        lessonsCount: 6,
        status: "Completed",
        summary: "Constructing 3-sided and 5-sided transitions without puckering or surface tension artifacts.",
        topics: ["Variable radius fillets", "Setback corner blends", "N-sided hole patching techniques", "Edge continuity matching & rebuild algorithms"],
        downloadableFile: "Module03_Fillet_Transitions.step"
      },
      {
        number: "04",
        title: "Class-A Automotive Body Panels & Character Lines",
        duration: "6.0 hrs",
        lessonsCount: 6,
        status: "Completed",
        summary: "Executing primary, secondary, and tertiary surfaces on fenders, hoods, and aerodynamic ducts.",
        topics: ["Swept surfaces along complex guide rails", "Crown & tension control on exterior panels", "Flange modeling & hem offsets", "Split lines & shut line detailing"],
        downloadableFile: "Module04_Fender_Assembly.stp"
      },
      {
        number: "05",
        title: "Parametric Facades with Grasshopper",
        duration: "4.8 hrs",
        lessonsCount: 5,
        status: "In Progress",
        summary: "Automating repetitive industrial detailing: cooling louvers, speaker grilles, and aerodynamic intake vanes.",
        topics: ["Attractor point algorithms", "Domain mapping & surface UV coordinates", "Panelization & unrolling", "Data tree management in Grasshopper"],
        downloadableFile: "Module05_Parametric_Intake.gh"
      },
      {
        number: "06",
        title: "Capstone Mesh Delivery & 1-on-1 Faculty Critique",
        duration: "6.5 hrs",
        lessonsCount: 4,
        status: "Next Up",
        summary: "Final submission of the Titanium Drone Airframe / Aerodynamic Shell for peer and faculty review.",
        topics: ["STEP AP242 color-coded export", "Generating GD&T drawing sets", "Cloud render turntable preparation", "Faculty defense presentation"],
        downloadableFile: "Module06_Capstone_Spec_Brief.pdf"
      }
    ],
    reviews: [
      {
        author: "Devon Reed",
        role: "Industrial Designer @ Rivian",
        rating: 5,
        date: "2 weeks ago",
        comment: "The depth of G2 curvature teaching in CAD-402 is miles ahead of standard university CAD classes. Marcus gives feedback directly on your control polygon vertices."
      },
      {
        author: "Sarah Lindqvist",
        role: "Aerospace Systems Intern",
        rating: 5,
        date: "Last month",
        comment: "Being able to test our STEP models on the cloud GPU sandbox with instant FEA and zebra combs made complex surfacing so intuitive."
      }
    ]
  },
  {
    id: "id-309",
    code: "ID-309",
    title: "Consumer Electronics Ergonomics & GD&T",
    tagline: "Industrial design engineering from human palm anatomy to injection mold tooling & tolerancing.",
    category: "Industrial Design",
    level: "Intermediate (Level 3)",
    duration: "6 Weeks • 36 Hours",
    schedule: "Self-Paced Studio",
    modulesCount: 12,
    completedModules: 9,
    progress: 72,
    isEnrolled: true,
    rating: 4.8,
    reviewsCount: 289,
    enrolledStudents: 940,
    software: "Fusion 360 & GD&T",
    color: "#f59e0b",
    bgGradient: "from-amber-500 to-orange-600",
    instructor: {
      name: "Dr. Aris Thorne",
      title: "Lead Industrial Hardware Architect • Ex-Apple & Dyson",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
      bio: "Specialist in anthropometric palm studies, haptic tactile response, and multi-cavity injection molding design rules."
    },
    description: "Bridge the gap between aesthetic styling and mass manufacturing. Learn how to draft proper mold release angles, calculate rib-to-nominal wall thickness ratios, manage snap-fit joints, and enforce ASME Y14.5 Geometric Dimensioning & Tolerancing (GD&T).",
    learningOutcomes: [
      "Master anthropometric hand modeling & haptic ergonomic grip contours",
      "Calculate draft angles (minimum 1.5° - 2.5°) to eliminate ejector pin scuff marks",
      "Design reliable cantilever snap fits, boss fasteners, and ultrasonic weld beads",
      "Create full 2D production drawings with ASME Y14.5 feature control frames and datum references",
      "Perform mold flow simulations to predict sink marks and weld lines"
    ],
    softwareProvided: [
      { name: "Autodesk Fusion 360 Commercial", type: "Cloud Workspace Access" },
      { name: "Moldflow Adviser API", type: "Thermal Simulation Tool" },
      { name: "BORCELLE GD&T Checker", type: "Automated Inspection Script" }
    ],
    prerequisites: [
      "Introductory 3D solid modeling (extrude, revolve, shell, draft)",
      "Basic materials science understanding (thermoplastics: ABS, PC, TPU)"
    ],
    certificateInfo: {
      title: "Certified Consumer Hardware DFM Specialist",
      accreditedBy: "Society of Manufacturing Engineers (SME) Affiliate",
      credentialId: "BC-CERT-2026-ID309",
      verificationUrl: "verify.borcelle.edu/cert/om-id309"
    },
    syllabus: [
      {
        number: "01",
        title: "Anthropometry & Hand Contact Pressure Mapping",
        duration: "3.0 hrs",
        lessonsCount: 4,
        status: "Completed",
        summary: "Understanding 5th to 95th percentile ergonomic grasp data and thumb sweep radii.",
        topics: ["Hand grasp types (power grip vs precision pinch)", "3D digitizer scan import", "Creating organic loft rails from anatomical points"],
        downloadableFile: "Hand_Scan_Ergonomic_Template.obj"
      },
      {
        number: "02",
        title: "Nominal Wall Thickness & Structural Coring",
        duration: "3.5 hrs",
        lessonsCount: 4,
        status: "Completed",
        summary: "Avoiding thermal sink marks by coring out heavy bosses and maintaining constant wall thickness.",
        topics: ["ABS vs Polycarbonate shrink rates", "Rib height vs nominal wall rules (40-60%)", "Gusset stiffener engineering"],
        downloadableFile: "Enclosure_Coring_Practice.step"
      },
      {
        number: "03",
        title: "Snap Fits, Bosses & Hardware Fastening",
        duration: "4.5 hrs",
        lessonsCount: 5,
        status: "Completed",
        summary: "Cantilever snap fit beam calculations, strain limits, and thread-forming screw bosses.",
        topics: ["Bayer snap-fit formula & maximum allowable strain", "Thread-forming vs brass heat-set inserts", "Parting line split plane location"],
        downloadableFile: "SnapFit_Calculator_Template.xlsx"
      },
      {
        number: "04",
        title: "Draft Angle Optimization & Mold Parting Lines",
        duration: "4.2 hrs",
        lessonsCount: 4,
        status: "In Progress",
        summary: "Detailed draft angle application and side-action undercut elimination.",
        topics: ["Steep vs shallow draft angles", "Texture depth draft compensation (1° per 0.02mm grain)", "Complex stepped parting lines"],
        downloadableFile: "HapticController_PartingLine.step"
      },
      {
        number: "05",
        title: "ASME Y14.5 GD&T Tolerancing & Production Drawings",
        duration: "5.0 hrs",
        lessonsCount: 5,
        status: "Next Up",
        summary: "Feature control frames, position tolerancing at MMC, profile of a surface, and datum reference frames.",
        topics: ["Datum selection ABC", "True position vs coordinate tolerancing", "Profile of a surface for organic ergonomic shells"],
        downloadableFile: "GD&T_Inspection_Sheet.pdf"
      }
    ],
    reviews: [
      {
        author: "Julian Vance",
        role: "Hardware Mechanical Lead @ Logitech",
        rating: 5,
        date: "3 weeks ago",
        comment: "Dr. Thorne's rules on rib-to-wall ratios and draft angles saved our engineering team weeks of tooling rework. Every hardware junior must take this."
      }
    ]
  },
  {
    id: "gen-501",
    code: "GEN-501",
    title: "Generative Lattice & Topology Optimization",
    tagline: "Algorithm-driven lightweighting, stress-aligned gyroid lattices, and direct additive manufacturing.",
    category: "Generative & AI",
    level: "Advanced (Level 5)",
    duration: "6 Weeks • 38 Hours",
    schedule: "Cloud GPU Accelerated",
    modulesCount: 12,
    completedModules: 8,
    progress: 64,
    isEnrolled: true,
    rating: 4.95,
    reviewsCount: 198,
    enrolledStudents: 720,
    software: "nTopology & Grasshopper",
    color: "#8b5cf6",
    bgGradient: "from-purple-600 to-indigo-700",
    instructor: {
      name: "Elena Rostova",
      title: "Principal Computational Geometer • Ex-Formula 1 Structural Lead",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80",
      bio: "Pioneer in implicit voxel modeling and field-driven design for titanium additive manufacturing in aerospace brackets and motorsport."
    },
    description: "Break away from traditional manual modeling constraints. Harness field-driven computational geometry to generate micro-architected lattices, stress-oriented Voronoi structures, and TPMS (Triply Periodic Minimal Surfaces) like Gyroid and Schwarz Diamond for extreme strength-to-weight ratios.",
    learningOutcomes: [
      "Master implicit representation and signed distance fields (SDF) in modern CAD",
      "Generate graded density TPMS gyroid and diamond lattice infills aligned with FEA stress vectors",
      "Lightweight aerospace flight brackets and prosthetic hinges by up to 55% while maintaining safety margins",
      "Prepare zero-support geometries for Direct Metal Laser Sintering (DMLS) 3D printing",
      "Deploy custom Python and Grasshopper scripts to automate iterative load analysis"
    ],
    softwareProvided: [
      { name: "nTopology Enterprise Cloud", type: "Full Academic Sandbox" },
      { name: "Ansys FEA Cloud Solver", type: "Structural Stress Integration" },
      { name: "Grasshopper Implicit Addon", type: "Algorithmic Toolkit" }
    ],
    prerequisites: [
      "Solid parametric modeling proficiency",
      "Understanding of stress, strain, Von Mises yield criteria, and factor of safety"
    ],
    certificateInfo: {
      title: "Certified Computational Topology Specialist",
      accreditedBy: "Additive Manufacturing Users Association (AMUG)",
      credentialId: "BC-CERT-2026-GEN501",
      verificationUrl: "verify.borcelle.edu/cert/om-gen501"
    },
    syllabus: [
      {
        number: "01",
        title: "Introduction to Implicit Modeling & Signed Distance Fields",
        duration: "3.2 hrs",
        lessonsCount: 4,
        status: "Completed",
        summary: "Why traditional B-rep meshes fail for complex micro-lattices and how implicit math solves infinite complexity.",
        topics: ["B-rep vs Voxels vs Implicit bodies", "Boolean operations without mesh errors", "Field blending & smoothing"],
        downloadableFile: "Implicit_Field_Primer.ntop"
      },
      {
        number: "02",
        title: "TPMS Mathematics: Gyroids, Schwarz P & Diamond Cells",
        duration: "4.0 hrs",
        lessonsCount: 5,
        status: "Completed",
        summary: "Formulating minimal surface equations and grading wall thickness along spatial gradients.",
        topics: ["Triply Periodic Minimal Surfaces equations", "Graded porosity based on distance fields", "Surface area to volume maximization for heat sinks"],
        downloadableFile: "Gyroid_Cell_Library.step"
      },
      {
        number: "03",
        title: "FEA Stress Mapping & Field-Driven Infill Densities",
        duration: "4.8 hrs",
        lessonsCount: 5,
        status: "Completed",
        summary: "Importing finite element stress results and using them as continuous scalar field drivers for lattice density.",
        topics: ["FEA mesh export from Ansys/Fusion", "Mapping Von Mises stress to thickness fields", "Stress concentration relief at boundary shells"],
        downloadableFile: "Bracket_FEA_StressMap.vtk"
      },
      {
        number: "04",
        title: "Titanium Exoskeleton Joint Case Study",
        duration: "5.5 hrs",
        lessonsCount: 5,
        status: "In Progress",
        summary: "End-to-end redesign of a high-load biomedical prosthetic hinge joint with 42% mass reduction.",
        topics: ["Load boundary constraints", "Overhang angle inspection for additive manufacturing", "Post-processing for CNC machining datum interfaces"],
        downloadableFile: "ProstheticHinge_Implicit_Setup.ntop"
      }
    ],
    reviews: [
      {
        author: "Camille Dupont",
        role: "Aerospace Structural Analyst",
        rating: 5,
        date: "1 month ago",
        comment: "Elena breaks down mathematical minimal surfaces into intuitive visual tools. Our team reduced titanium bracket weight by 47% using these exact methods."
      }
    ]
  },
  {
    id: "vis-204",
    code: "VIS-204",
    title: "Photorealistic CAD Rendering & Material Physics",
    tagline: "Physically based rendering (PBR), studio HDRI lighting, and hyper-realistic portfolio animation.",
    category: "Materials & Rendering",
    level: "Intermediate (Level 3)",
    duration: "5 Weeks • 30 Hours",
    schedule: "Self-Paced Studio",
    modulesCount: 10,
    completedModules: 10,
    progress: 100,
    isEnrolled: true,
    rating: 4.85,
    reviewsCount: 410,
    enrolledStudents: 1540,
    software: "Blender 4.2 / KeyShot",
    color: "#10b981",
    bgGradient: "from-emerald-500 to-teal-700",
    instructor: {
      name: "David Chang",
      title: "Senior Industrial CGI Director • Client projects for Sony & Leica",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
      bio: "15+ years creating flagship commercial launch renders, material shaders, and photorealistic CGI animations for world-class product releases."
    },
    description: "Transform raw mechanical CAD geometry into breathtaking, photorealistic studio renders. Master IOR (Index of Refraction), dielectric vs metallic Fresnel, procedural anodized aluminum grain, optical glass dispersion, and cinematic three-point studio lighting.",
    learningOutcomes: [
      "Set up commercial studio lighting rigs with customizable softboxes, rim lights, and gradient flags",
      "Build realistic procedural materials: brushed stainless steel, frosted polycarbonate, and carbon weave",
      "Control depth of field, chromatic aberration, and bokeh for authentic photography aesthetics",
      "Export 4K turntables and animated exploded-view CAD assemblies",
      "Post-process in compositing nodes with ACES color management for magazine-grade deliverables"
    ],
    softwareProvided: [
      { name: "KeyShot Pro Studio Academic", type: "Real-time Raytracing" },
      { name: "Blender 4.2 LTS + Cycles", type: "Open Source Suite" },
      { name: "BORCELLE Studio HDR Library", type: "40+ Custom 8K HDRI maps" }
    ],
    prerequisites: [
      "Any 3D CAD model ready for visualization (.step, .obj, .fbx)",
      "Basic understanding of digital photography (f-stop, focal length, shutter)"
    ],
    certificateInfo: {
      title: "Certified Master of Industrial CGI Visualization",
      accreditedBy: "International Visual Design Council",
      credentialId: "BC-CERT-2026-VIS204",
      verificationUrl: "verify.borcelle.edu/cert/om-vis204"
    },
    syllabus: [
      {
        number: "01",
        title: "CAD Import, Normal Correction & Mesh Tessellation",
        duration: "2.5 hrs",
        lessonsCount: 3,
        status: "Completed",
        summary: "Clean conversion from NURBS mathematical surfaces to high-density polygonal rendering meshes.",
        topics: ["Tessellation density settings", "Fixing inverted normals and shading seams", "Assigning material IDs by surface face"],
        downloadableFile: "Tessellation_CleanUp_Sample.step"
      },
      {
        number: "02",
        title: "The Physics of Light: IOR, Roughness & Microfacets",
        duration: "3.5 hrs",
        lessonsCount: 4,
        status: "Completed",
        summary: "Understanding the Fresnel effect, energy conservation, and microfacet roughness.",
        topics: ["Conductors vs Dielectrics", "Index of Refraction look-up tables", "Procedural micro-scratches and fingerprint maps"],
        downloadableFile: "PBR_Material_Swatches.blend"
      },
      {
        number: "03",
        title: "Automotive & Luxury Product Studio Lighting",
        duration: "4.0 hrs",
        lessonsCount: 4,
        status: "Completed",
        summary: "Sculpting the highlights of curved surfaces using softbox reflectors and rim kickers.",
        topics: ["Studio lighting hierarchy", "Highlight pinning on complex fillets", "Shadow falloff and ambient occlusion tuning"],
        downloadableFile: "Studio_Lighting_Stage.ksp"
      },
      {
        number: "04",
        title: "Exploded View Rigging & 360° Turntable Rendering",
        duration: "4.2 hrs",
        lessonsCount: 4,
        status: "Completed",
        summary: "Keyframe animation of mechanical components disassembling with easing curves.",
        topics: ["Component timeline animation", "Camera path curves & target tracking", "GPU batch rendering optimization"],
        downloadableFile: "Watch_Exploded_Rig.blend"
      }
    ],
    reviews: [
      {
        author: "Marta Gomez",
        role: "CGI Lead @ Designworks",
        rating: 5,
        date: "2 months ago",
        comment: "This course is the reason my portfolio landed interviews at top European design consultancies. David's lighting tips are gold."
      }
    ]
  },
  {
    id: "aero-601",
    code: "AERO-601",
    title: "Aerospace Composite Structures & High-Speed Aerodynamics",
    tagline: "Carbon fiber monocoque design, CFD laminar-to-turbulent airflow simulation, and wind tunnel validation.",
    category: "Aerospace & Automotive",
    level: "Capstone (Level 5)",
    duration: "10 Weeks • 60 Hours",
    schedule: "Cohort-Based + Live Critiques",
    modulesCount: 16,
    completedModules: 0,
    progress: 0,
    isEnrolled: false,
    rating: 4.96,
    reviewsCount: 184,
    enrolledStudents: 490,
    software: "CATIA & OpenFOAM CFD",
    color: "#0284c7",
    bgGradient: "from-sky-600 to-blue-800",
    instructor: {
      name: "Prof. Marcus Vance",
      title: "Former Chief Aerodynamicist • Drone & Supersonic Research",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
      bio: "Authority on high Mach number flow control, blended wing bodies, and composite carbon prepreg manufacturing."
    },
    description: "Designed for advanced students aspiring to work in Formula 1 aerodynamics, hypersonic airframes, or autonomous high-end UAVs. Learn how surface fairings generate downforce vs drag, simulate vortex shedding with OpenFOAM, and design carbon fiber plies with balanced laminate symmetry.",
    learningOutcomes: [
      "Calculate lift-to-drag ratios (L/D) and boundary layer transition on transonic airfoils",
      "Run computational fluid dynamics (CFD) mesh generation and Navier-Stokes simulations",
      "Model continuous carbon fiber ply stackups with fiber orientation vectors [0°/45°/90°/-45°]",
      "Design core sandwich panels with Nomex honeycomb for weight-critical fuselages",
      "Produce production-ready CAD data for autoclave composite tooling"
    ],
    softwareProvided: [
      { name: "OpenFOAM CFD Engine", type: "Integrated Cloud Simulation" },
      { name: "CATIA Composites Design Workbench", type: "Enterprise Academic Cloud" },
      { name: "ParaView Visualization Suite", type: "Flow Velocity Vector Graphics" }
    ],
    prerequisites: [
      "Completion of CAD-402 (Advanced Surface Modeling)",
      "Fundamental fluid mechanics & vector calculus"
    ],
    certificateInfo: {
      title: "Certified Aerospace Aerodynamic Systems Designer",
      accreditedBy: "AIAA (American Institute of Aeronautics and Astronautics) Partner",
      credentialId: "BC-CERT-2026-AERO601",
      verificationUrl: "verify.borcelle.edu/cert/aero601"
    },
    syllabus: [
      {
        number: "01",
        title: "Airfoil Geometry, Camber Lines & NACA Parametrics",
        duration: "4.0 hrs",
        lessonsCount: 4,
        status: "Available",
        summary: "Parametric equations of transonic NACA 4-digit and 6-digit series profiles.",
        topics: ["Mean camber lines and thickness distribution", "Angle of attack vs lift coefficient curve", "Leading edge radius and stall behavior"],
        downloadableFile: "NACA_Airfoil_Databases.csv"
      },
      {
        number: "02",
        title: "Computational Fluid Dynamics (CFD) Domain Setup",
        duration: "5.5 hrs",
        lessonsCount: 5,
        status: "Available",
        summary: "Creating external flow wind tunnels, boundary layers, and prism layer meshing.",
        topics: ["Inlet velocity and turbulent intensity", "Y+ wall spacing calculations", "K-Omega SST turbulence model selection"],
        downloadableFile: "WindTunnel_CFD_Domain.foam"
      },
      {
        number: "03",
        title: "Vortex Shedding, Venturi Tunnels & Diffusers",
        duration: "6.0 hrs",
        lessonsCount: 6,
        status: "Available",
        summary: "Ground effect aerodynamics, underside venturi channels, and downforce generation.",
        topics: ["Ground proximity flow physics", "Diffuser expansion angles to prevent flow separation", "Vortex generators on wingtips"],
        downloadableFile: "Venturi_Diffuser_Mesh.step"
      },
      {
        number: "04",
        title: "Carbon Fiber Composite Layup & Autoclave Tooling",
        duration: "6.5 hrs",
        lessonsCount: 5,
        status: "Available",
        summary: "Designing multi-ply laminates, ply drops, and aluminum tooling for curing.",
        topics: ["Quasi-isotropic laminate design", "Thermal expansion compensation for molds", "Vacuum bagging port placement"],
        downloadableFile: "Carbon_Monocoque_PlyStack.step"
      }
    ],
    reviews: [
      {
        author: "Liam Kowalski",
        role: "Aerodynamics Graduate @ Red Bull Powertrains",
        rating: 5,
        date: "2 months ago",
        comment: "The CFD workflows are identical to modern motorsport standards. This course directly prepared me for high-performance aerodynamic design."
      }
    ]
  },
  {
    id: "bio-405",
    code: "BIO-405",
    title: "Biomechanical Prosthetics & Compliant Mechanisms",
    tagline: "Patient-matched 3D scanning, organic musculoskeletal joints, and flexible monolithic springs.",
    category: "Industrial Design",
    level: "Advanced (Level 4)",
    duration: "7 Weeks • 42 Hours",
    schedule: "Self-Paced Studio",
    modulesCount: 14,
    completedModules: 0,
    progress: 0,
    isEnrolled: false,
    rating: 4.92,
    reviewsCount: 156,
    enrolledStudents: 520,
    software: "Rhino 8 & SolidWorks",
    color: "#ec4899",
    bgGradient: "from-pink-600 to-rose-700",
    instructor: {
      name: "Dr. Nadia Al-Hassan",
      title: "Biomedical Robotics Fellow • MIT Biomechatronics Alum",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80",
      bio: "Pioneering research in patient-custom prosthetic sockets, compliant monolithic linkages, and biocompatible additive materials."
    },
    description: "Design life-changing biomedical devices combining organic anatomical scan data with precise mechanical engineering. Master compliant mechanisms—devices that gain their motion from the deflection of flexible members rather than traditional pin hinges—eliminating wear, friction, and assembly fasteners.",
    learningOutcomes: [
      "Convert raw 3D optical surface scans of human limbs into clean parametric CAD sockets",
      "Engineer compliant leaf springs, living hinges, and bistable mechanisms with finite fatigue life",
      "Select biocompatible materials (PEEK, Titanium Grade 5 ELI, medical grade silicones)",
      "Run non-linear FEA simulation for large-deflection flexible mechanisms",
      "Comply with ISO 10328 structural testing standards for lower-limb prostheses"
    ],
    softwareProvided: [
      { name: "SolidWorks Simulation Professional", type: "Non-Linear FEA Cloud" },
      { name: "Geomagic Wrap Interface", type: "Scan-to-CAD Retopology" },
      { name: "BORCELLE Compliant Synthesis Toolkit", type: "MATLAB & Rhino Scripts" }
    ],
    prerequisites: [
      "CAD-201 solid modeling or equivalent",
      "Basic mechanics of materials (stress-strain curves, fatigue limit, Young's modulus)"
    ],
    certificateInfo: {
      title: "Certified Biomechanical Device Design Engineer",
      accreditedBy: "International Society for Prosthetics and Orthotics (ISPO)",
      credentialId: "BC-CERT-2026-BIO405",
      verificationUrl: "verify.borcelle.edu/cert/bio405"
    },
    syllabus: [
      {
        number: "01",
        title: "3D Scan-to-CAD Processing & Anatomical Alignment",
        duration: "3.5 hrs",
        lessonsCount: 4,
        status: "Available",
        summary: "Point clouds, mesh decimation, feature curve extraction, and anatomical coordinate systems.",
        topics: ["Handling imperfect scan noise", "Anatomical landmarks for load bearing", "NURBS surface skinning over polygonal scans"],
        downloadableFile: "Limb_Scan_Data.stl"
      },
      {
        number: "02",
        title: "The Physics of Compliant Mechanisms & Flexures",
        duration: "4.5 hrs",
        lessonsCount: 5,
        status: "Available",
        summary: "Pseudo-Rigid-Body Modeling (PRBM), flexure hinges, and parasitic shift compensation.",
        topics: ["How flexible hinges replace complex multi-pin joints", "Calculating spring rates and cyclic fatigue", "Titanium Grade 5 high-yield deflection"],
        downloadableFile: "Flexure_PRBM_Formulas.xlsx"
      },
      {
        number: "03",
        title: "Patient-Specific Socket Topology Optimization",
        duration: "5.0 hrs",
        lessonsCount: 5,
        status: "Available",
        summary: "Creating variable-flexibility breathable lattices to prevent tissue pressure ulcers.",
        topics: ["Variable wall compliance", "Ventilation opening geometry", "Carbon fiber prepreg socket vacuum molding"],
        downloadableFile: "Socket_Lattice_Example.step"
      }
    ],
    reviews: [
      {
        author: "Tariq Mansoor",
        role: "Prosthetics R&D Engineer",
        rating: 5,
        date: "3 weeks ago",
        comment: "Dr. Nadia's compliant mechanism modules are phenomenal. We designed an entire ankle joint without a single bearing or screw."
      }
    ]
  },
  {
    id: "auto-502",
    code: "AUTO-502",
    title: "Automotive Concept Styling & Exterior Surfacing",
    tagline: "Speed forms, character creases, greenhouse taper, and hypercar exterior aerodynamics.",
    category: "Aerospace & Automotive",
    level: "Advanced (Level 4)",
    duration: "8 Weeks • 50 Hours",
    schedule: "Self-Paced + Industry Review",
    modulesCount: 14,
    completedModules: 0,
    progress: 0,
    isEnrolled: false,
    rating: 4.88,
    reviewsCount: 215,
    enrolledStudents: 610,
    software: "Autodesk Alias & Rhino 8",
    color: "#6366f1",
    bgGradient: "from-indigo-600 to-purple-800",
    instructor: {
      name: "Jean-Paul Laurent",
      title: "Former Concept Design Director • Studio Style Paris",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&auto=format&fit=crop&q=80",
      bio: "Lead stylist behind iconic European sports coupes and electric hypercar concepts. Specialist in dynamic light reflection ribbons."
    },
    description: "Learn how elite automotive styling studios translate emotive 2D digital sketches into sculptured 3D Class-A mathematical realities. Master vehicle package architecture, stance, overhang ratios, tumblehome greenhouse curvature, and predatory headlight housings.",
    learningOutcomes: [
      "Define vehicle proportion package: wheelbase, track width, H-point, and ground clearance",
      "Model continuous acceleration curves (Degree 5 & 7) for dynamic side body reflections",
      "Integrate cooling intakes, brake ducts, and active rear aero spoilers seamlessly into body panels",
      "Create realistic shut line gap clearances (3.5mm automotive gap standards)",
      "Build realistic wheel arch wheel-to-body stance offsets"
    ],
    softwareProvided: [
      { name: "Autodesk Alias AutoStudio Academic", type: "Direct Class-A Tool" },
      { name: "VRED Design Studio", type: "Real-time Vehicle Lighting" },
      { name: "BORCELLE Car Package Blueprints", type: "Chassis & Wheelbase Templates" }
    ],
    prerequisites: [
      "Comfortable with 3D NURBS modeling curves",
      "Keen eye for aesthetic proportion, silhouette, and highlight reflection"
    ],
    certificateInfo: {
      title: "Certified Automotive Concept Exterior Modeler",
      accreditedBy: "Federation of International Automotive Designers",
      credentialId: "BC-CERT-2026-AUTO502",
      verificationUrl: "verify.borcelle.edu/cert/auto502"
    },
    syllabus: [
      {
        number: "01",
        title: "Vehicle Package & Digital Tape Drawing Setup",
        duration: "3.5 hrs",
        lessonsCount: 4,
        status: "Available",
        summary: "Placing vehicle hardpoints: engine bay, battery pack, driver H-point, and wheel arches.",
        topics: ["Digital tape drawing in 3D space", "Wheel-to-body proportion rules", "Greenhouse tumblehome and rear taper"],
        downloadableFile: "EV_Platform_Chassis_Template.step"
      },
      {
        number: "02",
        title: "The Shoulder Bone: Primary Feature Line Construction",
        duration: "4.8 hrs",
        lessonsCount: 5,
        status: "Available",
        summary: "Constructing the primary dynamic character crease that runs from front fender to rear taillight.",
        topics: ["Single span curve control points", "Visual acceleration and tension", "Matching side reflection horizons"],
        downloadableFile: "Shoulder_Curve_Exercise.3dm"
      },
      {
        number: "03",
        title: "Wheel Arch Flares & Aerodynamic Side Skirts",
        duration: "5.2 hrs",
        lessonsCount: 5,
        status: "Available",
        summary: "Transitioning wide track muscular fender flares into the side door surfacing.",
        topics: ["Tangency vs curvature fillets", "Flange return angles", "Underbody air curtain vents"],
        downloadableFile: "Fender_Flare_Transitions.step"
      }
    ],
    reviews: [
      {
        author: "Maximilian Weber",
        role: "Digital Sculptor @ Audi Sport",
        rating: 5,
        date: "1 month ago",
        comment: "Jean-Paul teaches the subtle art of highlight control that you simply cannot learn from generic YouTube tutorials. Outstanding course."
      }
    ]
  },
  {
    id: "gdt-201",
    code: "GDT-201",
    title: "ISO & ASME Geometric Dimensioning and Tolerancing (GD&T)",
    tagline: "Eliminate manufacturing ambiguities, master datum reference frames, and ensure flawless assembly fits.",
    category: "Industrial Design",
    level: "Intermediate (Level 3)",
    duration: "4 Weeks • 24 Hours",
    schedule: "Self-Paced with Practical Exercises",
    modulesCount: 8,
    completedModules: 0,
    progress: 0,
    isEnrolled: false,
    rating: 4.82,
    reviewsCount: 310,
    enrolledStudents: 1100,
    software: "SolidWorks & Fusion 360",
    color: "#059669",
    bgGradient: "from-teal-600 to-emerald-800",
    instructor: {
      name: "Dr. Aris Thorne",
      title: "Lead Industrial Hardware Architect • ASME Certified Senior Professional",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
      bio: "Senior dimensional engineer consulting with high-precision aerospace and medical device manufacturers globally."
    },
    description: "Standard plus-minus tolerancing causes expensive scrap and assembly mismatches. This course equips you with complete fluency in the ASME Y14.5-2018 and ISO 1101 standards, explaining MMC (Maximum Material Condition), True Position, Profile of a Surface, and Datum targets.",
    learningOutcomes: [
      "Read and draft ASME Y14.5 and ISO 1101 Feature Control Frames with confidence",
      "Establish primary, secondary, and tertiary datum reference systems (3-2-1 rule)",
      "Calculate bonus tolerance using Maximum Material Condition (MMC) / LMC modifiers",
      "Apply Profile of a Surface tolerances to organic, curved aesthetic enclosures",
      "Perform 1D and 2D tolerance stackup analyses for mass production assemblies"
    ],
    softwareProvided: [
      { name: "BORCELLE Tolerance Stackup Calculator", type: "Excel & Python Tools" },
      { name: "SolidWorks MBD (Model Based Definition)", type: "3D Annotation Module" }
    ],
    prerequisites: [
      "Basic mechanical drafting knowledge",
      "Understanding of imperial/metric dimensions"
    ],
    certificateInfo: {
      title: "Certified GD&T Drafting Specialist (ASME Y14.5 Compliant)",
      accreditedBy: "ASME Professional Development Affiliate",
      credentialId: "BC-CERT-2026-GDT201",
      verificationUrl: "verify.borcelle.edu/cert/gdt201"
    },
    syllabus: [
      {
        number: "01",
        title: "Why Plus/Minus Tolerancing Fails: The True Position Revolution",
        duration: "2.5 hrs",
        lessonsCount: 3,
        status: "Available",
        summary: "Square vs cylindrical tolerance zones, 57% increase in allowable tolerance with true position.",
        topics: ["Coordinate tolerancing limitations", "Cylindrical tolerance zones", "Basic dimensions (boxed dims)"],
        downloadableFile: "TruePosition_Visualizer.xlsx"
      },
      {
        number: "02",
        title: "The 3-2-1 Datum Reference Frame (DRF)",
        duration: "3.2 hrs",
        lessonsCount: 4,
        status: "Available",
        summary: "Constraining 6 degrees of freedom mathematically with physical datum simulators.",
        topics: ["Primary datum 3 points", "Secondary datum 2 points", "Tertiary datum 1 point", "Datum targets on curved parts"],
        downloadableFile: "Datum_Simulator_Rig.step"
      },
      {
        number: "03",
        title: "Material Condition Modifiers: MMC, LMC & RFS",
        duration: "4.0 hrs",
        lessonsCount: 5,
        status: "Available",
        summary: "Leveraging bonus tolerance to lower manufacturing scrap and design effective GO/NO-GO pin gages.",
        topics: ["Bonus tolerance calculations", "Zero tolerance at MMC", "Virtual condition boundary for pin gages"],
        downloadableFile: "BonusTolerance_Calculator.xlsx"
      }
    ],
    reviews: [
      {
        author: "Kareem Hassan",
        role: "Quality Engineering Lead",
        rating: 5,
        date: "1 month ago",
        comment: "The most clear explanation of datums and bonus tolerance I have ever seen. Required training for all our mechanical interns."
      }
    ]
  }
];

export const projectModules = [
  {
    id: "proj-1",
    name: "Titanium Drone Airframe v4",
    category: "Aerospace Robotics",
    software: "Rhino 8 + Grasshopper",
    status: "In Progress",
    statusCode: "in-progress",
    progress: 74,
    dueDate: "Nov 04, 2026",
    meshComplexity: "184k Triangles",
    instructor: "Prof. Marcus Vance",
    courseCode: "CAD-402",
    thumbType: "drone",
    color: "#2563eb",
  },
  {
    id: "proj-2",
    name: "Ergonomic Haptic Controller",
    category: "Consumer Hardware",
    software: "Fusion 360",
    status: "Needs Revision",
    statusCode: "needs-revision",
    progress: 58,
    dueDate: "Oct 31, 2026",
    meshComplexity: "92k Triangles",
    instructor: "Dr. Aris Thorne",
    courseCode: "ID-309",
    thumbType: "controller",
    color: "#f59e0b",
  },
  {
    id: "proj-3",
    name: "Parametric Watch Bezel & Casing",
    category: "Luxury Horology",
    software: "SolidWorks",
    status: "In Progress",
    statusCode: "in-progress",
    progress: 89,
    dueDate: "Nov 12, 2026",
    meshComplexity: "310k Triangles",
    instructor: "Elena Rostova",
    courseCode: "GEN-501",
    thumbType: "watch",
    color: "#10b981",
  },
  {
    id: "proj-4",
    name: "Hypercar Venturi Diffuser",
    category: "Automotive Aerodynamics",
    software: "Blender 4.2 + CFD",
    status: "Completed",
    statusCode: "completed",
    progress: 100,
    dueDate: "Oct 18, 2026",
    meshComplexity: "450k Triangles",
    instructor: "Prof. Marcus Vance",
    courseCode: "CAD-402",
    thumbType: "diffuser",
    color: "#3b82f6",
  },
  {
    id: "proj-5",
    name: "Bionic Exoskeleton Hinge Joint",
    category: "Biomedical Prosthetics",
    software: "Rhino 8",
    status: "In Progress",
    statusCode: "in-progress",
    progress: 42,
    dueDate: "Nov 20, 2026",
    meshComplexity: "128k Triangles",
    instructor: "Dr. Aris Thorne",
    courseCode: "BIO-405",
    thumbType: "bionic",
    color: "#8b5cf6",
  },
  {
    id: "proj-6",
    name: "Kinetic Luminaire Pendant",
    category: "Architectural Lighting",
    software: "Fusion 360",
    status: "Completed",
    statusCode: "completed",
    progress: 100,
    dueDate: "Sep 28, 2026",
    meshComplexity: "75k Triangles",
    instructor: "Elena Rostova",
    courseCode: "ID-309",
    thumbType: "luminaire",
    color: "#10b981",
  },
];

export const learningOutcomesData = [
  { name: "Projects Completed", value: 45, color: "#2563eb", count: "9 Modules" },
  { name: "In Progress", value: 35, color: "#10b981", count: "7 Modules" },
  { name: "Pending Review", value: 20, color: "#f59e0b", count: "4 Critiques" },
];

export const performanceHistory = [
  { day: "Mon", score: 68, hours: 3.5, accuracy: 88 },
  { day: "Tue", score: 74, hours: 4.2, accuracy: 91 },
  { day: "Wed", score: 82, hours: 5.0, accuracy: 94 },
  { day: "Thu", score: 79, hours: 3.8, accuracy: 90 },
  { day: "Fri", score: 88, hours: 5.5, accuracy: 96 },
  { day: "Sat", score: 94, hours: 6.2, accuracy: 98 },
  { day: "Sun", score: 96, hours: 4.8, accuracy: 97 },
];

export const topSkills = [
  {
    name: "3D Parametric Modeling",
    software: "Rhino 8 / Grasshopper",
    progress: 92,
    rating: "Expert (Lvl 5)",
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "CAD Tolerancing & Drafting",
    software: "Fusion 360 & GD&T",
    progress: 85,
    rating: "Advanced (Lvl 4)",
    color: "from-emerald-500 to-teal-600",
  },
  {
    name: "SubD Surface Texturing",
    software: "Blender & Substance",
    progress: 74,
    rating: "Proficient (Lvl 3)",
    color: "from-amber-500 to-orange-600",
  },
  {
    name: "Generative Lattice Optimization",
    software: "nTopology / CAD API",
    progress: 68,
    rating: "Intermediate (Lvl 3)",
    color: "from-purple-500 to-violet-600",
  },
];

export const recentActivities = [
  {
    id: "act-1",
    title: "Feedback received on 3D mesh",
    description: "Prof. Vance approved the fillet radii and curvature continuity on Drone Airframe v4.",
    time: "15 min ago",
    badge: "Critique Approved",
    type: "feedback",
    icon: "CheckCircle2",
    badgeColor: "emerald",
  },
  {
    id: "act-2",
    title: "New downloadable brief available",
    description: "CAD Pack: Aerodynamic Surface Fairing (STEP + Parasolid .x_t format).",
    time: "2 hours ago",
    badge: "Brief Ready",
    type: "download",
    icon: "FileDown",
    badgeColor: "blue",
  },
  {
    id: "act-3",
    title: "Revision requested by Dr. Aris",
    description: "Please inspect haptic button draft angle (< 1.5° detected near thumb rest).",
    time: "5 hours ago",
    badge: "Action Required",
    type: "revision",
    icon: "AlertCircle",
    badgeColor: "amber",
  },
  {
    id: "act-4",
    title: "Generative Lattice Sandbox passed",
    description: "Structural stress FEA simulation converged with factor of safety 2.4.",
    time: "Yesterday, 4:20 PM",
    badge: "Simulation Pass",
    type: "sandbox",
    icon: "Cpu",
    badgeColor: "purple",
  },
  {
    id: "act-5",
    title: "Community Spotlight nomination",
    description: "Your Titanium Drone chassis was upvoted to the weekly BORCELLE Hall of Fame.",
    time: "2 days ago",
    badge: "Spotlight",
    type: "community",
    icon: "Sparkles",
    badgeColor: "blue",
  },
];

export const notificationsList = [
  {
    id: "notif-1",
    title: "Critique Scheduled",
    message: "1-on-1 Mesh Review with Dr. Aris Thorne in 45 minutes.",
    time: "12m ago",
    unread: true,
  },
  {
    id: "notif-2",
    title: "Cloud Render Complete",
    message: "4K Photorealistic Turntable for Watch Bezel finished rendering.",
    time: "1h ago",
    unread: true,
  },
  {
    id: "notif-3",
    title: "New Module Released",
    message: "Module 15: Parametric Class-A Surfacing is now unlocked.",
    time: "4h ago",
    unread: false,
  },
];
