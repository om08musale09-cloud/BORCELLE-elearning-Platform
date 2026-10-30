import React from 'react';
import { 
  Compass, 
  Boxes, 
  MessageSquareQuote, 
  Award, 
  TrendingUp, 
  Sparkles,
  Flame,
  ArrowUpRight,
  Clock
} from 'lucide-react';
import { kpiMetrics, studentProfile } from '../data/mockData';

export const GreetingAndKPIs = ({ onFilterProjectsByKpi, onOpenCourseHub }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Compass':
        return Compass;
      case 'Boxes':
        return Boxes;
      case 'MessageSquareQuote':
        return MessageSquareQuote;
      case 'Award':
        return Award;
      default:
        return Compass;
    }
  };

  return (
    <section className="mb-8">
      {/* Greeting Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
              Welcome back, {studentProfile.name} <span className="inline-block animate-bounce">👋</span>
            </h1>
            <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-neu-pill neu-inset-sm text-xs font-semibold text-blue-700 bg-[#e6edf3]">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              {studentProfile.semester}
            </span>
          </div>
          <p className="text-sm text-slate-500 font-medium">
            You're currently enrolled in <span className="text-slate-800 font-semibold">{studentProfile.specialization}</span>. Keep pushing forward!
          </p>
        </div>

        {/* CAD Streak Badge */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl neu-flat bg-[#e6edf3] border border-white/60">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-white shadow-sm">
              <Flame className="w-4 h-4 fill-white" />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-amber-600">
                14-Day CAD Streak
              </div>
              <div className="text-xs font-bold text-slate-700">
                Top 5% Consistency
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* KPI 4 Raised Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {kpiMetrics.map((kpi) => {
          const Icon = getIcon(kpi.icon);

          // Card color accent styles
          const colorStyles = {
            blue: {
              iconBg: 'text-blue-600',
              trendBg: 'bg-emerald-100 text-emerald-700 border border-emerald-200/50',
              accentDot: 'bg-blue-500',
            },
            emerald: {
              iconBg: 'text-emerald-600',
              trendBg: 'bg-blue-100 text-blue-700 border border-blue-200/50',
              accentDot: 'bg-emerald-500',
            },
            amber: {
              iconBg: 'text-amber-600',
              trendBg: 'bg-amber-100 text-amber-700 border border-amber-200/50',
              accentDot: 'bg-amber-500',
            },
            purple: {
              iconBg: 'text-purple-600',
              trendBg: 'bg-purple-100 text-purple-700 border border-purple-200/50',
              accentDot: 'bg-purple-500',
            },
          }[kpi.color] || {
            iconBg: 'text-blue-600',
            trendBg: 'bg-emerald-100 text-emerald-700',
            accentDot: 'bg-blue-500',
          };

          return (
            <div
              key={kpi.id}
              onClick={() => {
                if (kpi.id === 'course-progress' && onOpenCourseHub) {
                  onOpenCourseHub();
                } else if (onFilterProjectsByKpi) {
                  onFilterProjectsByKpi(kpi.id);
                }
              }}
              className="p-5 rounded-neu-card neu-flat bg-[#e6edf3] hover:translate-y-[-2px] transition-all duration-200 cursor-pointer group border border-white/40 flex flex-col justify-between"
            >
              {/* Card Top: Icon & Trend pill */}
              <div className="flex items-center justify-between mb-4">
                {/* Circular neumorphic icon container */}
                <div className="w-12 h-12 rounded-2xl neu-flat flex items-center justify-center bg-[#e6edf3] group-hover:scale-105 transition-transform">
                  <div className={`w-8 h-8 rounded-xl neu-inset-sm flex items-center justify-center ${colorStyles.iconBg}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Trend pill */}
                <div className={`flex items-center gap-1 px-2.5 py-1 rounded-neu-pill text-xs font-bold ${colorStyles.trendBg}`}>
                  <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
                  <span>{kpi.change}</span>
                </div>
              </div>

              {/* Card Center: Value & Title */}
              <div>
                <div className="text-3xl font-extrabold text-[#0f172a] tracking-tight mb-1 font-sans">
                  {kpi.value}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  {kpi.title}
                </div>
              </div>

              {/* Card Bottom: Description & subtle track */}
              <div className="mt-4 pt-3 border-t border-slate-300/40 flex items-center justify-between text-xs text-slate-400">
                <span className="truncate">{kpi.description}</span>
                <span className="text-[10px] uppercase font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                  View →
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
