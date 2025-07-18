import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = document.querySelector('section.min-h-screen');
    if (!hero) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

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
    <header ref={headerRef} className={`sticky top-0 z-50 border-b border-[#38bdf8] shadow-2xl transition-colors duration-500 ${scrolled ? 'bg-[#002c36] bg-opacity-95' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center space-x-3">
              {/* Modern SVG Logo */}
              <span className={`inline-flex items-center justify-center w-10 h-10 rounded-full shadow-md ${scrolled ? 'bg-[#1e293b]' : 'bg-[#38bdf8]'}`}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="14" cy="14" r="13" stroke="#2563eb" strokeWidth="2" fill={scrolled ? '#002c36' : '#dbeafe'} />
                  <path d="M8 18L14 10L20 18" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <h1 className={`text-2xl font-bold tracking-tight select-none ${scrolled ? 'text-[#ffffff]' : 'text-[#1e293b]'}`}>
                Digital Futures Lab
              </h1>
            </div>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {menuItems.map((item) => (
              <div key={item.title} className="relative">
                <button
                  className={`flex items-center px-4 py-2 text-base font-medium transition-colors duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dbeafe] ${scrolled ? 'text-[#ffffff] hover:text-[#38bdf8]' : 'text-[#1e293b] hover:text-[#2563eb]'}`}
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
                    className={`absolute left-0 mt-2 w-56 backdrop-blur-lg rounded-xl shadow-2xl py-2 z-50 border border-[#38bdf8] ${scrolled ? 'bg-[#002c36]' : 'bg-[#ffffff]'}`}
                    onMouseEnter={() => setOpenDropdown(item.title)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.items.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className={`block px-4 py-2 text-sm transition-colors duration-200 rounded-lg mx-2 ${scrolled ? 'text-[#ffffff] hover:bg-[#1e293b] hover:text-[#38bdf8]' : 'text-[#2563eb] hover:bg-[#dbeafe] hover:text-[#1e293b]'}`}
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
              className={`focus:outline-none ${scrolled ? 'text-[#ffffff] hover:text-[#38bdf8] focus:text-[#38bdf8]' : 'text-[#1e293b] hover:text-[#2563eb] focus:text-[#2563eb]'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className={`md:hidden backdrop-blur-lg border-t border-[#38bdf8] ${scrolled ? 'bg-[#002c36]' : 'bg-[#ffffff]'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <div key={item.title}>
                <button className={`w-full text-left px-4 py-2 text-base font-medium rounded-md transition-colors duration-200 ${scrolled ? 'text-[#ffffff] hover:text-[#38bdf8] hover:bg-[#1e293b]' : 'text-[#2563eb] hover:text-[#1e293b] hover:bg-[#dbeafe]'}`}>
                  {item.title}
                </button>
                {item.items.length > 0 && (
                  <div className="pl-6 space-y-1">
                    {item.items.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className={`block px-4 py-2 text-sm rounded-md transition-colors duration-200 ${scrolled ? 'text-[#ffffff] hover:text-[#38bdf8] hover:bg-[#1e293b]' : 'text-[#1e293b] hover:text-[#2563eb] hover:bg-[#dbeafe]'}`}
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