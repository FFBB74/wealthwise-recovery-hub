
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Zap, CheckCircle, Copy, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const VercelIntegration = () => {
  const [isDeploying, setIsDeploying] = useState(false);
  const { toast } = useToast();

  const handleQuickDeploy = async () => {
    setIsDeploying(true);
    
    // Simulate deployment process
    setTimeout(() => {
      setIsDeploying(false);
      toast({
        title: "Deployment Initiated",
        description: "Your project has been queued for deployment on Vercel",
      });
    }, 2000);
  };

  const copyDeployCommand = () => {
    navigator.clipboard.writeText("npx vercel --prod");
    toast({
      title: "Copied!",
      description: "Deploy command copied to clipboard",
    });
  };

  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
            <Zap className="text-white" size={24} />
          </div>
          <div>
            <CardTitle className="text-xl">Vercel</CardTitle>
            <CardDescription>Deploy instantly with zero configuration</CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
            <CheckCircle className="text-green-500" size={16} />
            Quick Deploy Features
          </h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Global edge network deployment</li>
            <li>• Automatic HTTPS certificates</li>
            <li>• Git integration & CI/CD</li>
            <li>• Preview deployments</li>
          </ul>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between bg-gray-100 p-2 rounded">
            <code className="text-sm">npx vercel --prod</code>
            <Button
              variant="ghost"
              size="sm"
              onClick={copyDeployCommand}
              className="h-8 w-8 p-0"
            >
              <Copy size={14} />
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Button 
            onClick={handleQuickDeploy}
            disabled={isDeploying}
            className="w-full bg-black hover:bg-gray-800 text-white"
          >
            {isDeploying ? (
              "Deploying..."
            ) : (
              <>
                <Zap className="mr-2" size={16} />
                Quick Deploy
              </>
            )}
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => window.open('https://vercel.com/new', '_blank')}
            className="w-full"
          >
            <ExternalLink className="mr-2" size={16} />
            Open Vercel Dashboard
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default VercelIntegration;
