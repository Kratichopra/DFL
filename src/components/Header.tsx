import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const menuItems = [
    {
      title: 'About Us',
      items: [
        'About Digital Futures Lab',
        'Advisory Board',
        'Industry Patrons',
        'Our Team'
      ]
    },
    {
      title: 'Research Initiatives',
      items: [
        'Ongoing Projects',
        'Completed Projects'
      ]
    },
    {
      title: 'Publications',
      items: []
    },
    {
      title: 'Interactions',
      items: [
        'Upcoming Events',
        'Past Events'
      ]
    },
    {
      title: 'Contact',
      items: []
    }
  ];

  return (
    <header className="bg-black/50 backdrop-blur-lg border-b border-gray-800 shadow-2xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Digital Futures Lab
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <div key={item.title} className="relative">
                <button
                  className="flex items-center text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
                  onMouseEnter={() => setOpenDropdown(item.title)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.title}
                  {item.items.length > 0 && (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </button>
                
                {item.items.length > 0 && openDropdown === item.title && (
                  <div
                    className="absolute left-0 mt-2 w-56 bg-gray-900/95 backdrop-blur-lg rounded-xl shadow-2xl py-2 z-50 border border-gray-700"
                    onMouseEnter={() => setOpenDropdown(item.title)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.items.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-blue-900/30 hover:text-blue-400 transition-colors duration-200 rounded-lg mx-2"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-blue-400 focus:outline-none focus:text-blue-400"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <div key={item.title}>
                <button className="w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-blue-400 hover:bg-blue-900/30 rounded-md transition-colors duration-200">
                  {item.title}
                </button>
                {item.items.length > 0 && (
                  <div className="pl-6 space-y-1">
                    {item.items.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-3 py-2 text-sm text-gray-400 hover:text-blue-400 hover:bg-blue-900/30 rounded-md transition-colors duration-200"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;