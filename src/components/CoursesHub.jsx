import React, { useState } from 'react';
import {
  BookOpen,
  Search,
  Filter,
  Star,
  Users,
  Clock,
  Cpu,
  Layers,
  ChevronRight,
  Sparkles,
  Award,
  Play,
  CheckCircle2,
  FileText,
  Info,
  ShieldCheck,
  Flame,
  ArrowRight
} from 'lucide-react';
import { coursesData } from '../data/mockData';

export const CoursesHub = ({ onSelectCourse, onBackToDashboard, onEnrollCourse, onResumeCourse }) => {
  const [filterMode, setFilterMode] = useState('all'); // 'all' | 'enrolled' | 'available'
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Surface Modeling',
    'Industrial Design',
    'Generative & AI',
    'Materials & Rendering',
    'Aerospace & Automotive',
  ];

  const filteredCourses = coursesData.filter((c) => {
    const matchesFilterMode =
      filterMode === 'all' ? true :
      filterMode === 'enrolled' ? c.isEnrolled :
      filterMode === 'available' ? !c.isEnrolled : true;

    const matchesCategory =
      categoryFilter === 'All' ? true : c.category === categoryFilter;

    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      c.title.toLowerCase().includes(query) ||
      c.code.toLowerCase().includes(query) ||
      c.software.toLowerCase().includes(query) ||
      c.instructor.name.toLowerCase().includes(query) ||
      c.tagline.toLowerCase().includes(query);

    return matchesFilterMode && matchesCategory && matchesSearch;
  });

  const enrolledCount = coursesData.filter(c => c.isEnrolled).length;
  const availableCount = coursesData.filter(c => !c.isEnrolled).length;

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      
      {/* Top Banner & Title */}
      <div className="p-6 sm:p-8 rounded-3xl neu-flat bg-[#e6edf3] border border-white/60 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-3 py-1 rounded-full neu-inset-sm text-xs font-bold text-blue-600 bg-[#e6edf3] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                BORCELLE Studio Academy
              </span>
              <span className="text-xs text-slate-400 font-medium">• 2026 Curriculum</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
              Course Catalog & Curriculum Explorer
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1 max-w-3xl">
              Inspect in-depth syllabi, learning outcomes, software packages, and faculty credentials for all accredited industrial CAD and parametric engineering tracks.
            </p>
          </div>

          <button
            onClick={onBackToDashboard}
            className="px-4 py-2.5 rounded-neu-pill neu-btn-interactive text-xs font-bold text-blue-600 hover:text-blue-800 self-start md:self-auto shrink-0 flex items-center gap-1.5"
          >
            <span>← Back to Dashboard</span>
          </button>
        </div>

        {/* Global Academy Stats Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2">
          <div className="p-3.5 rounded-2xl neu-inset-sm bg-[#e6edf3]">
            <span className="text-[10px] font-bold uppercase text-slate-400 block">Total Curricula</span>
            <span className="text-sm sm:text-base font-extrabold text-slate-900">8 Mastery Tracks</span>
            <span className="text-[11px] text-blue-600 font-medium block mt-0.5">340+ Studio Hours</span>
          </div>

          <div className="p-3.5 rounded-2xl neu-inset-sm bg-[#e6edf3]">
            <span className="text-[10px] font-bold uppercase text-slate-400 block">Your Enrolled Progress</span>
            <span className="text-sm sm:text-base font-extrabold text-slate-900">4 Active Tracks</span>
            <span className="text-[11px] text-emerald-600 font-medium block mt-0.5">78.4% Average</span>
          </div>

          <div className="p-3.5 rounded-2xl neu-inset-sm bg-[#e6edf3]">
            <span className="text-[10px] font-bold uppercase text-slate-400 block">Cloud GPU Compute</span>
            <span className="text-sm sm:text-base font-extrabold text-slate-900">NVIDIA RTX A6000</span>
            <span className="text-[11px] text-purple-600 font-medium block mt-0.5">Unlimited Sandboxes</span>
          </div>

          <div className="p-3.5 rounded-2xl neu-inset-sm bg-[#e6edf3]">
            <span className="text-[10px] font-bold uppercase text-slate-400 block">Accreditation</span>
            <span className="text-sm sm:text-base font-extrabold text-slate-900">ASME & Guild Seal</span>
            <span className="text-[11px] text-amber-600 font-medium block mt-0.5">Verifiable Credentials</span>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="space-y-4 pt-3 border-t border-slate-300/50">
          
          {/* Top Row: Search input + View Mode switcher */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* View Mode Pills */}
            <div className="flex items-center p-1 rounded-neu-pill neu-inset-sm bg-[#e6edf3] self-stretch sm:self-auto overflow-x-auto">
              <button
                onClick={() => setFilterMode('all')}
                className={`px-4 py-2 rounded-neu-pill text-xs font-bold transition-all whitespace-nowrap ${
                  filterMode === 'all'
                    ? 'neu-flat bg-[#e6edf3] text-blue-600 shadow-sm'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                All Courses ({coursesData.length})
              </button>
              <button
                onClick={() => setFilterMode('enrolled')}
                className={`px-4 py-2 rounded-neu-pill text-xs font-bold transition-all whitespace-nowrap ${
                  filterMode === 'enrolled'
                    ? 'neu-flat bg-[#e6edf3] text-blue-600 shadow-sm'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                My Enrolled Tracks ({enrolledCount})
              </button>
              <button
                onClick={() => setFilterMode('available')}
                className={`px-4 py-2 rounded-neu-pill text-xs font-bold transition-all whitespace-nowrap ${
                  filterMode === 'available'
                    ? 'neu-flat bg-[#e6edf3] text-blue-600 shadow-sm'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Explore New Courses ({availableCount})
              </button>
            </div>

            {/* Course Search Bar */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title, code, software, or instructor..."
                className="w-full pl-10 pr-4 py-2 rounded-full neu-inset bg-[#e6edf3] text-slate-800 placeholder-slate-400 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/40"
              />
            </div>
          </div>

          {/* Bottom Row: Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 shrink-0 mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3" />
              Discipline:
            </span>
            {categories.map((cat) => {
              const isSelected = categoryFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setCategoryFilter(cat)}
                  className={`
                    px-3 py-1 rounded-neu-pill text-xs font-semibold whitespace-nowrap transition-all
                    ${isSelected
                      ? 'neu-pill-active text-blue-600 font-bold'
                      : 'text-slate-600 hover:text-slate-900 neu-btn-interactive'
                    }
                  `}
                >
                  {cat}
                </button>
              );
            })}
          </div>

        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCourses.length === 0 ? (
          <div className="col-span-full p-12 text-center neu-inset-sm rounded-3xl bg-[#e6edf3]">
            <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800">No courses match your criteria</h3>
            <p className="text-xs text-slate-500 mt-1">Try resetting the discipline filter or clearing your search term.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setCategoryFilter('All');
                setFilterMode('all');
              }}
              className="mt-4 px-4 py-2 rounded-neu-pill neu-btn-interactive text-xs font-bold text-blue-600"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredCourses.map((course) => (
            <div
              key={course.id}
              className="p-6 rounded-3xl neu-flat hover:neu-raised-card bg-[#e6edf3] border border-white/60 transition-all duration-200 flex flex-col justify-between group space-y-5"
            >
              {/* Card Header */}
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full neu-inset-sm text-xs font-bold text-blue-600 bg-[#e6edf3]">
                      {course.code}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full neu-flat text-[10px] font-semibold text-slate-600">
                      {course.level}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full neu-flat text-[10px] font-semibold text-slate-600">
                      {course.category}
                    </span>
                  </div>

                  {course.isEnrolled ? (
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold border border-emerald-300/50 flex items-center gap-1 shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Enrolled
                    </span>
                  ) : (
                    <span className="px-2.5 py-0.5 rounded-full neu-inset-sm text-blue-600 text-[10px] font-bold shrink-0">
                      Available to Enroll
                    </span>
                  )}
                </div>

                {/* Course Title & Tagline */}
                <div>
                  <h3 
                    onClick={() => onSelectCourse(course)}
                    className="font-extrabold text-lg text-slate-900 group-hover:text-blue-600 transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <span>{course.title}</span>
                    <ChevronRight className="w-4 h-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed line-clamp-2">
                    {course.tagline}
                  </p>
                </div>

                {/* Software Stack & Duration Pill */}
                <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                  <span className="px-2.5 py-1 rounded-neu-pill neu-inset-sm text-[11px] font-semibold text-slate-700 bg-[#e6edf3]">
                    💻 {course.software}
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-500 text-[11px]">{course.duration}</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-500 text-[11px] flex items-center gap-1">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <strong>{course.rating}</strong> ({course.reviewsCount})
                  </span>
                </div>
              </div>

              {/* Progress Bar (if enrolled) OR Quick Learning Outcomes (if not enrolled) */}
              {course.isEnrolled ? (
                <div className="space-y-1.5 pt-2 border-t border-slate-300/40">
                  <div className="flex justify-between items-center text-[11px] font-bold text-slate-600">
                    <span>Curriculum Progress ({course.completedModules} / {course.modulesCount} modules)</span>
                    <span className="text-blue-600 font-extrabold">{course.progress}%</span>
                  </div>
                  <div className="h-2.5 w-full rounded-full neu-inset-sm bg-[#e6edf3] p-[2px] overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${course.bgGradient || 'from-blue-600 to-indigo-600'}`}
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-1.5 pt-2 border-t border-slate-300/40 text-xs">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Core Technical Competencies
                  </span>
                  <div className="space-y-1">
                    {course.learningOutcomes.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                        <span className="text-emerald-500 font-bold shrink-0 mt-0.5">✓</span>
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Instructor & Actions Footer */}
              <div className="pt-3 border-t border-slate-300/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <img
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                    className="w-8 h-8 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                  <div>
                    <span className="font-bold text-xs text-slate-800 block leading-tight">{course.instructor.name}</span>
                    <span className="text-[10px] text-slate-400 block truncate max-w-[170px]">{course.instructor.title}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-auto">
                  {/* Detailed Course Info Button (Primary Goal) */}
                  <button
                    onClick={() => onSelectCourse(course)}
                    className="px-3.5 py-2 rounded-neu-pill neu-btn-interactive text-xs font-bold text-blue-700 bg-white/70 hover:bg-white flex items-center gap-1.5 shadow-sm"
                    title="Check full syllabus, prerequisites, and curriculum info"
                  >
                    <Info className="w-3.5 h-3.5 text-blue-600" />
                    <span>Check Course Info</span>
                  </button>

                  {/* Secondary Action */}
                  {course.isEnrolled ? (
                    <button
                      onClick={() => onResumeCourse(course)}
                      className="px-3.5 py-2 rounded-neu-pill bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs shadow-neu-btn-primary hover:from-blue-700 hover:to-indigo-700 flex items-center gap-1"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>Studio</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => onEnrollCourse(course)}
                      className="px-3.5 py-2 rounded-neu-pill bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs shadow-md hover:from-emerald-700 hover:to-teal-700 flex items-center gap-1"
                    >
                      <Sparkles className="w-3 h-3" />
                      <span>Enroll</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

    </div>
  );
};
