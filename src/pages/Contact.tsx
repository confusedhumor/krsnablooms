import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, ExternalLink, Instagram } from 'lucide-react';

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 flex items-center justify-center text-center">
      <div className="max-w-4xl w-full px-4 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. Our team is always here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Phone */}
          <div className="bg-white rounded-2xl shadow-xl p-8 w-full transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
            <div className="flex items-start space-x-4">
              <div className="bg-pink-100 rounded-full p-3">
                <Phone className="h-6 w-6 text-pink-600" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-900">Phone</h3>
                <p className="mt-2 text-gray-600">+91 9811099730</p>
                <div className="flex items-center mt-1 text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-sm">Available: 6 AM - 7 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white rounded-2xl shadow-xl p-8 w-full transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 rounded-full p-3">
                <Mail className="h-6 w-6 text-purple-600" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-900">Email</h3>
                <a href="mailto:support@krsnpushp.in" className="mt-2 text-gray-600 hover:text-purple-600 transition-colors block">
                  support@krsnablooms.in
                </a>
                
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="bg-white rounded-2xl shadow-xl p-8 w-full transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 rounded-full p-3">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-900">Farm Location</h3>
                <p className="mt-2 text-gray-600">DHUMASPUR GURGAON</p>
                <p className="text-gray-600">Badshahpur, Gurgaon</p>
                <a 
                  href="https://maps.google.com/?q=DHUMASPUR+GURGAON"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-2 transition-colors"
                >
                  View on Maps
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Instagram */}
          <div className="bg-white rounded-2xl shadow-xl p-8 w-full transform hover:scale-105 transition-all duration-300 hover:shadow-2xl overflow-hidden relative">
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full p-3">
                <Instagram className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-900">Instagram</h3>
                <p className="mt-2 text-gray-600">Follow us for updates</p>
                <a
                  href="https://www.instagram.com/krsnablooms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 px-6 py-3 text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-all"
                >
                  @krsnablooms
                  <ExternalLink className="ml-2 -mr-1 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="bg-white rounded-2xl shadow-xl p-8 w-full transform hover:scale-105 transition-all duration-300 hover:shadow-2xl md:col-span-2">
            <div className="flex items-center justify-center space-x-4">
              <div className="bg-green-100 rounded-full p-3">
                <MessageCircle className="h-6 w-6 text-green-600" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900">WhatsApp</h3>
                <p className="mt-2 text-gray-600">Get quick responses on WhatsApp</p>
                <a
                  href="https://wa.me/+919811099730?text= Hi! I saw your page and wanted to know more 😊."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
                >
                  Chat with Us
                  <MessageCircle className="ml-2 -mr-1 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
