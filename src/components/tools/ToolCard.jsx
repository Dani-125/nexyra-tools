function ToolCard({ icon, title }) {
  return (
    <div className="group rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.25)]">

      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/20 text-3xl">
        {icon}
      </div>

      <h3 className="text-xl font-semibold text-white">
        {title}
      </h3>

    </div>
  );
}

export default ToolCard;