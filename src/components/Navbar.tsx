
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-solar-dark/90 shadow-md blur-backdrop' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold text-black dark:text-white solar-transition flex items-center"
          >
            <span className="gradient-text">SolarTech</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-800 dark:text-white hover:text-black dark:hover:text-gray-300 solar-transition font-medium"
            >
              Home
            </Link>
            <Link 
              to="/tools" 
              className="text-gray-800 dark:text-white hover:text-black dark:hover:text-gray-300 solar-transition font-medium"
            >
              Tools
            </Link>
            <Link 
              to="/about" 
              className="text-gray-800 dark:text-white hover:text-black dark:hover:text-gray-300 solar-transition font-medium"
            >
              About
            </Link>
            <Link 
              to="/shop" 
              className="text-gray-800 dark:text-white hover:text-black dark:hover:text-gray-300 solar-transition font-medium"
            >
              Shop
            </Link>
            <Link 
              to="/cart" 
              className="text-gray-800 dark:text-white hover:text-black dark:hover:text-gray-300 solar-transition"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="h-5 w-5" />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-800 dark:text-white focus:outline-none"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 animate-fade-in" />
            ) : (
              <Menu className="h-6 w-6 animate-fade-in" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-solar-dark shadow-xl animate-fade-in">
          <div className="px-4 pt-2 pb-6 space-y-4">
            <Link 
              to="/" 
              className="block py-2 text-gray-800 dark:text-white hover:text-black dark:hover:text-gray-300 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/tools" 
              className="block py-2 text-gray-800 dark:text-white hover:text-black dark:hover:text-gray-300 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Tools
            </Link>
            <Link 
              to="/about" 
              className="block py-2 text-gray-800 dark:text-white hover:text-black dark:hover:text-gray-300 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/shop" 
              className="block py-2 text-gray-800 dark:text-white hover:text-black dark:hover:text-gray-300 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              to="/cart" 
              className="block py-2 text-gray-800 dark:text-white hover:text-black dark:hover:text-gray-300 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Cart
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
