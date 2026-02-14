import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { WhatsAppButton } from '@/components/shared/whatsapp-button';
import { ServiceCard } from '@/components/utility/service-card';
import {
  Home,
  Building2,
  Zap,
  Wrench,
  Layers,
  Settings,
  Gauge,
  Lightbulb,
  CheckCircle,
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Home className="w-6 h-6" />,
      title: 'Rooftop Solar',
      description:
        'Maximize your rooftop space with our efficient rooftop solar installations. We provide tailored solutions for various property types.',
      subItems: [
        {
          icon: <Home className="w-5 h-5" />,
          title: 'Residential',
          description: 'Tailored solar solutions for individual homes, villas, and housing societies to reduce electricity bills and ensure power backup.',
        },
        {
          icon: <Building2 className="w-5 h-5" />,
          title: 'Commercial',
          description: 'Scalable solar systems for offices, shopping complexes, and institutions to optimize operational costs and enhance sustainability credentials.',
        },
        {
          icon: <Zap className="w-5 h-5" />,
          title: 'Industrial',
          description: 'High-capacity solar power plants for factories, warehouses, and manufacturing units designed to handle heavy electrical loads efficiently.',
        },
      ],
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: 'Ground Mounted Solar',
      description:
        'Large ground-mounted arrays for expansive properties with maximum efficiency and easy maintenance access.',
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'EPC Services',
      description:
        'End-to-end Engineering, Procurement, and Construction services for complete project turnkey solutions.',
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: 'Operations & Maintenance',
      description:
        'Professional maintenance services ensuring your system operates at peak efficiency throughout its lifespan.',
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Solar Consultancy',
      description:
        'Expert consultancy services to assess your energy needs and design optimal solar solutions for maximum ROI.',
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-64 bg-gradient-to-r from-primary via-primary-dark to-primary-darker text-foreground flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6">Our Services</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Comprehensive solar energy solutions tailored to your unique needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
              Complete Solar Solutions
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              From initial consultation to ongoing maintenance, we provide comprehensive services to meet all your solar energy needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                subItems={service?.subItems}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-12 text-center">
            Our Service Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                step: '1',
                title: 'Assessment',
                description: 'We evaluate your property and energy requirements.',
              },
              {
                step: '2',
                title: 'Design',
                description: 'Custom system design optimized for your needs.',
              },
              {
                step: '3',
                title: 'Approval',
                description: 'Obtain permissions and approvals from authorities.',
              },
              {
                step: '4',
                title: 'Installation',
                description: 'Professional installation by certified technicians.',
              },
              {
                step: '5',
                title: 'Support',
                description: 'Ongoing maintenance and customer support.',
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-lg p-6 text-center border border-border">
                  <div className="mb-3 inline-flex items-center justify-center w-12 h-12 bg-primary text-foreground rounded-full font-poppins font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-poppins font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-text-secondary">{item.description}</p>
                </div>
                {index < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-1 bg-primary transform -translate-y-1/2 z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-12 text-center">
            Why Choose Our Services?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Expert Team',
                description:
                  'Certified engineers and technicians with years of industry experience.',
              },
              {
                title: 'Quality Assurance',
                description:
                  'Rigorous quality checks and compliance with all safety standards.',
              },
              {
                title: 'Competitive Pricing',
                description:
                  'Best value for money without compromising on quality.',
              },
              {
                title: 'Transparent Process',
                description:
                  'Clear communication and transparent pricing throughout the project.',
              },
              {
                title: '25-Year Warranty',
                description:
                  'Comprehensive warranty coverage for panels and equipment.',
              },
              {
                title: 'Lifetime Support',
                description:
                  'Dedicated support team available for maintenance and troubleshooting.',
              },
            ].map((feature, index) => (
              <div key={index} className="flex space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary mt-1" />
                </div>
                <div>
                  <h3 className="font-poppins font-bold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-foreground text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
            Ready to Start Your Solar Journey?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Contact us today for a free consultation and custom quote.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-primary hover:bg-primary-dark text-foreground font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <span>Get Started</span>
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
