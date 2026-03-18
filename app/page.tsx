import ROICalculator from "@/components/ROICalculator";
import ComparisonToggle from "@/components/ComparisonToggle";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans relative">
      {/* Active Jobsite Scanline */}
      <div className="scanline"></div>

      {/* Hero Section */}
      <section className="relative flex min-h-[70vh] flex-col items-center justify-center bg-transparent border-b border-zinc-800/40 px-6 py-24 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
        <div className="relative z-10 mx-auto max-w-5xl flex flex-col items-center gap-8">
          <div className="inline-flex items-center precision-border bg-m-files-blue/10 px-4 py-1.5 text-xs font-mono tracking-widest uppercase text-m-files-blue backdrop-blur-sm shadow-[inset_0_0_10px_rgba(0,84,149,0.3)]">
            <span className="flex h-2 w-2 bg-safety-orange mr-3 animate-pulse shadow-[0_0_8px_rgba(255,130,0,0.8)]"></span>
            ACTIVE: CONSTRUCT_INTEL_SYSTEM
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-sm text-zinc-100">
            M-Files for Construction<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-m-files-blue to-blue-400 drop-shadow-[0_0_20px_rgba(0,84,149,0.4)]">The Zero-Click Jobsite</span>
          </h1>
          <p className="max-w-3xl text-xl leading-relaxed text-zinc-400 sm:text-2xl font-light">
            Automated Compliance and Real-Time ROI. Stop searching, start building. The intelligent information management platform built strictly for builders.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row mt-6 w-full justify-center">
            <button className="btn-mechanical precision-border bg-safety-orange/20 px-10 py-4 text-lg font-mono font-bold tracking-widest text-safety-orange backdrop-blur-md">
              [ INITIATE_DEMO ]
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
