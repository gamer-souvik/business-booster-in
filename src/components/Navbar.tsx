import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12', isScrolled ? 'glass-effect shadow-sm' : 'bg-transparent')}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl font-semibold tracking-tight text-foreground">
            <span className="font-extrabold text-gradient">BUSINESS BOOSTER</span>
            <span className="text-xs font-extrabold text-left text-accent">.ORG</span>
          </a>

          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <a href="#services" className="hover-link py-2 text-sm font-medium">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover-link py-2 text-sm font-medium">
                  About
                </a>
              </li>
              <li>
                <a href="#work" className="hover-link py-2 text-sm font-medium">
                  Work
                </a>
              </li>
              <li>
                <a href="#contact" className="hover-link py-2 text-sm font-medium">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <button className="ml-auto md:ml-0 p-2 md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
            <div className="w-6 flex flex-col gap-1.5">
              <span className={cn('block h-0.5 bg-foreground transition-transform duration-300 ease-in-out', isMenuOpen ? 'translate-y-2 rotate-45' : '')}></span>
              <span className={cn('block h-0.5 bg-foreground transition-opacity duration-300 ease-in-out', isMenuOpen ? 'opacity-0' : 'opacity-100')}></span>
              <span className={cn('block h-0.5 bg-foreground transition-transform duration-300 ease-in-out', isMenuOpen ? '-translate-y-2 -rotate-45' : '')}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn('fixed inset-x-0 top-[60px] glass-effect h-0 overflow-hidden transition-all duration-300 ease-in-out md:hidden', isMenuOpen ? 'h-64 border-b border-border' : '')}>
        <div className="container px-6 py-8">
          <ul className="flex flex-col space-y-6">
            <li className="opacity-0 animate-fade-in" style={{
            animationDelay: '0.1s'
          }}>
              <a href="#services" className="text-lg font-medium" onClick={toggleMenu}>
                Services
              </a>
            </li>
            <li className="opacity-0 animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              <a href="#about" className="text-lg font-medium" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li className="opacity-0 animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
              <a href="#work" className="text-lg font-medium" onClick={toggleMenu}>
                Work
              </a>
            </li>
            <li className="opacity-0 animate-fade-in" style={{
            animationDelay: '0.4s'
          }}>
              <a href="#contact" className="text-lg font-medium" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>;
};
export default Navbar;