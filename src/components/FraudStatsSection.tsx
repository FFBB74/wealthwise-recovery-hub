import { Target, ShieldCheck, TrendingUp, Users } from "lucide-react";

const stats = [
  {
    icon: Target,
    value: "95%",
    label: "Success Rate in Fund Recovery",
    description: "Our targeted strategies and expertise lead to industry-leading recovery rates for our clients."
  },
  {
    icon: ShieldCheck,
    value: "$5B+",
    label: "Recovered for Clients",
    description: "We have successfully recovered billions in assets for individuals and corporations worldwide."
  },
  {
    icon: TrendingUp,
    value: "80%",
    label: "Reduction in Client Risk",
    description: "Our proactive security measures have helped clients drastically reduce their exposure to future scams."
  },
  {
    icon: Users,
    value: "10,000+",
    label: "Cases Handled",
    description: "With over ten thousand cases, our experience spans a wide range of financial fraud scenarios."
  }
];

const FraudStatsSection = () => (
  <section id="stats" className="bg-gradient-to-br from-brand-navy to-slate-800 text-white py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="font-playfair text-5xl md:text-6xl text-center font-black text-brand-gold mb-4 tracking-tight drop-shadow-lg">
        Proven Track Record
      </h2>
      <p className="text-center text-gray-300 mb-16 max-w-3xl mx-auto text-2xl leading-relaxed font-semibold">
        Our results speak for themselves. We combine advanced technology with deep investigative experience to deliver exceptional outcomes.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 animate-fade-in">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center flex flex-col items-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
            <div className="mb-4 text-brand-gold">
              <stat.icon size={48} strokeWidth={1.5} />
            </div>
            <p className="text-5xl font-black font-playfair drop-shadow-md">{stat.value}</p>
            <p className="text-xl font-semibold mt-2 mb-3">{stat.label}</p>
            <p className="text-gray-300 text-sm">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FraudStatsSection;
