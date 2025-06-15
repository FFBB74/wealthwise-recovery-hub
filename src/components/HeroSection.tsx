
import BookingModal from "./BookingModal";
import React from "react";
import { useState } from "react";
import WealthWiseLogo from "@/components/WealthWiseLogo";

const HeroSection = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <section className="w-full bg-gradient-to-br from-[#e0f9fc] to-[#fff] pt-32 pb-10 px-4 text-center relative overflow-hidden flex flex-col items-center justify-center">
        <WealthWiseLogo height={72} />
        <h1 className="text-4xl md:text-6xl mt-3 font-playfair font-extrabold text-[#22223b] drop-shadow-sm mb-2">Welcome to WealthWise</h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-xl mx-auto mb-3">
          We help you <span className="font-semibold text-[#28c7d9]">recover lost funds</span> and protect your financial well-being.<br />
          Your trust, transparency, and success are our mission.
        </p>
        <span className="inline-block bg-white border border-[#28c7d9] px-4 py-2 rounded-full text-[#28c7d9] font-bold text-lg mt-2 mb-6 shadow-sm">
          Dedicated to recovering your wealth and preventing financial fraud
        </span>
        <button
          onClick={() => setOpen(true)}
          className="mt-3 px-8 py-3 rounded-lg bg-[#28c7d9] hover:bg-[#21aec1] text-white text-lg font-semibold shadow"
        >
          Book a Free Consultation
        </button>
        <img
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=820&q=80"
          alt="Friendly consultant"
          className="w-full max-w-lg mt-10 rounded-2xl mx-auto shadow-xl"
        />
      </section>
      <BookingModal open={open} onOpenChange={setOpen} />
    </>
  );
};

export default HeroSection;
