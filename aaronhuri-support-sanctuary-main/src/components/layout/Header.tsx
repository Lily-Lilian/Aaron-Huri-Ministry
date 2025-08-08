import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";

const baseLink = "font-medium transition-colors";
const inactiveLink = "text-gray-700 hover:text-cyan-600";
const activeLink = "text-cyan-600 font-semibold border-b-2 border-cyan-600 pb-1";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-9 h-9 md:w-10 md:h-10 bg-cyan-600 rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Aaron & Huri</h1>
              <p className="text-sm text-gray-600">Ministry</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={({ isActive }) => `${baseLink} ${isActive ? activeLink : inactiveLink}`}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => `${baseLink} ${isActive ? activeLink : inactiveLink}`}>About Us</NavLink>
            <NavLink to="/mission" className={({ isActive }) => `${baseLink} ${isActive ? activeLink : inactiveLink}`}>Mission</NavLink>
            <NavLink to="/children" className={({ isActive }) => `${baseLink} ${isActive ? activeLink : inactiveLink}`}>Children</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `${baseLink} ${isActive ? activeLink : inactiveLink}`}>Contact</NavLink>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact">
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">Support Us</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-cyan-600 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <NavLink
                to="/"
                className={({ isActive }) => `block px-3 py-2 rounded-md ${baseLink} ${isActive ? 'text-cyan-600 font-semibold bg-cyan-50' : 'text-gray-700 hover:text-cyan-600 hover:bg-gray-50'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => `block px-3 py-2 rounded-md ${baseLink} ${isActive ? 'text-cyan-600 font-semibold bg-cyan-50' : 'text-gray-700 hover:text-cyan-600 hover:bg-gray-50'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </NavLink>
              <NavLink
                to="/mission"
                className={({ isActive }) => `block px-3 py-2 rounded-md ${baseLink} ${isActive ? 'text-cyan-600 font-semibold bg-cyan-50' : 'text-gray-700 hover:text-cyan-600 hover:bg-gray-50'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Mission
              </NavLink>
              <NavLink
                to="/children"
                className={({ isActive }) => `block px-3 py-2 rounded-md ${baseLink} ${isActive ? 'text-cyan-600 font-semibold bg-cyan-50' : 'text-gray-700 hover:text-cyan-600 hover:bg-gray-50'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Children
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) => `block px-3 py-2 rounded-md ${baseLink} ${isActive ? 'text-cyan-600 font-semibold bg-cyan-50' : 'text-gray-700 hover:text-cyan-600 hover:bg-gray-50'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
              <div className="pt-4">
                <Link to="/contact">
                  <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">Support Us</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
