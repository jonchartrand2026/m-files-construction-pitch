import ROICalculator from "@/components/ROICalculator";
import ComparisonToggle from "@/components/ComparisonToggle";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans relative">
      {/* Active Jobsite Scanline */}
      <div className="scanline"></div>

      {/* Hero Section */}
      <section className="relative flex min-h-[85vh] flex-col items-center justify-center border-b border-zinc-800/40 px-6 py-24 text-center text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/Gemini_Generated_Image_hdcas5hdcas5hdca.png')] bg-cover bg-center bg-no-repeat pointer-events-none"></div>
        {/* Deep M-Files Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/70 to-blue-950/20 pointer-events-none"></div>
        {/* Noise Overlay */}
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
        
        {/* Pulsing Data Points (Micro-Interactions) */}
        {/* Drawings */}
        <div className="absolute top-[25%] left-[15%] group cursor-default z-20">
          <div className="relative flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-m-files-blue opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-blue-400 border border-white/80 shadow-[0_0_15px_rgba(0,84,149,0.8)]"></span>
          </div>
          <div className="absolute top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-navy-black/90 backdrop-blur-xl precision-border px-4 py-2 text-xs font-mono text-blue-300 whitespace-nowrap shadow-2xl pointer-events-none">
            DATA_STREAM: DRAWINGS
          </div>
        </div>

        {/* Compliance */}
        <div className="absolute top-[40%] right-[20%] group cursor-default z-20">
          <div className="relative flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-m-files-blue opacity-75 animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite]"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-blue-400 border border-white/80 shadow-[0_0_15px_rgba(0,84,149,0.8)]"></span>
          </div>
          <div className="absolute top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-navy-black/90 backdrop-blur-xl precision-border px-4 py-2 text-xs font-mono text-blue-300 whitespace-nowrap shadow-2xl pointer-events-none">
            DATA_STREAM: COMPLIANCE
          </div>
        </div>

        {/* Safety */}
        <div className="absolute bottom-[30%] left-[30%] group cursor-default z-20">
          <div className="relative flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-m-files-blue opacity-75 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-blue-400 border border-white/80 shadow-[0_0_15px_rgba(0,84,149,0.8)]"></span>
          </div>
          <div className="absolute top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-navy-black/90 backdrop-blur-xl precision-border px-4 py-2 text-xs font-mono text-blue-300 whitespace-nowrap shadow-2xl pointer-events-none">
            DATA_STREAM: SAFETY
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-5xl flex flex-col items-center gap-8 mt-4">
          <div className="inline-flex items-center precision-border bg-m-files-blue/30 px-5 py-2 text-xs font-mono tracking-widest uppercase text-white backdrop-blur-md shadow-[inset_0_0_20px_rgba(0,84,149,0.6)]">
            <span className="flex h-2 w-2 bg-safety-orange mr-3 animate-pulse shadow-[0_0_8px_rgba(255,130,0,0.8)]"></span>
            ACTIVE: CONSTRUCT_INTEL_SYSTEM
          </div>
          <h1 className="text-6xl font-extrabold tracking-tight sm:text-7xl md:text-8xl drop-shadow-2xl text-white">
            M-Files for Construction:<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white drop-shadow-[0_0_30px_rgba(0,84,149,0.8)]">The Zero-Click Jobsite</span>
          </h1>
          <p className="max-w-3xl text-xl leading-relaxed text-blue-50 sm:text-2xl font-medium drop-shadow-lg">
            TEAM IM is signaling a high-investment partnership to the M-Files community with automated compliance and real-time field ROI.
          </p>
          <div className="flex flex-col gap-6 sm:flex-row mt-8 w-full justify-center">
            <button className="btn-mechanical precision-border bg-safety-orange/80 hover:bg-safety-orange px-8 py-4 text-sm sm:text-base font-mono font-bold tracking-widest text-white backdrop-blur-md shadow-[0_0_20px_rgba(255,130,0,0.3)]">
              [ VIEW ROI CALCULATOR ]
            </button>
            <button className="btn-mechanical precision-border bg-navy-black/60 hover:bg-m-files-blue/40 px-8 py-4 text-sm sm:text-base font-mono font-bold tracking-widest text-white backdrop-blur-md shadow-[0_0_20px_rgba(0,84,149,0.3)] border-m-files-blue/50">
              [ EXPLORE 5 PILLARS ]
            </button>
          </div>
        </div>
      </section>

      {/* Comparison Toggle Section */}
      <section className="bg-transparent py-24 px-6 relative z-20">
        <ComparisonToggle />
      </section>

      {/* ROI Calculator Section */}
      <section className="bg-transparent py-32 px-6 relative z-20">
        <div className="mx-auto max-w-5xl text-center mb-16">
          <h2 className="precision-border inline-block px-4 py-1 mb-6 text-xs font-mono font-bold uppercase tracking-widest text-m-files-blue bg-navy-black/50 backdrop-blur-sm">Interactive Telemetry</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Calculate the Cost of a Second
          </h3>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light">
            Discover exactly how much time and money you&apos;re losing to manual document management—and see the immediate financial impact of the zero-click jobsite.
          </p>
        </div>
        
        <ROICalculator />
      </section>
    </div>
  );
}
