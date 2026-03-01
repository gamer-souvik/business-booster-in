import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Linkedin, Twitter, Instagram } from 'lucide-react';
import founderImg from '@/assets/founder.jpg';
import cofounderImg from '@/assets/cofounder.jpg';
import teamMember1Img from '@/assets/team-member-1.png';
import teamMember2Img from '@/assets/team-member-2.png';
import teamMember3Img from '@/assets/team-member-3.png';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  socials?: { linkedin?: string; twitter?: string; instagram?: string };
}

const founders: TeamMember[] = [
  {
    name: "Souvik Bardhan",
    role: "Founder",
    description: "Visionary leader driving innovation in AI and digital transformation. Passionate about building cutting-edge solutions that empower businesses to thrive in the digital age.",
    image: founderImg,
    socials: { linkedin: "#", twitter: "#", instagram: "#" },
  },
  {
    name: "Dhrubojyoti Mondal",
    role: "Co-Founder",
    description: "Strategic thinker and tech enthusiast with expertise in scalable architectures. Dedicated to delivering world-class digital experiences and leading teams to excellence.",
    image: cofounderImg,
    socials: { linkedin: "#", twitter: "#", instagram: "#" },
  },
];

const teamMembers: TeamMember[] = [
  {
    name: "Ananya Roy",
    role: "Lead Developer",
    description: "Full-stack wizard crafting seamless web applications with modern frameworks. Turns complex problems into elegant, performant solutions.",
    image: teamMember1Img,
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Vikram Singh",
    role: "UI/UX Designer",
    description: "Creative designer with a keen eye for aesthetics and user experience. Transforms ideas into visually stunning and intuitive interfaces.",
    image: teamMember2Img,
    socials: { linkedin: "#", instagram: "#" },
  },
  {
    name: "Sneha Das",
    role: "AI Engineer",
    description: "Machine learning specialist building intelligent systems and automation. Passionate about pushing the boundaries of artificial intelligence.",
    image: teamMember3Img,
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Arjun Mehta",
    role: "Marketing Strategist",
    description: "Data-driven marketer crafting compelling digital campaigns. Expert at scaling brand visibility and driving measurable growth.",
    image: "",
    socials: { linkedin: "#", twitter: "#", instagram: "#" },
  },
];

const slides = [founders, teamMembers];

const TeamMemberCard = ({ member }: { member: TeamMember }) => (
  <div className="cyber-card group p-0 overflow-hidden animated-card h-full flex flex-col">
    {/* Photo */}
    <div className="relative aspect-[3/4] overflow-hidden">
      {member.image ? (
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary to-muted">
          <span className="text-5xl font-cyber font-bold text-primary" style={{ textShadow: '0 0 20px hsl(var(--neon-cyan))' }}>
            {member.name.charAt(0)}
          </span>
        </div>
      )}
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
      {/* Role badge */}
      <span className="absolute bottom-3 left-4 px-3 py-1 text-xs font-bold uppercase tracking-widest font-cyber bg-primary/20 border border-primary/50 text-primary rounded-sm" style={{ textShadow: '0 0 8px hsl(var(--neon-cyan))' }}>
        {member.role}
      </span>
    </div>

    {/* Info */}
    <div className="p-5 flex-1 flex flex-col">
      <h4 className="text-lg font-bold font-cyber text-foreground mb-2">{member.name}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{member.description}</p>

      {/* Socials */}
      {member.socials && (
        <div className="flex gap-3">
          {member.socials.linkedin && (
            <a href={member.socials.linkedin} className="text-muted-foreground hover:text-primary transition-colors duration-300" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
          )}
          {member.socials.twitter && (
            <a href={member.socials.twitter} className="text-muted-foreground hover:text-primary transition-colors duration-300" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
          )}
          {member.socials.instagram && (
            <a href={member.socials.instagram} className="text-muted-foreground hover:text-accent transition-colors duration-300" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
          )}
        </div>
      )}
    </div>

    {/* Hover glow */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-primary/5 to-accent/5" />
  </div>
);

const TeamSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const goNext = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const goPrev = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('revealed');
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll('.reveal-on-scroll');
    elements?.forEach((el) => observer.observe(el));
    return () => { elements?.forEach((el) => observer.unobserve(el)); };
  }, []);

  const currentMembers = slides[currentSlide];

  return (
    <section id="team" ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-accent/10 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 reveal-on-scroll">
          <span className="inline-block px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary border border-primary/50 rounded-full mb-4 neon-text-cyan">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-cyber uppercase mb-6">
            Meet The <span className="text-gradient-cyber">Team</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            The brilliant minds behind Business Booster, driving innovation and excellence every day.
          </p>
        </div>

        {/* Slide Content with Arrows */}
        <div className="relative reveal-on-scroll">
          {/* Navigation Arrows */}
          <button
            onClick={goPrev}
            className="absolute -left-2 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-primary/50 bg-background/80 backdrop-blur-sm text-primary hover:bg-primary/20 hover:shadow-[0_0_20px_hsl(var(--neon-cyan)/0.5)] transition-all duration-300 rounded-sm"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={goNext}
            className="absolute -right-2 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-primary/50 bg-background/80 backdrop-blur-sm text-primary hover:bg-primary/20 hover:shadow-[0_0_20px_hsl(var(--neon-cyan)/0.5)] transition-all duration-300 rounded-sm"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Cards Grid */}
          <div className="px-8 md:px-12">
            <div
              className={`grid gap-6 ${
                currentMembers.length === 2
                  ? 'grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto'
                  : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
              }`}
            >
              {currentMembers.map((member, index) => (
                <div
                  key={`${currentSlide}-${member.name}`}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <TeamMemberCard member={member} />
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-3 mt-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'w-10 bg-primary shadow-[0_0_10px_hsl(var(--neon-cyan))]'
                    : 'w-4 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
