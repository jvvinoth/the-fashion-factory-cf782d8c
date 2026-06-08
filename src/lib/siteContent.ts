export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export interface ProcessStep {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export const siteContent = {
  brand: {
    name: "The Fashion Factory",
    tagline: "Modern fashion that's yours.",
  },
  
  hero: {
    eyebrow: "The Fashion Factory",
    headline: "Modern fashion that's yours.",
    subtext: "Choose from our curated ready-to-wear collection or commission something made exactly for you. Contemporary design meets personalized service.",
    ctaPrimary: "Browse Collection",
    ctaSecondary: "Start Custom Order",
  },
  
  portfolio: {
    heading: "Our Work",
    subheading: "Ready-to-wear pieces and custom commissions designed for individuals who value distinctive style.",
    filters: ["All", "Ready-to-Wear", "Custom Commissions", "Seasonal Collections"],
    items: [
      { 
        id: 1, 
        title: "Tailored Wool Blazer", 
        category: "Ready-to-Wear", 
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1600&q=80" 
      },
      { 
        id: 2, 
        title: "Custom Evening Gown", 
        category: "Custom Commissions", 
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1600&q=80" 
      },
      { 
        id: 3, 
        title: "Linen Summer Set", 
        category: "Seasonal Collections", 
        image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=1600&q=80" 
      },
      { 
        id: 4, 
        title: "Bespoke Wedding Suit", 
        category: "Custom Commissions", 
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=80" 
      },
      { 
        id: 5, 
        title: "Silk Midi Dress", 
        category: "Ready-to-Wear", 
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1600&q=80" 
      },
      { 
        id: 6, 
        title: "Structured Trench Coat", 
        category: "Ready-to-Wear", 
        image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=1600&q=80" 
      },
      { 
        id: 7, 
        title: "Custom Cocktail Dress", 
        category: "Custom Commissions", 
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1600&q=80" 
      },
      { 
        id: 8, 
        title: "Autumn Capsule Collection", 
        category: "Seasonal Collections", 
        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=80" 
      },
      { 
        id: 9, 
        title: "Made-to-Measure Shirt", 
        category: "Custom Commissions", 
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1600&q=80" 
      }
    ] as PortfolioItem[],
  },
  
  customProcess: {
    heading: "How Custom Works",
    subheading: "From initial concept to final fitting, we guide you through every step of creating your perfect garment.",
    ctaText: "Start Your Custom Order",
    steps: [
      {
        id: 1,
        icon: "MessageCircle",
        title: "Consultation",
        description: "Connect with us via WhatsApp to discuss your vision, style preferences, and garment requirements."
      },
      {
        id: 2,
        icon: "Palette",
        title: "Design & Fabric",
        description: "We create design sketches and help you select fabrics that bring your vision to life."
      },
      {
        id: 3,
        icon: "Ruler",
        title: "Measurements",
        description: "Precise measurements ensure perfect fit. We guide you through the process remotely or in person."
      },
      {
        id: 4,
        icon: "Package",
        title: "Creation & Delivery",
        description: "Your garment is crafted with attention to detail and delivered within 3–6 weeks."
      }
    ] as ProcessStep[],
  },
  
  about: {
    heading: "Design Philosophy",
    paragraphs: [
      "The Fashion Factory was founded on the belief that great fashion should be both accessible and personal. We bridge the gap between ready-to-wear convenience and bespoke craftsmanship.",
      "Every piece in our collection is designed with contemporary sensibilities and constructed to last. Our custom service extends this philosophy—creating garments that reflect your individual style while maintaining our commitment to modern design and quality construction.",
      "We work with clients who understand that true style isn't about following trends blindly, but about finding pieces that enhance who you are. Whether you're selecting from our collection or commissioning a custom piece, you're choosing fashion that's distinctly yours."
    ],
    imageAlt: "Studio Image",
  },
  
  testimonials: {
    heading: "Client Stories",
    subheading: "Hear from clients who've found their signature style with The Fashion Factory.",
    items: [
      {
        id: 1,
        name: "Sarah Chen",
        role: "Marketing Director",
        quote: "The custom blazer I commissioned fits like a dream and gets compliments every time I wear it. The WhatsApp consultation made the whole process effortless.",
        rating: 5
      },
      {
        id: 2,
        name: "Michael Rodriguez",
        role: "Creative Consultant",
        quote: "Finally found a brand that understands modern menswear. The ready-to-wear pieces are exceptional, and knowing I can order custom work gives me confidence in every purchase.",
        rating: 5
      },
      {
        id: 3,
        name: "Aisha Patel",
        role: "Entrepreneur",
        quote: "From the initial design sketches to the final fitting, the team was professional and attentive. My wedding outfit was everything I envisioned and more.",
        rating: 5
      }
    ] as Testimonial[],
  },
  
  contact: {
    heading: "Let's Create Something Yours",
    subtext: "Ready to browse our collection or start a custom order? Connect with us on WhatsApp.",
    ctaText: "Message Us on WhatsApp",
    whatsappNumber: "+1234567890",
  },
  
  footer: {
    copyright: "© 2024 The Fashion Factory. All rights reserved.",
    tagline: "Contemporary fashion, personally crafted.",
  }
};
