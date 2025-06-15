
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import WealthWiseLogo from "@/components/WealthWiseLogo";
import { useState } from "react";
import BookingModal from "./BookingModal";

const Navbar = () => {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-30">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-20">
        <div className="flex items-center gap-3">
          <WealthWiseLogo height={40} />
          <span className="font-playfair text-xl font-bold text-[#19889a] tracking-wide ml-1">WealthWise</span>
        </div>
        <div className="flex items-center gap-8">
          <Link to="/" className="font-medium text-gray-700 hover:text-[#28c7d9] transition">Home</Link>
          <a href="#services" className="font-medium text-gray-700 hover:text-[#28c7d9] transition">Services</a>
          <button
            className="font-medium text-gray-700 hover:text-[#28c7d9] transition"
            onClick={() => setShowBooking(true)}
          >
            Booking
          </button>
          <a href="#contact" className="font-medium text-gray-700 hover:text-[#28c7d9] transition">Contact</a>
          <Button
            onClick={() => setShowBooking(true)}
            className="ml-4 bg-[#28c7d9] hover:bg-[#22b7c6] font-semibold text-white px-6 py-2 rounded-lg text-base shadow"
          >
            Book a Free Consultation
          </Button>
        </div>
      </div>
      <BookingModal open={showBooking} onOpenChange={setShowBooking} />
    </nav>
  );
};

export default Navbar;
