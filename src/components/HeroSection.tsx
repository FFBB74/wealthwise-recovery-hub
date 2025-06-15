
import BookingModal from "./BookingModal";
import React from "react";
import WealthWiseLogo from "@/components/WealthWiseLogo";

const HeroSection = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <section className="w-full bg-gradient-to-br from-white via-[#f3fafb] to-white pt-32 pb-10 px-4 text-center relative flex flex-col items-center justify-center">
        <div className="mx-auto mb-6 p-2.5 rounded-full bg-white shadow-sm border border-[#d8f2f7] inline-block animate-fade-in">
          <WealthWiseLogo height={64} />
        </div>
        <h1 className="text-4xl md:text-6xl font-playfair font-bold text-[#154864] mb-4 tracking-tight leading-tight">
          Recover Your Wealth,<br /> Regain Your Peace of Mind
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 max-w-2xl mx-auto mb-5">
          WealthWise specializes in <span className="font-semibold text-[#13839d]">fund recovery</span> and proactive fraud prevention.<br />
          Trusted experts, transparent process, lasting client security.
        </p>
        <span className="inline-block bg-[#fafdfe] border border-[#c3ebf2] px-4 py-2 rounded-full text-[#13839d] font-medium text-md mb-6 shadow-sm">
          Empowering financial recovery and security worldwide
        </span>
        <button
          onClick={() => setOpen(true)}
          className="mt-3 px-8 py-3 rounded-lg bg-[#13839d] hover:bg-[#0d5b74] text-white text-lg font-semibold shadow-none transition"
        >
          Book a Free Consultation
        </button>
        <img
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=820&q=80"
          alt="Friendly consultant"
          className="w-full max-w-lg mt-10 rounded-2xl mx-auto shadow hover-scale border border-[#eaf7fa]"
        />
      </section>
      <BookingModal open={open} onOpenChange={setOpen} />
    </>
  );
};

export default HeroSection;
