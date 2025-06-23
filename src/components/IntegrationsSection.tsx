
import VercelIntegration from "./integrations/VercelIntegration";
import BuilderIntegration from "./integrations/BuilderIntegration";
import FigmaIntegration from "./integrations/FigmaIntegration";
import NetlifyIntegration from "./integrations/NetlifyIntegration";

const IntegrationsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Development & Deployment Integrations
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Connect with leading platforms to streamline your development workflow and deploy your projects with ease.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <VercelIntegration />
          <BuilderIntegration />
          <FigmaIntegration />
          <NetlifyIntegration />
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
            <h3 className="font-bold text-xl text-brand-navy mb-3">
              Why Use These Integrations?
            </h3>
            <ul className="text-gray-700 space-y-2">
              <li>• <strong>Vercel:</strong> Zero-config deployments with global CDN</li>
              <li>• <strong>Builder.io:</strong> Visual editing and A/B testing</li>
              <li>• <strong>Figma.dev:</strong> Design-to-code automation</li>
              <li>• <strong>Netlify:</strong> Continuous deployment and serverless functions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
