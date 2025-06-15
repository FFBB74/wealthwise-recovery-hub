
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const ContactSection = () => (
  <footer id="contact" className="bg-[#28c7d9] text-white pt-12 pb-8 px-4">
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:justify-between gap-7">
      <div>
        <div className="font-playfair text-xl font-bold mb-2">Contact WealthWise</div>
        <div className="mb-1 flex items-center gap-2">
          <Mail size={18} />{" "}
          <a href="mailto:info@wealthwise.com" className="underline hover:text-white/90">info@wealthwise.com</a>
        </div>
        <div className="mb-1 flex items-center gap-2">
          <Mail size={18} />{" "}
          <a href="mailto:recovery@wealthwise.com" className="underline hover:text-white/90">recovery@wealthwise.com</a>
        </div>
        <div className="mb-1 flex items-center gap-2">
          <span className="font-bold text-white/90">@</span>
          <a
            href="https://t.me/WealthWiseSupport"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white/90"
          >
            @WealthWiseSupport
          </a>
        </div>
        <div className="mb-1 flex items-center gap-2">
          <Linkedin size={18} />{" "}
          <a href="https://linkedin.com/company/wealthwise" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/90">LinkedIn</a>
        </div>
      </div>
      <div>
        <div className="text-lg font-semibold mb-2">Location & Phone</div>
        <div className="flex items-center gap-2 mb-1">
          <MapPin size={18} />
          <span>Moscow, Russia (fully remote support)</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone size={18} />
          <span>+7 (495) 123-45-67</span>
        </div>
      </div>
    </div>
    <div className="mt-8 text-center text-white/70 text-xs">
      &copy; {new Date().getFullYear()} WealthWise Financial Recovery. All rights reserved.
    </div>
  </footer>
);

export default ContactSection;
