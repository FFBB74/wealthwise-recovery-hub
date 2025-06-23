
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Figma, CheckCircle, Code, Palette } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FigmaIntegration = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  const { toast } = useToast();

  const handleDevMode = () => {
    setIsConnecting(true);
    
    setTimeout(() => {
      setIsConnecting(false);
      toast({
        title: "Dev Mode Ready",
        description: "Access design specs and assets in Figma Dev Mode",
      });
      window.open('https://figma.dev', '_blank');
    }, 1500);
  };

  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
            <Figma className="text-white" size={24} />
          </div>
          <div>
            <CardTitle className="text-xl">Figma Dev</CardTitle>
            <CardDescription>Design to code workflow</CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
          <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
            <CheckCircle className="text-orange-600" size={16} />
            Dev Mode Benefits
          </h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• CSS code generation</li>
            <li>• Asset export automation</li>
            <li>• Design token extraction</li>
            <li>• Component specifications</li>
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="bg-gray-50 p-3 rounded text-center">
            <Code className="mx-auto mb-1 text-gray-600" size={20} />
            <div className="text-xs font-medium">Code Export</div>
          </div>
          <div className="bg-gray-50 p-3 rounded text-center">
            <Palette className="mx-auto mb-1 text-gray-600" size={20} />
            <div className="text-xs font-medium">Design Tokens</div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Button 
            onClick={handleDevMode}
            disabled={isConnecting}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white"
          >
            {isConnecting ? (
              "Connecting..."
            ) : (
              <>
                <Code className="mr-2" size={16} />
                Launch Dev Mode
              </>
            )}
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => window.open('https://www.figma.com/dev-mode/', '_blank')}
            className="w-full"
          >
            <ExternalLink className="mr-2" size={16} />
            Learn Dev Mode
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FigmaIntegration;
