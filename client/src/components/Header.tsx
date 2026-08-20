import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import LogoSVG from './LogoSVG';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`bg-white fixed w-full z-50 transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`} style={{ backgroundColor: 'white' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <LogoSVG className="h-14 w-auto" />
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <span className="nav-link text-onyx hover:text-pumpkin transition-colors font-medium cursor-pointer">Home</span>
            </Link>
            <a href="/#services" className="nav-link text-onyx hover:text-pumpkin transition-colors font-medium">Services</a>
            <a href="/#about" className="nav-link text-onyx hover:text-pumpkin transition-colors font-medium">About Us</a>
            <Link href="/tools">
              <span className="nav-link text-onyx hover:text-pumpkin transition-colors font-medium cursor-pointer">Resources</span>
            </Link>
            <a href="/#contact" className="nav-link text-onyx hover:text-pumpkin transition-colors font-medium">Contact</a>
            <a href="/#contact" className="btn-primary hover:shadow-glow">Let's Chat!</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none text-onyx hover:text-pumpkin transition-colors" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-4 space-y-3">
            <Link href="/">
              <span className="block px-3 py-2 text-onyx hover:text-pumpkin transition-colors font-medium cursor-pointer rounded hover:bg-ivory" onClick={closeMobileMenu}>Home</span>
            </Link>
            <a href="/#services" className="block px-3 py-2 text-onyx hover:text-pumpkin transition-colors font-medium rounded hover:bg-ivory" onClick={closeMobileMenu}>Services</a>
            <a href="/#about" className="block px-3 py-2 text-onyx hover:text-pumpkin transition-colors font-medium rounded hover:bg-ivory" onClick={closeMobileMenu}>About Us</a>
            <Link href="/tools">
              <span className="block px-3 py-2 text-onyx hover:text-pumpkin transition-colors font-medium cursor-pointer rounded hover:bg-ivory" onClick={closeMobileMenu}>Resources</span>
            </Link>
            <a href="/#contact" className="block px-3 py-2 text-onyx hover:text-pumpkin transition-colors font-medium rounded hover:bg-ivory" onClick={closeMobileMenu}>Contact</a>
            <a href="/#contact" className="block px-3 py-2 mt-2 bg-pumpkin text-white rounded-md font-medium hover:shadow-glow transition-all transform hover:-translate-y-1" onClick={closeMobileMenu}>Let's Chat!</a>
          </div>
        </div>
      </div>
    </header>
  );
}
