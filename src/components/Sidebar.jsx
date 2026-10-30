import React from 'react';
import {
  LayoutDashboard,
  BookOpen,
  FolderGit2,
  MessageSquareCode,
  Users,
  Sparkles,
  ChevronRight,
  LogOut,
  ExternalLink,
  ShieldCheck,
  X
} from 'lucide-react';

export const Sidebar = ({ currentTab, setCurrentTab, isOpen, setIsOpen, onOpenUpgrade }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, badge: null },
    { id: 'courses', label: 'Courses & Catalog', icon: BookOpen, badge: '8 Tracks' },
    { id: 'projects', label: 'Capstone Projects', icon: FolderGit2, badge: '2 Live' },
    { id: 'feedback', label: 'Mentor Feedback', icon: MessageSquareCode, badge: '1 New' },
    { id: 'community', label: 'Community', icon: Users, badge: '18+' },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 lg:hidden transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside className={`
        fixed lg:sticky top-0 left-0 z-50 h-screen w-72 bg-[#e6edf3] p-5 flex flex-col justify-between
        transition-transform duration-300 ease-in-out border-r border-[#d4deea]/70
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Top Section */}
        <div className="flex flex-col gap-6">
          {/* Brand Header */}
          <div className="flex items-center justify-between px-2 pt-1">
            <div className="flex items-center gap-3 cursor-pointer group">
              {/* Neumorphic 3D Studio Cube Icon */}
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center neu-flat group-hover:scale-105 transition-transform bg-[#e6edf3]">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 via-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-md">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </div>
              </div>
              
              <div>
                <span className="font-extrabold tracking-wider text-xl text-[#0f172a] block leading-none font-sans">
                  BORCELLE
                </span>
                <span className="text-[11px] font-semibold tracking-widest uppercase text-blue-600 mt-1 block">
                  Studio Lab • CAD
                </span>
              </div>
            </div>

            {/* Close button on mobile */}
            <button 
              onClick={() => setIsOpen(false)}
              className="lg:hidden w-8 h-8 rounded-full flex items-center justify-center neu-flat text-slate-500 hover:text-slate-800"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Navigation Menu */}
          <nav className="flex flex-col gap-2.5 mt-2">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 mb-1">
              Main Menu
            </div>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentTab(item.id);
                    if (window.innerWidth < 1024) setIsOpen(false);
                  }}
                  className={`
                    w-full flex items-center justify-between px-4 py-3 rounded-neu-pill text-sm font-semibold
                    transition-all duration-200 group text-left
                    ${isActive 
                      ? 'neu-pill-active text-blue-600 font-bold' 
                      : 'text-slate-600 hover:text-slate-900 neu-btn-interactive'
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    <div className={`
                      w-8 h-8 rounded-full flex items-center justify-center transition-colors
                      ${isActive ? 'bg-blue-600/15 text-blue-600' : 'text-slate-500 group-hover:text-blue-600'}
                    `}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span>{item.label}</span>
                  </div>

                  {item.badge && (
                    <span className={`
                      text-xs px-2.5 py-0.5 rounded-full font-bold
                      ${isActive 
                        ? 'bg-blue-600 text-white shadow-sm' 
                        : 'neu-inset text-slate-500 group-hover:text-blue-600'
                      }
                    `}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Promo Card: "Upgrade to Pro Studio" */}
          <div className="mt-2 p-4 rounded-2xl neu-flat relative overflow-hidden bg-gradient-to-br from-[#e6edf3] to-[#d8e3ed] border border-white/50">
            <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
            
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-blue-600/20 text-blue-600 flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
                PRO MEMBERSHIP
              </span>
            </div>

            <h4 className="font-bold text-sm text-slate-800 mb-1">
              Upgrade to Pro Studio
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed mb-3">
              Unlock unlimited Cloud CAD rendering, FEA simulations & 1-on-1 weekly mentor critiques.
            </p>

            <button 
              onClick={onOpenUpgrade}
              className="w-full py-2 px-3 rounded-xl neu-btn-interactive text-xs font-bold text-blue-700 bg-white/70 hover:bg-white flex items-center justify-center gap-1.5 border border-white/80 transition-all shadow-sm group"
            >
              <span>Explore Studio Perks</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* User Profile: Om, Junior Designer */}
        <div className="mt-4 pt-4 border-t border-[#d8e2ed]">
          <div className="p-3 rounded-2xl neu-flat flex items-center justify-between bg-[#e6edf3]">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
                  alt="Om"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full" />
              </div>
              <div className="overflow-hidden">
                <div className="font-bold text-sm text-slate-800 truncate flex items-center gap-1">
                  Om
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-500 inline-block shrink-0" />
                </div>
                <div className="text-[11px] font-medium text-slate-500 truncate">
                  Junior Designer
                </div>
              </div>
            </div>

            <button 
              title="Studio Settings"
              className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 neu-btn-interactive ml-1"
            >
              <LogOut className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
