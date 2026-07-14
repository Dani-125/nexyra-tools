import { FiCpu, FiArrowRight } from "react-icons/fi";

const aiTools = [
  {
    title: "AI PDF Summarizer",
    description: "Summarize long PDF documents into concise notes in seconds.",
  },
  {
    title: "AI Quiz Generator",
    description: "Generate quizzes automatically from your notes or PDFs.",
  },
  {
    title: "AI Flashcards",
    description: "Turn study material into interactive flashcards instantly.",
  },
];

function FeaturedAI() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <span className="inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm text-violet-300">
            ✨ AI Powered
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Supercharge Your Workflow with AI
          </h2>

          <p className="mt-5 text-lg text-slate-400 max-w-2xl mx-auto">
            Powerful AI tools built for students, professionals and creators.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {aiTools.map((tool) => (
            <div
              key={tool.title}
              className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <FiCpu size={32} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {tool.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {tool.description}
              </p>

              <button className="mt-8 flex items-center gap-2 font-semibold text-violet-400 transition hover:text-violet-300">
                Try Now
                <FiArrowRight />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedAI;