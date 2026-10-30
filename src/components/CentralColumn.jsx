import React, { useState } from 'react';
import { 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  Tooltip 
} from 'recharts';
import { 
  MoreVertical, 
  ArrowRight, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  FileDown, 
  Cpu, 
  Sparkles,
  ExternalLink,
  Layers,
  ChevronRight
} from 'lucide-react';
import { CADThumbnail } from './CADThumbnail';
import { 
  projectModules, 
  learningOutcomesData, 
  recentActivities 
} from '../data/mockData';

export const CentralColumn = ({ onSelectProject, searchQuery, onOpenCourseByCode }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [activeActionMenu, setActiveActionMenu] = useState(null);

  // Filter projects by active tab & search query
  const filteredProjects = projectModules.filter((project) => {
    const matchesTab = 
      activeTab === 'all' ? true :
      activeTab === 'in-progress' ? project.statusCode === 'in-progress' :
      activeTab === 'needs-revision' ? project.statusCode === 'needs-revision' :
      activeTab === 'completed' ? project.statusCode === 'completed' : true;

    const matchesSearch = 
      !searchQuery || 
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.software.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesSearch;
  });

  const tabs = [
    { id: 'all', label: 'All', count: projectModules.length },
    { id: 'in-progress', label: 'In Progress', count: projectModules.filter(p => p.statusCode === 'in-progress').length },
    { id: 'needs-revision', label: 'Needs Revision', count: projectModules.filter(p => p.statusCode === 'needs-revision').length },
    { id: 'completed', label: 'Completed', count: projectModules.filter(p => p.statusCode === 'completed').length },
  ];

  // Helper for Status Pill
  const renderStatusPill = (status, code) => {
    switch (code) {
      case 'in-progress':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-neu-pill text-xs font-bold neu-inset-sm text-emerald-700 bg-emerald-500/10 border border-emerald-400/30">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Active
          </span>
        );
      case 'needs-revision':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-neu-pill text-xs font-bold neu-inset-sm text-amber-700 bg-amber-500/10 border border-amber-400/30">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            Needs Revision
          </span>
        );
      case 'completed':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-neu-pill text-xs font-bold neu-inset-sm text-blue-700 bg-blue-500/10 border border-blue-400/30">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            Completed
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-neu-pill text-xs font-bold neu-inset-sm text-slate-700">
            {status}
          </span>
        );
    }
  };

  // Custom Donut Chart Tooltip
  const CustomDonutTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="p-3 rounded-xl neu-flat bg-[#e6edf3] border border-white/60 shadow-lg text-xs">
          <div className="font-bold text-slate-800">{data.name}</div>
          <div className="text-slate-500 mt-0.5">
            {data.value}% of Curriculum ({data.count})
          </div>
        </div>
      );
    }
    return null;
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case 'feedback':
        return <CheckCircle2 className="w-4 h-4 text-emerald-600" />;
      case 'download':
        return <FileDown className="w-4 h-4 text-blue-600" />;
      case 'revision':
        return <AlertCircle className="w-4 h-4 text-amber-600" />;
      case 'sandbox':
        return <Cpu className="w-4 h-4 text-purple-600" />;
      default:
        return <Sparkles className="w-4 h-4 text-blue-600" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* 1. Active Projects & Modules Section */}
      <section className="p-6 rounded-neu-card neu-flat bg-[#e6edf3] border border-white/50">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl font-extrabold text-[#0f172a] tracking-tight">
              Active Projects & Modules
            </h2>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              Live CAD meshes, parameter constraints, and faculty submission status
            </p>
          </div>

          {/* Interactive Neumorphic Tabs */}
          <div className="flex items-center p-1 rounded-neu-pill neu-inset-sm bg-[#e6edf3] self-start sm:self-auto overflow-x-auto max-w-full">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    px-3.5 py-1.5 rounded-neu-pill text-xs font-bold transition-all duration-200 whitespace-nowrap
                    ${isActive 
                      ? 'neu-flat bg-[#e6edf3] text-blue-600 shadow-sm' 
                      : 'text-slate-500 hover:text-slate-800'
                    }
                  `}
                >
                  {tab.label}
                  <span className={`ml-1.5 text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-blue-100 text-blue-700' : 'text-slate-400'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects List / Table */}
        <div className="space-y-3.5">
          {filteredProjects.length === 0 ? (
            <div className="p-8 text-center neu-inset-sm rounded-2xl bg-[#e6edf3]">
              <Layers className="w-8 h-8 text-slate-400 mx-auto mb-2" />
              <div className="text-sm font-bold text-slate-700">No projects found</div>
              <div className="text-xs text-slate-500 mt-1">Try switching tabs or resetting your search query.</div>
            </div>
          ) : (
            filteredProjects.map((project) => (
              <div
                key={project.id}
                className="p-4 rounded-2xl neu-flat hover:neu-raised-card bg-[#e6edf3] border border-white/60 transition-all duration-200 flex flex-col md:flex-row md:items-center justify-between gap-4 group"
              >
                {/* Left: Thumbnail & Details */}
                <div className="flex items-center gap-4 min-w-[260px]">
                  <CADThumbnail type={project.thumbType} color={project.color} />
                  <div>
                    <h3 
                      onClick={() => onSelectProject && onSelectProject(project)}
                      className="font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors cursor-pointer flex items-center gap-1.5"
                    >
                      {project.name}
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <div className="text-xs text-slate-500 mt-0.5 flex items-center gap-2 flex-wrap">
                      <span>{project.category}</span>
                      {project.courseCode && (
                        <>
                          <span>•</span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onOpenCourseByCode && onOpenCourseByCode(project.courseCode);
                            }}
                            className="font-bold text-[10px] text-blue-600 hover:text-blue-800 bg-blue-100/70 hover:bg-blue-100 px-2 py-0.5 rounded-full border border-blue-200 transition-colors"
                            title="Check Course Info & Syllabus"
                          >
                            📖 {project.courseCode} Info
                          </button>
                        </>
                      )}
                      <span>•</span>
                      <span className="font-mono text-[11px] text-slate-400">{project.meshComplexity}</span>
                    </div>
                  </div>
                </div>

                {/* Center: Software CAD Tag & Status */}
                <div className="flex items-center gap-3 flex-wrap">
                  {/* Software CAD Pill Tag */}
                  <span className="px-3 py-1 rounded-neu-pill text-xs font-semibold neu-inset-sm text-slate-700 bg-[#e6edf3] border border-slate-300/40">
                    💻 {project.software}
                  </span>

                  {/* Status Pill */}
                  {renderStatusPill(project.status, project.statusCode)}
                </div>

                {/* Right: Progress Bar & Actions */}
                <div className="flex items-center gap-4">
                  {/* Inset Progress Bar */}
                  <div className="w-28 sm:w-36">
                    <div className="flex justify-between items-center text-[11px] font-bold text-slate-500 mb-1">
                      <span>Progress</span>
                      <span className="text-slate-800">{project.progress}%</span>
                    </div>
                    <div className="h-2.5 w-full rounded-full neu-inset-sm bg-[#e6edf3] overflow-hidden p-[2px]">
                      <div 
                        className="h-full rounded-full transition-all duration-500 shadow-sm"
                        style={{ 
                          width: `${project.progress}%`,
                          backgroundColor: project.color,
                        }}
                      />
                    </div>
                  </div>

                  {/* Actions Menu Button */}
                  <div className="relative">
                    <button
                      onClick={() => setActiveActionMenu(activeActionMenu === project.id ? null : project.id)}
                      className="w-9 h-9 rounded-full neu-btn-interactive flex items-center justify-center text-slate-500 hover:text-slate-800"
                      title="Project Options"
                    >
                      <MoreVertical className="w-4 h-4" />
                    </button>

                    {/* Popover Action Menu */}
                    {activeActionMenu === project.id && (
                      <div className="absolute right-0 mt-2 w-48 rounded-xl neu-flat bg-[#e6edf3] border border-white/80 p-2 z-40 shadow-xl">
                        <button
                          onClick={() => {
                            onSelectProject(project);
                            setActiveActionMenu(null);
                          }}
                          className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-blue-600 hover:text-white transition-colors"
                        >
                          Launch CAD Studio
                        </button>
                        {project.courseCode && (
                          <button
                            onClick={() => {
                              onOpenCourseByCode && onOpenCourseByCode(project.courseCode);
                              setActiveActionMenu(null);
                            }}
                            className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                          >
                            📖 Check Course Info ({project.courseCode})
                          </button>
                        )}
                        <button
                          onClick={() => setActiveActionMenu(null)}
                          className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-blue-600 hover:text-white transition-colors"
                        >
                          Inspect Topology & Wireframe
                        </button>
                        <button
                          onClick={() => setActiveActionMenu(null)}
                          className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-blue-600 hover:text-white transition-colors"
                        >
                          Download Brief (.STEP)
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* 2. Two-Card Row: Learning Outcomes Overview & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Learning Outcomes Overview (Donut Chart) - 5 cols */}
        <section className="lg:col-span-5 p-6 rounded-neu-card neu-flat bg-[#e6edf3] border border-white/50 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-extrabold text-base text-[#0f172a]">
                  Learning Outcomes Overview
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Curriculum milestones & critiques
                </p>
              </div>
              <span className="text-[11px] font-bold text-blue-600 neu-inset-sm px-2.5 py-1 rounded-neu-pill">
                Sem 2 Track
              </span>
            </div>

            {/* Donut Chart with Neumorphic Center */}
            <div className="relative h-56 w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Tooltip content={<CustomDonutTooltip />} />
                  <Pie
                    data={learningOutcomesData}
                    cx="50%"
                    cy="50%"
                    innerRadius={58}
                    outerRadius={82}
                    paddingAngle={6}
                    dataKey="value"
                    stroke="#e6edf3"
                    strokeWidth={4}
                  >
                    {learningOutcomesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>

              {/* Neumorphic center stat badge */}
              <div className="absolute inset-0 m-auto w-24 h-24 rounded-full neu-flat flex flex-col items-center justify-center pointer-events-none bg-[#e6edf3]">
                <span className="text-xl font-extrabold text-[#0f172a] leading-none">
                  80%
                </span>
                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500 mt-1">
                  Mastery
                </span>
              </div>
            </div>
          </div>

          {/* Donut Chart Custom Legend */}
          <div className="space-y-2.5 mt-4 pt-4 border-t border-slate-300/40">
            {learningOutcomesData.map((item) => (
              <div 
                key={item.name}
                className="flex items-center justify-between p-2 rounded-xl neu-inset-sm bg-[#e6edf3] text-xs"
              >
                <div className="flex items-center gap-2">
                  <span 
                    className="w-3 h-3 rounded-full shadow-sm shrink-0" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="font-semibold text-slate-700">{item.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-800">{item.value}%</span>
                  <span className="text-[10px] text-slate-400">({item.count})</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Activity List - 7 cols */}
        <section className="lg:col-span-7 p-6 rounded-neu-card neu-flat bg-[#e6edf3] border border-white/50 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-extrabold text-base text-[#0f172a]">
                  Recent Activity
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Latest mentor critiques, downloads, and simulation runs
                </p>
              </div>
              <button className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors">
                View All
              </button>
            </div>

            {/* Activity Stream */}
            <div className="space-y-3">
              {recentActivities.map((act) => (
                <div
                  key={act.id}
                  className="p-3.5 rounded-2xl neu-flat hover:neu-raised-card bg-[#e6edf3] border border-white/60 transition-all flex items-start gap-3.5 group"
                >
                  {/* Event Icon container */}
                  <div className="w-10 h-10 rounded-xl neu-inset-sm flex items-center justify-center shrink-0 bg-[#e6edf3] mt-0.5">
                    {getActivityIcon(act.type)}
                  </div>

                  {/* Event Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-bold text-xs text-slate-800 truncate group-hover:text-blue-600 transition-colors">
                        {act.title}
                      </h4>
                      <span className="text-[10px] text-slate-400 whitespace-nowrap flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {act.time}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                      {act.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 text-center border-t border-slate-300/40">
            <span className="text-xs text-slate-400">
              ⚡ Real-time updates synced with BORCELLE Cloud Studio
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};
