import ToolCard from "./ToolCard";

function PopularTools({ tools }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="mb-12 text-4xl font-bold text-white md:text-5xl">
        Most-used tools this week
      </h2>

      {tools.length === 0 ? (
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-12 text-center">
          <h3 className="text-2xl font-semibold text-white">
            No tools found
          </h3>

          <p className="mt-3 text-slate-400">
            Try searching for another tool.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {tools.map((tool) => (
            <ToolCard
              key={tool.id}
              title={tool.title}
              icon={tool.icon}
              description={tool.description}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default PopularTools;