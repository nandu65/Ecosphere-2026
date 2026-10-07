import React from 'react';

export default function BioloopLogo({ className = "w-9 h-9", textClassName = "text-xl", showText = true }) {
  return (
    <div className="flex items-center gap-2.5 select-none">
      {/* SVG Icon: A continuous leaf forming a dynamic closed loop with biogas flame spark */}
      <div className={`relative flex items-center justify-center ${className}`}>
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Outer circle background */}
          <rect width="100" height="100" rx="28" fill="#0F2A1D" />
          <rect width="98" height="98" x="1" y="1" rx="27" stroke="#1E4D36" strokeWidth="2" />
          
          {/* Continuous Leaf Loop Path */}
          <path
            d="M 28,68 C 16,42 42,22 68,28 C 84,32 86,58 70,72 C 54,84 32,80 26,62 C 22,48 35,35 48,34 C 62,33 72,44 68,58 C 64,70 48,72 38,64"
            stroke="#3FAE6A"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Leaf vein accent */}
          <path
            d="M 38,34 C 48,38 58,48 64,58"
            stroke="#65C98E"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Biogas amber flame / spark at apex */}
          <circle cx="70" cy="30" r="7.5" fill="#F5A524" className="animate-pulse" />
          <path
            d="M 70,22 Q 74,29 70,36 Q 66,29 70,22 Z"
            fill="#FFB84D"
          />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className={`font-bold font-heading tracking-tight text-white ${textClassName}`}>
              Bioloop
            </span>
            <span className="w-2 h-2 rounded-full bg-amber" />
          </div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-leaf-light font-medium -mt-1">
            Climate-Tech · BLR
          </span>
        </div>
      )}
    </div>
  );
}
