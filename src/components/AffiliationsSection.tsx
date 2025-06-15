
import { Shield, Globe, BadgeCheck, ThumbsUp, Bitcoin, Search } from "lucide-react";

const affiliations = [
  {
    name: "Blockchain Intelligence Group",
    icon: Bitcoin,
  },
  {
    name: "Global Anti-Scam Alliance",
    icon: Globe,
  },
  {
    name: "Association of British Investigators",
    icon: Shield,
  },
  {
    name: "Chainalysis Certified",
    icon: BadgeCheck,
  },
  {
    name: "Advanced Crypto Investigator",
    icon: Search,
  },
  {
    name: "BBB Accredited Business",
    icon: ThumbsUp,
  },
];

const AffiliationsSection = () => (
  <section id="affiliations" className="bg-white py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="font-playfair text-4xl md:text-5xl text-center font-bold text-gray-900 mb-4 tracking-tight">
        Our Affiliations & Certifications
      </h2>
      <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto text-xl leading-relaxed">
        We are proud to be affiliated with leading organizations in security and investigation, ensuring the highest standards of service.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center">
        {affiliations.map((affiliation) => (
          <div key={affiliation.name} className="flex flex-col items-center text-center gap-4 text-gray-600 group">
             <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gray-100 border border-gray-200 group-hover:bg-teal-50 group-hover:border-teal-200 transition-all duration-300">
              <affiliation.icon size={36} className="text-gray-700 group-hover:text-teal-700 transition-colors duration-300" />
            </div>
            <p className="font-semibold text-sm h-10 flex items-center">{affiliation.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AffiliationsSection;
