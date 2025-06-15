
import { Mail, MapPin, CreditCard, Globe, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Placeholder affiliate company data
const affiliateCompanies = [
  {
    name: "CryptoPay Solutions",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Bitcoin_logo.svg",
    url: "https://bitcoin.org/en/",
    description: "Secure crypto transactions worldwide.",
  },
  {
    name: "GiftCard Express",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Amazon_icon.svg",
    url: "https://www.amazon.com/gift-cards/",
    description: "Popular gift cards for global payments.",
  },
  {
    name: "MoneroPrivacy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Monero-Logo.svg",
    url: "https://www.getmonero.org/",
    description: "Ultimate anonymity with Monero.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-[#28c7d9]/[0.91] py-0">
      {/* Header with hero image */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto pt-8 pb-12 px-4">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 font-playfair text-[#22223b] leading-tight drop-shadow-md">
            Anonymous Payments Made Easy
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 md:mb-10">
            Build privacy-first financial freedom with secure, untraceable payments using cryptocurrency and gift cards.
          </p>
          <Link to="/payments">
            <Button className="bg-white text-[#28c7d9] hover:bg-gray-100 font-semibold px-8 py-4 text-xl shadow-md">
              <CreditCard className="h-6 w-6 mr-2" />
              Try Anonymous Payments
            </Button>
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80"
            alt="Laptop anonymity"
            className="rounded-2xl shadow-xl w-full max-w-xs md:max-w-md"
          />
        </div>
      </div>

      {/* Affiliate Companies */}
      <div className="bg-white py-10 px-4">
        <div className="max-w-4xl mx-auto mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 font-playfair text-[#22223b]">
            Our Affiliate Companies
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            We collaborate with global leaders to provide seamless, anonymous, and convenient payments. Explore our trusted affiliates:
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
          {affiliateCompanies.map((company) => (
            <a
              key={company.name}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-50 transition hover:bg-[#e3f7fa] border rounded-xl shadow p-6 flex flex-col items-center"
            >
              <img src={company.logo} alt={company.name} className="w-16 h-16 mb-3 rounded-full object-contain bg-white border" />
              <span className="text-lg font-semibold mb-1 group-hover:text-[#28c7d9] transition">
                {company.name}
              </span>
              <span className="text-gray-500 text-sm mb-2 text-center">{company.description}</span>
              <span className="flex items-center mt-2 text-[#28c7d9] text-sm font-medium">
                Visit <ChevronRight className="h-4 w-4 ml-1" />
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Photos grid */}
      <div className="bg-gradient-to-br from-[#28c7d9]/[0.15] to-[#fff] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center font-playfair text-[#22223b]">Get Inspired</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=350&q=80"
              alt="Tech"
              className="rounded-xl shadow-xl"
            />
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=350&q=80"
              alt="Code"
              className="rounded-xl shadow-xl"
            />
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=350&q=80"
              alt="Laptop Lady"
              className="rounded-xl shadow-xl"
            />
            <img
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=350&q=80"
              alt="Bed Laptop"
              className="rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Contact section */}
      <div className="bg-[#28c7d9] py-10 px-4 text-white">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <div className="inline-flex flex-col items-start gap-2 justify-center mx-auto">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:info.wealthwise@proton.me" className="text-base underline hover:text-white/90">
                info.wealthwise@proton.me
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <p className="text-base">
                Moscow, Russia
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
