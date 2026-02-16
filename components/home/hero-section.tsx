import Link from 'next/link';

import { ArrowRight, Sun } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=800&fit=crop)',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Empty/Spacer (hidden on mobile, visible on desktop to push text right) */}
          <div className="hidden md:block"></div>

          {/* Right Side - Text */}
          <div className="text-white space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <Sun className="w-6 h-6 text-primary" />
              </div>
              <span className="text-primary font-poppins font-semibold text-sm uppercase tracking-wide">
                Clean Energy Solution
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold leading-tight text-balance">
              Harness the Power of the Sun
            </h1>

            <p className="text-lg text-gray-200 leading-relaxed text-balance">
              Transform your home or business with premium solar energy solutions. Lower your electricity bills, reduce your carbon footprint, and embrace sustainable living with Suryadnyani.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
              <Link
                href="/contact"
                className="bg-primary hover:bg-primary-dark text-foreground font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 inline-flex"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#highlights"
                className="border-2 border-primary text-primary hover:bg-primary/10 font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div>
                <p className="text-3xl font-poppins font-bold text-primary">40+</p>
                <p className="text-sm text-gray-300">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-poppins font-bold text-primary">800+</p>
                <p className="text-sm text-gray-300">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
