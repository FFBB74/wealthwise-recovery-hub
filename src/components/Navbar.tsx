
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import WealthWiseLogo from "@/components/WealthWiseLogo";
import { useState } from "react";
import BookingModal from "./BookingModal";

const Navbar = () => {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm fixed top-0 left-0 z-30">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-20">
        <div className="flex items-center gap-3">
          <div className="bg-white shadow p-1.5 rounded-full border border-[#e7f9fc]">
            <WealthWiseLogo height={38} />
          </div>
          <span className="font-playfair text-2xl font-bold text-[#13839d] tracking-wider ml-2">WealthWise</span>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/" className="font-medium text-slate-700 hover:text-[#13839d] transition">Home</Link>
          <a href="#services" className="font-medium text-slate-700 hover:text-[#13839d] transition">Services</a>
          <button
            className="font-medium text-slate-700 hover:text-[#13839d] transition"
            onClick={() => setShowBooking(true)}
          >
            Booking
          </button>
          <a href="#contact" className="font-medium text-slate-700 hover:text-[#13839d] transition">Contact</a>
          <Button
            onClick={() => setShowBooking(true)}
            className="ml-4 bg-[#13839d] hover:bg-[#0d5b74] font-semibold text-white px-6 py-2 rounded-lg text-base shadow-none"
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
