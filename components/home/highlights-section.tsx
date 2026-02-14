import { CheckCircle, Zap, Award } from 'lucide-react';
import { ServiceCard } from '../utility/service-card';

export function HighlightsSection() {
  const highlights = [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Expert Consultation',
      description:
        'Our certified solar experts will assess your needs and design the perfect solution tailored to your requirements.',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Quality Installation',
      description:
        'Professional installation by experienced technicians ensuring optimal performance and safety standards.',
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Custom Solutions',
      description:
        'We provide personalized solar systems designed specifically for your residential or commercial needs.',
    },
  ];

  return (
    <section id="highlights" className="py-16 md:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
            Why Choose Suryadnyani
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            We deliver comprehensive solar solutions backed by expertise, quality, and customer-centric service.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <ServiceCard
              key={index}
              icon={highlight.icon}
              title={highlight.title}
              description={highlight.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
