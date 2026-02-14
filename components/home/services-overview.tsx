import Link from 'next/link';
import { ServiceCard } from '../utility/service-card';
import { Home, Building2, Zap, Wrench } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

export function ServicesOverview() {
  const services = [
    {
      icon: <Home className="w-6 h-6" />,
      title: 'Residential Solar',
      description: 'Complete solar solutions for homes to reduce electricity costs and go green.',
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: 'Commercial Solar',
      description: 'Large-scale solar systems designed for businesses and industrial facilities.',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Grid-Tied Systems',
      description: 'Stay connected to the grid while maximizing savings with our grid-tied solutions.',
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: 'Maintenance Services',
      description: 'Regular maintenance and support to keep your system running at peak efficiency.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            From residential rooftops to large commercial installations, we handle all your solar needs with expertise and care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center pt-4">
          <Link
            href="/services"
            className="inline-flex items-center space-x-2 px-8 py-3 bg-primary hover:bg-primary-dark text-foreground font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <span>View All Services</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
