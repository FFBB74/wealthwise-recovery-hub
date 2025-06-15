
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const ContactSection = () => (
  <footer id="contact" className="bg-gradient-to-tr from-[#e3f5fb] to-[#fafdfe] pt-12 pb-8 px-4">
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:justify-between gap-7 rounded-2xl border border-[#e3f5fb] bg-white/90 shadow-lg px-4 py-8">
      <div>
        <div className="font-playfair text-xl font-bold mb-4 text-[#183753]">Contact WealthWise</div>
        <div className="mb-2 flex items-center gap-2">
          <Mail size={18} className="text-[#13839d]" />
          <a href="mailto:info@wealthwise.com" className="underline hover:text-[#0d5b74] transition">info@wealthwise.com</a>
        </div>
        <div className="mb-2 flex items-center gap-2">
          <Mail size={18} className="text-[#13839d]" />
          <a href="mailto:recovery@wealthwise.com" className="underline hover:text-[#0d5b74] transition">recovery@wealthwise.com</a>
        </div>
        <div className="mb-2 flex items-center gap-2">
          <span className="font-bold text-[#13839d]">@</span>
          <a
            href="https://t.me/wealthwiserecoveryhub"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#0d5b74] transition"
          >
            @wealthwiserecoveryhub
          </a>
        </div>
        <div className="mb-2 flex items-center gap-2">
          <Linkedin size={18} className="text-[#13839d]" />
          <a href="https://linkedin.com/company/wealthwise" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#0d5b74] transition">LinkedIn</a>
        </div>
      </div>
      <div>
        <div className="text-lg font-semibold mb-2 text-[#183753]">Location & Phone</div>
        <div className="flex items-center gap-2 mb-2">
          <MapPin size={18} className="text-[#13839d]" />
          <span>Moscow, Russia (fully remote support)</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone size={18} className="text-[#13839d]" />
          <span>+7 (495) 123-45-67</span>
        </div>
      </div>
    </div>
    <div className="mt-10 text-center text-[#a1bcc4] text-xs">
      &copy; {new Date().getFullYear()} WealthWise Financial Recovery. All rights reserved.
    </div>
  </footer>
);

export default ContactSection;
