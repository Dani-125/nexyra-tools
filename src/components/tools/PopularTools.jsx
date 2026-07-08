import ToolCard from "./ToolCard";
import { popularTools } from "../../data/tools";

function PopularTools() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
        Most-used tools this week
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {popularTools.map((tool) => (
          <ToolCard
            key={tool.id}
            title={tool.title}
            icon={tool.icon}
             description={tool.description}
          />
        ))}
      </div>

    </section>
  );
}

export default PopularTools;