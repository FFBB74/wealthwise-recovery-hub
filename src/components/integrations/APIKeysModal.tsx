
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Key, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface APIKeysModalProps {
  onKeysUpdate: (keys: {
    vercel?: string;
    figma?: string;
    netlify?: string;
    builder?: string;
  }) => void;
}

const APIKeysModal = ({ onKeysUpdate }: APIKeysModalProps) => {
  const [keys, setKeys] = useState({
    vercel: localStorage.getItem('vercel_token') || '',
    figma: localStorage.getItem('figma_token') || '',
    netlify: localStorage.getItem('netlify_token') || '',
    builder: localStorage.getItem('builder_token') || '',
  });
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleSave = () => {
    // Save to localStorage
    Object.entries(keys).forEach(([key, value]) => {
      if (value) {
        localStorage.setItem(`${key}_token`, value);
      }
    });
    
    onKeysUpdate(keys);
    setOpen(false);
    toast({
      title: "API Keys Saved",
      description: "Your API keys have been saved locally and integrations are now active",
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="mb-6">
          <Key className="mr-2" size={16} />
          Configure API Keys
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Configure Platform APIs</DialogTitle>
        </DialogHeader>
        
        <Tabs defaultValue="vercel" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="vercel">Vercel</TabsTrigger>
            <TabsTrigger value="figma">Figma</TabsTrigger>
            <TabsTrigger value="netlify">Netlify</TabsTrigger>
            <TabsTrigger value="builder">Builder</TabsTrigger>
          </TabsList>
          
          <TabsContent value="vercel" className="space-y-4">
            <div>
              <Label htmlFor="vercel-token">Vercel Token</Label>
              <Input
                id="vercel-token"
                type="password"
                placeholder="Your Vercel API token"
                value={keys.vercel}
                onChange={(e) => setKeys(prev => ({ ...prev, vercel: e.target.value }))}
              />
              <p className="text-xs text-gray-500 mt-1">
                Get your token from Vercel Dashboard → Settings → Tokens
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="figma" className="space-y-4">
            <div>
              <Label htmlFor="figma-token">Figma Token</Label>
              <Input
                id="figma-token"
                type="password"
                placeholder="Your Figma API token"
                value={keys.figma}
                onChange={(e) => setKeys(prev => ({ ...prev, figma: e.target.value }))}
              />
              <p className="text-xs text-gray-500 mt-1">
                Generate token in Figma → Settings → Personal Access Tokens
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="netlify" className="space-y-4">
            <div>
              <Label htmlFor="netlify-token">Netlify Token</Label>
              <Input
                id="netlify-token"
                type="password"
                placeholder="Your Netlify API token"
                value={keys.netlify}
                onChange={(e) => setKeys(prev => ({ ...prev, netlify: e.target.value }))}
              />
              <p className="text-xs text-gray-500 mt-1">
                Create token in Netlify → User Settings → Applications
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="builder" className="space-y-4">
            <div>
              <Label htmlFor="builder-token">Builder.io Token</Label>
              <Input
                id="builder-token"
                type="password"
                placeholder="Your Builder.io API key"
                value={keys.builder}
                onChange={(e) => setKeys(prev => ({ ...prev, builder: e.target.value }))}
              />
              <p className="text-xs text-gray-500 mt-1">
                Find your API key in Builder.io → Account Settings
              </p>
            </div>
          </TabsContent>
        </Tabs>
        
        <Button onClick={handleSave} className="w-full">
          <Save className="mr-2" size={16} />
          Save API Keys
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default APIKeysModal;
