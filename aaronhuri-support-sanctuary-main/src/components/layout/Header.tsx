import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";

const baseLink = "font-medium transition-all duration-200";
const inactiveLink = "text-gray-600 hover:text-blue-600";
const activeLink = "text-blue-600 font-semibold";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-lg border-b border-gray-100' : 'shadow-sm border-b border-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 hover:opacity-90 transition-opacity">
            <div 
              className="w-12 h-12 lg:w-14 lg:h-14 shadow-sm relative rounded-full bg-gray-900 ring-1 ring-gray-700"
              style={{
                backgroundImage: 'url(/logo.png)',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
              }}
            >
              <span className="sr-only">Aaron & Hur Ministry Logo</span>
            </div>
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Aaron & Hur</h1>
              <p className="text-sm text-gray-500 leading-tight">Ministry</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            <NavLink 
              to="/" 
              className={({ isActive }) => `${baseLink} ${isActive ? activeLink : inactiveLink} relative`}
            >
              {({ isActive }) => (
                <>
                  Home
                  {isActive && <span className="absolute -bottom-5 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></span>}
                </>
              )}
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => `${baseLink} ${isActive ? activeLink : inactiveLink} relative`}
            >
              {({ isActive }) => (
                <>
                  About Us
                  {isActive && <span className="absolute -bottom-5 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></span>}
                </>
              )}
            </NavLink>
            <NavLink 
              to="/mission" 
              className={({ isActive }) => `${baseLink} ${isActive ? activeLink : inactiveLink} relative`}
            >
              {({ isActive }) => (
                <>
                  Mission
                  {isActive && <span className="absolute -bottom-5 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></span>}
                </>
              )}
            </NavLink>
            <NavLink 
              to="/children" 
              className={({ isActive }) => `${baseLink} ${isActive ? activeLink : inactiveLink} relative`}
            >
              {({ isActive }) => (
                <>
                  Children
                  {isActive && <span className="absolute -bottom-5 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></span>}
                </>
              )}
            </NavLink>
            <NavLink 
              to="/churches" 
              className={({ isActive }) => `${baseLink} ${isActive ? activeLink : inactiveLink} relative`}
            >
              {({ isActive }) => (
                <>
                  Churches
                  {isActive && <span className="absolute -bottom-5 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></span>}
                </>
              )}
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => `${baseLink} ${isActive ? activeLink : inactiveLink} relative`}
            >
              {({ isActive }) => (
                <>
                  Contact
                  {isActive && <span className="absolute -bottom-5 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></span>}
                </>
              )}
            </NavLink>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 font-semibold shadow-sm hover:shadow-md transition-all duration-200">
                Support Us
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-all duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="px-2 py-3 space-y-1 bg-white border-t border-gray-100">
            <NavLink
              to="/"
              className={({ isActive }) => `block px-4 py-3 rounded-lg ${baseLink} ${
                isActive ? 'text-blue-600 font-semibold bg-blue-50' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => `block px-4 py-3 rounded-lg ${baseLink} ${
                isActive ? 'text-blue-600 font-semibold bg-blue-50' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </NavLink>
            <NavLink
              to="/mission"
              className={({ isActive }) => `block px-4 py-3 rounded-lg ${baseLink} ${
                isActive ? 'text-blue-600 font-semibold bg-blue-50' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Mission
            </NavLink>
            <NavLink
              to="/children"
              className={({ isActive }) => `block px-4 py-3 rounded-lg ${baseLink} ${
                isActive ? 'text-blue-600 font-semibold bg-blue-50' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Children
            </NavLink>
            <NavLink
              to="/churches"
              className={({ isActive }) => `block px-4 py-3 rounded-lg ${baseLink} ${
                isActive ? 'text-blue-600 font-semibold bg-blue-50' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Churches
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => `block px-4 py-3 rounded-lg ${baseLink} ${
                isActive ? 'text-blue-600 font-semibold bg-blue-50' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
            <div className="pt-4 px-4">
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                  Support Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;