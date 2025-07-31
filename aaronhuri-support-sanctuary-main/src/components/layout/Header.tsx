import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Aaron & Huri</h1>
              <p className="text-sm text-gray-600">Ministry</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">
              About Us
            </Link>
            <Link to="/mission" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">
              Mission
            </Link>
            <Link to="/children" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">
              Children
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
              Support Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-cyan-600 hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-700 hover:text-cyan-600 hover:bg-gray-50 rounded-md font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-700 hover:text-cyan-600 hover:bg-gray-50 rounded-md font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/mission"
                className="block px-3 py-2 text-gray-700 hover:text-cyan-600 hover:bg-gray-50 rounded-md font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Mission
              </Link>
              <Link
                to="/children"
                className="block px-3 py-2 text-gray-700 hover:text-cyan-600 hover:bg-gray-50 rounded-md font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Children
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-cyan-600 hover:bg-gray-50 rounded-md font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4">
                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
                  Support Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 