
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const ContactSection = () => (
  <footer id="contact" className="bg-slate-50 pt-16 pb-8 px-6">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:justify-between gap-8 rounded-3xl border border-slate-200 bg-white shadow-lg px-8 py-12">
      <div>
        <div className="font-playfair text-2xl font-bold mb-6 text-slate-900">Contact WealthWise</div>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Mail size={20} className="text-slate-600" />
            <a href="mailto:info@wealthwise.com" className="text-slate-700 hover:text-slate-900 transition-colors duration-200">info@wealthwise.com</a>
          </div>
          <div className="flex items-center gap-3">
            <Mail size={20} className="text-slate-600" />
            <a href="mailto:recovery@wealthwise.com" className="text-slate-700 hover:text-slate-900 transition-colors duration-200">recovery@wealthwise.com</a>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-bold text-slate-600 text-lg">@</span>
            <a
              href="https://t.me/wealthwiserecoveryhub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-slate-900 transition-colors duration-200"
            >
              @wealthwiserecoveryhub
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Linkedin size={20} className="text-slate-600" />
            <a href="https://linkedin.com/company/wealthwise" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-slate-900 transition-colors duration-200">LinkedIn</a>
          </div>
        </div>
      </div>
      <div>
        <div className="text-xl font-semibold mb-4 text-slate-900 font-playfair">Location & Phone</div>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <MapPin size={20} className="text-slate-600" />
            <span className="text-slate-700">Moscow, Russia (fully remote support)</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={20} className="text-slate-600" />
            <span className="text-slate-700">+7 (495) 123-45-67</span>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-12 text-center text-slate-500 text-sm">
      &copy; {new Date().getFullYear()} WealthWise Financial Recovery. All rights reserved.
    </div>
  </footer>
);

export default ContactSection;
