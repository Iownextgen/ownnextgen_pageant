export default function LandingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#101114] text-white">
      {/* ==================== HEADER - HOME ONLY ==================== */}
      <header className="fixed top-0 z-50 w-full border-b border-[#F5B91F]/20 bg-[#101114]/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-10">
          {/* Brand */}
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F5B91F]/60 text-lg font-bold text-[#F5B91F]">
              I
            </div>

            <div>
              <p className="text-sm font-bold tracking-[0.18em]">
                Mr.&Ms.
              </p>
              <p className="text-xs tracking-[0.35em] text-[#F5B91F]">
                IOWN
              </p>
            </div>
          </a>

          {/* HOME ONLY */}
          <a
            href="#home"
            className="border-b-2 border-[#F5B91F] pb-1 text-sm font-medium text-[#F5B91F]"
          >
            HOME
          </a>
        </div>
      </header>

      {/* ==================== HERO / HOME ==================== */}
      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,185,31,0.18),transparent_38%)]" />
        <div className="absolute -left-40 top-40 h-[500px] w-[500px] rounded-full bg-[#0B1F3A]/40 blur-[150px]" />
        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#F5B91F]/10 blur-[150px]" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-12">
          {/* Text */}
          <div className="text-center lg:text-left">
            <p className="mb-6 text-xs font-semibold tracking-[0.4em] text-[#F5B91F] sm:text-sm">
              THE OFFICIAL SEARCH FOR THE NEXT GENERATION
            </p>

            <h1 className="text-5xl font-black leading-tight sm:text-7xl lg:text-8xl">
              Mister
              <span className="mx-3 text-[#F5B91F]">&</span>
              Miss
              <span className="block text-[#F5B91F]">IOWN</span>
            </h1>

            <div className="mx-auto mt-7 h-px w-24 bg-[#F5B91F] lg:mx-0" />

            <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg lg:mx-0">
              A celebration of confidence, intelligence, purpose, and
              excellence. Discover the next generation of inspiring
              individuals ready to shine on the Mister & Miss IOWN stage.
            </p>
          </div>

          {/* Pageant Visual */}
          <div className="flex justify-center">
            <div className="relative flex h-[380px] w-[300px] items-center justify-center sm:h-[480px] sm:w-[400px]">
              {/* Decorative Circles */}
              <div className="absolute inset-5 rounded-full border border-[#F5B91F]/20" />
              <div className="absolute inset-14 rounded-full border border-white/10" />
              <div className="absolute h-56 w-56 rounded-full bg-[#F5B91F]/10 blur-3xl" />

              {/* Crown */}
              <div className="relative text-center">
                <div className="text-8xl drop-shadow-[0_0_30px_rgba(245,185,31,0.5)] sm:text-9xl">
                  👑
                </div>

                <p className="mt-8 text-xs font-semibold tracking-[0.5em] text-[#F5B91F]">
                  MISTER & MISS
                </p>

                <p className="mt-2 text-3xl font-black tracking-[0.3em]">
                  IOWN
                </p>

                <div className="mx-auto mt-5 h-px w-20 bg-[#F5B91F]" />

                <p className="mt-5 text-xs tracking-[0.2em] text-gray-400">
                  CONFIDENCE • PURPOSE • EXCELLENCE
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 text-center">
          <p className="text-[10px] tracking-[0.3em] text-gray-500">
            WELCOME TO MISTER & MISS IOWN
          </p>
          <div className="mx-auto mt-2 h-8 w-px bg-[#F5B91F]" />
        </div>
      </section>

      {/* ==================== INTRO ==================== */}
      <section className="border-t border-white/5 bg-[#15161a] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-bold tracking-[0.4em] text-[#F5B91F]">
            THE JOURNEY BEGINS HERE
          </p>

          <h2 className="mt-5 text-3xl font-black sm:text-5xl">
            WHERE CONFIDENCE MEETS
            <span className="block text-[#F5B91F]">PURPOSE</span>
          </h2>

          <div className="mx-auto my-7 h-px w-20 bg-[#F5B91F]" />

          <p className="text-base leading-relaxed text-gray-400 sm:text-lg">
            Mister & Miss IOWN is more than a pageant. It is a celebration
            of individuality, leadership, confidence, and the power of the
            next generation to create a meaningful impact.
          </p>
        </div>
      </section>

      {/* ==================== HIGHLIGHTS ==================== */}
      <section className="bg-[#101114] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-[#17181C] p-8 text-center transition hover:-translate-y-2 hover:border-[#F5B91F]/60">
              <div className="text-4xl">✨</div>
              <h3 className="mt-5 text-lg font-bold">CONFIDENCE</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                Celebrate your individuality and confidently embrace who you are.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#17181C] p-8 text-center transition hover:-translate-y-2 hover:border-[#F5B91F]/60">
              <div className="text-4xl">🌟</div>
              <h3 className="mt-5 text-lg font-bold">PURPOSE</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                Use your voice and platform to inspire others and create impact.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#17181C] p-8 text-center transition hover:-translate-y-2 hover:border-[#F5B91F]/60">
              <div className="text-4xl">👑</div>
              <h3 className="mt-5 text-lg font-bold">EXCELLENCE</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                Strive for excellence and represent the best of the next generation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="border-t border-white/10 bg-[#0a0b0d] py-10">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h3 className="text-xl font-black tracking-wider">
            MISTER <span className="text-[#F5B91F]">&</span> MISS IOWN
          </h3>

          <p className="mt-3 text-xs tracking-[0.25em] text-[#F5B91F]">
            CONFIDENCE • PURPOSE • EXCELLENCE
          </p>

          <p className="mt-6 text-sm text-gray-500">
            © 2026 Mister & Miss IOWN. All Rights Reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}