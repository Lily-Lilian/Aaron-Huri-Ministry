import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Youtube, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: Brand Section */}
          <div className="lg:col-span-5">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 shadow-lg">
                <img 
                  src="/logo.png" 
                  alt="Aaron & Hur Ministry Logo" 
                  className="w-full h-full object-contain"
                  onLoad={() => console.log('Footer logo loaded successfully')}
                  onError={(e) => {
                    console.error('Footer logo failed to load:', e);
                    // Fallback to Heart icon if logo fails to load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-blue-600 rounded-full flex items-center justify-center" style={{display: 'none'}}>
                  <Heart className="w-7 h-7 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold">Aaron & Hur Ministry</h3>
                <p className="text-gray-400">Serving God by serving others</p>
              </div>
            </div>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed max-w-md">
              Just as Aaron and Hur supported Moses, we support church leaders by caring for their children's education and maintaining God's house.
            </p>
            
            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/share/1CLbCqEXQ1/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-200 group"
                  aria-label="Visit our Facebook page"
                >
                  <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
                <a 
                  href="https://www.instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-all duration-200 group"
                  aria-label="Visit our Instagram page"
                >
                  <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
                <a 
                  href="https://www.youtube.com/@ahministrytv4742" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-200 group"
                  aria-label="Visit our YouTube channel"
                >
                  <Youtube className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Links + Contact */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group">
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group">
                    <span>About Us</span>
                  </Link>
                </li>
                <li>
                  <Link to="/mission" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group">
                    <span>Our Mission</span>
                  </Link>
                </li>
                <li>
                  <Link to="/children" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group">
                    <span>Pastor's Children</span>
                  </Link>
                </li>
                <li>
                  <Link to="/churches" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group">
                    <span>Church Cleaning</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group">
                    <span>Contact Us</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">Email us</p>
                    <a href="mailto:aaronhur1@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                      aaronhur1@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">Call us</p>
                    <a href="tel:+250785715059" className="text-blue-400 hover:text-blue-300 transition-colors">
                      +(250) 785-715-059
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">Visit us</p>
                    <p className="text-blue-400">Rwanda, East Africa</p>
                  </div>
                </div>
              </div>

              {/* Scripture */}
              <div className="mt-8 p-4 bg-gray-800 rounded-lg border-l-4 border-blue-600">
                <p className="text-blue-400 text-sm font-medium mb-1">Our Foundation</p>
                <p className="text-gray-300 text-sm italic leading-relaxed">
                  "When Moses' hands grew weary, Aaron and Hur held up his hands..." 
                  <span className="block text-blue-400 not-italic font-medium mt-1">Exodus 17:12</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-gray-400">
                © {new Date().getFullYear()} Aaron & Hur Ministry. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Supporting God's work through practical ministry.
              </p>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Terms of Service
              </Link>
              <a 
                href="https://www.youtube.com/@ahministrytv4742" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 text-sm transition-colors inline-flex items-center"
              >
                Watch Videos <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;