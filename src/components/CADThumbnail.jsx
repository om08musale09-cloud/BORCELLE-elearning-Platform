import React from 'react';

export const CADThumbnail = ({ type, color = "#2563eb" }) => {
  switch (type) {
    case 'drone':
      return (
        <div className="w-16 h-16 rounded-xl flex items-center justify-center p-2 neu-inset bg-[#e6edf3] relative overflow-hidden group">
          <svg viewBox="0 0 64 64" className="w-full h-full text-blue-600 transition-transform duration-300 group-hover:scale-110">
            {/* Center fuselage */}
            <circle cx="32" cy="32" r="7" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="2" />
            <circle cx="32" cy="32" r="3" fill={color} />
            {/* Quad Arms */}
            <line x1="32" y1="32" x2="14" y2="14" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
            <line x1="32" y1="32" x2="50" y2="14" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
            <line x1="32" y1="32" x2="14" y2="50" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
            <line x1="32" y1="32" x2="50" y2="50" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
            {/* Rotors */}
            <circle cx="14" cy="14" r="7" stroke={color} strokeWidth="1.5" strokeDasharray="3 2" fill="none" />
            <circle cx="50" cy="14" r="7" stroke={color} strokeWidth="1.5" strokeDasharray="3 2" fill="none" />
            <circle cx="14" cy="50" r="7" stroke={color} strokeWidth="1.5" strokeDasharray="3 2" fill="none" />
            <circle cx="50" cy="50" r="7" stroke={color} strokeWidth="1.5" strokeDasharray="3 2" fill="none" />
            {/* Rotor hubs */}
            <circle cx="14" cy="14" r="2" fill={color} />
            <circle cx="50" cy="14" r="2" fill={color} />
            <circle cx="14" cy="50" r="2" fill={color} />
            <circle cx="50" cy="50" r="2" fill={color} />
          </svg>
          <span className="absolute bottom-1 right-1 text-[9px] font-mono font-bold text-blue-600/70 bg-white/60 px-1 rounded">3D</span>
        </div>
      );

    case 'controller':
      return (
        <div className="w-16 h-16 rounded-xl flex items-center justify-center p-2 neu-inset bg-[#e6edf3] relative overflow-hidden group">
          <svg viewBox="0 0 64 64" className="w-full h-full text-amber-600 transition-transform duration-300 group-hover:scale-110">
            {/* Controller ergonomic body */}
            <path d="M12 28 C10 18, 22 18, 32 20 C42 18, 54 18, 52 28 C50 38, 48 48, 44 48 C40 48, 38 38, 32 38 C26 38, 24 48, 20 48 C16 48, 14 38, 12 28 Z" 
                  fill={color} fillOpacity="0.18" stroke={color} strokeWidth="2" strokeLinejoin="round" />
            {/* D-Pad */}
            <rect x="18" y="25" width="4" height="10" rx="1" fill={color} />
            <rect x="15" y="28" width="10" height="4" rx="1" fill={color} />
            {/* Action buttons */}
            <circle cx="44" cy="26" r="2" fill={color} />
            <circle cx="48" cy="30" r="2" fill={color} />
            <circle cx="40" cy="30" r="2" fill={color} />
            <circle cx="44" cy="34" r="2" fill={color} />
            {/* Thumbsticks */}
            <circle cx="26" cy="34" r="3.5" stroke={color} strokeWidth="1.5" fill="none" />
            <circle cx="38" cy="34" r="3.5" stroke={color} strokeWidth="1.5" fill="none" />
          </svg>
          <span className="absolute bottom-1 right-1 text-[9px] font-mono font-bold text-amber-600/70 bg-white/60 px-1 rounded">CAD</span>
        </div>
      );

    case 'watch':
      return (
        <div className="w-16 h-16 rounded-xl flex items-center justify-center p-2 neu-inset bg-[#e6edf3] relative overflow-hidden group">
          <svg viewBox="0 0 64 64" className="w-full h-full text-emerald-600 transition-transform duration-300 group-hover:scale-110">
            {/* Straps */}
            <rect x="25" y="6" width="14" height="12" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1.5" rx="2" />
            <rect x="25" y="46" width="14" height="12" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1.5" rx="2" />
            {/* Outer Case */}
            <circle cx="32" cy="32" r="18" stroke={color} strokeWidth="2.5" fill={color} fillOpacity="0.1" />
            {/* Fluted bezel ring */}
            <circle cx="32" cy="32" r="14" stroke={color} strokeWidth="1.5" strokeDasharray="2 2" fill="none" />
            {/* Crown */}
            <rect x="50" y="30" width="3" height="4" rx="1" fill={color} />
            {/* Hands */}
            <line x1="32" y1="32" x2="32" y2="22" stroke={color} strokeWidth="2" strokeLinecap="round" />
            <line x1="32" y1="32" x2="40" y2="32" stroke={color} strokeWidth="2" strokeLinecap="round" />
            <circle cx="32" cy="32" r="2" fill={color} />
          </svg>
          <span className="absolute bottom-1 right-1 text-[9px] font-mono font-bold text-emerald-600/70 bg-white/60 px-1 rounded">CAD</span>
        </div>
      );

    case 'diffuser':
      return (
        <div className="w-16 h-16 rounded-xl flex items-center justify-center p-2 neu-inset bg-[#e6edf3] relative overflow-hidden group">
          <svg viewBox="0 0 64 64" className="w-full h-full text-blue-600 transition-transform duration-300 group-hover:scale-110">
            {/* Venturi channel profile */}
            <path d="M8 48 C16 46, 24 38, 32 36 C40 38, 48 46, 56 48 L56 52 L8 52 Z" 
                  fill={color} fillOpacity="0.2" stroke={color} strokeWidth="2" />
            {/* Aerodynamic Fin Strakes */}
            <line x1="18" y1="47" x2="20" y2="28" stroke={color} strokeWidth="2" strokeLinecap="round" />
            <line x1="28" y1="40" x2="29" y2="22" stroke={color} strokeWidth="2" strokeLinecap="round" />
            <line x1="36" y1="40" x2="35" y2="22" stroke={color} strokeWidth="2" strokeLinecap="round" />
            <line x1="46" y1="47" x2="44" y2="28" stroke={color} strokeWidth="2" strokeLinecap="round" />
            {/* Top Wing Mount */}
            <path d="M14 18 L50 18 L46 24 L18 24 Z" stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.3" />
          </svg>
          <span className="absolute bottom-1 right-1 text-[9px] font-mono font-bold text-blue-600/70 bg-white/60 px-1 rounded">CFD</span>
        </div>
      );

    case 'bionic':
      return (
        <div className="w-16 h-16 rounded-xl flex items-center justify-center p-2 neu-inset bg-[#e6edf3] relative overflow-hidden group">
          <svg viewBox="0 0 64 64" className="w-full h-full text-purple-600 transition-transform duration-300 group-hover:scale-110">
            {/* Hinge Joint Socket */}
            <circle cx="32" cy="32" r="14" stroke={color} strokeWidth="2" strokeDasharray="4 2" fill="none" />
            <circle cx="32" cy="32" r="8" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="2" />
            <circle cx="32" cy="32" r="3" fill={color} />
            {/* Upper Strut */}
            <path d="M26 18 L32 8 L38 18" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            {/* Lower Strut */}
            <path d="M26 46 L32 56 L38 46" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <line x1="22" y1="32" x2="10" y2="32" stroke={color} strokeWidth="2" strokeLinecap="round" />
            <line x1="42" y1="32" x2="54" y2="32" stroke={color} strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="absolute bottom-1 right-1 text-[9px] font-mono font-bold text-purple-600/70 bg-white/60 px-1 rounded">SubD</span>
        </div>
      );

    default:
      return (
        <div className="w-16 h-16 rounded-xl flex items-center justify-center p-2 neu-inset bg-[#e6edf3] relative overflow-hidden group">
          <svg viewBox="0 0 64 64" className="w-full h-full text-emerald-600 transition-transform duration-300 group-hover:scale-110">
            {/* Isometric parametric cube */}
            <polygon points="32,10 52,22 32,34 12,22" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="1.5" />
            <polygon points="12,22 32,34 32,54 12,42" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1.5" />
            <polygon points="32,34 52,22 52,42 32,54" fill={color} fillOpacity="0.4" stroke={color} strokeWidth="1.5" />
          </svg>
          <span className="absolute bottom-1 right-1 text-[9px] font-mono font-bold text-emerald-600/70 bg-white/60 px-1 rounded">3D</span>
        </div>
      );
  }
};
