
import { Button } from "@/components/ui/button";
import { ExternalLink, Layers } from "lucide-react";

const BuilderIntegration = () => {
  const handleBuilderOpen = () => {
    // Open Builder.io
    window.open('https://builder.io', '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
          <Layers className="text-white" size={20} />
        </div>
        <div>
          <h3 className="font-bold text-lg text-gray-900">Builder.io</h3>
          <p className="text-sm text-gray-600">Visual development platform</p>
        </div>
      </div>
      <p className="text-gray-700 mb-4">
        Create and optimize digital experiences with Builder's visual development platform.
      </p>
      <Button 
        onClick={handleBuilderOpen}
        className="w-full bg-purple-600 hover:bg-purple-700 text-white"
      >
        <ExternalLink className="mr-2" size={16} />
        Open Builder.io
      </Button>
    </div>
  );
};

export default BuilderIntegration;
