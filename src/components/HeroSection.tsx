import { useEffect, useRef } from 'react';
import businessBoosterBg from '@/assets/business-booster-bg.jpg';

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
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-background to-secondary cyber-grid"
    >
      {/* Abstract shapes in background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-96 -right-96 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-primary/30 to-accent/30 animate-float premium-glow" style={{animationDuration: '15s'}}></div>
        <div className="absolute top-1/4 -left-96 w-[600px] h-[600px] rounded-full bg-gradient-to-b from-accent/20 to-primary/20 animate-float premium-glow" style={{animationDuration: '20s', animationDelay: '2s'}}></div>
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-primary/30 to-accent/30 animate-float premium-glow" style={{animationDuration: '25s', animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="staggered-fade-in space-y-8">
            <p className="inline-block py-1 px-3 bg-primary/10 text-primary text-xs font-semibold rounded-full neon-border">
              AI + DIGITAL MARKETING
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Transform Your <span className="text-gradient">Digital Presence</span> With AI
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-lg">
              Combining cutting-edge AI technology with strategic digital marketing to help your business reach its full potential.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <a
                href="#services"
                className="btn-premium hover-scale text-center"
              >
                Explore Services
              </a>
              <a
                href="#contact"
                className="btn-ghost-premium hover-scale text-center"
              >
                Get in Touch
              </a>
            </div>
          </div>
          
        </div>
        
        <div className="mt-20 md:mt-32 flex justify-center">
          <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center animate-bounce">
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
