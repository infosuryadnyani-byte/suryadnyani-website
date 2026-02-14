import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { WhatsAppButton } from '@/components/shared/whatsapp-button';
import { ContactForm } from '@/components/utility/contact-form';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-64 bg-gradient-to-r from-primary via-primary-dark to-primary-darker text-foreground flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-4">Get In Touch</h1>
          <p className="text-lg max-w-2xl">
            Have questions? Our team is here to help. Contact us for a free consultation.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Phone */}
            <div className="bg-muted rounded-lg p-8 text-center border border-border hover:border-primary transition-colors">
              <div className="mb-4 inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-lg">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-poppins font-bold text-lg text-foreground mb-2">Phone</h3>
              <a href="tel:+918850906600" className="text-primary font-semibold hover:text-primary-dark transition-colors">
                +91 8850906600
              </a>
              <p className="text-sm text-text-secondary mt-2">Monday - Saturday, 9 AM - 6 PM</p>
            </div>

            {/* Email */}
            <div className="bg-muted rounded-lg p-8 text-center border border-border hover:border-primary transition-colors">
              <div className="mb-4 inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-lg">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-poppins font-bold text-lg text-foreground mb-2">Email</h3>
              <a href="mailto:info.suryadnyani@gmail.com" className="text-primary font-semibold hover:text-primary-dark transition-colors">
                info.suryadnyani@gmail.com
              </a>
              <p className="text-sm text-text-secondary mt-2">We respond within 24 hours</p>
            </div>

            {/* Address */}
            <div className="bg-muted rounded-lg p-8 text-center border border-border hover:border-primary transition-colors">
              <div className="mb-4 inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-lg">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-poppins font-bold text-lg text-foreground mb-2">Location</h3>
              <p className="text-text-secondary font-semibold">Navi Mumbai, India</p>
              <p className="text-sm text-text-secondary mt-2">Serving all regions across India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-6">
                Send us a Message
              </h2>
              <p className="text-text-secondary mb-8">
                Fill out the form below and our team will get back to you shortly with information about our solar solutions.
              </p>
              <ContactForm labelColor="black" />
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              {/* Business Hours */}
              <div className="bg-white rounded-lg p-8 border border-border">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary mt-1" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold text-lg text-foreground mb-3">
                      Business Hours
                    </h3>
                    <ul className="space-y-2 text-text-secondary text-sm">
                      <li>Monday - Friday: 10:00 AM - 6:00 PM</li>
                      <li>Saturday: 10:00 AM - 4:00 PM</li>
                      <li>Sunday: Closed</li>
                      <li className="pt-2 border-t border-border">
                        <span className="font-semibold">Emergency Support:</span> Available 24/7
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-lg overflow-hidden border border-border h-80 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-text-secondary">Google Maps will be integrated here</p>
                  <p className="text-sm text-text-secondary mt-2">Navi Mumbai, Maharashtra, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                question: 'How long does it take to install a solar system?',
                answer:
                  'Installation typically takes 2-5 days depending on system size and roof complexity. We handle all permits and paperwork for you.',
              },
              {
                question: 'What is the warranty on solar panels?',
                answer:
                  'We provide 25-year manufacturer warranties on premium solar panels and 10-year warranties on inverters and other equipment.',
              },
              {
                question: 'Do I need permission from authorities?',
                answer:
                  'Yes, but our team handles all necessary approvals and documentation. We manage the entire process on your behalf.',
              },
              {
                question: 'What if the system produces more power than I use?',
                answer:
                  'Grid-tied systems can feed excess power back to the grid. You may receive credits for this energy depending on your local net-metering policy.',
              },
              {
                question: 'How much maintenance is required?',
                answer:
                  'Solar systems require minimal maintenance - typically just occasional cleaning. We offer maintenance packages to ensure optimal performance.',
              },
              {
                question: 'What financing options are available?',
                answer:
                  'We offer cash payment, EMI schemes with flexible terms, and help accessing government subsidies and incentives.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-muted rounded-lg p-6 border border-border">
                <h3 className="font-poppins font-bold text-foreground mb-3">
                  {faq.question}
                </h3>
                <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-foreground text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
            Ready to Go Solar?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Schedule your free solar consultation today and let us help you save on energy costs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+918850906600"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-primary hover:bg-primary-dark text-foreground font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
            <a
              href="info.suryadnyani@gmail.com"
              className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-primary text-primary hover:bg-primary/10 font-bold rounded-lg transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
