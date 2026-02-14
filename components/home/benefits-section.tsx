import { TrendingDown, Leaf, Gauge, DollarSign } from 'lucide-react';

export function BenefitsSection() {
  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Reduce Electricity Costs',
      description: 'Save up to 80% on your monthly electricity bills with solar energy.',
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Environmental Impact',
      description: 'Reduce your carbon footprint and help fight climate change.',
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: 'Increased Property Value',
      description: 'Solar installations increase your property value and market appeal.',
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: '25+ Years Warranty',
      description: 'Premium panels and equipment with extended warranty coverage.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
            Benefits of Going Solar
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Switching to solar energy offers numerous advantages for homeowners and businesses alike.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="mb-4 inline-flex items-center justify-center w-14 h-14 bg-primary/20 rounded-lg">
                <div className="text-primary">{benefit.icon}</div>
              </div>
              <h3 className="font-poppins font-bold text-lg mb-2">{benefit.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
