
import { Mail, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Blank App</h1>
        <p className="text-xl text-muted-foreground mb-8">Start building your amazing project here!</p>
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <div className="inline-flex flex-col items-start gap-2">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <a
                href="mailto:info.wealthwise@proton.me"
                className="text-base text-primary underline hover:text-primary/80"
              >
                info.wealthwise@proton.me
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <p className="text-base text-muted-foreground">
                Moscow, Russia
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
