
import { ShieldCheck, Search, Wallet, Lightbulb, GraduationCap, ScanSearch } from "lucide-react";

const services = [
  {
    title: "Wealth Recovery",
    icon: Wallet,
    description:
      "Expert help to recover funds or assets lost to scams or fraud. Financial know-how for what’s rightfully yours.",
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
  <section id="services" className="bg-[#f7fafc] py-16 px-4">
    <div className="max-w-5xl mx-auto">
      <h2 className="font-playfair text-3xl md:text-4xl text-center font-bold text-[#154864] mb-2 tracking-tight">
        Our Services
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
        Discover how WealthWise recovers funds, investigates scams, and protects your financial future—with clarity and integrity.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
        {services.map((service) => (
          <div key={service.title} className="bg-white border border-[#e7f9fc] rounded-xl shadow-sm hover:shadow-lg transition-shadow px-6 py-8 flex flex-col items-center text-center h-full animate-fade-in">
            <service.icon className="text-[#13839d] mb-3" size={38} />
            <h3 className="text-lg font-semibold mb-2 text-[#183753]">{service.title}</h3>
            <p className="text-gray-500 text-base leading-snug">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
