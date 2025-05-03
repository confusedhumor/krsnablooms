import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, MessageCircle } from 'lucide-react';
import krsnalogo from './assets/images/krsnalogo.webp';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Order from './pages/Order';
import DeliveryAreas from './pages/DeliveryAreas';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="bg-white shadow-md fixed w-full z-50">
          <div className="max-w-14xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-18">
              <div className="flex items-center">
                <Link to="/" className="flex items-center">
                  <img 
                    src={krsnalogo} 
                    alt="Kṛṣṇa Blooms Logo" 
                    className="h-18 w-20 object-contain"
                  />
                  <span className="ml-0 text-xl font-semibold text-[#33c1ff]">Kṛṣṇa Blooms</span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="text-gray-600 hover:text-pink-500">Home</Link>
                <Link to="/shop" className="text-gray-600 hover:text-pink-500">Flowers</Link>
                <Link to="/order" className="text-gray-600 hover:text-pink-500">Order Now</Link>
                <Link to="/delivery" className="text-gray-600 hover:text-pink-500">Delivery Areas</Link>
                <Link to="/contact" className="text-gray-600 hover:text-pink-500">Contact</Link>
                <Link to="/about" className="text-gray-600 hover:text-pink-500">About Us</Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-600 hover:text-pink-500"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link to="/" className="block px-3 py-2 text-gray-600 hover:text-pink-500" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link to="/shop" className="block px-3 py-2 text-gray-600 hover:text-pink-500" onClick={() => setIsMenuOpen(false)}>Flowers</Link>
                <Link to="/order" className="block px-3 py-2 text-gray-600 hover:text-pink-500" onClick={() => setIsMenuOpen(false)}>Order Now</Link>
                <Link to="/delivery" className="block px-3 py-2 text-gray-600 hover:text-pink-500" onClick={() => setIsMenuOpen(false)}>Delivery Areas</Link>
                <Link to="/contact" className="block px-3 py-2 text-gray-600 hover:text-pink-500" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                <Link to="/about" className="block px-3 py-2 text-gray-600 hover:text-pink-500" onClick={() => setIsMenuOpen(false)}>About Us</Link>
              </div>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/order" element={<Order />} />
            <Route path="/delivery" element={<DeliveryAreas />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Sticky WhatsApp Button */}
        <a
          href="https://wa.me/+919811099730"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
        >
          <MessageCircle className="h-6 w-6" />
        </a>

        {/* Footer */}
        <footer className="bg-gray-50 mt-16">
          <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Kṛṣṇa Blooms</h3>
                <p className="text-gray-600">Bringing fresh flowers to your doorstep daily.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <div className="space-y-2">
                  <p className="flex items-center text-gray-600">
                    <Phone className="h-5 w-5 mr-2" />
                    +91 9811099730
                  </p>
                  <p className="flex items-center text-gray-600">
                    <Mail className="h-5 w-5 mr-2" />
                    support@krsnablooms.in
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Delivery Hours</h3>
                <p className="text-gray-600">Monday - Sunday</p>
                <p className="text-gray-600">6:00 AM - 10:00 AM</p>
                <p className="text-gray-600">4:00 PM - 7:00 PM</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
