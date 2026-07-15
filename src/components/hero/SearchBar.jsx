import { FiSearch } from "react-icons/fi";
import SearchDropdown from "./SearchDropdown";

function SearchBar({
  searchTerm,
  setSearchTerm,
  searchResults,
}) {
  return (
    <div className="relative mt-10 w-full max-w-4xl">
      <div className="flex overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-lg">
        <div className="flex items-center px-5">
          <FiSearch className="text-xl text-slate-400" />
        </div>

        <input
          type="text"
          placeholder="Search tools... (Merge PDF, QR Generator, GPA Calculator...)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 bg-transparent px-3 py-5 text-white outline-none placeholder:text-slate-500"
        />

        <button className="bg-violet-600 px-8 font-semibold text-white transition hover:bg-violet-500">
          Search
        </button>
      </div>

      <SearchDropdown
        results={searchResults}
        searchTerm={searchTerm}
      />
    </div>
  );
}

export default SearchBar;