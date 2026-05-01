import { Link } from 'react-router-dom';

const links = [
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/team', label: 'Team' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact' },
  { to: '/', label: 'Home' },
];

const InternalLinks = ({ exclude }: { exclude?: string }) => {
  const visible = links.filter((l) => l.to !== exclude);
  return (
    <nav aria-label="Explore more" className="container mx-auto px-6 md:px-12 py-12">
      <div className="glass-effect p-8 border border-primary/20">
        <h2 className="text-sm font-cyber uppercase tracking-widest text-gradient mb-6">
          Explore More
        </h2>
        <ul className="flex flex-wrap gap-4">
          {visible.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="px-4 py-2 border border-primary/30 text-muted-foreground hover:text-primary hover:border-primary hover:shadow-[0_0_15px_hsl(180_100%_50%/0.3)] transition-all duration-300 font-cyber uppercase text-xs tracking-wider"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default InternalLinks;
