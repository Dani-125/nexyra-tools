import ToolCard from "./ToolCard";

function ToolSection({ title, tools }) {
  return (
    <section className="mb-14">
      <h2 className="text-3xl font-bold text-white mb-6">
        {title}
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {tools.map((tool) => (
          <ToolCard
            key={tool.id}
            title={tool.title}
            description={tool.description}
            icon={tool.icon}
          />
        ))}
      </div>
    </section>
  );
}

export default ToolSection;