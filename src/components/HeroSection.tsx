import { useEffect, useRef } from 'react';

const HeroSection = () => {
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

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden cyber-grid"
    >
      {/* Animated cyber shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Neon cyan orb */}
        <div 
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-30 animate-float-cyber"
          style={{
            background: 'radial-gradient(circle, hsl(180 100% 50% / 0.4), transparent 70%)',
            filter: 'blur(40px)',
            animationDuration: '8s'
          }}
        />
        {/* Neon magenta orb */}
        <div 
          className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full opacity-30 animate-float-cyber"
          style={{
            background: 'radial-gradient(circle, hsl(320 100% 60% / 0.4), transparent 70%)',
            filter: 'blur(40px)',
            animationDuration: '10s',
            animationDelay: '2s'
          }}
        />
        {/* Geometric shapes */}
        <div 
          className="absolute bottom-20 right-1/4 w-40 h-40 border border-primary/30 rotate-45 animate-float"
          style={{ animationDuration: '6s' }}
        />
        <div 
          className="absolute top-1/4 right-1/3 w-20 h-20 border-2 border-accent/40 animate-float"
          style={{ animationDuration: '5s', animationDelay: '1s' }}
        />
        
        {/* Scan line effect */}
        <div 
          className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 animate-scan"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="max-w-4xl">
          <div className="staggered-fade-in space-y-8">
            <div className="inline-flex items-center gap-3">
              <span className="w-12 h-[2px] bg-gradient-to-r from-primary to-accent" />
              <p className="py-1 px-4 bg-primary/10 text-primary text-xs font-bold tracking-[0.3em] uppercase neon-border font-cyber">
                NEXT GEN DIGITAL
              </p>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-foreground block">TRANSFORM YOUR</span>
              <span 
                className="text-gradient-cyber block glitch-text flicker" 
                data-text="DIGITAL EMPIRE"
              >
                DIGITAL EMPIRE
              </span>
              <span className="text-foreground block">WITH AI</span>
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl font-body leading-relaxed">
              Harness the power of artificial intelligence and cutting-edge digital marketing 
              to dominate your market. We don't just boost businesses — we revolutionize them.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a href="#services" className="btn-cyber hover-scale">
                <span className="relative z-10">EXPLORE SERVICES</span>
              </a>
              <a href="#contact" className="btn-cyber-outline hover-scale">
                <span className="relative z-10">GET IN TOUCH</span>
              </a>
            </div>

            {/* Stats strip */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border/30">
              <div className="corner-accents p-4">
                <span className="text-3xl font-bold neon-text-cyan font-cyber">200+</span>
                <p className="text-muted-foreground text-sm uppercase tracking-wider">Projects</p>
              </div>
              <div className="corner-accents p-4">
                <span className="text-3xl font-bold neon-text-magenta font-cyber">95%</span>
                <p className="text-muted-foreground text-sm uppercase tracking-wider">Success Rate</p>
              </div>
              <div className="corner-accents p-4">
                <span className="text-3xl font-bold neon-text-cyan font-cyber">24/7</span>
                <p className="text-muted-foreground text-sm uppercase tracking-wider">Support</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="w-12 h-12 border-2 border-primary/50 flex items-center justify-center animate-bounce neon-border">
            <svg className="w-5 h-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
