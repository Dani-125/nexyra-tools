function Stats() {
  const stats = [
    {
      number: "40+",
      label: "Powerful Tools",
    },
    {
      number: "50K+",
      label: "Monthly Users",
    },
    {
      number: "99.9%",
      label: "Uptime",
    },
    {
      number: "100%",
      label: "Free to Start",
    },
  ];

  return (
    <div className="mt-20 grid w-full max-w-5xl grid-cols-2 gap-6 md:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-violet-500"
        >
          <h2 className="text-3xl font-bold text-violet-400">
            {item.number}
          </h2>

          <p className="mt-2 text-slate-400">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Stats;