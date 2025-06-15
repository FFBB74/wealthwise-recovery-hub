
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import WealthWiseLogo from "@/components/WealthWiseLogo";
import { useState } from "react";
import BookingModal from "./BookingModal";

const Navbar = () => {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <nav className="w-full bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-sm fixed top-0 left-0 z-30">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
        <div className="flex items-center gap-4">
          <div className="bg-white shadow-lg p-2 rounded-xl border border-slate-100">
            <WealthWiseLogo height={36} />
          </div>
          <span className="font-playfair text-2xl font-bold text-slate-800 tracking-wide">WealthWise</span>
        </div>
        <div className="flex items-center gap-8">
          <Link to="/" className="font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200">Home</Link>
          <a href="#services" className="font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200">Services</a>
          <button
            className="font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200"
            onClick={() => setShowBooking(true)}
          >
            Booking
          </button>
          <a href="#contact" className="font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200">Contact</a>
          <Button
            onClick={() => setShowBooking(true)}
            className="ml-4 bg-slate-900 hover:bg-slate-800 font-semibold text-white px-6 py-2.5 rounded-lg text-sm shadow-none transition-colors duration-200"
          >
            Book Consultation
          </Button>
        </div>
      </div>
      <BookingModal open={showBooking} onOpenChange={setShowBooking} />
    </nav>
  );
};

export default Navbar;
