
import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";

const PromoBanner = () => {
  return (
    <section className="bg-gradient-to-r from-brand-emerald to-brand-navy py-12 text-white">
      <div className="max-w-6xl mx-auto px-6">
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
