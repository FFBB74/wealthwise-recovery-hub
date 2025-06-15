
import { BookOpen, Mic, ShieldQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";

const resources = [
  {
    icon: BookOpen,
    title: "Scam Prevention Guide",
    description: "Our comprehensive guide on identifying and avoiding common online and investment scams. Knowledge is your first line of defense.",
    linkText: "Download PDF",
    link: "/docs/scam-prevention-guide.pdf"
  },
  {
    icon: Mic,
    title: "Webinar: Digital Asset Security",
    description: "Join our experts for a free webinar on best practices for cryptocurrency security and protecting your digital wallet.",
    linkText: "Register Now",
    link: "#"
  },
  {
    icon: ShieldQuestion,
    title: "Free Case Evaluation",
    description: "Unsure if you have a case? Get a confidential and no-obligation evaluation from our team of recovery specialists.",
    linkText: "Start Evaluation",
    link: "#contact"
  }
];

const GetInvolvedSection = () => (
  <section id="get-involved" className="bg-gray-50 py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="font-playfair text-5xl md:text-6xl text-center font-black text-brand-emerald mb-8 tracking-tight drop-shadow-lg">
        Get Involved & Stay Protected
      </h2>
      <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto text-2xl leading-relaxed font-semibold">
        Empower yourself with knowledge. We provide free resources to help you safeguard your assets and make informed financial decisions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 animate-fade-in">
        {resources.map((resource) => (
          <div key={resource.title} className="bg-white border border-gray-200 rounded-3xl shadow-xl hover:shadow-brand-emerald/20 transition-shadow duration-300 p-8 flex flex-col text-center items-center">
            <div className="mb-6 bg-brand-emerald/10 p-4 rounded-full">
              <resource.icon size={40} className="text-brand-emerald" strokeWidth={2} />
            </div>
            <h3 className="font-playfair text-2xl font-bold text-brand-navy mb-4">{resource.title}</h3>
            <p className="text-gray-600 mb-8 flex-grow font-semibold">{resource.description}</p>
            <Button asChild size="lg" className="bg-brand-emerald hover:bg-brand-emerald-dark font-bold text-white">
              <a href={resource.link}>{resource.linkText}</a>
            </Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GetInvolvedSection;
