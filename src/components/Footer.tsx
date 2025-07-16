import React from 'react';
import { Mail, Phone, Linkedin, Twitter, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Digital Futures Lab
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A global knowledge hub advancing enterprise transformation through AI, 
              data, and digital culture. Co-creating actionable insights that translate 
              into measurable business value.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-gray-800 hover:bg-blue-800 p-3 rounded-lg transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Research</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Publications</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Events</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-gray-400" />
                <a href="mailto:info@catallystfoundation.org" className="text-gray-300 hover:text-white transition-colors duration-200">
                  info@catallystfoundation.org
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-gray-400" />
                <a href="tel:+91-XXXXX-XXXXX" className="text-gray-300 hover:text-white transition-colors duration-200">
                  +91-XXXXX-XXXXX
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            Copyright © 2025 Catallyst Digital Futures Lab. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;