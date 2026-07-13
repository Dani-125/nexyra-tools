function ToolCard({ icon: Icon, title, description }) {
  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-slate-800
        bg-slate-900/70
        backdrop-blur-sm
        p-6
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-violet-500
        hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]
      "
    >
      {/* Icon */}
      <div
        className="
          mb-5
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-xl
          bg-violet-600
          text-white
          transition-all
          duration-300
          group-hover:rotate-6
          group-hover:scale-110
        "
      >
        <Icon size={26} />
      </div>

      {/* Title */}
      <h3
        className="
          text-xl
          font-semibold
          text-white
          transition-colors
          duration-300
          group-hover:text-violet-400
        "
      >
        {title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-sm leading-6 text-slate-400">
        {description}
      </p>

      {/* Button */}
      <button
        className="
          mt-6
          w-full
          rounded-xl
          bg-violet-600
          py-3
          font-medium
          text-white
          transition-all
          duration-300
          hover:bg-violet-500
        "
      >
        Open Tool
      </button>
    </div>
  );
}

export default ToolCard;