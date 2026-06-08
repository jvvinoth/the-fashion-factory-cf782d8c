import React from 'react';
import { MessageCircle, Palette, Ruler, Package } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const iconMap = {
  MessageCircle,
  Palette,
  Ruler,
  Package,
};

const CustomProcessSection: React.FC = () => {
  const { customProcess } = siteContent;

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="custom-process" className="bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-reveal>
          <h2 className="text-4xl md:text-5xl font-semibold font-heading text-primary mb-4">
            {customProcess.heading}
          </h2>
          <p className="text-base md:text-lg text-text-muted max-w-3xl mx-auto leading-relaxed">
            {customProcess.subheading}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {customProcess.steps.map((step, index) => {
            const IconComponent = iconMap[step.icon as keyof typeof iconMap];
            
            return (
              <div
                key={step.id}
                className="bg-surface p-6 md:p-8 border border-border hover:shadow-lg transition-shadow duration-300 rounded-none"
                data-reveal
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="mb-6">
                  <IconComponent size={32} className="text-accent" strokeWidth={1.5} />
                </div>
                
                {/* Content */}
                <h3 className="text-xl md:text-2xl font-heading font-semibold text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center" data-reveal>
          <button
            onClick={scrollToContact}
            className="bg-accent text-white px-10 py-4 text-base md:text-lg font-medium hover:opacity-90 transition-opacity duration-200 rounded-none inline-block"
          >
            {customProcess.ctaText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomProcessSection;
