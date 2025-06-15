
import { ShieldCheck, Search, Wallet, Lightbulb, GraduationCap, ScanSearch } from "lucide-react";

const services = [
  {
    title: "Wealth Recovery",
    icon: Wallet,
    description:
      "Get expert help to recover money or assets lost to scams or fraud. We use financial know-how and investigation skills to reclaim what's yours.",
  },
  {
    title: "Scam Investigation",
    icon: Search,
    description:
      "Our team investigates suspected scams, gathers evidence, and works to resolve fraud cases for you or your business.",
  },
  {
    title: "Wealth Management",
    icon: Lightbulb,
    description:
      "Personalized advice to protect and grow your wealth with safe, trustworthy financial planning.",
  },
  {
    title: "Financial Consultancy",
    icon: ShieldCheck,
    description:
      "Down-to-earth guidance for smarter budgeting, investing, and planning your financial future.",
  },
  {
    title: "Scam Prevention Education",
    icon: GraduationCap,
    description:
      "We empower you to spot scams and avoid risks with practical articles, workshops, and simple fraud-prevention tips.",
  },
  {
    title: "Digital Identity Verification",
    icon: ScanSearch,
    description:
      "We securely verify identities and documents to prevent theft—ensuring every transaction is safe and trustworthy.",
  },
];

const ServicesSection = () => (
  <section id="services" className="bg-[#f4fcfd] py-14 px-4">
    <div className="max-w-5xl mx-auto">
      <h2 className="font-playfair text-3xl md:text-4xl text-center font-bold text-[#22223b] mb-2">Our Services</h2>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Discover how WealthWise recovers funds, investigates scams, and protects your financial future—all with clarity and care.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
        {services.map((service) => (
          <div key={service.title} className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow px-6 py-7 flex flex-col items-center text-center h-full">
            <service.icon className="text-[#28c7d9] mb-3" size={42} />
            <h3 className="text-xl font-semibold mb-2 text-[#22223b]">{service.title}</h3>
            <p className="text-gray-500 text-base leading-snug">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
