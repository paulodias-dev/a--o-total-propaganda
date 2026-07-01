import React from "react";

interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: "w-[132px]",
  md: "w-[176px]",
  lg: "w-[260px]",
} as const;

export default function Logo({ className = "", size = "md" }: LogoProps) {
  return (
    <div className={`select-none ${sizeMap[size]} ${className}`}>
      <img
        src="/logo-horizontal.png"
        alt="Ação Total"
        className="block w-full h-auto"
        draggable={false}
      />
    </div>
  );
}
