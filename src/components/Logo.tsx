import React from "react";

interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", showSubtitle = true, size = "md" }: LogoProps) {
  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-20 h-20",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-4xl",
  };

  const subtextSizes = {
    sm: "text-[8px]",
    md: "text-[10px]",
    lg: "text-xs",
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Recreated Logo Emblem from Image 3 */}
      <div className={`relative shrink-0 ${iconSizes[size]}`} id="brand-logo-emblem">
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Outer glow aura */}
          <circle cx="50" cy="50" r="42" fill="url(#logoGlow)" opacity="0.15" />
          
          {/* Recreating the iconic stylized sound megaphone/horn shape from Ação Total brand */}
          {/* Main yellow body */}
          <path
            d="M 38 72 
               C 34 60, 34 40, 52 28 
               C 56 25, 62 25, 66 22
               C 69 20, 71 16, 74 15
               C 72 20, 68 28, 62 30
               C 55 32, 50 36, 48 45
               C 46 54, 49 60, 58 64
               C 52 70, 44 73, 38 72 Z"
            fill="#FFCC00"
          />
          {/* Upper circular horn bulb & Soundwave crescent */}
          <circle cx="62" cy="22" r="10" fill="#FFCC00" />
          
          {/* White inner crescent highlight representing sound volume/speaker element */}
          <path
            d="M 68 22
               C 68 32, 54 36, 44 45
               C 42 47, 42 49, 45 49
               C 53 45, 62 42, 69 32
               C 72 28, 70 24, 68 22 Z"
            fill="#FFFFFF"
          />
          <circle cx="56" cy="38" r="4" fill="#FFFFFF" />

          {/* Gradients */}
          <defs>
            <radialGradient id="logoGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFCC00" />
              <stop offset="100%" stopColor="#FFCC00" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Recreated Logo Typography from Image 3 */}
      <div className="flex flex-col justify-center leading-none">
        <div className={`font-extrabold tracking-tight ${textSizes[size]} flex items-baseline font-display`}>
          <span className="text-[#FFCC00] font-black lowercase">ação</span>
          <span className="text-white font-normal lowercase tracking-wide">total</span>
        </div>
        {showSubtitle && (
          <span className={`font-semibold uppercase tracking-[0.2em] text-[#94A3B8] font-mono mt-0.5 ${subtextSizes[size]}`}>
            Marketing & Propaganda
          </span>
        )}
      </div>
    </div>
  );
}
