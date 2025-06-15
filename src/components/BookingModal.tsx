
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
      <DialogContent className="max-w-md w-full">
        <DialogHeader>
          <DialogTitle>Book a Free Consultation</DialogTitle>
        </DialogHeader>
        {!submitted ? (
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              required
              className="border border-gray-200 rounded px-4 py-2 text-base"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              required
              type="email"
              className="border border-gray-200 rounded px-4 py-2 text-base"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              className="border border-gray-200 rounded px-4 py-2 text-base"
              placeholder="Preferred Date & Time"
              value={preferred}
              onChange={(e) => setPreferred(e.target.value)}
            />
            <textarea
              className="border border-gray-200 rounded px-4 py-2 text-base"
              placeholder="Reason for consultation (optional)"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
            />
            <Button
              type="submit"
              className="bg-[#28c7d9] hover:bg-[#21aec1] text-white font-semibold py-2 px-6 rounded shadow-lg text-base"
            >
              Book Now
            </Button>
          </form>
        ) : (
          <div className="text-center py-6">
            <div className="text-2xl text-[#28c7d9] mb-1 font-bold">Thank you!</div>
            <div className="text-base text-gray-700 mb-2">Your request is received.<br />Our team will contact you within 24 hours to confirm your appointment.</div>
            <div className="text-sm text-gray-400">Need urgent help? <a href="mailto:info@wealthwise.com" className="underline">Email us</a>.</div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
