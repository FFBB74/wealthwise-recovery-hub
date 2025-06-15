
import { FileText, Download } from "lucide-react";

const companyDocuments = [
  {
    name: "Company Profile Document",
    type: "PDF",
    description: "Official introduction and summary of WealthWise services.",
    url: "https://drive.google.com/file/d/your-profile-pdf", // Change this to your real link!
  },
  {
    name: "Client Agreement Template (Funds Recovery)",
    type: "DOCX",
    description: "Template agreement used for client onboarding in recovery cases.",
    url: "https://drive.google.com/file/d/your-client-agreement-docx", // Change this!
  },
  {
    name: "Invoice/Receipt Template",
    type: "DOCX",
    description: "Template for issuing invoices and receipts to clients.",
    url: "https://drive.google.com/file/d/your-invoice-template", // Change this!
  },
  {
    name: "Privacy Policy & Disclaimer",
    type: "PDF",
    description: "Legal privacy & disclaimer document for all users and clients.",
    url: "https://drive.google.com/file/d/your-privacy-policy", // Change this!
  },
  {
    name: "Terms of Engagement Contract",
    type: "PDF",
    description: "The full terms and conditions for client engagements.",
    url: "https://drive.google.com/file/d/your-terms-engagement", // Change this!
  },
  {
    name: "Testimonial & Review Templates",
    type: "DOCX",
    description: "Templates to solicit or collect client testimonials/reviews.",
    url: "https://drive.google.com/file/d/your-testimonials-template", // Change this!
  },
  {
    name: "Affiliate Application Cover Letters (for financial bodies)",
    type: "DOCX",
    description: "Model cover letters for institutional affiliate outreach.",
    url: "https://drive.google.com/file/d/your-affiliate-coverletter", // Change this!
  },
];

const CompanyDocumentsSection = () => (
  <section id="company-documents" className="bg-white py-20 px-6 border-t border-gray-100">
    <div className="max-w-4xl mx-auto">
      <h2 className="font-playfair text-4xl md:text-5xl text-center font-bold text-brand-navy mb-4 tracking-tight">
        Company Documents
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
        Access important WealthWise documents for your reference and client onboarding. Click to view or download each official document.
      </p>
      <div className="grid gap-8">
        {companyDocuments.map((doc) => (
          <div
            key={doc.name}
            className="flex flex-col md:flex-row items-start md:items-center bg-gray-50 border border-gray-200 rounded-xl shadow-sm px-6 py-5 gap-4"
          >
            <div className="flex items-center gap-3 mb-2 md:mb-0">
              <FileText className="text-brand-emerald shrink-0" size={28} />
              <div>
                <div className="font-semibold text-brand-navy">{doc.name}</div>
                <div className="text-sm text-gray-500">{doc.description}</div>
              </div>
            </div>
            <div className="ml-auto flex gap-2">
              <a
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-brand-emerald hover:bg-brand-emerald-dark text-white rounded-lg text-sm font-medium transition-colors duration-200 shadow group"
                download
              >
                <Download className="mr-2 group-hover:animate-bounce" size={18} />
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CompanyDocumentsSection;
