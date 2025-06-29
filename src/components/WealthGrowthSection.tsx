const WealthGrowthSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-emerald-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              Transforming Financial Recovery
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Our innovative approach combines cutting-edge technology with proven recovery strategies to maximize your
              chances of getting your money back.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-brand-emerald rounded-full"></div>
                <span className="text-lg font-semibold text-gray-800">98% Success Rate in Fund Recovery</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-brand-gold rounded-full"></div>
                <span className="text-lg font-semibold text-gray-800">24/7 Global Support Network</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-brand-navy rounded-full"></div>
                <span className="text-lg font-semibold text-gray-800">Advanced Security Protocols</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <img
              src="/lovable-uploads/6a063c0f-b537-4e53-b2ae-0b257154935e.png"
              alt="Financial Growth Analytics"
              className="w-full rounded-2xl shadow-xl"
            />
            <img
              src="/lovable-uploads/a1c0dd0b-9167-45bb-9a05-8a49b5c1c3f6.png"
              alt="Advanced Security Technology"
              className="w-full rounded-2xl shadow-xl"
            />
            <img
              src="/lovable-uploads/937fcadd-bebc-43a8-ab37-c3c5d1ef7532.png"
              alt="WealthWise Platform"
              className="w-full rounded-2xl shadow-xl col-span-2"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WealthGrowthSection
