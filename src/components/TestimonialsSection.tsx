import { useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "CEO",
    company: "TechStart India",
    quote: "Business Booster transformed our digital presence with their AI solutions. Our engagement increased by 300% within the first quarter.",
    rating: 5
  },
  {
    name: "Priya Patel",
    role: "Marketing Director",
    company: "GrowthLabs",
    quote: "The AI chatbot they built handles 80% of our customer queries automatically. Exceptional work and outstanding support!",
    rating: 5
  },
  {
    name: "Amit Kumar",
    role: "Founder",
    company: "Innovate360",
    quote: "Their web development team delivered a stunning, high-performance website ahead of schedule. Truly professional team.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-accent/10 blur-3xl" />

      {/* Floating Geometric Shapes */}
      <div className="absolute top-1/4 right-20 w-16 h-16 border border-primary/30 rotate-45 animate-float-cyber hidden lg:block" />
      <div className="absolute bottom-1/3 left-16 w-12 h-12 border border-accent/30 rotate-12 animate-float-cyber hidden lg:block" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 reveal-on-scroll">
          <span className="inline-block px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary border border-primary/50 rounded-full mb-4 neon-text-cyan">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-cyber uppercase mb-6">
            What Our <span className="text-gradient-cyber">Clients Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Here's what our valued clients have to say about working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="reveal-on-scroll"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="cyber-card h-full p-6 md:p-8 relative group">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-background border border-primary/50 rounded-lg flex items-center justify-center shadow-[0_0_20px_hsl(var(--primary)/0.3)]">
                  <Quote className="w-5 h-5 text-primary" />
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/50 rounded-tr-lg" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent/50 rounded-bl-lg" />

                {/* Quote Text */}
                <p className="text-foreground/90 text-base md:text-lg leading-relaxed mb-6 mt-4">
                  "{testimonial.quote}"
                </p>

                {/* Star Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                      style={{
                        filter: 'drop-shadow(0 0 6px hsl(var(--primary)))'
                      }}
                    />
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-6" />

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 border border-primary/50 flex items-center justify-center text-primary font-bold font-cyber text-lg shadow-[0_0_15px_hsl(var(--primary)/0.3)]">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold font-cyber text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, <span className="text-primary">{testimonial.company}</span>
                    </p>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-primary/5 to-accent/5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
