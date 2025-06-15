
import BookingModal from "./BookingModal";
import React from "react";
import WealthWiseLogo from "@/components/WealthWiseLogo";

const HeroSection = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <section className="w-full bg-gradient-to-br from-gray-50 via-white to-gray-50 pt-32 pb-16 px-6 text-center relative flex flex-col items-center justify-center">
        <div className="mx-auto mb-8 p-3 rounded-2xl bg-white shadow-lg border border-gray-100 inline-block animate-fade-in">
          <WealthWiseLogo height={64} />
        </div>
        <h1 className="text-5xl md:text-7xl font-playfair font-bold text-brand-navy mb-6 tracking-tight leading-tight max-w-4xl">
          Recover Your Wealth,<br /> 
          <span className="text-slate-700">Regain Your Peace of Mind</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-6 leading-relaxed">
          WealthWise specializes in <span className="font-semibold text-brand-navy">fund recovery</span> and proactive fraud prevention.<br />
          Trusted experts, transparent process, lasting client security.
        </p>
        <span className="inline-block bg-gray-100 border border-gray-200 px-6 py-3 rounded-full text-gray-700 font-medium text-lg mb-8 shadow-sm">
          Empowering financial recovery and security worldwide
        </span>
        <button
          onClick={() => setOpen(true)}
          className="mt-4 px-10 py-4 rounded-xl bg-brand-emerald hover:bg-brand-emerald-dark text-white text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
        >
          Book a Free Consultation
        </button>
        <img
          src="https://images.unsplash.com/photo-1620712943543-26fc7631b818?auto=format&fit=crop&w=820&q=80"
          alt="Abstract financial data visualization"
          className="w-full max-w-2xl mt-12 rounded-3xl mx-auto shadow-2xl hover:shadow-3xl transition-shadow duration-300 border border-gray-200"
        />
      </section>
      <BookingModal open={open} onOpenChange={setOpen} />
    </>
  );
};

export default HeroSection;
