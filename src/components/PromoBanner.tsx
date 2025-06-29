import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";

const PromoBanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-brand-emerald to-brand-navy py-12 text-white overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/e900a3fd-bfd2-4485-9c18-2e829aeea132.png"
          alt=""
          className="w-full h-full object-cover opacity-20"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-emerald/90 to-brand-navy/90"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="flex items-center gap-6 flex-col sm:flex-row">
            <ShieldAlert size={60} className="text-brand-gold flex-shrink-0" />
            <div>
              <h2 className="font-playfair text-3xl font-bold mb-1">
                Victim of a Scam? Don't Suffer in Silence.
              </h2>
              <p className="text-lg text-gray-200 font-semibold">
                We can help you fight back and reclaim what's rightfully yours.
              </p>
            </div>
          </div>
          <Button
            asChild
            size="lg"
            className="bg-brand-gold hover:bg-brand-gold/90 text-brand-navy font-bold text-lg px-8 py-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200 flex-shrink-0 mt-4 md:mt-0"
          >
            <a href="#contact">Get a Free Consultation</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
