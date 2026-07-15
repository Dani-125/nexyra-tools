import { FaTools } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500">
            <FaTools className="text-white" />
          </div>

          <h1 className="text-2xl font-bold text-white">
            NEXYRA <span className="text-violet-400">Tools</span>
          </h1>
        </Link>

        {/* Menu */}
        <div className="hidden items-center gap-8 md:flex">

          <NavLink
            to="/tools/pdf"
            className={({ isActive }) =>
              isActive
                ? "text-violet-400 font-semibold"
                : "text-slate-300 hover:text-violet-400 transition"
            }
          >
            PDF
          </NavLink>

          <NavLink
            to="/tools/image"
            className={({ isActive }) =>
              isActive
                ? "text-violet-400 font-semibold"
                : "text-slate-300 hover:text-violet-400 transition"
            }
          >
            Image
          </NavLink>

          <NavLink
            to="/tools/ai"
            className={({ isActive }) =>
              isActive
                ? "text-violet-400 font-semibold"
                : "text-slate-300 hover:text-violet-400 transition"
            }
          >
            AI
          </NavLink>

          <NavLink
            to="/tools/student"
            className={({ isActive }) =>
              isActive
                ? "text-violet-400 font-semibold"
                : "text-slate-300 hover:text-violet-400 transition"
            }
          >
            Students
          </NavLink>

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