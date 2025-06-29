"use client"

import BookingModal from "./BookingModal"
import React from "react"
import WealthWiseLogo from "@/components/WealthWiseLogo"

const HeroSection = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <section className="w-full relative bg-gradient-to-br from-gray-50 via-white to-slate-200 pt-36 pb-20 px-6 flex flex-col items-center justify-center overflow-x-hidden shadow-lg">
        {/* Stylish radiant overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-gradient-to-br from-emerald-100 via-white/80 to-brand-gold/10 pointer-events-none animate-fade-in"
            aria-hidden="true"
          />
          <div
            className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full bg-brand-emerald/10 blur-3xl opacity-60 z-0"
            aria-hidden="true"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center w-full">
          <div className="mx-auto mb-7 p-3 rounded-2xl bg-white shadow-xl border border-gray-100 inline-block animate-fade-in">
            <WealthWiseLogo height={80} />
          </div>
          <h1 className="text-5xl md:text-7xl font-playfair font-black text-brand-navy mb-7 drop-shadow-xl tracking-tight leading-tight max-w-5xl uppercase">
            <span className="bg-gradient-to-br from-brand-emerald via-brand-gold to-brand-navy bg-clip-text text-transparent animate-fade-in">
              Recover Your Wealth,
            </span>
            <br />
            <span className="text-slate-800 font-playfair tracking-tight leading-tight block opacity-90">
              Regain{" "}
              <span className="underline decoration-wavy decoration-brand-gold decoration-4">Your Peace of Mind</span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-7 leading-relaxed font-semibold shadow-sm bg-white/70 rounded-lg px-4 py-2 animate-fade-in">
            WealthWise specializes in{" "}
            <span className="font-extrabold text-brand-emerald drop-shadow">fund recovery</span> and proactive fraud
            prevention.
            <br />
            Trusted experts, transparent process, lasting client security.
          </p>
          <span className="inline-block bg-gradient-to-r from-brand-gold/20 to-emerald-100/60 border border-gray-200 px-8 py-3 rounded-full text-brand-navy font-bold text-lg mb-8 shadow-lg animate-fade-in">
            Empowering financial recovery &amp; security worldwide
          </span>
          <button
            onClick={() => setOpen(true)}
            className="mt-2 px-10 py-4 rounded-2xl bg-brand-emerald bg-gradient-to-tr from-brand-emerald to-brand-gold hover:from-brand-gold/80 hover:to-brand-emerald-dark text-white text-xl font-black shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:scale-105"
          >
            Book a Free Consultation
          </button>
          {/* Enhanced theme-based hero image with additional branded image */}
          <div className="flex flex-col md:flex-row gap-8 mt-12 max-w-6xl mx-auto">
            <img
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=960&q=80"
              alt="Confident woman using laptop - Wealth Recovery"
              className="w-full md:w-1/2 rounded-3xl shadow-3xl border-2 border-gray-200 hover:shadow-3xl transition-shadow duration-300 object-cover"
            />
            <img
              src="/lovable-uploads/1edbfa1d-ede9-40ff-a9a3-18390acc6c94.png"
              alt="WealthWise Recovery Hub - Digital Security"
              className="w-full md:w-1/2 rounded-3xl shadow-3xl border-2 border-gray-200 hover:shadow-3xl transition-shadow duration-300 object-cover"
            />
          </div>
        </div>
      </section>
      <BookingModal open={open} onOpenChange={setOpen} />
    </>
  )
}

export default HeroSection
