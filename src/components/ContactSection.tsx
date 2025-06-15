
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const ContactSection = () => (
  <footer id="contact" className="relative bg-gradient-to-br from-brand-emerald/10 via-white to-brand-navy/10 pt-20 pb-10 px-6 overflow-hidden">
    {/* Modern watermark/illustration in background */}
    <div className="absolute inset-0 pointer-events-none">
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
        alt=""
        className="w-full h-full object-cover opacity-20"
        aria-hidden="true"
      />
    </div>
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:justify-between gap-10 rounded-3xl border border-gray-200 bg-white/90 shadow-2xl px-10 py-14 relative z-10">
      <div>
        <div className="font-playfair text-3xl font-black mb-7 text-brand-emerald drop-shadow">Contact WealthWise</div>
        <div className="space-y-6 font-semibold">
          <div className="flex items-center gap-4">
            <Mail size={24} className="text-brand-gold" />
            <a href="mailto:info@wealthwise.com" className="text-brand-navy hover:text-brand-emerald transition-colors duration-200">info@wealthwise.com</a>
          </div>
          <div className="flex items-center gap-4">
            <Mail size={24} className="text-brand-gold" />
            <a href="mailto:recovery@wealthwise.com" className="text-brand-navy hover:text-brand-emerald transition-colors duration-200">recovery@wealthwise.com</a>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-black text-brand-emerald text-2xl">@</span>
            <a
              href="https://t.me/wealthwiserecoveryhub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-navy hover:text-brand-emerald transition-colors duration-200"
            >
              @wealthwiserecoveryhub
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Linkedin size={24} className="text-brand-gold" />
            <a href="https://linkedin.com/company/wealthwise" target="_blank" rel="noopener noreferrer" className="text-brand-navy hover:text-brand-emerald transition-colors duration-200 font-semibold">LinkedIn</a>
          </div>
        </div>
      </div>
      <div>
        <div className="text-2xl font-black mb-6 text-brand-emerald font-playfair drop-shadow">Location &amp; Phone</div>
        <div className="space-y-5 font-semibold">
          <div className="flex items-center gap-4">
            <MapPin size={24} className="text-brand-gold" />
            <span className="text-brand-navy">Moscow, Russia (fully remote support)</span>
          </div>
          <div className="flex items-center gap-4">
            <Phone size={24} className="text-brand-gold" />
            <span className="text-brand-navy">+7 (495) 123-45-67</span>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-14 text-center text-brand-gold text-lg z-10 font-bold drop-shadow relative">
      &copy; {new Date().getFullYear()} WealthWise Financial Recovery.&nbsp;
      <span className="font-black text-brand-navy">All rights reserved.</span>
    </div>
  </footer>
);

export default ContactSection;
