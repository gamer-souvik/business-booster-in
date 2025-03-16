
import { useEffect, useRef } from 'react';

const services = [
  {
    category: 'AI Services',
    title: 'Custom AI Solutions',
    description: 'Tailor-made AI applications that solve your unique business challenges and automate complex processes.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2a3 3 0 0 0-3 3v1H4.5a1.5 1.5 0 0 0-1.5 1.5v12a1.5 1.5 0 0 0 1.5 1.5h15a1.5 1.5 0 0 0 1.5-1.5v-12a1.5 1.5 0 0 0-1.5-1.5H15V5a3 3 0 0 0-3-3Z"></path>
        <path d="M15 13a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
      </svg>
    ),
  },
  {
    category: 'AI Services',
    title: 'Predictive Analytics',
    description: 'Leverage machine learning algorithms to forecast trends and make data-driven decisions for your business.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3 3v18h18"></path>
        <path d="m19 9-5 5-4-4-3 3"></path>
      </svg>
    ),
  },
  {
    category: 'AI Services',
    title: 'Natural Language Processing',
    description: 'Implement conversational AI, sentiment analysis, and text processing for enhanced customer interactions.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
    ),
  },
  {
    category: 'Digital Marketing',
    title: 'SEO Optimization',
    description: 'Enhance your online visibility with data-driven SEO strategies that drive organic traffic and improve rankings.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.3-4.3"></path>
      </svg>
    ),
  },
  {
    category: 'Digital Marketing',
    title: 'Content Marketing',
    description: 'Create engaging, valuable content that resonates with your audience and drives conversion across channels.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
      </svg>
    ),
  },
  {
    category: 'Digital Marketing',
    title: 'Social Media Strategy',
    description: 'Develop a comprehensive social media presence that builds community and drives engagement with your brand.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
      </svg>
    ),
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
    <section id="services" className="section-padding bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <p className="inline-block py-1 px-3 bg-gray-100 text-gray-800 text-xs font-semibold rounded-full mb-4">
            OUR SERVICES
          </p>
          <h2 className="text-4xl font-bold mb-6">
            Comprehensive Solutions for the Digital Age
          </h2>
          <p className="text-gray-600">
            We offer a full suite of AI-powered services and digital marketing strategies designed to elevate your brand and drive measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-gray-100 hover:shadow-xl transition-all duration-300 bg-white reveal-on-scroll animated-card"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-5">
                {service.icon}
              </div>
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                {service.category}
              </span>
              <h3 className="text-xl font-semibold mt-2 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center reveal-on-scroll">
          <a
            href="#contact"
            className="px-6 py-3 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition-colors duration-300 inline-flex items-center"
          >
            <span>Talk to our specialists</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
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
    </section>
  );
};

export default ServicesSection;
