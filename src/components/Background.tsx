// components/Background.tsx
import React from 'react';

export const Background: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    // Changed to slate-50 to make the white cards pop later
    <div className="relative min-h-[80vh] w-full bg-slate-50 overflow-x-hidden">
      
      {/* Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Top Right: Increased opacity and size */}
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-emerald-400 blur-[100px] opacity-30" />
        
        {/* Bottom Left: Increased opacity and size */}
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-blue-400 blur-[100px] opacity-30" />
        
        {/* Center: Subtle purple to bridge the gap */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-purple-200 blur-[150px] opacity-20" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};