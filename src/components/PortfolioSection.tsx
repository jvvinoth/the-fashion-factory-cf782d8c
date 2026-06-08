import React, { useState } from 'react';
import { siteContent } from '../lib/siteContent';

const PortfolioSection: React.FC = () => {
  const { portfolio } = siteContent;
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredItems = activeFilter === 'All'
    ? portfolio.items
    : portfolio.items.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="bg-surface py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12" data-reveal>
          <h2 className="text-4xl md:text-5xl font-semibold font-heading text-primary mb-4">
            {portfolio.heading}
          </h2>
          <p className="text-base md:text-lg text-text-muted max-w-3xl mx-auto leading-relaxed">
            {portfolio.subheading}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mb-12 overflow-x-auto scrollbar-hide" data-reveal>
          <div className="flex gap-2 justify-center min-w-max px-4">
            {portfolio.filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 text-sm font-medium transition-all duration-200 rounded-none whitespace-nowrap ${
                  activeFilter === filter
                    ? 'bg-primary text-white'
                    : 'text-text-muted hover:text-primary border border-border hover:border-primary'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-none bg-border cursor-pointer"
              data-reveal
            >
              {/* Image */}
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                <h3 className="text-xl font-heading text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-white/80">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
