import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopHeader } from './components/TopHeader';
import { GreetingAndKPIs } from './components/GreetingAndKPIs';
import { CentralColumn } from './components/CentralColumn';
import { RightColumn } from './components/RightColumn';
import { CoursesHub } from './components/CoursesHub';
import { CourseDetailsModal } from './components/CourseDetailsModal';
import { 
  ProjectInspectorModal, 
  UploadCapstoneModal, 
  RequestCritiqueModal, 
  UpgradeProModal 
} from './components/Modals';
import { projectModules, studentProfile, coursesData } from './data/mockData';
import { 
  CheckCircle, 
  Sparkles, 
  Box, 
  FileCode, 
  Layers, 
  BookOpen, 
  Users, 
  MessageSquareCode,
  FolderGit2
} from 'lucide-react';

export function App() {
  const [currentTab, setCurrentTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Modals state
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [isCritiqueOpen, setIsCritiqueOpen] = useState(false);
  const [isUpgradeOpen, setIsUpgradeOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Keyboard shortcut ⌘K / Ctrl+K for search focus
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.querySelector('input[type="text"]');
        if (searchInput) searchInput.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleResumeProject = () => {
    // Open the first active project or current active project
    const activeProj = projectModules.find(p => p.statusCode === 'in-progress') || projectModules[0];
    setSelectedProject(activeProj);
  };

  const handleLaunchStudio = (project) => {
    triggerToast(`🚀 Initializing GPU Sandbox for ${project.name}...`);
  };

  const handleEnrollCourse = (course) => {
    course.isEnrolled = true;
    course.progress = 5;
    triggerToast(`🎉 Enrolled in ${course.title}! 24/7 Cloud GPU sandbox unlocked.`);
  };

  const handleResumeCourse = (course) => {
    triggerToast(`▶ Launching interactive studio for ${course.code}: ${course.title}...`);
  };

  const handleDownloadSyllabus = (course) => {
    const targetCourse = course || selectedCourse;
    triggerToast(`📄 Downloading accredited ${targetCourse?.code || 'BORCELLE'} Syllabus (.PDF) & STEP starter package...`);
  };

  const handleOpenCourseByCode = (code) => {
    const matched = coursesData.find(c => c.code.toLowerCase() === code.toLowerCase() || c.id.toLowerCase() === code.toLowerCase());
    if (matched) {
      setSelectedCourse(matched);
    } else {
      setCurrentTab('courses');
    }
  };

  return (
    <div className="min-h-screen bg-[#e6edf3] text-[#1e293b] font-sans antialiased flex flex-col lg:flex-row">
      {/* 1. Left Sidebar */}
      <Sidebar 
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        onOpenUpgrade={() => setIsUpgradeOpen(true)}
      />

      {/* Main Content Layout Container */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen">
        
        {/* 2. Top Header */}
        <TopHeader 
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          onResumeProject={handleResumeProject}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onOpenHelp={() => triggerToast("📘 BORCELLE CAD Reference Guide & API documentation opened.")}
          onSelectCourse={(course) => setSelectedCourse(course)}
        />

        {/* Content Body */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-[1600px] w-full mx-auto">
          {currentTab === 'dashboard' && (
            <>
              {/* 3. Greeting & KPI Cards */}
              <GreetingAndKPIs 
                onFilterProjectsByKpi={(kpiId) => {
                  triggerToast(`Filtered dashboard view for ${kpiId}`);
                }}
                onOpenCourseHub={() => setCurrentTab('courses')}
              />

              {/* Central Column & Right Column Split */}
              <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
                {/* 4. Main Content Area (Central Column) - 8 cols on large screens */}
                <div className="xl:col-span-8 space-y-8">
                  <CentralColumn 
                    onSelectProject={(proj) => setSelectedProject(proj)}
                    searchQuery={searchQuery}
                    onOpenCourseByCode={handleOpenCourseByCode}
                  />
                </div>

                {/* 5. Right Column (Widgets) - 4 cols on large screens */}
                <div className="xl:col-span-4 space-y-6">
                  <RightColumn 
                    onExploreCourses={() => setCurrentTab('courses')}
                    onUploadCapstone={() => setIsUploadOpen(true)}
                    onViewSandboxes={() => triggerToast("🖥️ Connecting to NVIDIA RTX A6000 Cloud CAD Instance...")}
                    onRequestCritique={() => setIsCritiqueOpen(true)}
                    onDownloadBriefs={() => triggerToast("📥 Downloading BORCELLE Semester 2 STEP Design Pack (.zip)...")}
                  />
                </div>
              </div>
            </>
          )}

          {/* 6. Courses Tab: Full Course Catalog & Info Explorer */}
          {currentTab === 'courses' && (
            <CoursesHub
              onSelectCourse={(course) => setSelectedCourse(course)}
              onBackToDashboard={() => setCurrentTab('dashboard')}
              onEnrollCourse={handleEnrollCourse}
              onResumeCourse={handleResumeCourse}
            />
          )}

          {/* Secondary Tab: Capstone Projects */}
          {currentTab === 'projects' && (
            <div className="space-y-6">
              <div className="p-6 rounded-neu-card neu-flat bg-[#e6edf3] flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-extrabold text-slate-900">Capstone Projects Studio</h2>
                  <p className="text-xs text-slate-500 mt-1">Final portfolio deliverables for BORCELLE Academic Accreditation</p>
                </div>
                <button
                  onClick={() => setIsUploadOpen(true)}
                  className="px-4 py-2 rounded-neu-pill bg-blue-600 text-white font-bold text-xs shadow-neu-btn-primary hover:bg-blue-700"
                >
                  + Upload New Mesh
                </button>
              </div>
              <CentralColumn 
                onSelectProject={(proj) => setSelectedProject(proj)}
                searchQuery=""
                onOpenCourseByCode={handleOpenCourseByCode}
              />
            </div>
          )}

          {/* Secondary Tab: Mentor Feedback */}
          {currentTab === 'feedback' && (
            <div className="p-6 rounded-neu-card neu-flat bg-[#e6edf3] border border-white/60 space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-slate-300/60">
                <div>
                  <h2 className="text-2xl font-extrabold text-slate-900">Faculty Critiques & Feedback</h2>
                  <p className="text-xs text-slate-500 mt-1">Direct annotations on your NURBS surfaces and mesh topologies</p>
                </div>
                <button
                  onClick={() => setIsCritiqueOpen(true)}
                  className="px-4 py-2 rounded-neu-pill bg-emerald-600 text-white font-bold text-xs shadow-md hover:bg-emerald-700"
                >
                  Request New Review
                </button>
              </div>

              <div className="space-y-4">
                {[
                  {
                    faculty: "Dr. Aris Thorne",
                    project: "Titanium Drone Airframe v4",
                    rating: "9.4 / 10",
                    comment: "Exceptional fillet continuity on the forward motor spars. You successfully maintained G2 curvature without pinches. Recommended for capstone showcase.",
                    date: "Today, 10:14 AM",
                    tags: ["Curvature Combs", "Tolerancing Pass"],
                  },
                  {
                    faculty: "Prof. Marcus Vance",
                    project: "Ergonomic Haptic Controller",
                    rating: "7.8 / 10",
                    comment: "The palm grip feels natural, but the trigger housing draft angle is currently 1.2°. Injection molding requires at least 1.8° to prevent ejector pin blemishes. Please taper the rear wall.",
                    date: "Oct 26, 2026",
                    tags: ["Draft Angle", "Revision Needed"],
                  },
                ].map((item, idx) => (
                  <div key={idx} className="p-5 rounded-2xl neu-flat bg-[#e6edf3] border border-white/60 space-y-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-bold text-sm text-slate-900">{item.faculty}</span>
                        <span className="text-xs text-blue-600 ml-2 font-medium">on {item.project}</span>
                      </div>
                      <span className="px-3 py-1 rounded-neu-pill neu-inset-sm font-extrabold text-xs text-emerald-700">
                        Score: {item.rating}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed bg-[#e6edf3] p-3 rounded-xl neu-inset-sm">
                      "{item.comment}"
                    </p>
                    <div className="flex justify-between items-center text-xs text-slate-400">
                      <div className="flex gap-2">
                        {item.tags.map(t => (
                          <span key={t} className="px-2 py-0.5 rounded-md neu-flat text-[10px] text-slate-600 font-semibold">
                            {t}
                          </span>
                        ))}
                      </div>
                      <span>{item.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Secondary Tab: Community */}
          {currentTab === 'community' && (
            <div className="p-6 rounded-neu-card neu-flat bg-[#e6edf3] border border-white/60 space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-slate-300/60">
                <div>
                  <h2 className="text-2xl font-extrabold text-slate-900">BORCELLE Student Studio Collective</h2>
                  <p className="text-xs text-slate-500 mt-1">Share WIP renders, collaborate on capstone assemblies, and get peer feedback</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-slate-600">42 Peers Online</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "EV Superbike Swingarm",
                    author: "Liam K. (Senior)",
                    software: "Fusion 360",
                    likes: 128,
                    comments: 24,
                  },
                  {
                    title: "Parametric Acoustic Diffuser",
                    author: "Zhen W. (Fellow)",
                    software: "Grasshopper",
                    likes: 94,
                    comments: 16,
                  },
                  {
                    title: "Titanium Orthopedic Knee Joint",
                    author: "Om",
                    software: "Rhino 8",
                    likes: 184,
                    comments: 38,
                  },
                ].map((post, i) => (
                  <div key={i} className="p-5 rounded-2xl neu-flat hover:neu-raised-card bg-[#e6edf3] border border-white/60 space-y-3">
                    <div className="h-32 rounded-xl neu-inset bg-slate-900 flex items-center justify-center text-slate-500 text-xs font-mono relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center opacity-30">
                        <Box className="w-16 h-16 text-blue-400 animate-pulse" />
                      </div>
                      <span className="z-10 bg-slate-950/80 px-2 py-1 rounded text-blue-300 text-[10px] font-bold">
                        Interactive 3D Turntable
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">{post.title}</h4>
                      <p className="text-xs text-slate-500">By {post.author} • {post.software}</p>
                    </div>
                    <div className="flex justify-between items-center text-xs text-slate-500 pt-2 border-t border-slate-300/40">
                      <span>❤️ {post.likes}</span>
                      <span>💬 {post.comments} comments</span>
                      <button 
                        onClick={() => triggerToast(`Opened peer critique thread for ${post.title}`)}
                        className="text-blue-600 font-bold hover:underline"
                      >
                        Inspect →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Interactive Modals */}
      <ProjectInspectorModal 
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onLaunchStudio={handleLaunchStudio}
      />

      {/* Comprehensive Course Details & Syllabus Inspector Modal */}
      <CourseDetailsModal 
        course={selectedCourse}
        isOpen={!!selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onEnroll={handleEnrollCourse}
        onResumeCourse={handleResumeCourse}
        onDownloadSyllabus={() => handleDownloadSyllabus(selectedCourse)}
      />

      <UploadCapstoneModal 
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
        onUploadSuccess={() => triggerToast("✅ Capstone CAD STEP model successfully uploaded to BORCELLE Cloud!")}
      />

      <RequestCritiqueModal 
        isOpen={isCritiqueOpen}
        onClose={() => setIsCritiqueOpen(false)}
        onRequestSent={() => triggerToast("📩 Faculty Critique Request sent to Dr. Aris Thorne. You will receive notes within 24h.")}
      />

      <UpgradeProModal 
        isOpen={isUpgradeOpen}
        onClose={() => setIsUpgradeOpen(false)}
      />

      {/* Floating Interactive Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 p-4 rounded-2xl neu-raised-card bg-[#e6edf3] border border-white text-xs font-bold text-slate-800 shadow-2xl animate-in slide-in-from-bottom duration-200 flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center neu-flat text-[11px]">
            ✓
          </div>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
export default App;
