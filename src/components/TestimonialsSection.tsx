import React from 'react';
import { Star } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const TestimonialsSection: React.FC = () => {
  const { testimonials } = siteContent;

  return (
    <section id="testimonials" className="bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-reveal>
          <h2 className="text-4xl md:text-5xl font-semibold font-heading text-primary mb-4">
            {testimonials.heading}
          </h2>
          <p className="text-base md:text-lg text-text-muted max-w-3xl mx-auto leading-relaxed">
            {testimonials.subheading}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.items.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-surface p-8 border border-border rounded-none"
              data-reveal
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-accent fill-accent"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-base md:text-lg italic text-text leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-border pt-6">
                <p className="font-semibold text-primary mb-1">
                  {testimonial.name}
                </p>
                <p className="text-sm text-text-muted">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
