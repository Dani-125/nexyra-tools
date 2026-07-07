import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div className="mt-12 w-full max-w-3xl">
      <div className="flex items-center rounded-2xl border border-slate-700 bg-slate-900 p-2 shadow-xl">
        <FaSearch className="ml-4 text-slate-400" />

        <input
          type="text"
          placeholder="Search tools... (Merge PDF, QR Generator, GPA Calculator...)"
          className="flex-1 bg-transparent px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none"
        />

        <button className="rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-500">
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;