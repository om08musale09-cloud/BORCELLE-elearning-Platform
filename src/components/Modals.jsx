import React, { useState } from 'react';
import { 
  X, 
  UploadCloud, 
  Check, 
  Sparkles, 
  Box, 
  Play, 
  FileCode, 
  Layers, 
  Sliders, 
  ExternalLink,
  ShieldCheck,
  Send
} from 'lucide-react';
import { CADThumbnail } from './CADThumbnail';

// 1. Resume / Project Inspector Modal
export const ProjectInspectorModal = ({ project, onClose, onLaunchStudio }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-2xl rounded-3xl neu-raised-card bg-[#e6edf3] p-6 border border-white/70 shadow-2xl relative">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-300/50 mb-5">
          <div className="flex items-center gap-3">
            <CADThumbnail type={project.thumbType} color={project.color} />
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 block">
                BORCELLE CAD STUDIO • ACTIVE INSTANCE
              </span>
              <h2 className="text-lg font-extrabold text-slate-900">
                {project.name}
              </h2>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-9 h-9 rounded-full neu-btn-interactive flex items-center justify-center text-slate-500 hover:text-slate-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Project Technical Meta Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
          <div className="p-3 rounded-2xl neu-inset-sm bg-[#e6edf3]">
            <span className="text-[10px] font-bold uppercase text-slate-400 block">Software</span>
            <span className="text-xs font-bold text-slate-800">{project.software}</span>
          </div>
          <div className="p-3 rounded-2xl neu-inset-sm bg-[#e6edf3]">
            <span className="text-[10px] font-bold uppercase text-slate-400 block">Mesh Density</span>
            <span className="text-xs font-bold text-slate-800">{project.meshComplexity}</span>
          </div>
          <div className="p-3 rounded-2xl neu-inset-sm bg-[#e6edf3]">
            <span className="text-[10px] font-bold uppercase text-slate-400 block">Faculty Reviewer</span>
            <span className="text-xs font-bold text-slate-800">{project.instructor}</span>
          </div>
          <div className="p-3 rounded-2xl neu-inset-sm bg-[#e6edf3]">
            <span className="text-[10px] font-bold uppercase text-slate-400 block">Sprint Due</span>
            <span className="text-xs font-bold text-slate-800">{project.dueDate}</span>
          </div>
        </div>

        {/* 3D Wireframe / Interactive Viewport Simulation */}
        <div className="h-48 w-full rounded-2xl neu-inset-deep bg-slate-950 p-4 relative overflow-hidden flex flex-col justify-between mb-5 border border-slate-700/50">
          <div className="flex justify-between items-center text-xs text-slate-400 font-mono z-10">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Viewport: Orthographic ISO [G2 Continuous]
            </span>
            <span>FPS: 60 • GPU: RTX Cloud 48GB</span>
          </div>

          {/* Simulated 3D Mesh Grid */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
            <svg viewBox="0 0 400 200" className="w-full h-full stroke-blue-400 fill-none" strokeWidth="0.8">
              <path d="M 50 150 Q 200 50 350 150" />
              <path d="M 50 130 Q 200 30 350 130" />
              <path d="M 50 110 Q 200 10 350 110" />
              <line x1="100" y1="50" x2="100" y2="170" strokeDasharray="3 3" />
              <line x1="200" y1="20" x2="200" y2="180" strokeDasharray="3 3" />
              <line x1="300" y1="50" x2="300" y2="170" strokeDasharray="3 3" />
            </svg>
          </div>

          <div className="z-10 flex items-center justify-between text-xs text-slate-300">
            <span className="bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-700">
              Tolerance: ±0.005mm
            </span>
            <span className="text-[11px] text-slate-400">
              Press and drag to rotate in full studio
            </span>
          </div>
        </div>

        {/* Progress & Milestone */}
        <div className="mb-6">
          <div className="flex justify-between text-xs font-bold text-slate-700 mb-1.5">
            <span>Overall Module Completion</span>
            <span>{project.progress}%</span>
          </div>
          <div className="h-3 w-full rounded-full neu-inset-sm bg-[#e6edf3] p-[2px] overflow-hidden">
            <div 
              className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 shadow-sm"
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-300/50">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-neu-pill neu-btn-interactive text-xs font-bold text-slate-600 hover:text-slate-900"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onLaunchStudio(project);
              onClose();
            }}
            className="flex items-center gap-2 px-6 py-2.5 rounded-neu-pill bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs shadow-neu-btn-primary transition-all active:scale-95"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Launch Cloud CAD Studio</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// 2. Upload Capstone Modal
export const UploadCapstoneModal = ({ isOpen, onClose, onUploadSuccess }) => {
  const [file, setFile] = useState(null);
  const [format, setFormat] = useState('STEP (.step, .stp)');
  const [isUploading, setIsUploading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      onUploadSuccess();
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-lg rounded-3xl neu-raised-card bg-[#e6edf3] p-6 border border-white/70 shadow-2xl relative">
        <div className="flex items-center justify-between pb-4 border-b border-slate-300/50 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-blue-600/20 text-blue-600 flex items-center justify-center neu-flat">
              <UploadCloud className="w-4 h-4" />
            </div>
            <h3 className="font-extrabold text-base text-slate-900">Upload Capstone Project</h3>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full neu-btn-interactive flex items-center justify-center text-slate-500">
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* File Drag and Drop Zone */}
          <div className="p-6 rounded-2xl neu-inset border-2 border-dashed border-slate-300 text-center hover:border-blue-500 transition-colors cursor-pointer bg-[#e6edf3]">
            <UploadCloud className="w-10 h-10 text-blue-600 mx-auto mb-2" />
            <div className="text-xs font-bold text-slate-700">
              Drag & Drop your 3D CAD mesh here
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              Supports STEP, IGES, Rhino (.3dm), OBJ, STL (Max 500MB)
            </p>
            <button 
              type="button"
              onClick={() => setFile('titanium-drone-revision-v5.step')}
              className="mt-3 px-3.5 py-1.5 rounded-neu-pill neu-btn-interactive text-xs font-bold text-blue-600 bg-white/70"
            >
              {file ? `Selected: ${file}` : 'Browse Files on Device'}
            </button>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">
              Target CAD Standard Format
            </label>
            <select 
              value={format}
              onChange={(e) => setFormat(e.target.value)}
              className="w-full px-3 py-2 rounded-xl neu-inset bg-[#e6edf3] text-xs font-medium text-slate-800 focus:outline-none"
            >
              <option>STEP (.step, .stp) - Recommended for GD&T</option>
              <option>Rhino 8 3DM (.3dm) - Parametric NURBS</option>
              <option>IGES Standard (.igs)</option>
              <option>Parasolid XT (.x_t)</option>
            </select>
          </div>

          <div className="flex justify-end gap-3 pt-3 border-t border-slate-300/40">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-neu-pill neu-btn-interactive text-xs font-bold text-slate-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isUploading}
              className="px-5 py-2 rounded-neu-pill bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-neu-btn-primary flex items-center gap-1.5"
            >
              {isUploading ? 'Uploading...' : 'Confirm Upload'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// 3. Request Critique Modal
export const RequestCritiqueModal = ({ isOpen, onClose, onRequestSent }) => {
  const [mentor, setMentor] = useState('Dr. Aris Thorne');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onRequestSent();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-md rounded-3xl neu-raised-card bg-[#e6edf3] p-6 border border-white/70 shadow-2xl relative">
        <div className="flex items-center justify-between pb-3 border-b border-slate-300/50 mb-4">
          <h3 className="font-extrabold text-base text-slate-900">Request Faculty Critique</h3>
          <button onClick={onClose} className="w-8 h-8 rounded-full neu-btn-interactive flex items-center justify-center text-slate-500">
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">Select Mentor</label>
            <select 
              value={mentor}
              onChange={(e) => setMentor(e.target.value)}
              className="w-full px-3 py-2 rounded-xl neu-inset bg-[#e6edf3] text-xs font-medium text-slate-800 focus:outline-none"
            >
              <option>Dr. Aris Thorne (Lead CAD Surfacing)</option>
              <option>Prof. Marcus Vance (Aerospace Geometry)</option>
              <option>Elena Rostova (Luxury Product Design)</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">Focus Area</label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g., Please inspect fillet draft angles and curvature combs on Section C..."
              className="w-full p-3 rounded-xl neu-inset bg-[#e6edf3] text-xs text-slate-800 placeholder-slate-400 focus:outline-none"
            />
          </div>

          <div className="flex justify-end gap-3 pt-3 border-t border-slate-300/40">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-neu-pill neu-btn-interactive text-xs font-bold text-slate-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-neu-pill bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit Request</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// 4. Upgrade Pro Studio Modal
export const UpgradeProModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-lg rounded-3xl neu-raised-card bg-[#e6edf3] p-6 border border-white/70 shadow-2xl relative">
        <div className="flex items-center justify-between pb-3 border-b border-slate-300/50 mb-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <h3 className="font-extrabold text-base text-slate-900">BORCELLE Pro Studio</h3>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full neu-btn-interactive flex items-center justify-center text-slate-500">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-4">
          <p className="text-xs text-slate-600 leading-relaxed">
            Elevate your industrial engineering portfolio with enterprise-grade computing and direct access to senior design leads from top automotive and consumer tech brands.
          </p>

          <div className="space-y-2.5">
            {[
              "Unlimited Dedicated NVIDIA RTX A6000 GPU Cloud Sandboxes",
              "Priority 24h Turnaround on Faculty Mesh & Surfacing Critiques",
              "Automated Finite Element Analysis (FEA) Stress Simulations",
              "Exclusive STEP & Parasolid Industry Brief Archive Access",
              "Certified BORCELLE Professional Portfolio Seal"
            ].map((perk, i) => (
              <div key={i} className="flex items-center gap-2.5 text-xs text-slate-700 p-2.5 rounded-xl neu-inset-sm bg-[#e6edf3]">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{perk}</span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl neu-flat bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-between mt-2">
            <div>
              <span className="text-[11px] font-semibold text-blue-200 uppercase tracking-wider block">Student Fellow Discount</span>
              <div className="text-xl font-extrabold">$19 <span className="text-xs font-normal text-blue-100">/ semester</span></div>
            </div>
            <button 
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-white text-blue-700 font-bold text-xs hover:bg-blue-50 transition-colors shadow-md"
            >
              Activate Pass
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
