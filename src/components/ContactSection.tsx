import { useState, useRef, useEffect } from 'react';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.reveal-on-scroll');
          elements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('revealed');
            }, index * 100);
          });
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', phone: '', service: '', message: '' });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-12 h-[2px] bg-gradient-to-r from-transparent to-accent" />
            <p className="py-1 px-4 bg-accent/10 text-accent text-xs font-bold tracking-[0.3em] uppercase neon-border-magenta font-cyber">
              GET IN TOUCH
            </p>
            <span className="w-12 h-[2px] bg-gradient-to-l from-transparent to-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-cyber">
            <span className="text-foreground">READY TO </span>
            <span className="text-gradient-cyber">TRANSFORM</span>
            <span className="text-foreground"> YOUR STRATEGY?</span>
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            Reach out to discuss how our AI and digital marketing services can help your business achieve its goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="reveal-on-scroll">
            <div className="cyber-card h-full">
              <h3 className="text-2xl font-bold mb-8 font-cyber text-gradient">CONTACT INFORMATION</h3>
              
              <div className="space-y-8">
                {[
                  { icon: 'location', label: 'Our Location', value: '57/15 Dewangazi Road, Bally, Howrah, Pin-711201' },
                  { icon: 'phone', label: 'Call Us', value: '+(91) 9932702906' },
                  { icon: 'email', label: 'Email Us', value: 'boosterbusiness.org@gmail.com' },
                  { icon: 'clock', label: 'Working Hours', value: 'Monday - Friday: 9 AM - 6 PM' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 flex items-center justify-center border border-primary/30 text-primary group-hover:neon-text-cyan group-hover:border-primary transition-all duration-300">
                      {item.icon === 'location' && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      )}
                      {item.icon === 'phone' && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      )}
                      {item.icon === 'email' && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      )}
                      {item.icon === 'clock' && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground font-cyber uppercase tracking-wider text-sm">{item.label}</p>
                      <p className="text-muted-foreground mt-1 font-body">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-10 pt-8 border-t border-border/30">
                <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4 font-cyber">Follow Us</p>
                <div className="flex gap-4">
                  {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300"
                    >
                      <span className="sr-only">{social}</span>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="reveal-on-scroll">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2 font-cyber uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="input-cyber"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2 font-cyber uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="input-cyber"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2 font-cyber uppercase tracking-wider">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="input-cyber"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-foreground mb-2 font-cyber uppercase tracking-wider">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formState.service}
                  onChange={handleChange}
                  required
                  className="input-cyber bg-background"
                >
                <option value="" disabled>Select a service</option>
                  <option value="ai-automation">AI Automation for Business</option>
                  <option value="ai-agents">AI Agents</option>
                  <option value="voice-calling-agents">Voice Calling Agents</option>
                  <option value="ai-ugc-videos">AI UGC Videos</option>
                  <option value="web-apps">Web Apps Development</option>
                  <option value="app-development">App Development</option>
                  <option value="website-development">Website Development</option>
                  <option value="ai-chatbots">AI Chatbots</option>
                  <option value="custom-gpt">Custom GPT</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2 font-cyber uppercase tracking-wider">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="input-cyber resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="btn-cyber w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    SENDING...
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center gap-2">
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    MESSAGE SENT!
                  </span>
                ) : (
                  'SEND MESSAGE'
                )}
              </button>
              
              {isSubmitted && (
                <div className="cyber-card bg-primary/5 border-primary/30 animate-fade-in">
                  <p className="text-primary font-body">
                    Thank you for reaching out! We'll get back to you as soon as possible.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
