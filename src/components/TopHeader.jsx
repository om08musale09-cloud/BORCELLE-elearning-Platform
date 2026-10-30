import React, { useState } from 'react';
import {
  Search,
  Bell,
  HelpCircle,
  Play,
  Menu,
  X,
  Command,
  CheckCircle2,
  Clock,
  Sparkles,
  BookOpen,
  ChevronRight
} from 'lucide-react';
import { notificationsList, coursesData } from '../data/mockData';

export const TopHeader = ({ 
  onToggleSidebar, 
  onResumeProject, 
  searchQuery, 
  setSearchQuery,
  onOpenHelp,
  onSelectCourse
}) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState(notificationsList);
  const unreadCount = notifications.filter(n => n.unread).length;

  const markAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, unread: false })));
  };

  const matchingCourses = searchQuery.trim().length > 0
    ? coursesData.filter(c => 
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.software.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.instructor.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <header className="sticky top-0 z-30 w-full bg-[#e6edf3]/90 backdrop-blur-md px-4 sm:px-6 py-4 border-b border-[#d8e2ed]/80 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 md:gap-6">
        
        {/* Left: Mobile Menu Trigger + Brand for small screens */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={onToggleSidebar}
            className="w-10 h-10 rounded-full flex items-center justify-center neu-btn-interactive text-slate-700 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            <Menu className="w-5 h-5" />
          </button>
          <span className="font-extrabold tracking-wider text-lg text-slate-900 font-sans block sm:hidden">
            BORCELLE
          </span>
        </div>

        {/* Center: Wide Pill-Shaped Search Bar with Inset Shadow */}
        <div className="flex-1 max-w-2xl relative">
          <div className="relative flex items-center w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search CAD tools, modules, or downloadable briefs..."
              className="w-full pl-11 pr-20 py-2.5 sm:py-3 rounded-neu-pill neu-inset bg-[#e6edf3] text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all"
            />
            
            {/* Keyboard shortcut hint / clear button */}
            <div className="absolute right-3.5 flex items-center gap-1.5 pointer-events-none">
              {searchQuery ? (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="pointer-events-auto text-xs text-slate-400 hover:text-slate-600 p-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              ) : (
                <div className="hidden sm:flex items-center gap-0.5 text-[11px] font-semibold text-slate-400 px-2 py-0.5 rounded-md neu-inset-sm bg-[#e6edf3]">
                  <Command className="w-3 h-3" />
                  <span>K</span>
                </div>
              )}
            </div>
          </div>

          {/* Quick Search Matches Dropdown */}
          {matchingCourses.length > 0 && (
            <div className="absolute left-0 right-0 top-full mt-2 rounded-2xl neu-flat bg-[#e6edf3] p-3 z-50 border border-white/70 shadow-2xl animate-in fade-in zoom-in-95 duration-150">
              <div className="flex items-center justify-between pb-2 border-b border-slate-300/40 px-2 mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <BookOpen className="w-3 h-3 text-blue-600" />
                  Matching Courses ({matchingCourses.length})
                </span>
                <span className="text-[10px] text-slate-400">Click to inspect syllabus</span>
              </div>
              <div className="space-y-1.5 max-h-64 overflow-y-auto">
                {matchingCourses.map(course => (
                  <button
                    key={course.id}
                    onClick={() => {
                      onSelectCourse && onSelectCourse(course);
                      setSearchQuery('');
                    }}
                    className="w-full p-2.5 rounded-xl neu-flat hover:neu-raised-card bg-[#e6edf3] text-left flex items-center justify-between gap-3 group transition-all"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.2 rounded-full neu-inset-sm text-[10px] font-bold text-blue-600 bg-[#e6edf3]">
                          {course.code}
                        </span>
                        <span className="font-bold text-xs text-slate-800 truncate group-hover:text-blue-600 transition-colors">
                          {course.title}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5 flex items-center gap-2">
                        <span>{course.software}</span>
                        <span>•</span>
                        <span>{course.instructor.name}</span>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-blue-600 px-2.5 py-1 rounded-neu-pill neu-btn-interactive shrink-0 flex items-center gap-1">
                      <span>Check Info</span>
                      <ChevronRight className="w-3 h-3" />
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Actions: Circular Neumorphic Buttons + Solid Blue Button */}
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          {/* Notifications Button with Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="w-10 h-10 rounded-full flex items-center justify-center neu-btn-interactive text-slate-600 hover:text-slate-900 relative transition-transform"
              title="Notifications"
            >
              <Bell className="w-4 h-4" />
              {unreadCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-blue-600 rounded-full ring-2 ring-[#e6edf3] animate-pulse" />
              )}
            </button>

            {/* Notification Popover Panel */}
            {showNotifications && (
              <div className="absolute right-0 mt-3 w-80 sm:w-96 rounded-2xl neu-flat bg-[#e6edf3] p-4 z-50 border border-white/60 shadow-2xl animate-in fade-in zoom-in-95 duration-150">
                <div className="flex items-center justify-between pb-3 border-b border-slate-300/60 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-slate-800">Notifications</span>
                    {unreadCount > 0 && (
                      <span className="text-[11px] font-bold px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full">
                        {unreadCount} new
                      </span>
                    )}
                  </div>
                  <button 
                    onClick={markAllRead}
                    className="text-xs text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                  >
                    Mark all read
                  </button>
                </div>

                <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
                  {notifications.map((n) => (
                    <div 
                      key={n.id}
                      className={`p-3 rounded-xl transition-all ${
                        n.unread ? 'neu-flat bg-white/60 border border-blue-200' : 'neu-inset-sm opacity-80'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h5 className="font-semibold text-xs text-slate-800">{n.title}</h5>
                        <span className="text-[10px] text-slate-400 whitespace-nowrap">{n.time}</span>
                      </div>
                      <p className="text-xs text-slate-600 mt-1">{n.message}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-3 pt-2 text-center border-t border-slate-300/40">
                  <button 
                    onClick={() => setShowNotifications(false)}
                    className="text-xs text-slate-500 hover:text-slate-800 font-medium"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Help Button */}
          <button
            onClick={onOpenHelp}
            className="w-10 h-10 rounded-full flex items-center justify-center neu-btn-interactive text-slate-600 hover:text-slate-900 transition-transform"
            title="Help & CAD Documentation"
          >
            <HelpCircle className="w-4 h-4" />
          </button>

          {/* Solid Blue "+ Resume Project" Button */}
          <button
            onClick={onResumeProject}
            className="flex items-center gap-2 px-4 py-2.5 rounded-neu-pill bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-xs sm:text-sm shadow-neu-btn-primary hover:shadow-lg active:shadow-neu-btn-primary-pressed transition-all duration-150 transform active:translate-y-0.5 whitespace-nowrap"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>+ Resume Project</span>
          </button>
        </div>
      </div>
    </header>
  );
};
