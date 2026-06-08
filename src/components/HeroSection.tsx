import React from 'react';
import { siteContent } from '../lib/siteContent';

const HeroSection: React.FC = () => {
  const { hero } = siteContent;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-surface to-background opacity-60"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content - 60% */}
          <div className="lg:col-span-7" data-reveal>
            <p className="text-sm uppercase tracking-wider text-text-muted mb-4">
              {hero.eyebrow}
            </p>
            <h1 className="text-5xl md:text-7xl font-semibold font-heading leading-tight tracking-tight text-primary mb-6">
              {hero.headline}
            </h1>
            <p className="text-lg md:text-xl text-text-muted max-w-2xl leading-relaxed mb-8">
              {hero.subtext}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('portfolio')}
                className="bg-accent text-white px-8 py-4 font-medium hover:opacity-90 transition-opacity duration-200 rounded-none"
              >
                {hero.ctaPrimary}
              </button>
              <button
                onClick={() => scrollToSection('custom-process')}
                className="border-2 border-primary text-primary px-8 py-4 font-medium hover:bg-primary hover:text-white transition-all duration-200 rounded-none"
              >
                {hero.ctaSecondary}
              </button>
            </div>
          </div>

          {/* Right Preview - 40% */}
          <div className="lg:col-span-5" data-reveal>
            <div className="relative aspect-[3/4] bg-border rounded-none overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea684c8e?auto=format&fit=crop&w=1200&q=80"
                alt="Fashion preview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
