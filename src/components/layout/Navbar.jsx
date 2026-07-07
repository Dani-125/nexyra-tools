import { FaTools } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="w-full border-b border-slate-800 bg-slate-950">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500">
            <FaTools className="text-white" />
          </div>

          <h1 className="text-2xl font-bold text-white">
            NEXYRA <span className="text-violet-400">Tools</span>
          </h1>
        </div>

        {/* Menu */}
        <div className="hidden gap-8 text-slate-300 md:flex">
          <a href="#" className="hover:text-violet-400">Tools</a>
          <a href="#" className="hover:text-violet-400">AI</a>
          <a href="#" className="hover:text-violet-400">Students</a>
          <a href="#" className="hover:text-violet-400">Pricing</a>
        </div>

        {/* Button */}
        <button className="rounded-xl bg-violet-500 px-5 py-2 font-medium text-white transition hover:bg-violet-600">
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Navbar;