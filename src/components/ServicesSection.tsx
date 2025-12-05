import { useEffect, useRef } from 'react';

const services = [
  {
    category: 'AI SERVICES',
    title: 'Custom AI Solutions',
    description: 'Tailor-made AI applications that solve your unique business challenges and automate complex processes.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M12 2a3 3 0 0 0-3 3v1H4.5a1.5 1.5 0 0 0-1.5 1.5v12a1.5 1.5 0 0 0 1.5 1.5h15a1.5 1.5 0 0 0 1.5-1.5v-12a1.5 1.5 0 0 0-1.5-1.5H15V5a3 3 0 0 0-3-3Z" />
        <path d="M15 13a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
    color: 'cyan',
  },
  {
    category: 'AI SERVICES',
    title: 'Predictive Analytics',
    description: 'Leverage machine learning algorithms to forecast trends and make data-driven decisions for your business.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
    color: 'magenta',
  },
  {
    category: 'AI SERVICES',
    title: 'Natural Language Processing',
    description: 'Implement conversational AI, sentiment analysis, and text processing for enhanced customer interactions.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    color: 'cyan',
  },
  {
    category: 'DIGITAL MARKETING',
    title: 'SEO Optimization',
    description: 'Enhance your online visibility with data-driven SEO strategies that drive organic traffic and improve rankings.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
    color: 'magenta',
  },
  {
    category: 'DIGITAL MARKETING',
    title: 'Content Marketing',
    description: 'Create engaging, valuable content that resonates with your audience and drives conversion across channels.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    ),
    color: 'cyan',
  },
  {
    category: 'DIGITAL MARKETING',
    title: 'Social Media Strategy',
    description: 'Develop a comprehensive social media presence that builds community and drives engagement with your brand.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
    color: 'magenta',
  },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.reveal-on-scroll');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('revealed');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="services" className="section-padding relative overflow-hidden" ref={sectionRef}>
      {/* Background grid */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 reveal-on-scroll">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-12 h-[2px] bg-gradient-to-r from-transparent to-primary" />
            <p className="py-1 px-4 bg-primary/10 text-primary text-xs font-bold tracking-[0.3em] uppercase neon-border font-cyber">
              OUR SERVICES
            </p>
            <span className="w-12 h-[2px] bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-cyber">
            <span className="text-foreground">COMPREHENSIVE </span>
            <span className="text-gradient">AI & DIGITAL</span>
            <span className="text-foreground"> SOLUTIONS</span>
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            Empowering businesses with intelligent automation and data-driven marketing strategies that deliver real results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={cn(
                "cyber-card reveal-on-scroll animated-card group cursor-pointer",
                service.color === 'cyan' ? 'hover:border-primary/60' : 'hover:border-accent/60'
              )}
            >
              <div className={cn(
                "w-14 h-14 flex items-center justify-center mb-6 transition-all duration-300",
                service.color === 'cyan' 
                  ? 'text-primary group-hover:neon-text-cyan' 
                  : 'text-accent group-hover:neon-text-magenta'
              )}>
                {service.icon}
              </div>
              <span className="text-[10px] font-bold text-muted-foreground tracking-[0.3em] uppercase font-cyber">
                {service.category}
              </span>
              <h3 className="text-xl font-bold mt-2 mb-4 font-cyber uppercase tracking-wide group-hover:text-gradient transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {service.description}
              </p>
              
              {/* Corner decoration */}
              <div className={cn(
                "absolute top-0 right-0 w-8 h-8 transition-all duration-300",
                service.color === 'cyan' 
                  ? 'border-r-2 border-t-2 border-primary/30 group-hover:border-primary' 
                  : 'border-r-2 border-t-2 border-accent/30 group-hover:border-accent'
              )} />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center reveal-on-scroll">
          <a href="#contact" className="btn-cyber inline-flex items-center gap-3 hover-scale">
            <span>TALK TO SPECIALISTS</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

export default ServicesSection;
