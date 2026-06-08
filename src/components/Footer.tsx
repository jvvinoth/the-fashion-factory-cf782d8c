import React from 'react';
import { siteContent } from '../lib/siteContent';

const Footer: React.FC = () => {
  const { footer } = siteContent;
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = [
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Custom Process', id: 'custom-process' },
    { label: 'About', id: 'about' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="bg-surface border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-semibold text-primary mb-2">
              {siteContent.brand.name}
            </h3>
            <p className="text-sm text-text-muted">
              {footer.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-primary mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm text-text-muted hover:text-primary transition-colors duration-200 text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-semibold text-primary mb-4">Get In Touch</h4>
            <p className="text-sm text-text-muted mb-4">
              Connect with us on WhatsApp to discuss your fashion needs, browse our collection, or start a custom order.
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm text-accent hover:text-accent/80 transition-colors duration-200 font-medium"
            >
              Contact Us →
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-text-muted">
            © {currentYear} {siteContent.brand.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
