import { FiArrowUpRight } from "react-icons/fi";

function SearchDropdown({ results, searchTerm }) {
  if (!searchTerm) return null;

  return (
    <div className="absolute left-0 right-0 top-full mt-3 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
      {results.length === 0 ? (
        <div className="p-5 text-center text-slate-400">
          No tools found.
        </div>
      ) : (
        results.map((tool) => {
          const Icon = tool.icon;

          return (
            <button
              key={tool.id}
              className="flex w-full items-center justify-between border-b border-slate-800 px-5 py-4 text-left transition hover:bg-slate-800"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-violet-600 p-3 text-white">
                  <Icon size={20} />
                </div>

                <div>
                  <h4 className="font-semibold text-white">
                    {tool.title}
                  </h4>

                  <p className="text-sm text-slate-400">
                    {tool.category}
                  </p>
                </div>
              </div>

              <FiArrowUpRight className="text-slate-500" />
            </button>
          );
        })
      )}
    </div>
  );
}

export default SearchDropdown;