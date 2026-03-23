import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-lime-500/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src="https://customer-assets.emergentagent.com/job_a1cbb74c-b1c8-42b8-971e-74621fd96fe1/artifacts/0fc2qo3w_tech-logo%20%281%29.png" 
              alt="Techviora Logo" 
              className="h-12 w-auto transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('what-we-do')}
              className="text-gray-300 hover:text-lime-400 transition-colors duration-200 font-medium"
            >
              What We Do
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-gray-300 hover:text-lime-400 transition-colors duration-200 font-medium"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('case-studies')}
              className="text-gray-300 hover:text-lime-400 transition-colors duration-200 font-medium"
            >
              Case Studies
            </button>
            <button 
              onClick={() => scrollToSection('how-we-work')}
              className="text-gray-300 hover:text-lime-400 transition-colors duration-200 font-medium"
            >
              Process
            </button>
            <a 
              href="https://wa.me/917049006555"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-lime-500 text-black hover:bg-lime-400 font-semibold px-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-lime-500/50">
                Book Free Call
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-lime-500 hover:text-lime-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 space-y-4 border-t border-lime-500/20 bg-black/95 backdrop-blur-xl">
            <button 
              onClick={() => scrollToSection('what-we-do')}
              className="block w-full text-left px-4 py-2 text-gray-300 hover:text-lime-400 hover:bg-lime-500/10 transition-all duration-200"
            >
              What We Do
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left px-4 py-2 text-gray-300 hover:text-lime-400 hover:bg-lime-500/10 transition-all duration-200"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('case-studies')}
              className="block w-full text-left px-4 py-2 text-gray-300 hover:text-lime-400 hover:bg-lime-500/10 transition-all duration-200"
            >
              Case Studies
            </button>
            <button 
              onClick={() => scrollToSection('how-we-work')}
              className="block w-full text-left px-4 py-2 text-gray-300 hover:text-lime-400 hover:bg-lime-500/10 transition-all duration-200"
            >
              Process
            </button>
            <div className="px-4 pt-2">
              <a 
                href="https://wa.me/917049006555"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full bg-lime-500 text-black hover:bg-lime-400 font-semibold">
                  Book Free Call
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
