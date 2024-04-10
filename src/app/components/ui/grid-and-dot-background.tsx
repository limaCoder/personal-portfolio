import React, { ReactNode } from "react";

export function GridBackground({ children }: { children?: ReactNode }) {
  return (
    <div className="min-h-screen xl:min-h-[60vh] w-full bg-black bg-grid-white/[0.2] relative flex py-20">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {children}
    </div>
  );
}
