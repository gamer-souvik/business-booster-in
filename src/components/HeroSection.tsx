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
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-background via-secondary to-background"
    >
      {/* Neon corner accents */}
      <div className="neon-corner top-left"></div>
      <div className="neon-corner top-right"></div>
      <div className="neon-corner bottom-left"></div>
      <div className="neon-corner bottom-right"></div>
      
      {/* Abstract shapes in background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-96 -right-96 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-primary/40 to-accent/40 animate-float premium-glow" style={{animationDuration: '15s'}}></div>
        <div className="absolute top-1/4 -left-96 w-[600px] h-[600px] rounded-full bg-gradient-to-b from-accent/30 to-primary/30 animate-float premium-glow" style={{animationDuration: '20s', animationDelay: '2s'}}></div>
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-primary/40 to-accent/40 animate-float premium-glow" style={{animationDuration: '25s', animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="staggered-fade-in space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight uppercase">
              <span className="text-gradient block" style={{ letterSpacing: '0.05em' }}>BUSINESS</span>
              <span className="text-gradient block" style={{ letterSpacing: '0.05em' }}>BOOSTER</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-lg">
              Experience the next generation of AI-powered digital marketing with cutting-edge strategy and innovation.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <a
                href="#services"
                className="group relative bg-transparent border-2 border-primary text-primary px-8 py-3 rounded-md font-semibold uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-center overflow-hidden"
                style={{ boxShadow: 'var(--neon-border)' }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Explore Services
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
          
          <div className="relative h-[400px] md:h-[500px] reveal-on-scroll">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full rounded-2xl overflow-hidden glass-effect premium-glow">
                <iframe 
                  src='https://my.spline.design/nexbotrobotcharacterconcept-mjuLUuzezmWUuwhH3UDK3S0W/' 
                  frameBorder='0' 
                  width='100%' 
                  height='100%'
                  title="Interactive 3D AI Robot"
                  className="opacity-0 animate-blur-in"
                  style={{animationDelay: '0.3s', animationDuration: '0.8s'}}
                ></iframe>
              </div>
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
