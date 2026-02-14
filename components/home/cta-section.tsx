import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

export function CtaSection() {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Text */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground leading-tight text-balance">
              Ready to Go Solar?
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              Join thousands of satisfied customers who have already switched to solar energy. Our team is ready to help you take the first step towards energy independence.
            </p>

            {/* Features List */}
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-foreground rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <span className="text-primary font-bold text-sm">✓</span>
                </div>
                <span className="text-foreground font-medium">Free energy assessment and quotation</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-foreground rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <span className="text-primary font-bold text-sm">✓</span>
                </div>
                <span className="text-foreground font-medium">Expert installation and support</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-foreground rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <span className="text-primary font-bold text-sm">✓</span>
                </div>
                <span className="text-foreground font-medium">Flexible financing options available</span>
              </li>
            </ul>
          </div>

          {/* Right Side - Buttons */}
          <div className="space-y-4">
            <Link
              href="/contact"
              className="block w-full bg-foreground hover:bg-gray-900 text-primary font-bold py-4 px-8 rounded-lg transition-all duration-300 text-center flex items-center justify-center space-x-2"
            >
              <span>Schedule Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <a
              href="tel:+918850906600"
              className="block w-full border-2 border-foreground text-foreground hover:bg-foreground/10 font-bold py-4 px-8 rounded-lg transition-all duration-300 text-center flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>+91 8850906600</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
