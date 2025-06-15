
const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Blank App</h1>
        <p className="text-xl text-muted-foreground mb-8">Start building your amazing project here!</p>
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <p className="text-base text-muted-foreground">
            Have questions? Email us directly at{" "}
            <a
              href="mailto:info.wealthwise@proton.me"
              className="text-primary underline hover:text-primary/80"
            >
              info.wealthwise@proton.me
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;

