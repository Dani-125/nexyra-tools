import {
  FiFileText,
  FiImage,
  FiCpu,
  FiBookOpen,
  FiArrowRight,
} from "react-icons/fi";

const categories = [
  {
    title: "PDF Tools",
    icon: FiFileText,
    count: "15 Tools",
  },
  {
    title: "Image Tools",
    icon: FiImage,
    count: "10 Tools",
  },
  {
    title: "AI Tools",
    icon: FiCpu,
    count: "12 Tools",
  },
  {
    title: "Student Tools",
    icon: FiBookOpen,
    count: "8 Tools",
  },
];

function Categories() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-14">
        <h2 className="text-5xl font-bold text-white">
          Browse by Category
        </h2>

        <p className="text-slate-400 mt-4 text-lg">
          Discover the right tools for your workflow.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <div
              key={category.title}
              className="group cursor-pointer rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]"
            >
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-xl bg-violet-600 flex items-center justify-center text-white transition group-hover:scale-110">
                  <Icon size={28} />
                </div>

                <FiArrowRight className="text-slate-500 group-hover:text-violet-400 transition" />
              </div>

              <h3 className="text-2xl font-bold text-white mt-6">
                {category.title}
              </h3>

              <p className="text-slate-400 mt-2">
                {category.count}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Categories;