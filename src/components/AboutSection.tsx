
import { useEffect, useRef } from 'react';

const stats = [
  { value: '95%', label: 'Client Retention' },
  { value: '200+', label: 'Projects Completed' },
  { value: '40+', label: 'AI Implementations' },
  { value: '15+', label: 'Industry Awards' },
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
    <section id="about" className="section-padding bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-8 reveal-on-scroll">
            <p className="inline-block py-1 px-3 bg-gray-100 text-gray-800 text-xs font-semibold rounded-full">
              ABOUT US
            </p>
            <h2 className="text-4xl font-bold leading-tight">
              We bridge the gap between <span className="text-gradient">technology</span> and <span className="text-gradient">marketing</span>
            </h2>
            <p className="text-gray-600">
              Founded on the principle that AI and digital marketing should work in harmony, we've assembled a team of specialists who understand both the technological and creative aspects of digital business.
            </p>
            <p className="text-gray-600">
              Our interdisciplinary approach allows us to develop solutions that not only leverage cutting-edge technology but also connect with audiences on a human level.
            </p>
            
            <div className="pt-4">
              <a
                href="#work"
                className="inline-flex items-center text-black font-medium hover:text-gray-700 transition-colors"
              >
                <span>View our work</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 reveal-on-scroll">
            <div className="relative">
              <div className="w-full h-80 md:h-96 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Our team working together"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-40 rounded-lg overflow-hidden border-4 border-white shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
                  alt="Digital workspace"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm reveal-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-black">{stat.value}</div>
              <div className="text-gray-500 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
