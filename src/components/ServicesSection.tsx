
import { ShieldCheck, Search, Wallet, Lightbulb, GraduationCap, ScanSearch } from "lucide-react";

// Images for each service (index matches service order)
const serviceImages = [
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=420&q=80", // Wealth Recovery
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=420&q=80", // Scam Investigation
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=420&q=80", // Wealth Management
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=420&q=80", // Financial Consultancy
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=420&q=80", // Scam Prevention Education
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=420&q=80", // Digital Identity
];

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
  <section id="services" className="bg-white py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="font-playfair text-5xl md:text-6xl text-center font-extrabold text-brand-emerald mb-6 tracking-tight drop-shadow-lg">
        Our Services
      </h2>
      <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto text-2xl leading-relaxed font-semibold animate-fade-in">
        <span className="text-brand-navy font-bold">Discover how WealthWise</span> recovers funds, investigates scams, and protects your financial future—with clarity and integrity.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 animate-fade-in">
        {services.map((service, i) => (
          <div key={service.title} className="bg-white/80 border border-brand-emerald/30 rounded-3xl shadow-2xl hover:shadow-emerald-200/70 transition-all duration-300 px-7 py-12 flex flex-col items-center text-center h-full group hover:bg-brand-gold/10 hover:border-emerald-300 animate-fade-in">
            <img src={serviceImages[i]} alt={service.title + ' illustration'} className="w-32 h-32 object-cover rounded-2xl shadow-lg border mb-6 group-hover:scale-105 transition-transform duration-300" />
            <div className="bg-white rounded-xl p-4 mb-6 shadow-md group-hover:shadow-lg transition-shadow duration-300">
              <service.icon className="text-brand-emerald group-hover:text-brand-emerald-dark transition-colors duration-300" size={36} />
            </div>
            <h3 className="text-2xl font-black mb-4 text-brand-navy font-playfair drop-shadow">{service.title}</h3>
            <p className="text-gray-700 text-lg font-semibold leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
