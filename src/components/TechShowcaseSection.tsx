import React from "react";

const TechShowcaseSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-navy via-slate-800 to-brand-emerald">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Next-Generation Recovery Technology
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Powered by advanced AI and blockchain technology for maximum recovery efficiency
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Detection</h3>
              <p className="text-gray-300 text-lg">
                Our machine learning algorithms analyze transaction patterns to identify and track fraudulent activities with unprecedented accuracy.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Blockchain Tracing</h3>
              <p className="text-gray-300 text-lg">
                Advanced blockchain analysis tools that can trace cryptocurrency transactions across multiple networks and exchanges.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Global Network</h3>
              <p className="text-gray-300 text-lg">
                Connected to law enforcement agencies and financial institutions worldwide for comprehensive recovery operations.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <img
              src="/lovable-uploads/9c282cab-6483-4b01-a547-861e6622d4e9.png"
              alt="WealthWise Advanced Technology"
              className="w-full rounded-2xl shadow-2xl"
            />
            <img
              src="/lovable-uploads/07c7b755-52b6-4802-af72-075a172f4fdc.png"
              alt="Global Security Shield"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechShowcaseSection;
