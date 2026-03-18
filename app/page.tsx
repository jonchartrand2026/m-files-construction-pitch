import ROICalculator from "@/components/ROICalculator";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      {/* Hero Section */}
      <section className="relative flex min-h-[70vh] flex-col items-center justify-center bg-zinc-900 border-b border-zinc-800 px-6 py-24 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 mix-blend-overlay"></div>
        <div className="relative z-10 mx-auto max-w-5xl flex flex-col items-center gap-8">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-safety-orange mr-2 animate-pulse"></span>
            The Future of Construction Intel
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-sm text-zinc-100">
            M-Files for Construction:<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-m-files-blue to-blue-400">The Zero-Click Jobsite</span>
          </h1>
          <p className="max-w-3xl text-xl leading-relaxed text-zinc-300 sm:text-2xl font-light">
            Automated Compliance and Real-Time ROI. Stop searching, start building. The intelligent information management platform built strictly for builders.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row mt-4 w-full justify-center">
            <button className="rounded-full bg-safety-orange px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-orange-600 hover:scale-105 active:scale-95">
              Request a Demo
            </button>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="bg-[#18181b] py-32 px-6">
        <div className="mx-auto max-w-5xl text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-wider text-m-files-blue mb-2">Interactive Tool</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Calculate the Cost of a Second
          </h3>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Discover exactly how much time and money you&apos;re losing to manual document management—and see the immediate financial impact of the zero-click jobsite.
          </p>
        </div>
        
        <ROICalculator />
      </section>
    </div>
  );
}
