"use client";

import { useState } from "react";

export default function ROICalculator() {
  const [employees, setEmployees] = useState(20);
  const [hourlyRate, setHourlyRate] = useState(45);
  const [hoursLost, setHoursLost] = useState(2); // Hours lost per week per employee
  
  const weeklyLoss = employees * hourlyRate * hoursLost;
  const annualLoss = weeklyLoss * 52;
  const savings = annualLoss * 0.7; // Assume 70% savings

  return (
    <div className="precision-border backdrop-blur-md bg-navy-black/40 rounded-3xl p-8 shadow-[inset_0_0_40px_rgba(0,84,149,0.15)] space-y-8 w-full max-w-2xl mx-auto text-white">
      {/* Top right and bottom left L-corners using a nested absolute div */}
      <div className="absolute top-[-1px] right-[-1px] w-3 h-3 border-t-2 border-r-2 border-safety-orange pointer-events-none rounded-tr-3xl z-10 hidden"></div>
      
      <div className="space-y-8">
        <div>
          <label className="flex justify-between text-xs font-mono tracking-widest uppercase mb-3 text-zinc-400">
            <span>TEAM SIZE (HEADCOUNT)</span>
            <span className="text-safety-orange text-lg font-bold">[{employees}]</span>
          </label>
          <input 
            type="range" 
            min="10" max="500" 
            value={employees} 
            onChange={(e) => setEmployees(Number(e.target.value))}
            className="w-full h-1 bg-zinc-800 rounded-none appearance-none cursor-pointer border-x border-zinc-600 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-safety-orange [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:rounded-sm"
          />
        </div>
        
        <div>
          <label className="flex justify-between text-xs font-mono tracking-widest uppercase mb-3 text-zinc-400">
            <span>AVG RATE (USD/HR)</span>
            <span className="text-safety-orange text-lg font-bold">[${hourlyRate}]</span>
          </label>
          <input 
            type="range" 
            min="20" max="150" 
            value={hourlyRate} 
            onChange={(e) => setHourlyRate(Number(e.target.value))}
            className="w-full h-1 bg-zinc-800 rounded-none appearance-none cursor-pointer border-x border-zinc-600 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-safety-orange [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:rounded-sm"
          />
        </div>

        <div>
          <label className="flex justify-between text-xs font-mono tracking-widest uppercase mb-3 text-zinc-400">
            <span>SEARCH TIME LOST (HRS/WK)</span>
            <span className="text-safety-orange text-lg font-bold">[{hoursLost}]</span>
          </label>
          <input 
            type="range" 
            min="1" max="20" 
            value={hoursLost} 
            onChange={(e) => setHoursLost(Number(e.target.value))}
            className="w-full h-1 bg-zinc-800 rounded-none appearance-none cursor-pointer border-x border-zinc-600 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-safety-orange [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:rounded-sm"
          />
        </div>
      </div>

      <div className="bg-[#05080a]/80 p-6 rounded-2xl border border-zinc-800/50 text-center space-y-6 mt-10 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
        <div>
          <div className="text-zinc-500 font-mono text-xs mb-2 tracking-widest">ANNUAL BLEED RATE (USD)</div>
          <div className="text-4xl md:text-5xl font-bold text-red-500 font-mono tracking-tight drop-shadow-[0_0_10px_rgba(239,68,68,0.3)]">
            ${annualLoss.toLocaleString()}
          </div>
        </div>
        <div className="border-t border-zinc-800/80 pt-6">
          <div className="text-m-files-blue font-mono text-xs mb-2 tracking-widest">M-FILES PROJECTED RECOVERY</div>
          <div className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-[0_0_15px_rgba(0,180,255,0.4)] font-mono tracking-tight">
            ${savings.toLocaleString()}
          </div>
          <div className="text-zinc-600 font-mono text-[10px] mt-4 tracking-widest">EST. 70% EFFICIENCY RECAPTURE YIELD</div>
        </div>
      </div>
    </div>
  );
}
