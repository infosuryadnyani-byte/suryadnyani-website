import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative w-16 h-16 md:w-20 md:h-20 shrink-0">
                <Image
                  src="/logo.png"
                  alt="Suryadnyani Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-poppins font-bold text-lg">Suryadnyani Renewable Energy Private Limited</span>
            </div>
            <p className="text-sm text-gray-300">
              CIN:U35105MH2024PTC434993
              Empowering homes and businesses with clean, renewable solar energy solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-bold text-lg mb-4 text-primary">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-300 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-300 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-300 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-gray-300 hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-poppins font-bold text-lg mb-4 text-primary">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-sm text-gray-300 hover:text-primary transition-colors">
                  Rooftop Solar
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-300 hover:text-primary transition-colors">
                  Commercial Solar
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-300 hover:text-primary transition-colors">
                  EPC Services
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-300 hover:text-primary transition-colors">
                  Ground Mounted Solar
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-300 hover:text-primary transition-colors">
                  Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-poppins font-bold text-lg mb-4 text-primary">Useful Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://pmsuryaghar.gov.in" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 hover:text-primary transition-colors">
                  PM Surya Ghar Yojana
                </a>
              </li>
              <li>
                <a href="https://www.mahadiscom.in/ismart/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 hover:text-primary transition-colors">
                  Mahadiscom SMART Solar
                </a>
              </li>
              <li>
                <a href="https://mnre.gov.in/en/notice/guidelines-for-pm-surya-ghar-muft-bijli-yojana/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 hover:text-primary transition-colors">
                  GHS Guidelines
                </a>
              </li>
              <li>
                <Link href="/farmer-partnership/social-commitment" className="text-sm text-gray-300 hover:text-primary transition-colors">
                  Social Commitment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-poppins font-bold text-lg mb-4 text-primary">Contact</h4>
            <div className="space-y-3">
              <a
                href="tel:+918850906600"
                className="flex items-start space-x-2 text-sm text-gray-300 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>+91 8850906600</span>
              </a>
              <a
                href="mailto:info.suryadnyani@gmail.com"
                className="flex items-start space-x-2 text-sm text-gray-300 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>info@suryadnyani.com</span>
              </a>
              <div className="flex items-start space-x-2 text-sm text-gray-300">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>S-151, Fantasia Business Park, Plot No. 47, Sector 30A, Vashi, Navi Mumbai, Maharashtra 400705</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 py-8">
          {/* Social Links */}
          <div className="flex justify-center items-center space-x-6 mb-6">
            <a
              href="https://www.facebook.com/share/1814nrPoha/"
              className="text-gray-300 hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/suryadnyani-renewable-energy-pvt-ltd-a75742358/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BwuCsggzzSQOnU5K9VlZxsg%3D%3D"
              className="text-gray-300 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/RenewableP56754"
              className="text-gray-300 hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-400">
            <p>
              &copy; {currentYear} Suryadnyani Renewable Energy Pvt Ltd. All rights reserved.
            </p>
            <p>
              Developed by <Link href="https://stwebworks.vercel.app" target="_blank" className="text-primary hover:underline transition-colors">S&T Web Works</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
