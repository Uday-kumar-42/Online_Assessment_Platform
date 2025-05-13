
import React, { useState, useEffect } from 'react';
import { Menu, X, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`${isScrolled ? 'bg-white shadow-md' : 'bg-white/80'} backdrop-blur-sm sticky top-0 z-50 py-4 px-6 md:px-10 transition-all duration-300`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="bg-primary rounded-lg w-8 h-8 flex items-center justify-center">
              <span className="text-white font-bold">E</span>
            </span>
            <span className="font-bold text-xl text-primary">Examify</span>
          </Link>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/#features" className="text-gray-600 hover:text-primary transition-colors">Features</Link>
          <Link to="/#solutions" className="text-gray-600 hover:text-primary transition-colors">Solutions</Link>
          <Link to="/#pricing" className="text-gray-600 hover:text-primary transition-colors">Pricing</Link>
          <Link to="/#support" className="text-gray-600 hover:text-primary transition-colors">Support</Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/signin">
            <Button variant="outline" className="border-primary text-primary">Sign In</Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-primary text-white">Sign Up</Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <Link to="/signin" className="mr-4">
            <User size={24} className="text-primary" />
          </Link>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-50 py-4 px-6">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/#features" 
              className="text-gray-600 hover:text-primary transition-colors py-2"
            >
              Features
            </Link>
            <Link 
              to="/#solutions" 
              className="text-gray-600 hover:text-primary transition-colors py-2"
            >
              Solutions
            </Link>
            <Link 
              to="/#pricing" 
              className="text-gray-600 hover:text-primary transition-colors py-2"
            >
              Pricing
            </Link>
            <Link 
              to="/#support" 
              className="text-gray-600 hover:text-primary transition-colors py-2"
            >
              Support
            </Link>
            <div className="flex flex-col space-y-2 pt-2 border-t">
              <Link to="/signin">
                <Button variant="outline" className="w-full">Sign In</Button>
              </Link>
              <Link to="/signup">
                <Button className="w-full">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
