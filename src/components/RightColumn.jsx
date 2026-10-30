import React from 'react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip,
  CartesianGrid
} from 'recharts';
import { 
  UploadCloud, 
  Box, 
  MessageSquareShare, 
  Download, 
  TrendingUp, 
  Calendar, 
  ExternalLink,
  ChevronRight,
  Flame,
  Award,
  Video,
  BookOpen
} from 'lucide-react';
import { 
  performanceHistory, 
  topSkills 
} from '../data/mockData';

export const RightColumn = ({ 
  onUploadCapstone, 
  onViewSandboxes, 
  onRequestCritique, 
  onDownloadBriefs,
  onExploreCourses
}) => {
  const quickActions = [
    {
      id: 'courses',
      title: 'Course Catalog & Syllabi',
      subtitle: 'Inspect 8 Accredited Tracks',
      icon: BookOpen,
      color: 'text-indigo-600',
      action: onExploreCourses,
    },
    {
      id: 'upload',
      title: 'Upload Capstone',
      subtitle: 'STEP / IGES / 3DM file',
      icon: UploadCloud,
      color: 'text-blue-600',
      action: onUploadCapstone,
    },
    {
      id: 'sandboxes',
      title: 'View Sandboxes',
      subtitle: 'Cloud GPU CAD Instances',
      icon: Box,
      color: 'text-purple-600',
      action: onViewSandboxes,
    },
    {
      id: 'critique',
      title: 'Request Critique',
      subtitle: 'Faculty 1-on-1 review',
      icon: MessageSquareShare,
      color: 'text-emerald-600',
      action: onRequestCritique,
    },
    {
      id: 'briefs',
      title: 'Download Briefs',
      subtitle: 'Specs & starter packages',
      icon: Download,
      color: 'text-amber-600',
      action: onDownloadBriefs,
    },
  ];

  // Custom Chart Tooltip
  const CustomLineTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="p-2.5 rounded-xl neu-flat bg-[#e6edf3] border border-white/80 shadow-md text-xs">
          <div className="font-bold text-slate-800">{label} • Studio Log</div>
          <div className="text-blue-600 font-bold mt-1">
            Mastery Score: {data.score} pts
          </div>
          <div className="text-slate-500 text-[11px]">
            {data.hours} hrs logged ({data.accuracy}% accuracy)
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      {/* 1. Quick Actions Widget */}
      <section className="p-5 rounded-neu-card neu-flat bg-[#e6edf3] border border-white/50">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-extrabold text-sm sm:text-base text-[#0f172a] uppercase tracking-wider text-[12px]">
            Quick Actions
          </h3>
          <span className="text-[11px] font-bold text-slate-400">Shortcuts</span>
        </div>

        <div className="space-y-3">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <button
                key={action.id}
                onClick={action.action}
                className="w-full p-3 rounded-2xl neu-flat hover:neu-raised-card bg-[#e6edf3] border border-white/60 transition-all duration-200 flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-3">
                  {/* Circular neumorphic container */}
                  <div className="w-10 h-10 rounded-full neu-flat flex items-center justify-center bg-[#e6edf3] group-hover:scale-105 transition-transform shrink-0">
                    <div className="w-7 h-7 rounded-full neu-inset-sm flex items-center justify-center">
                      <Icon className={`w-3.5 h-3.5 ${action.color}`} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-xs text-slate-800 group-hover:text-blue-600 transition-colors">
                      {action.title}
                    </div>
                    <div className="text-[11px] text-slate-400 font-medium">
                      {action.subtitle}
                    </div>
                  </div>
                </div>

                <div className="w-6 h-6 rounded-full flex items-center justify-center neu-inset-sm text-slate-400 group-hover:text-blue-600 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* 2. Skill Transfer Performance (Line Chart) */}
      <section className="p-5 rounded-neu-card neu-flat bg-[#e6edf3] border border-white/50">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="font-extrabold text-sm sm:text-base text-[#0f172a]">
              Skill Transfer Performance
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              7-Day consistency & CAD mastery
            </p>
          </div>
          <div className="flex items-center gap-1 text-xs font-bold text-emerald-600 neu-inset-sm px-2.5 py-1 rounded-neu-pill">
            <TrendingUp className="w-3 h-3 stroke-[2.5]" />
            <span>+14.2%</span>
          </div>
        </div>

        {/* 7-Day Performance Chart */}
        <div className="h-44 w-full mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart 
              data={performanceHistory} 
              margin={{ top: 10, right: 10, left: -25, bottom: 0 }}
            >
              <defs>
                <linearGradient id="performanceGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2563eb" stopOpacity={0.35}/>
                  <stop offset="95%" stopColor="#2563eb" stopOpacity={0.0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#cbd5e1" opacity={0.4} vertical={false} />
              <XAxis 
                dataKey="day" 
                tickLine={false} 
                axisLine={false} 
                tick={{ fill: '#64748b', fontSize: 11, fontWeight: 600 }}
              />
              <YAxis 
                domain={[50, 100]} 
                tickLine={false} 
                axisLine={false} 
                tick={{ fill: '#94a3b8', fontSize: 10 }}
              />
              <Tooltip content={<CustomLineTooltip />} />
              <Area 
                type="monotone" 
                dataKey="score" 
                stroke="#2563eb" 
                strokeWidth={3} 
                fillOpacity={1} 
                fill="url(#performanceGradient)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Chart Summary Footnote */}
        <div className="mt-2 pt-3 border-t border-slate-300/40 flex items-center justify-between text-[11px] text-slate-500">
          <span>Weekly Peak: <strong>96 PTS</strong> (Sunday)</span>
          <span className="text-blue-600 font-semibold cursor-pointer hover:underline">
            Detailed Metrics →
          </span>
        </div>
      </section>

      {/* 3. Top Skills Progress */}
      <section className="p-5 rounded-neu-card neu-flat bg-[#e6edf3] border border-white/50">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-extrabold text-sm sm:text-base text-[#0f172a]">
              Top Skills Progress
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Verified technical proficiencies
            </p>
          </div>
          <Award className="w-4 h-4 text-amber-500" />
        </div>

        <div className="space-y-4">
          {topSkills.map((skill) => (
            <div key={skill.name} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-slate-800">{skill.name}</span>
                  <span className="text-[10px] text-slate-400 block">{skill.software}</span>
                </div>
                <div className="text-right">
                  <span className="font-extrabold text-slate-800">{skill.progress}%</span>
                  <span className="text-[10px] text-slate-400 block">{skill.rating}</span>
                </div>
              </div>

              {/* Inset Track Background with Extruded Progress Fill */}
              <div className="h-3 w-full rounded-full neu-inset-sm bg-[#e6edf3] p-[2px] overflow-hidden">
                <div 
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color} shadow-sm transition-all duration-700`}
                  style={{ width: `${skill.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Upcoming Mentor Critique Live Session Card */}
      <section className="p-5 rounded-neu-card neu-flat bg-gradient-to-br from-[#e6edf3] to-[#d6e2ed] border border-white/60 relative overflow-hidden">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-red-600">
              Live Session In 35m
            </span>
          </div>
          <span className="text-xs text-slate-500 font-mono">2:30 PM EST</span>
        </div>

        <div className="flex items-center gap-3 mb-3">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" 
            alt="Dr. Aris" 
            className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
          />
          <div>
            <div className="font-bold text-xs text-slate-900">Dr. Aris Thorne</div>
            <div className="text-[11px] text-slate-500">Lead CAD Surfacing Mentor</div>
          </div>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed mb-3">
          Topic: "Fillet G2 Curvature & Drafting Draft Angles on Haptic Grips"
        </p>

        <button 
          onClick={onRequestCritique}
          className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-neu-btn-primary transition-all active:scale-[0.98]"
        >
          <Video className="w-3.5 h-3.5" />
          <span>Enter Video Critique Studio</span>
        </button>
      </section>
    </div>
  );
};
