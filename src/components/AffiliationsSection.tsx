import { Shield, Globe, BadgeCheck, Search } from "lucide-react";

const affiliations = [
  {
    name: "CipherTrace Blockchain Certified",
    icon: BadgeCheck,
    image: "/lovable-uploads/f4f4e28d-d466-47ae-b536-a444293eb833.png"
  },
  {
    name: "CipherTrace Risk Specialist",
    icon: BadgeCheck,
    image: "/lovable-uploads/8d014cd3-434a-4e88-814d-037e60c7b4f2.png"
  },
  {
    name: "CipherTrace Examiner",
    icon: BadgeCheck,
    image: "/lovable-uploads/11e9804e-b800-475c-bc5b-4d9ef84f9fa8.png"
  },
  {
    name: "Global Anti-Scam Alliance",
    icon: Globe,
    image: "/lovable-uploads/c0aeb9de-f19d-48b9-8078-b54c19e6a0c2.png"
  },
  {
    name: "World Association of Detectives",
    icon: Globe,
    image: "/lovable-uploads/06a7ad29-8717-4d82-a4a9-abf2fb637d88.png"
  },
  {
    name: "California Licensed Investigators",
    icon: Shield,
    image: "/lovable-uploads/2be6017a-4da5-43f8-8d0e-59ee4472d59d.png"
  },
  {
    name: "Financial Crimes Investigators",
    icon: Shield,
    image: "/lovable-uploads/8486a1c5-eac3-42be-82f9-241d38bb489c.png"
  },
  {
    name: "Forensic Computer Examiners",
    icon: Search,
    image: "/lovable-uploads/f0cbe527-9729-4b0e-b40e-1d486d6c8957.png"
  },
  {
    name: "Absolute Truth Investigations",
    icon: Search,
    image: "/lovable-uploads/50889235-275b-4355-8698-f69830ac8aef.png"
  },
  {
    name: "CompliAssure Secured",
    icon: BadgeCheck,
    image: "/lovable-uploads/811e959f-35a2-4cca-a7e1-558677f0d8aa.png"
  },
  {
    name: "D-U-N-S Registered",
    icon: BadgeCheck,
    image: "/lovable-uploads/83082b15-26ee-408a-84e2-3f90f67e55ad.png"
  },
  {
    name: "Secured by Sectigo",
    icon: Shield,
    image: "/lovable-uploads/d52cafc4-12dd-4be0-8686-4c6771890a75.png"
  },
  {
    name: "Central Intelligence Agency",
    icon: Shield,
    image: "/lovable-uploads/8b2f1be1-8383-4e01-b31e-dce23c1734ef.png"
  },
  {
    name: "Cryptocurrency & Money Laundering",
    icon: Search,
    image: "/lovable-uploads/21f2fe58-5e80-4a30-b339-aee48fd68f32.png"
  },
  {
    name: "Homeland Security Cybersecurity",
    icon: Shield,
    image: "/lovable-uploads/24881188-1fe1-47ce-9e1e-c76b7de9d507.png"
  },
  {
    name: "California Association of Licensed Investigators",
    icon: Shield,
    image: "/lovable-uploads/8284deba-4bad-4dda-bb8e-7261b1349f1f.png"
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
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-16 items-start justify-center animate-fade-in">
        {affiliations.map((affiliation) => (
          <div key={affiliation.name} className="flex flex-col items-center text-center gap-3 group">
            <div className="h-24 w-24 bg-white rounded-lg shadow-lg border-2 border-gray-100 flex items-center justify-center p-2 group-hover:shadow-xl transition-shadow duration-300">
              <img
                src={affiliation.image}
                alt={affiliation.name + " logo"}
                className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 border border-gray-200 group-hover:bg-emerald-50 group-hover:border-emerald-200 transition-all duration-300 -mt-6 z-10 shadow-md">
              <affiliation.icon size={30} className="text-brand-emerald group-hover:text-brand-emerald-dark transition-colors duration-300" />
            </div>
            <p className="font-black text-sm h-12 text-brand-navy flex items-center justify-center font-playfair drop-shadow text-center leading-tight">{affiliation.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AffiliationsSection;
