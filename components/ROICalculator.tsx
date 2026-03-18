"use client";

import { useState } from "react";

export default function ROICalculator() {
  const [employees, setEmployees] = useState(50);
  const [hourlyRate, setHourlyRate] = useState(45);
  const [hoursLost, setHoursLost] = useState(5); // Hours lost per week per employee
  
  const weeklyLoss = employees * hourlyRate * hoursLost;
  const annualLoss = weeklyLoss * 52;
  const savings = annualLoss * 0.7; // Assume 70% savings

  return (
    <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 shadow-2xl space-y-8 w-full max-w-2xl mx-auto text-white">
      <div className="space-y-6">
        <div>
          <label className="flex justify-between text-sm font-medium mb-2">
            <span>Number of Employees</span>
            <span className="text-safety-orange text-lg font-bold">{employees}</span>
          </label>
          <input 
            type="range" 
            min="10" max="500" 
            value={employees} 
            onChange={(e) => setEmployees(Number(e.target.value))}
            className="w-full accent-safety-orange h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        
        <div>
          <label className="flex justify-between text-sm font-medium mb-2">
            <span>Average Hourly Rate</span>
            <span className="text-safety-orange text-lg font-bold">${hourlyRate}/hr</span>
          </label>
          <input 
            type="range" 
            min="20" max="150" 
            value={hourlyRate} 
            onChange={(e) => setHourlyRate(Number(e.target.value))}
            className="w-full accent-safety-orange h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div>
          <label className="flex justify-between text-sm font-medium mb-2">
            <span>Hours Lost Searching for Documents (Weekly)</span>
            <span className="text-safety-orange text-lg font-bold">{hoursLost} hrs</span>
          </label>
          <input 
            type="range" 
            min="1" max="20" 
            value={hoursLost} 
            onChange={(e) => setHoursLost(Number(e.target.value))}
            className="w-full accent-safety-orange h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>

      <div className="bg-black p-6 rounded-2xl border border-zinc-800 text-center space-y-6 mt-8">
        <div>
          <div className="text-zinc-400 text-sm mb-1 uppercase tracking-wider font-semibold">Annual Cost of Unstructured Data</div>
          <div className="text-4xl md:text-5xl font-bold text-red-500 font-mono">
            ${annualLoss.toLocaleString()}
          </div>
        </div>
        <div className="border-t border-zinc-800 pt-6">
          <div className="text-zinc-400 text-sm mb-1 uppercase tracking-wider font-semibold">Potential Annual Savings with M-Files</div>
          <div className="text-5xl md:text-6xl font-extrabold text-green-400 drop-shadow-sm font-mono">
            ${savings.toLocaleString()}
          </div>
          <div className="text-zinc-500 text-xs mt-3 uppercase tracking-wider">Based on an estimated 70% efficiency gain</div>
        </div>
      </div>
    </div>
  );
}
