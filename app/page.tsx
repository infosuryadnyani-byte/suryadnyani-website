import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { WhatsAppButton } from '@/components/shared/whatsapp-button';
import { HeroSection } from '@/components/home/hero-section';
import { HighlightsSection } from '@/components/home/highlights-section';
import { ServicesOverview } from '@/components/home/services-overview';
import { BenefitsSection } from '@/components/home/benefits-section';
import { CtaSection } from '@/components/home/cta-section';
import { BrandsMarquee } from '@/components/home/brands-marquee';

import { ContactFormSection } from '@/components/home/contact-form-section';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HighlightsSection />
      <ServicesOverview />
      <ContactFormSection />
      <BrandsMarquee />
      <BenefitsSection />
      <CtaSection />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
