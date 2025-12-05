import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-6 md:px-12',
        isScrolled 
          ? 'glass-effect shadow-[0_0_30px_hsl(180_100%_50%/0.2)]' 
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="/" className="group flex items-baseline gap-1">
            <span className="text-2xl font-bold tracking-wider font-cyber text-gradient-cyber group-hover:animate-glitch">
              BUSINESS
            </span>
            <span className="text-2xl font-light tracking-wider font-cyber text-foreground">
              BOOSTER
            </span>
            <span className="text-xs font-bold text-accent neon-text-magenta">.ORG</span>
          </a>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {['Services', 'About', 'Work', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="relative py-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors duration-300 hover-link"
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="#contact" 
                  className="btn-cyber text-xs py-2 px-4"
                >
                  START PROJECT
                </a>
              </li>
            </ul>
          </nav>

          <button 
            className="ml-auto md:hidden p-2 relative" 
            onClick={toggleMenu} 
            aria-label="Toggle menu"
          >
            <div className="w-7 flex flex-col gap-1.5">
              <span className={cn(
                'block h-[2px] bg-primary transition-all duration-300 shadow-[0_0_10px_hsl(180_100%_50%)]',
                isMenuOpen ? 'translate-y-2 rotate-45 w-7' : 'w-7'
              )} />
              <span className={cn(
                'block h-[2px] bg-primary transition-all duration-300 shadow-[0_0_10px_hsl(180_100%_50%)]',
                isMenuOpen ? 'opacity-0 w-0' : 'opacity-100 w-5'
              )} />
              <span className={cn(
                'block h-[2px] bg-primary transition-all duration-300 shadow-[0_0_10px_hsl(180_100%_50%)]',
                isMenuOpen ? '-translate-y-2 -rotate-45 w-7' : 'w-7'
              )} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        'fixed inset-x-0 top-[72px] glass-effect overflow-hidden transition-all duration-500 ease-out md:hidden',
        isMenuOpen ? 'h-80 border-b border-primary/30' : 'h-0'
      )}>
        <div className="container px-6 py-8">
          <ul className="flex flex-col gap-6">
            {['Services', 'About', 'Work', 'Contact'].map((item, index) => (
              <li 
                key={item}
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="text-lg font-semibold uppercase tracking-widest text-foreground hover:text-primary hover:neon-text-cyan transition-all duration-300" 
                  onClick={toggleMenu}
                >
                  {item}
                </a>
              </li>
            ))}
            <li className="opacity-0 animate-fade-in pt-4" style={{ animationDelay: '0.4s' }}>
              <a href="#contact" className="btn-cyber text-sm w-full justify-center" onClick={toggleMenu}>
                START PROJECT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
