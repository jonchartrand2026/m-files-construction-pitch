import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      {/* Hero Section */}
      <section className="relative flex min-h-[70vh] flex-col items-center justify-center bg-gradient-to-br from-m-files-blue to-blue-900 px-6 py-24 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="relative z-10 mx-auto max-w-5xl flex flex-col items-center gap-8">
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-safety-orange mr-2 animate-pulse"></span>
            The Future of Construction Intel
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-sm">
            M-Files for Construction:<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">The Zero-Click Jobsite</span>
          </h1>
          <p className="max-w-3xl text-xl leading-relaxed text-blue-100 sm:text-2xl font-light">
            Automated Compliance and Real-Time ROI. Stop searching, start building. The intelligent information management platform built strictly for builders.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row mt-4 w-full justify-center">
            <button className="rounded-full bg-safety-orange px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-orange-600 hover:scale-105 active:scale-95">
              Request a Demo
            </button>
            <button className="rounded-full bg-white/10 border border-white/30 px-8 py-4 text-lg font-bold text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-105 active:scale-95">
              Explore the Pillars
            </button>
          </div>
        </div>
      </section>

      {/* The 5 Pillars Section */}
      <section className="bg-zinc-50 dark:bg-zinc-950 py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold uppercase tracking-wider text-safety-orange mb-2">Our Foundation</h2>
            <h3 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">The 5 Pillars of Excellence</h3>
            <p className="max-w-2xl mx-auto text-lg text-zinc-600 dark:text-zinc-400">
              Transforming chaos into structured intelligence across every phase of your project lifecycle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Pillar 1 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 p-8 shadow-sm border border-zinc-200 dark:border-zinc-800 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-m-files-blue/10 to-transparent rounded-bl-full -mr-16 -mt-16 transition-all group-hover:scale-150"></div>
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-m-files-blue/10 text-m-files-blue dark:bg-m-files-blue/20 dark:text-blue-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="mb-3 text-xl font-bold text-zinc-900 dark:text-white">Compliance</h4>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                  Automated documentation and audit trails that ensure you meet every regulatory demand effortlessly.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 p-8 shadow-sm border border-zinc-200 dark:border-zinc-800 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-safety-orange/10 to-transparent rounded-bl-full -mr-16 -mt-16 transition-all group-hover:scale-150"></div>
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-safety-orange/10 text-safety-orange dark:bg-safety-orange/20 dark:text-orange-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                  </svg>
                </div>
                <h4 className="mb-3 text-xl font-bold text-zinc-900 dark:text-white">ROI</h4>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                  Recover lost hours instantly. Quantifiable returns through radical workflow acceleration.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 p-8 shadow-sm border border-zinc-200 dark:border-zinc-800 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-m-files-blue/10 to-transparent rounded-bl-full -mr-16 -mt-16 transition-all group-hover:scale-150"></div>
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-m-files-blue/10 text-m-files-blue dark:bg-m-files-blue/20 dark:text-blue-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                  </svg>
                </div>
                <h4 className="mb-3 text-xl font-bold text-zinc-900 dark:text-white">Data</h4>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                  Single source of truth. Connect isolated systems into one unified, intelligent repository.
                </p>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 p-8 shadow-sm border border-zinc-200 dark:border-zinc-800 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-safety-orange/10 to-transparent rounded-bl-full -mr-16 -mt-16 transition-all group-hover:scale-150"></div>
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-safety-orange/10 text-safety-orange dark:bg-safety-orange/20 dark:text-orange-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <h4 className="mb-3 text-xl font-bold text-zinc-900 dark:text-white">Safety</h4>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                  Proactive hazard mitigation through instant access to updated protocols and certifications.
                </p>
              </div>
            </div>

            {/* Pillar 5 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 p-8 shadow-sm border border-zinc-200 dark:border-zinc-800 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-m-files-blue/10 to-transparent rounded-bl-full -mr-16 -mt-16 transition-all group-hover:scale-150"></div>
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-m-files-blue/10 text-m-files-blue dark:bg-m-files-blue/20 dark:text-blue-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                </div>
                <h4 className="mb-3 text-xl font-bold text-zinc-900 dark:text-white">Drawings</h4>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                  Guaranteed version control. Always build from the latest approved revision, everywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section Placeholder */}
      <section className="bg-white dark:bg-black py-32 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-sm font-bold uppercase tracking-wider text-m-files-blue dark:text-blue-400 mb-2">Interactive Tool</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-8">
            Calculate the Cost of a Second
          </h3>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-12">
            Discover exactly how much time and money you&apos;re losing to manual document management—and see the immediate impact of the zero-click jobsite.
          </p>
          
          <div className="rounded-3xl border-2 border-dashed border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-16 flex flex-col items-center justify-center min-h-[400px]">
            <div className="w-16 h-16 bg-zinc-200 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-6 animate-pulse">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-zinc-400 dark:text-zinc-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
              </svg>
            </div>
            <h4 className="text-2xl font-bold text-zinc-500 dark:text-zinc-400 mb-2">Interactive Sliders Under Construction</h4>
            <p className="text-zinc-400 dark:text-zinc-500 max-w-md text-center">
              Our engineering team is currently laying the groundwork for the dynamic ROI calculator module here.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
