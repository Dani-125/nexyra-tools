import Stats from "./Stats";
import SearchBar from "./SearchBar";
function Hero() {
  return (
    <section className="relative overflow-hidden pb-32">

        {/* Background Glow */}
<div className="absolute left-[-150px] top-[-120px] h-[400px] w-[400px] rounded-full bg-violet-600/20 blur-[120px]" />

<div className="absolute right-[-150px] top-[100px] h-[350px] w-[350px] rounded-full bg-fuchsia-500/20 blur-[120px]" />

<div className="absolute bottom-[-150px] left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

 <div className="relative z-10">

      {/* Badge */}

      <div className="mb-8 rounded-full border border-violet-500/30 bg-violet-500/10 px-6 py-2 text-sm text-violet-300">
        ✨ 40+ premium tools · AI-powered · Loved by students
      </div>

      {/* Heading */}

     <h1 className="bg-gradient-to-r from-white via-violet-200 to-violet-500 bg-clip-text text-6xl font-extrabold leading-tight text-transparent md:text-7xl">
  One platform.
  <br />
  Every tool you need.
</h1>

      {/* Subtitle */}

      <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-400">
        PDF, image, AI and study tools — beautifully designed,
        lightning fast, and built for modern work.
      </p>
<SearchBar />
<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

  <button className="rounded-xl bg-violet-600 px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-violet-500">
    Explore All Tools
  </button>

  <button className="rounded-xl border border-slate-700 bg-slate-900 px-8 py-4 font-semibold text-slate-200 transition duration-300 hover:border-violet-500 hover:text-white">
    Try AI Tools
  </button>
<Stats />
</div>
</div>
    </section>
  );
}

export default Hero;