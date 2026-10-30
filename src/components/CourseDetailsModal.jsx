import React, { useState } from 'react';
import {
  X,
  BookOpen,
  Award,
  Clock,
  Users,
  Star,
  CheckCircle2,
  FileDown,
  Play,
  Layers,
  Cpu,
  ShieldCheck,
  ChevronRight,
  ChevronDown,
  Sparkles,
  ExternalLink,
  Lock,
  Calendar,
  MessageSquare,
  Compass,
  ArrowRight
} from 'lucide-react';

export const CourseDetailsModal = ({ course, isOpen, onClose, onEnroll, onResumeCourse, onDownloadSyllabus }) => {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'syllabus' | 'faculty' | 'reviews'
  const [expandedModule, setExpandedModule] = useState(0);

  if (!isOpen || !course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/50 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-4xl max-h-[92vh] rounded-3xl neu-raised-card bg-[#e6edf3] border border-white/80 shadow-2xl flex flex-col overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Gradient Bar */}
        <div className={`h-2.5 w-full bg-gradient-to-r ${course.bgGradient || 'from-blue-600 to-indigo-600'}`} />

        {/* Modal Header */}
        <div className="p-5 sm:p-6 pb-4 border-b border-slate-300/60 bg-[#e6edf3]">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1.5 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-0.5 rounded-neu-pill neu-inset-sm font-bold text-xs text-blue-600 bg-[#e6edf3]">
                  {course.code}
                </span>
                <span className="px-2.5 py-0.5 rounded-neu-pill neu-flat text-[11px] font-semibold text-slate-600">
                  {course.category}
                </span>
                <span className="px-2.5 py-0.5 rounded-neu-pill neu-flat text-[11px] font-semibold text-slate-600">
                  {course.level}
                </span>
                {course.isEnrolled && (
                  <span className="px-2.5 py-0.5 rounded-neu-pill bg-emerald-100 text-emerald-800 text-[11px] font-bold border border-emerald-300/60 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Enrolled ({course.progress}%)
                  </span>
                )}
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0f172a] tracking-tight leading-snug">
                {course.title}
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                {course.tagline}
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full neu-btn-interactive flex items-center justify-center text-slate-500 hover:text-slate-800 shrink-0"
              title="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Key Course Quick Stats Pill Strip */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-4 pt-3 border-t border-slate-300/40 text-xs text-slate-600">
            <div className="flex items-center gap-1.5 font-semibold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-bold text-slate-800">{course.rating}</span>
              <span className="text-slate-400">({course.reviewsCount} reviews)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-blue-600" />
              <span><strong>{course.enrolledStudents.toLocaleString()}</strong> students</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-purple-600" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-emerald-600" />
              <span><strong>{course.modulesCount}</strong> Structured Modules</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-indigo-600" />
              <span className="font-semibold text-slate-800">{course.software}</span>
            </div>
          </div>
        </div>

        {/* Modal Navigation Tabs (Neumorphic) */}
        <div className="px-5 sm:px-6 pt-3 pb-2 bg-[#e6edf3] border-b border-slate-300/50 flex gap-2 overflow-x-auto">
          {[
            { id: 'overview', label: 'Course Overview' },
            { id: 'syllabus', label: `Curriculum & Modules (${course.syllabus ? course.syllabus.length : course.modulesCount})` },
            { id: 'faculty', label: 'Faculty & Mentors' },
            { id: 'reviews', label: 'Certification & Reviews' },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  px-4 py-2 rounded-neu-pill text-xs font-bold transition-all whitespace-nowrap
                  ${isActive 
                    ? 'neu-pill-active text-blue-600 font-extrabold shadow-sm' 
                    : 'text-slate-600 hover:text-slate-900 neu-btn-interactive'
                  }
                `}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Active Progress Bar if enrolled */}
              {course.isEnrolled && (
                <div className="p-4 rounded-2xl neu-flat bg-[#e6edf3] border border-white/60">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-1.5">
                    <span className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                      Your Learning Progress
                    </span>
                    <span className="text-blue-600 font-extrabold">{course.progress}% Completed ({course.completedModules} of {course.modulesCount} modules)</span>
                  </div>
                  <div className="h-3 w-full rounded-full neu-inset-sm bg-[#e6edf3] p-[2px] overflow-hidden">
                    <div 
                      className={`h-full rounded-full bg-gradient-to-r ${course.bgGradient || 'from-blue-600 to-indigo-600'} transition-all duration-700`}
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Course Deep-dive Description */}
              <div className="p-5 rounded-2xl neu-flat bg-[#e6edf3] border border-white/50 space-y-3">
                <h3 className="font-extrabold text-sm sm:text-base text-slate-900 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                  About This Course
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {course.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs text-slate-500 font-medium">Schedule:</span>
                  <span className="text-xs font-bold text-slate-700">{course.schedule}</span>
                </div>
              </div>

              {/* What You Will Learn (Learning Outcomes) */}
              <div className="p-5 rounded-2xl neu-flat bg-[#e6edf3] border border-white/50 space-y-3">
                <h3 className="font-extrabold text-sm sm:text-base text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  What You Will Learn & Technical Outcomes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                  {course.learningOutcomes.map((outcome, idx) => (
                    <div key={idx} className="p-3 rounded-xl neu-inset-sm bg-[#e6edf3] flex items-start gap-2.5">
                      <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                        ✓
                      </span>
                      <span className="text-xs text-slate-700 leading-relaxed font-medium">
                        {outcome}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & Cloud GPU Included */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-5 rounded-2xl neu-flat bg-[#e6edf3] border border-white/50 space-y-3">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500 flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5 text-purple-600" />
                    Software & Compute Environments Provided
                  </h4>
                  <div className="space-y-2">
                    {course.softwareProvided.map((sw, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl neu-inset-sm bg-[#e6edf3] flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-800">{sw.name}</span>
                        <span className="text-[11px] text-blue-600 font-semibold px-2 py-0.5 rounded-md neu-flat bg-[#e6edf3]">
                          {sw.type}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-5 rounded-2xl neu-flat bg-[#e6edf3] border border-white/50 space-y-3">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500 flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                    Prerequisites & Background
                  </h4>
                  <div className="space-y-2">
                    {course.prerequisites.map((pre, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl neu-inset-sm bg-[#e6edf3] flex items-start gap-2 text-xs text-slate-700">
                        <span className="text-blue-500 font-bold">•</span>
                        <span>{pre}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SYLLABUS & MODULES */}
          {activeTab === 'syllabus' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2">
                <div>
                  <h3 className="font-extrabold text-base text-slate-900">Course Syllabus & Curriculum Breakdown</h3>
                  <p className="text-xs text-slate-500">Each module includes video demonstrations, cloud CAD sandboxes, and downloadable exercises.</p>
                </div>
                <button 
                  onClick={onDownloadSyllabus}
                  className="px-3 py-1.5 rounded-neu-pill neu-btn-interactive text-xs font-bold text-blue-600 flex items-center gap-1.5 shrink-0"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </button>
              </div>

              <div className="space-y-3">
                {course.syllabus.map((mod, idx) => {
                  const isExpanded = expandedModule === idx;
                  const statusColors = {
                    'Completed': 'text-emerald-700 bg-emerald-500/10 border-emerald-300/50',
                    'In Progress': 'text-blue-700 bg-blue-500/10 border-blue-300/50',
                    'Next Up': 'text-amber-700 bg-amber-500/10 border-amber-300/50',
                    'Locked': 'text-slate-500 bg-slate-300/30 border-slate-300/50',
                    'Available': 'text-blue-700 bg-blue-500/10 border-blue-300/50'
                  }[mod.status] || 'text-slate-600 bg-slate-200';

                  return (
                    <div 
                      key={mod.number}
                      className="rounded-2xl neu-flat bg-[#e6edf3] border border-white/60 overflow-hidden transition-all"
                    >
                      {/* Module Accordion Header */}
                      <button
                        onClick={() => setExpandedModule(isExpanded ? null : idx)}
                        className="w-full p-4 flex items-center justify-between text-left hover:bg-white/40 transition-colors"
                      >
                        <div className="flex items-center gap-3.5 flex-1 min-w-0">
                          <div className="w-10 h-10 rounded-xl neu-inset-sm flex items-center justify-center font-mono font-extrabold text-sm text-blue-600 shrink-0">
                            {mod.number}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <h4 className="font-bold text-xs sm:text-sm text-slate-900 truncate">
                                {mod.title}
                              </h4>
                              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${statusColors}`}>
                                {mod.status}
                              </span>
                            </div>
                            <div className="text-[11px] text-slate-500 mt-0.5 flex items-center gap-2">
                              <span>{mod.duration}</span>
                              <span>•</span>
                              <span>{mod.lessonsCount} lessons</span>
                              {mod.downloadableFile && (
                                <>
                                  <span>•</span>
                                  <span className="font-mono text-blue-600">{mod.downloadableFile}</span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="w-7 h-7 rounded-full neu-inset-sm flex items-center justify-center text-slate-500 shrink-0 ml-2">
                          {isExpanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                        </div>
                      </button>

                      {/* Accordion Content */}
                      {isExpanded && (
                        <div className="px-5 pb-5 pt-1 border-t border-slate-300/40 space-y-3 bg-white/20">
                          <p className="text-xs text-slate-600 leading-relaxed font-medium">
                            {mod.summary}
                          </p>

                          <div className="space-y-1.5">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                              Detailed Core Topics
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {mod.topics.map((t, tidx) => (
                                <div key={tidx} className="p-2 rounded-lg neu-inset-sm bg-[#e6edf3] text-[11px] text-slate-700 flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                                  <span className="truncate">{t}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {mod.downloadableFile && (
                            <div className="pt-2 flex items-center justify-between">
                              <div className="flex items-center gap-2 text-xs text-slate-600">
                                <FileDown className="w-4 h-4 text-blue-600" />
                                <span>Starter CAD Asset: <code className="font-mono font-bold text-slate-800">{mod.downloadableFile}</code></span>
                              </div>
                              <button 
                                onClick={onDownloadSyllabus}
                                className="px-3 py-1 rounded-neu-pill neu-btn-interactive text-[11px] font-bold text-blue-600"
                              >
                                Download Asset
                              </button>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 3: FACULTY & MENTORS */}
          {activeTab === 'faculty' && (
            <div className="space-y-6">
              <div className="p-6 rounded-2xl neu-flat bg-[#e6edf3] border border-white/50 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <img
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                  className="w-24 h-24 rounded-2xl object-cover border-4 border-white shadow-md shrink-0"
                />
                <div className="space-y-2 text-center sm:text-left flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-extrabold text-slate-900">{course.instructor.name}</h3>
                      <p className="text-xs font-semibold text-blue-600">{course.instructor.title}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full neu-inset-sm text-xs font-bold text-emerald-700 bg-emerald-500/10">
                      Weekly Office Hours Available
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {course.instructor.bio}
                  </p>

                  <div className="pt-3 border-t border-slate-300/40 flex flex-wrap items-center justify-between gap-3 text-xs">
                    <span className="text-slate-500">
                      Critique Style: <strong>Interactive NURBS Surface Topology & G2 Combs Annotations</strong>
                    </span>
                    <button 
                      onClick={() => alert(`1-on-1 critique request initiated with ${course.instructor.name}.`)}
                      className="px-4 py-2 rounded-neu-pill bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-all"
                    >
                      Book 1-on-1 Studio Critique
                    </button>
                  </div>
                </div>
              </div>

              {/* Mentorship Guarantee */}
              <div className="p-5 rounded-2xl neu-flat bg-gradient-to-br from-[#e6edf3] to-[#d6e3ee] border border-white/60 space-y-2">
                <h4 className="font-extrabold text-xs uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  BORCELLE Studio Mentorship Guarantee
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every enrolled student receives personalized vertex-level surface diagnostics on their capstone STEP models within 24 hours of submission.
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: REVIEWS & CERTIFICATIONS */}
          {activeTab === 'reviews' && (
            <div className="space-y-6">
              {/* Certificate Verification Badge Card */}
              <div className="p-6 rounded-3xl neu-flat bg-gradient-to-br from-[#e6edf3] via-[#e2edf8] to-[#d4e4f5] border border-white/70 relative overflow-hidden">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl neu-flat bg-white flex items-center justify-center text-blue-600 shadow-md shrink-0">
                      <Award className="w-8 h-8 text-amber-500" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600">
                        {course.certificateInfo.credentialId}
                      </span>
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                        {course.certificateInfo.title}
                      </h3>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Accredited by: <strong className="text-slate-800">{course.certificateInfo.accreditedBy}</strong>
                      </p>
                    </div>
                  </div>

                  <div className="text-center sm:text-right">
                    <span className="inline-block px-3 py-1 rounded-full neu-inset-sm text-xs font-bold text-blue-700 bg-[#e6edf3]">
                      Industry Recognized Credential
                    </span>
                  </div>
                </div>
              </div>

              {/* Verified Student Reviews */}
              <div className="space-y-3">
                <h3 className="font-extrabold text-base text-slate-900">Student Reviews & Community Feedback</h3>
                <div className="space-y-3">
                  {course.reviews.map((rev, idx) => (
                    <div key={idx} className="p-4 rounded-2xl neu-flat bg-[#e6edf3] border border-white/50 space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-bold text-xs text-slate-900">{rev.author}</span>
                          <span className="text-[11px] text-slate-500 ml-2 font-medium">({rev.role})</span>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed italic bg-white/40 p-2.5 rounded-xl border border-white/60">
                        "{rev.comment}"
                      </p>
                      <div className="text-[10px] text-slate-400 text-right">{rev.date}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer CTA Strip */}
        <div className="p-4 sm:p-5 border-t border-slate-300/60 bg-[#e6edf3] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Includes 24/7 Cloud GPU Access, STEP starter files & Accreditation.</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-neu-pill neu-btn-interactive text-xs font-bold text-slate-600 hover:text-slate-900"
            >
              Close
            </button>

            {course.isEnrolled ? (
              <button
                onClick={() => {
                  onResumeCourse(course);
                  onClose();
                }}
                className="flex items-center gap-2 px-6 py-2.5 rounded-neu-pill bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs shadow-neu-btn-primary transition-all active:scale-95"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Resume Course Studio</span>
              </button>
            ) : (
              <button
                onClick={() => {
                  onEnroll(course);
                  onClose();
                }}
                className="flex items-center gap-2 px-6 py-2.5 rounded-neu-pill bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs shadow-neu-btn-primary transition-all active:scale-95"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Enroll in Course</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
