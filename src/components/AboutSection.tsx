import React from 'react';
import { siteContent } from '../lib/siteContent';

const AboutSection: React.FC = () => {
  const { about } = siteContent;

  return (
    <section id="about" className="bg-surface py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image - appears first on mobile, right on desktop */}
          <div className="lg:col-span-5 lg:order-2" data-reveal>
            <div className="aspect-[4/5] bg-border rounded-none overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea684c8e?auto=format&fit=crop&w=1200&q=80"
                alt={about.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content - appears second on mobile, left on desktop */}
          <div className="lg:col-span-7 lg:order-1" data-reveal>
            <h2 className="text-4xl md:text-5xl font-semibold font-heading text-primary mb-8">
              {about.heading}
            </h2>
            
            <div className="space-y-6">
              {about.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base md:text-lg text-text leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
