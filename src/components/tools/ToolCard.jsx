function ToolCard({ icon: Icon, title, description }) {
  return (
    <div
      className="
        group
        bg-slate-900/70
        border
        border-slate-800
        rounded-3xl
        p-6
        flex
        flex-col
        items-center
        justify-center
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-violet-500
        hover:bg-slate-900
        hover:shadow-[0_0_35px_rgba(139,92,246,0.35)]
        cursor-pointer
      "
    >
      <div
        className="
          w-16
          h-16
          rounded-2xl
          bg-violet-500/20
          flex
          items-center
          justify-center
          text-violet-400
          text-3xl
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:bg-violet-500
          group-hover:text-white
        "
      >
        <Icon />
      </div>

     <div className="mt-5">
  <h3 className="text-lg font-semibold text-white">
    {title}
  </h3>

  <p className="mt-2 text-sm text-slate-400">
    {description}
  </p>
</div>
    </div>
  );
}

export default ToolCard;