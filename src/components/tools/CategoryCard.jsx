function CategoryCard({ icon: Icon, title, count }) {
  return (
    <div className="group cursor-pointer rounded-3xl border border-slate-800 bg-slate-900/70 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/20 text-2xl text-violet-400 transition group-hover:bg-violet-500 group-hover:text-white">
        <Icon />
      </div>

      <h3 className="text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-slate-400">
        {count} tools
      </p>
    </div>
  );
}

export default CategoryCard;