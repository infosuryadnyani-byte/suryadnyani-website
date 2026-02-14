import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { WhatsAppButton } from '@/components/shared/whatsapp-button';
import Image from 'next/image';
import { Lightbulb, Target, Users, Zap } from 'lucide-react';

export default function About() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-64 bg-gradient-to-r from-primary via-primary-dark to-primary-darker text-foreground flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6">About Suryadnyani</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Empowering India with clean, renewable solar energy since inception.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-6">
                Who We Are
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Suryadnyani Renewable Energy Pvt Ltd is a leading solar energy solutions provider dedicated to making sustainable energy accessible to every home and business in India.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                With years of experience in the solar industry, we have successfully installed and maintained thousands of solar systems, helping our customers reduce their energy costs while contributing to environmental conservation.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Our commitment to quality, innovation, and customer satisfaction sets us apart as the preferred solar energy partner for residential, commercial, and industrial applications.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/company vison.jpeg"
                alt="Suryadnyani Company Vision"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-border">
              <div className="mb-4 inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-lg">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-poppins font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-text-secondary leading-relaxed">
                To provide affordable, reliable, and sustainable solar energy solutions that empower individuals and organizations to achieve energy independence while reducing their environmental impact.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-border">
              <div className="mb-4 inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-lg">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-poppins font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-text-secondary leading-relaxed">
                To become India's most trusted and innovative solar energy provider, enabling a sustainable future powered by clean renewable energy for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-12 text-center">
            What We Do
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Design & Consultation',
                description:
                  'We assess your energy needs and design custom solar systems tailored to your requirements and budget.',
              },
              {
                title: 'Professional Installation',
                description:
                  'Our certified technicians ensure proper installation with minimal disruption to your property.',
              },
              {
                title: 'Maintenance & Support',
                description:
                  'We provide ongoing maintenance and support to ensure your system operates at peak efficiency.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-muted rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-poppins font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-text-secondary">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Solar Works */}
      <section className="py-16 md:py-24 bg-foreground text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-12 text-center">
            How Solar Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Sunlight Collection',
                description: 'Solar panels capture sunlight and convert it into DC electricity.',
              },
              {
                step: '2',
                title: 'Conversion',
                description: 'An inverter converts DC electricity to AC electricity for home use.',
              },
              {
                step: '3',
                title: 'Distribution',
                description: 'Electricity is distributed to power your home or business appliances.',
              },
              {
                step: '4',
                title: 'Grid Integration',
                description: 'Excess energy can be stored or sent back to the grid for savings.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                <div className="text-3xl font-poppins font-bold text-primary mb-3">
                  {item.step}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Finance Options */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-12 text-center">
            Flexible Finance Options
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Cash Payment',
                description: 'Pay upfront and enjoy maximum savings from day one.',
              },
              {
                title: 'EMI Schemes',
                description: 'Flexible EMI options available with minimal interest rates.',
              },
              {
                title: 'Government Subsidies',
                description: 'We help you access available government subsidies and incentives.',
              },
            ].map((option, index) => (
              <div
                key={index}
                className="bg-muted border border-border rounded-lg p-8 text-center hover:border-primary transition-colors"
              >
                <div className="text-4xl font-poppins font-bold text-primary mb-4">
                  {index === 0 ? '💰' : index === 1 ? '📊' : '🏛️'}
                </div>
                <h3 className="text-xl font-poppins font-bold text-foreground mb-3">
                  {option.title}
                </h3>
                <p className="text-text-secondary">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Stats */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '40+', label: 'Projects Completed' },
              { number: '800+', label: 'Happy Customers' },
              { number: '975kwp', label: 'Capacity Installed' },
              { number: '8+', label: 'Years Experience' },
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-2">
                  {stat.number}
                </p>
                <p className="text-text-secondary font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
