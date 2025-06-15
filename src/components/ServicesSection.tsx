
import { ShieldCheck, Search, Wallet, Lightbulb, GraduationCap, ScanSearch } from "lucide-react";

const services = [
  {
    title: "Wealth Recovery",
    icon: Wallet,
    description:
      "Expert help to recover funds or assets lost to scams or fraud. Financial know-how for what's rightfully yours.",
  },
  {
    title: "Scam Investigation",
    icon: Search,
    description:
      "Rigorous investigation of scams, evidence gathering, and resolution for individuals and businesses.",
  },
  {
    title: "Wealth Management",
    icon: Lightbulb,
    description:
      "Personal financial advice to protect and grow your assets securely, tailored and ethical.",
  },
  {
    title: "Financial Consultancy",
    icon: ShieldCheck,
    description:
      "Practical planning guidance for better budgeting, investing, and reaching your goals.",
  },
  {
    title: "Scam Prevention Education",
    icon: GraduationCap,
    description:
      "Workshops, articles, and tips to help you confidently spot scams and avoid fraud.",
  },
  {
    title: "Digital Identity Verification",
    icon: ScanSearch,
    description:
      "Secure verification of identity/documents to make every transaction safer and worry-free.",
  },
];

const ServicesSection = () => (
  <section id="services" className="bg-white py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="font-playfair text-4xl md:text-5xl text-center font-bold text-brand-navy mb-4 tracking-tight">
        Our Services
      </h2>
      <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto text-xl leading-relaxed">
        Discover how WealthWise recovers funds, investigates scams, and protects your financial future—with clarity and integrity.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.title} className="bg-gray-50 border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 px-8 py-10 flex flex-col items-center text-center h-full group hover:bg-white hover:border-emerald-200">
            <div className="bg-white rounded-xl p-4 mb-6 shadow-sm group-hover:shadow-md transition-shadow duration-300">
              <service.icon className="text-brand-emerald group-hover:text-brand-emerald-dark transition-colors duration-300" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-brand-navy font-playfair">{service.title}</h3>
            <p className="text-gray-600 text-base leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
