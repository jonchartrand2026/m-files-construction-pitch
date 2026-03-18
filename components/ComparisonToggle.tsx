"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ComparisonToggle() {
  const [activeTab, setActiveTab] = useState<"drain" | "mfiles">("drain");

  const dailyDrainItems = [
    "Searching for latest drawings (45 mins lost)",
    "Manual compliance document gathering",
    "Phone tag for field approvals",
    "Unstructured 'Punch List' emails",
  ];

  const mFilesWayItems = [
    "Instant 360° Drawing View",
    "Automated Compliance Workflows",
    "Real-time Mobile Approvals",
    "Zero-Click Punch List Sync",
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-12">
      {/* Toggle Container */}
      <div className="flex justify-center mb-12">
        <div className="relative flex bg-navy-black/60 backdrop-blur-md p-1.5 border border-white/5 shadow-[inset_0_0_15px_rgba(0,0,0,0.5)] precision-border">
          <div className="relative flex w-[360px] max-w-full z-20">
            {/* Animated Highlight Background */}
            <motion.div
              layoutId="activeTabHighlight"
              className="absolute top-0 bottom-0 w-1/2 bg-zinc-800 border border-zinc-700 shadow-md"
              initial={false}
              animate={{
                left: activeTab === "drain" ? "0%" : "50%",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />

            {/* Tab: The Daily Drain */}
            <button
              onClick={() => setActiveTab("drain")}
              className={`relative z-10 w-1/2 py-3 px-4 text-xs font-mono tracking-widest uppercase text-center transition-colors duration-200 ${
                activeTab === "drain" ? "text-red-400 font-bold" : "text-zinc-600 hover:text-zinc-400"
              }`}
            >
              The Daily Drain
            </button>

            {/* Tab: The M-Files Way */}
            <button
              onClick={() => setActiveTab("mfiles")}
              className={`relative z-10 w-1/2 py-3 px-4 text-xs font-mono tracking-widest uppercase text-center transition-colors duration-200 ${
                activeTab === "mfiles" ? "text-m-files-blue font-bold drop-shadow-[0_0_8px_rgba(0,84,149,0.8)]" : "text-zinc-600 hover:text-zinc-400"
              }`}
            >
              The M-Files Way
            </button>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative min-h-[400px] sm:min-h-[300px]">
        <AnimatePresence mode="wait">
          {activeTab === "drain" ? (
            <motion.div
              key="drain"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 precision-border backdrop-blur-md bg-[#0f0505]/60 p-8 sm:p-12 flex flex-col justify-center shadow-[inset_0_0_40px_rgba(239,68,68,0.05)]"
            >
              <h3 className="text-xl font-mono tracking-widest text-red-500 mb-8 text-center sm:text-left">SYSTEM_CHAOS_DETECTED</h3>
              <ul className="space-y-6">
                {dailyDrainItems.map((item, index) => (
                  <li key={index} className="flex items-start text-zinc-400 text-lg">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 bg-red-900/30 text-red-500 mr-4 mt-0.5 border border-red-500/20">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                    <span className="leading-snug font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ) : (
            <motion.div
              key="mfiles"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 precision-border backdrop-blur-md bg-[#050c14]/60 p-8 sm:p-12 flex flex-col justify-center shadow-[inset_0_0_50px_rgba(0,84,149,0.2)]"
            >
              <h3 className="text-xl font-mono tracking-widest text-m-files-blue mb-8 text-center sm:text-left drop-shadow-sm">
                STREAMLINED_PROTOCOL_ACTIVE
              </h3>
              <ul className="space-y-6">
                {mFilesWayItems.map((item, index) => (
                  <li key={index} className="flex items-start text-zinc-100 text-lg">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 bg-safety-orange/10 text-safety-orange mr-4 mt-0.5 border border-safety-orange/30 shadow-[0_0_10px_rgba(255,130,0,0.3)]">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </span>
                    <span className="leading-snug font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
