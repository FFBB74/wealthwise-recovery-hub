
import React from "react";

const SecurityShowcaseSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-brand-navy to-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Advanced Security & Recovery Technology
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our cutting-edge technology and global network ensure maximum recovery success rates
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <img
              src="/lovable-uploads/f8483ac3-00b7-4bbb-b32b-5a319c001e7c.png"
              alt="Global Security Shield"
              className="w-full max-w-md mx-auto rounded-2xl shadow-2xl mb-6"
            />
            <h3 className="text-2xl font-bold text-white mb-4">Global Protection</h3>
            <p className="text-gray-300">Worldwide security infrastructure protecting your assets</p>
          </div>
          
          <div className="text-center">
            <img
              src="/lovable-uploads/9f1402eb-1243-43cd-842f-01b119eff7b4.png"
              alt="Digital Vault Security"
              className="w-full max-w-md mx-auto rounded-2xl shadow-2xl mb-6"
            />
            <h3 className="text-2xl font-bold text-white mb-4">Secure Vault Technology</h3>
            <p className="text-gray-300">Bank-grade security for all recovered assets</p>
          </div>
          
          <div className="text-center md:col-span-2 lg:col-span-1">
            <img
              src="/lovable-uploads/c23c10e8-fa4b-4d9b-b4c0-fca4f67b7d8d.png"
              alt="Financial Security Circuit"
              className="w-full max-w-md mx-auto rounded-2xl shadow-2xl mb-6"
            />
            <h3 className="text-2xl font-bold text-white mb-4">Advanced Analytics</h3>
            <p className="text-gray-300">AI-powered fraud detection and recovery systems</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityShowcaseSection;
