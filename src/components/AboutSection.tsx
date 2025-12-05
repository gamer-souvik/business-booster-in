import { useEffect, useRef } from 'react';
import teamCollaboration from '@/assets/team-collaboration.jpg';
import digitalWorkspace from '@/assets/digital-workspace.jpg';

const stats = [
  { value: '95%', label: 'Client Retention', color: 'cyan' },
  { value: '200+', label: 'Projects Completed', color: 'magenta' },
  { value: '40+', label: 'AI Implementations', color: 'cyan' },
  { value: '15+', label: 'Industry Awards', color: 'magenta' },
];

const AboutSection = () => {
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
    <section id="about" className="section-padding relative overflow-hidden" ref={sectionRef}>
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rotate-45 animate-float" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-40 right-20 w-24 h-24 border border-accent/20 animate-float" style={{ animationDuration: '6s', animationDelay: '2s' }} />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-8 reveal-on-scroll">
            <div className="inline-flex items-center gap-3">
              <span className="w-12 h-[2px] bg-gradient-to-r from-primary to-accent" />
              <p className="py-1 px-4 bg-primary/10 text-primary text-xs font-bold tracking-[0.3em] uppercase neon-border font-cyber">
                ABOUT US
              </p>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight font-cyber">
              <span className="text-foreground">WE BRIDGE </span>
              <span className="text-gradient">TECHNOLOGY</span>
              <span className="text-foreground"> AND </span>
              <span className="text-gradient-cyber">MARKETING</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground font-body text-lg leading-relaxed">
              <p>
                Founded on the principle that AI and digital marketing should work in harmony, 
                we've assembled a team of specialists who understand both the technological and 
                creative aspects of digital business.
              </p>
              <p>
                Our interdisciplinary approach allows us to develop solutions that not only 
                leverage cutting-edge technology but also connect with audiences on a human level.
              </p>
            </div>
            
            <div className="pt-4">
              <a
                href="#work"
                className="btn-cyber-outline inline-flex items-center gap-3 hover-scale"
              >
                <span>VIEW OUR WORK</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 reveal-on-scroll">
            <div className="relative">
              {/* Main image */}
              <div className="relative w-full h-80 md:h-[450px] overflow-hidden cyber-card p-0">
                <img
                  src={teamCollaboration}
                  alt="Futuristic tech team collaborating with holographic AI displays"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                
                {/* Scan line */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-scan" />
                </div>
              </div>
              
              {/* Secondary image */}
              <div className="absolute -bottom-8 -right-8 w-48 md:w-64 h-32 md:h-40 overflow-hidden cyber-card p-0 pulse-border">
                <img
                  src={digitalWorkspace}
                  alt="Premium digital workspace with advanced AI interfaces"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative corner */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-primary" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-accent" />
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="cyber-card text-center reveal-on-scroll animated-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`text-4xl md:text-5xl font-bold font-cyber ${stat.color === 'cyan' ? 'neon-text-cyan' : 'neon-text-magenta'}`}>
                {stat.value}
              </div>
              <div className="text-muted-foreground mt-3 text-sm uppercase tracking-wider font-body">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
