
import { Button } from "@/components/ui/button";
import { ExternalLink, Figma } from "lucide-react";

const FigmaIntegration = () => {
  const handleFigmaOpen = () => {
    // Open Figma.dev
    window.open('https://figma.dev', '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
          <Figma className="text-white" size={20} />
        </div>
        <div>
          <h3 className="font-bold text-lg text-gray-900">Figma.dev</h3>
          <p className="text-sm text-gray-600">Design to code workflow</p>
        </div>
      </div>
      <p className="text-gray-700 mb-4">
        Transform your Figma designs into production-ready code with Figma Dev Mode.
      </p>
      <Button 
        onClick={handleFigmaOpen}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white"
      >
        <ExternalLink className="mr-2" size={16} />
        Open Figma Dev
      </Button>
    </div>
  );
};

export default FigmaIntegration;
