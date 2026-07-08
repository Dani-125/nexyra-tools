import {
  FiZap,
  FiShield,
  FiCpu,
  FiSmartphone,
} from "react-icons/fi";

const features = [
  {
    icon: FiZap,
    title: "Lightning Fast",
    description: "Most tools finish in seconds without waiting.",
  },
  {
    icon: FiShield,
    title: "100% Secure",
    description: "Your files stay private and are never shared.",
  },
  {
    icon: FiCpu,
    title: "AI Powered",
    description: "Smart AI tools for students and professionals.",
  },
  {
    icon: FiSmartphone,
    title: "Works Everywhere",
    description: "Desktop, tablet and mobile friendly.",
  },
];

function Features() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold">
          Why Choose NEXYRA?
        </h2>

        <p className="text-slate-400 mt-4 text-lg">
          Everything you need in one modern platform.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div
              key={index}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-8 hover:border-violet-500 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-violet-600 flex items-center justify-center mb-6">
                <Icon size={26} />
              </div>

              <h3 className="text-2xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-slate-400">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Features;