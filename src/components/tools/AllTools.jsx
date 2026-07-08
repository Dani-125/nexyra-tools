import ToolSection from "./ToolSection";
import {
  pdfTools,
  imageTools,
  aiTools,
  studentTools,
} from "../../data/tools";

function AllTools() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-white">
          Every Tool, Organized
        </h2>

        <p className="text-slate-400 mt-4 text-lg">
          Browse every tool by category.
        </p>
      </div>

      <ToolSection title="📄 PDF Tools" tools={pdfTools} />
      <ToolSection title="🖼 Image Tools" tools={imageTools} />
      <ToolSection title="🤖 AI Tools" tools={aiTools} />
      <ToolSection title="🎓 Student Tools" tools={studentTools} />
    </section>
  );
}

export default AllTools;