
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Globe, CheckCircle, Copy, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const NetlifyIntegration = () => {
  const [isDeploying, setIsDeploying] = useState(false);
  const { toast } = useToast();

  const handleDragDrop = () => {
    setIsDeploying(true);
    
    setTimeout(() => {
      setIsDeploying(false);
      toast({
        title: "Ready for Deployment",
        description: "Navigate to Netlify Drop to deploy your built project",
      });
      window.open('https://app.netlify.com/drop', '_blank');
    }, 1000);
  };

  const copyBuildCommand = () => {
    navigator.clipboard.writeText("npm run build");
    toast({
      title: "Copied!",
      description: "Build command copied to clipboard",
    });
  };

  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center">
            <Globe className="text-white" size={24} />
          </div>
          <div>
            <CardTitle className="text-xl">Netlify</CardTitle>
            <CardDescription>Modern web development platform</CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
          <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
            <CheckCircle className="text-teal-600" size={16} />
            Platform Features
          </h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Serverless functions</li>
            <li>• Form handling & submissions</li>
            <li>• Split testing & analytics</li>
            <li>• CDN & edge processing</li>
          </ul>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Build Command:</label>
          <div className="flex items-center justify-between bg-gray-100 p-2 rounded">
            <code className="text-sm">npm run build</code>
            <Button
              variant="ghost"
              size="sm"
              onClick={copyBuildCommand}
              className="h-8 w-8 p-0"
            >
              <Copy size={14} />
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Button 
            onClick={handleDragDrop}
            disabled={isDeploying}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white"
          >
            {isDeploying ? (
              "Preparing..."
            ) : (
              <>
                <Upload className="mr-2" size={16} />
                Deploy via Drop
              </>
            )}
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => window.open('https://app.netlify.com', '_blank')}
            className="w-full"
          >
            <ExternalLink className="mr-2" size={16} />
            Open Netlify Dashboard
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default NetlifyIntegration;
