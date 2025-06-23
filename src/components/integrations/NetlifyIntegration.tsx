
import { Button } from "@/components/ui/button";
import { ExternalLink, Globe } from "lucide-react";

const NetlifyIntegration = () => {
  const handleNetlifyDeploy = () => {
    // Open Netlify deployment page
    window.open('https://app.netlify.com/drop', '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
          <Globe className="text-white" size={20} />
        </div>
        <div>
          <h3 className="font-bold text-lg text-gray-900">Netlify</h3>
          <p className="text-sm text-gray-600">Modern web development platform</p>
        </div>
      </div>
      <p className="text-gray-700 mb-4">
        Deploy and host your website with Netlify's powerful development platform.
      </p>
      <Button 
        onClick={handleNetlifyDeploy}
        className="w-full bg-teal-600 hover:bg-teal-700 text-white"
      >
        <ExternalLink className="mr-2" size={16} />
        Deploy to Netlify
      </Button>
    </div>
  );
};

export default NetlifyIntegration;
