
import { Button } from "@/components/ui/button";
import { ExternalLink, Zap } from "lucide-react";

const VercelIntegration = () => {
  const handleVercelDeploy = () => {
    // Open Vercel deployment page
    window.open('https://vercel.com/new', '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
          <Zap className="text-white" size={20} />
        </div>
        <div>
          <h3 className="font-bold text-lg text-gray-900">Vercel</h3>
          <p className="text-sm text-gray-600">Deploy instantly with zero configuration</p>
        </div>
      </div>
      <p className="text-gray-700 mb-4">
        Deploy your website to Vercel's global edge network for lightning-fast performance.
      </p>
      <Button 
        onClick={handleVercelDeploy}
        className="w-full bg-black hover:bg-gray-800 text-white"
      >
        <ExternalLink className="mr-2" size={16} />
        Deploy to Vercel
      </Button>
    </div>
  );
};

export default VercelIntegration;
