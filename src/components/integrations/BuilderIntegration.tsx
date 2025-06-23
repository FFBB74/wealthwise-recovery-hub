
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Layers, CheckCircle, Eye, BarChart3 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BuilderIntegration = () => {
  const [isInitializing, setIsInitializing] = useState(false);
  const { toast } = useToast();

  const handleVisualEditor = () => {
    setIsInitializing(true);
    
    setTimeout(() => {
      setIsInitializing(false);
      toast({
        title: "Visual Editor Ready",
        description: "Start building with Builder.io's visual development platform",
      });
      window.open('https://builder.io', '_blank');
    }, 1500);
  };

  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
            <Layers className="text-white" size={24} />
          </div>
          <div>
            <CardTitle className="text-xl">Builder.io</CardTitle>
            <CardDescription>Visual development platform</CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
          <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
            <CheckCircle className="text-purple-600" size={16} />
            Platform Capabilities
          </h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Visual page builder</li>
            <li>• A/B testing & optimization</li>
            <li>• Headless CMS integration</li>
            <li>• Performance analytics</li>
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="bg-gray-50 p-3 rounded text-center">
            <Eye className="mx-auto mb-1 text-gray-600" size={20} />
            <div className="text-xs font-medium">Visual Editor</div>
          </div>
          <div className="bg-gray-50 p-3 rounded text-center">
            <BarChart3 className="mx-auto mb-1 text-gray-600" size={20} />
            <div className="text-xs font-medium">A/B Testing</div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Button 
            onClick={handleVisualEditor}
            disabled={isInitializing}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white"
          >
            {isInitializing ? (
              "Initializing..."
            ) : (
              <>
                <Layers className="mr-2" size={16} />
                Launch Builder
              </>
            )}
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => window.open('https://www.builder.io/docs', '_blank')}
            className="w-full"
          >
            <ExternalLink className="mr-2" size={16} />
            View Documentation
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BuilderIntegration;
