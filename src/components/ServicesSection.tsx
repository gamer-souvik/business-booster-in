import { useEffect, useRef } from 'react';

const services = [
  {
    category: 'AI SERVICES',
    title: 'AI Automation for Business',
    description: 'Streamline operations with intelligent automation that handles repetitive tasks and scales your business efficiency.',
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
    title: 'AI Agents',
    description: 'Deploy autonomous AI agents that learn, adapt, and execute complex tasks to drive your business forward.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <circle cx="12" cy="8" r="5" />
        <path d="M20 21a8 8 0 1 0-16 0" />
      </svg>
    ),
    color: 'magenta',
  },
  {
    category: 'AI SERVICES',
    title: 'Voice Calling Agents',
    description: 'AI-powered voice agents that handle customer calls, appointments, and support with human-like conversation.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    color: 'cyan',
  },
  {
    category: 'AI SERVICES',
    title: 'AI UGC Videos',
    description: 'Generate authentic user-generated content style videos powered by AI for marketing and social media.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
    color: 'magenta',
  },
  {
    category: 'DEVELOPMENT',
    title: 'Web Apps Development',
    description: 'Build powerful, scalable web applications with modern technologies and seamless user experiences.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    color: 'cyan',
  },
  {
    category: 'DEVELOPMENT',
    title: 'App Development',
    description: 'Native and cross-platform mobile apps that deliver exceptional performance and user engagement.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    color: 'magenta',
  },
  {
    category: 'DEVELOPMENT',
    title: 'Website Development',
    description: 'Stunning, responsive websites that captivate visitors and convert them into loyal customers.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    color: 'cyan',
  },
  {
    category: 'AI SERVICES',
    title: 'AI Chatbots',
    description: 'Intelligent conversational bots that provide 24/7 customer support and boost engagement rates.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    color: 'magenta',
  },
  {
    category: 'AI SERVICES',
    title: 'Custom GPT',
    description: 'Tailored GPT solutions trained on your data to provide specialized AI assistance for your business.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    color: 'cyan',
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
