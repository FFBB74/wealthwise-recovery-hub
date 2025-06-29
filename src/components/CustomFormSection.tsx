import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const CustomFormSection = () => {
  const handleDownloadBlankForm = () => {
    const formContent = `WealthWise Contact Form
    
Please fill out the following information:

Name: _________________________________

Email: _________________________________

Phone: _________________________________

Message/Inquiry:
___________________________________________
___________________________________________
___________________________________________
___________________________________________

How did you hear about us? _________________

Preferred contact method: ___________________

Best time to contact: ______________________

Thank you for your interest in WealthWise services!
Please submit this form via email or bring it to our office.`;

    const blob = new Blob([formContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'WealthWise_Contact_Form.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-brand-emerald/5 to-brand-navy/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Download Our Contact Form
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
            Prefer to fill out a form offline? Download our blank contact form and submit it at your convenience.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <FileText className="text-brand-emerald" size={48} />
              <div>
                <h3 className="text-2xl font-bold text-brand-navy mb-2">
                  WealthWise Contact Form
                </h3>
                <p className="text-gray-600">
                  Complete printable form with all necessary fields
                </p>
              </div>
            </div>
            
            <Button
              onClick={handleDownloadBlankForm}
              size="lg"
              className="bg-brand-emerald hover:bg-brand-emerald/90 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <Download className="mr-2" size={24} />
              Download Blank Form
            </Button>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-gray-600 text-center">
              <strong>How to submit:</strong> Fill out the downloaded form and email it to us, or bring it to our office for in-person consultation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomFormSection;
