
import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type BookingModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const BookingModal: React.FC<BookingModalProps> = ({ open, onOpenChange }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [preferred, setPreferred] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onOpenChange(false);
      setTimeout(() => setSubmitted(false), 500);
      setName("");
      setEmail("");
      setPreferred("");
      setMessage("");
    }, 2100);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md w-full bg-white border border-gray-200 shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-playfair text-gray-900">Book a Free Consultation</DialogTitle>
        </DialogHeader>
        {!submitted ? (
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <input
              required
              className="border border-gray-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all duration-200"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              required
              type="email"
              className="border border-gray-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all duration-200"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              className="border border-gray-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all duration-200"
              placeholder="Preferred Date & Time"
              value={preferred}
              onChange={(e) => setPreferred(e.target.value)}
            />
            <textarea
              className="border border-gray-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all duration-200 resize-none"
              placeholder="Reason for consultation (optional)"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
            />
            <Button
              type="submit"
              className="bg-teal-700 hover:bg-teal-800 text-white font-semibold py-3 px-6 rounded-lg shadow-lg text-base transition-all duration-200 hover:shadow-xl"
            >
              Book Now
            </Button>
          </form>
        ) : (
          <div className="text-center py-8">
            <div className="text-3xl text-gray-900 mb-2 font-bold font-playfair">Thank you!</div>
            <div className="text-base text-gray-700 mb-3 leading-relaxed">Your request is received.<br />Our team will contact you within 24 hours to confirm your appointment.</div>
            <div className="text-sm text-gray-500">Need urgent help? <a href="mailto:info@wealthwise.com" className="text-teal-700 hover:text-teal-600 transition-colors duration-200">Email us</a>.</div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
