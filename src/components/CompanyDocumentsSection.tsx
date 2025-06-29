import { FileText, Download } from "lucide-react";

const companyDocuments = [
  {
    name: "Company Profile Document",
    type: "PDF",
    description: "Official introduction and summary of WealthWise services.",
    url: "https://drive.google.com/file/d/your-profile-pdf",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=320&q=80"
  },
  {
    name: "Client Agreement Template (Funds Recovery)",
    type: "DOCX",
    description: "Template agreement used for client onboarding in recovery cases.",
    url: "https://drive.google.com/file/d/your-client-agreement-docx",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=320&q=80"
  },
  {
    name: "Invoice/Receipt Template",
    type: "DOCX",
    description: "Template for issuing invoices and receipts to clients.",
    url: "https://drive.google.com/file/d/your-invoice-template",
    image: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4?auto=format&fit=crop&w=320&q=80"
  },
  {
    name: "Privacy Policy & Disclaimer",
    type: "PDF",
    description: "Legal privacy & disclaimer document for all users and clients.",
    url: "https://drive.google.com/file/d/your-privacy-policy",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=320&q=80"
  },
  {
    name: "Terms of Engagement Contract",
    type: "PDF",
    description: "The full terms and conditions for client engagements.",
    url: "https://drive.google.com/file/d/your-terms-engagement",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=320&q=80"
  },
  {
    name: "Testimonial & Review Templates",
    type: "DOCX",
    description: "Templates to solicit or collect client testimonials/reviews.",
    url: "https://drive.google.com/file/d/your-testimonials-template",
    image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?auto=format&fit=crop&w=320&q=80"
  },
  {
    name: "Affiliate Application Cover Letters (for financial bodies)",
    type: "DOCX",
    description: "Model cover letters for institutional affiliate outreach.",
    url: "https://drive.google.com/file/d/your-affiliate-coverletter",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=320&q=80"
  },
];

const CompanyDocumentsSection = () => (
  <section id="company-documents" className="bg-gradient-to-br from-brand-emerald/10 via-white to-brand-navy/10 py-24 px-6 border-t border-gray-100">
    <div className="max-w-5xl mx-auto">
      <h2 className="font-playfair text-5xl md:text-6xl text-center font-black text-brand-emerald mb-8 tracking-tight drop-shadow-lg">
        Company Documents
      </h2>
      <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto text-xl font-semibold drop-shadow">
        Access important WealthWise documents for your reference and client onboarding. Click to view or download each official document.
      </p>
      <div className="grid gap-10 md:grid-cols-2 animate-fade-in">
        {companyDocuments.map((doc) => (
          <div
            key={doc.name}
            className="flex flex-col md:flex-row items-center bg-white/70 border border-gray-200 rounded-2xl shadow-xl px-6 py-7 gap-6 group hover:scale-105 hover:shadow-brand-gold/30 transition-all duration-200"
          >
            <img
              src={doc.image}
              alt={doc.name + " preview"}
              className="w-32 h-32 object-cover rounded-xl shadow-lg border border-brand-emerald group-hover:border-brand-gold group-hover:scale-110 transition-transform duration-200"
            />
            <div className="flex-1 flex flex-col justify-between h-full">
              <div className="flex items-center gap-4 mb-2">
                <FileText className="text-brand-emerald shrink-0" size={32} />
                <div>
                  <div className="font-black text-brand-navy font-playfair text-lg">{doc.name}</div>
                  <div className="text-sm text-brand-emerald font-semibold">{doc.description}</div>
                </div>
              </div>
              <div className="ml-auto flex mt-3 gap-2">
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-5 py-2 bg-brand-emerald hover:bg-brand-emerald-dark text-white rounded-lg text-base font-bold transition-colors duration-200 shadow group"
                  download
                >
                  <Download className="mr-2 group-hover:animate-bounce" size={20} />
                  Download
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CompanyDocumentsSection;
