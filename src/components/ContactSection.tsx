import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const ContactSection: React.FC = () => {
  const { contact } = siteContent;

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hi, I\'d like to learn more about The Fashion Factory collection and custom services.');
    window.open(`https://wa.me/${contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="bg-primary py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
        {/* Content */}
        <div data-reveal>
          <h2 className="text-4xl md:text-5xl font-semibold font-heading text-white mb-6">
            {contact.heading}
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            {contact.subtext}
          </p>

          {/* WhatsApp CTA */}
          <button
            onClick={handleWhatsAppClick}
            className="inline-flex items-center gap-3 bg-accent text-white px-10 py-5 text-lg font-medium hover:bg-accent/90 transition-all duration-200 rounded-none shadow-lg hover:shadow-xl"
          >
            <MessageCircle size={24} strokeWidth={2} />
            {contact.ctaText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
