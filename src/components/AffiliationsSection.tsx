
import { Shield, Globe, BadgeCheck, ThumbsUp, Bitcoin, Search } from "lucide-react";

const affiliations = [
  {
    name: "Blockchain Intelligence Group",
    icon: Bitcoin,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=180&q=80"
  },
  {
    name: "Global Anti-Scam Alliance",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=180&q=80"
  },
  {
    name: "Association of British Investigators",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=180&q=80"
  },
  {
    name: "Chainalysis Certified",
    icon: BadgeCheck,
    image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?auto=format&fit=crop&w=180&q=80"
  },
  {
    name: "Advanced Crypto Investigator",
    icon: Search,
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=180&q=80"
  },
  {
    name: "BBB Accredited Business",
    icon: ThumbsUp,
    image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?auto=format&fit=crop&w=180&q=80"
  },
];

const AffiliationsSection = () => (
  <section id="affiliations" className="bg-white py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="font-playfair text-5xl md:text-6xl text-center font-black text-brand-emerald mb-8 tracking-tight drop-shadow-lg">
        Our Affiliations &amp; Certifications
      </h2>
      <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto text-2xl leading-relaxed font-semibold">
        We are proud to be affiliated with leading organizations in security and investigation, ensuring the highest standards of service.
      </p>
      {/* Modernized and image-based grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 items-center justify-center animate-fade-in">
        {affiliations.map((affiliation) => (
          <div key={affiliation.name} className="flex flex-col items-center text-center gap-3 group relative">
            <img
              src={affiliation.image}
              alt={affiliation.name + " logo"}
              className="h-20 w-20 rounded-full object-cover shadow-lg mb-0 border-4 border-brand-gold group-hover:scale-110 transition-transform duration-300"
            />
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 border border-gray-200 group-hover:bg-emerald-50 group-hover:border-emerald-200 transition-all duration-300 -mt-6 z-10 shadow-md">
              <affiliation.icon size={30} className="text-brand-emerald group-hover:text-brand-emerald-dark transition-colors duration-300" />
            </div>
            <p className="font-black text-sm h-12 text-brand-navy flex items-center font-playfair drop-shadow">{affiliation.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AffiliationsSection;
