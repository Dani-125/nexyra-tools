import ToolCard from "./ToolCard";
import { popularTools } from "../../data/tools";

function PopularTools() {
  return (
    <section className="mx-auto mt-28 max-w-7xl px-6">

      <h2 className="mb-12 text-5xl font-bold text-white">
        Most-used tools this week
      </h2>

      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
        {popularTools.map((tool) => (
          <ToolCard
            key={tool.id}
            icon={tool.icon}
            title={tool.title}
          />
        ))}
      </div>

    </section>
  );
}

export default PopularTools;