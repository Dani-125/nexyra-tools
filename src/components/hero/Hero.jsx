import SearchBar from "./SearchBar";
function Hero() {
  return (
    <section className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

      {/* Badge */}

      <div className="mb-8 rounded-full border border-violet-500/30 bg-violet-500/10 px-6 py-2 text-sm text-violet-300">
        ✨ 40+ premium tools · AI-powered · Loved by students
      </div>

      {/* Heading */}

      <h1 className="max-w-5xl text-6xl font-extrabold leading-tight text-white md:text-7xl">
        One platform.
        <br />
        <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-300 bg-clip-text text-transparent">
          Every tool you need.
        </span>
      </h1>

      {/* Subtitle */}

      <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-400">
        PDF, image, AI and study tools — beautifully designed,
        lightning fast, and built for modern work.
      </p>
<SearchBar />
    </section>
  );
}

export default Hero;