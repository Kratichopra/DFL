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
    <header className="absolute top-0 left-0 w-full z-50 py-3 mt-7">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <img src="src\components\assets\LOGO-WT.png" alt="Digital Futures Lab Logo" className="w-40 h-50" />
        </div>
        {/* Centered Navigation */}
        <nav className="flex-1 flex justify-center">
          <div className="flex items-center bg-white rounded-full shadow px-8 py-3 space-x-8">
            <a href="#" className="text-base font-medium text-[#002c36] hover:text-[#004e54]">Home</a>
            <div className="relative group">
              <button className="flex items-center text-base font-medium text-[#002c36] hover:text-[#004e54] focus:outline-none">
                About <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {/* Dropdown */}
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-2 z-50 border border-[#cef9ea] opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity">
                <a href="#" className="block px-4 py-2 text-sm text-[#002c36] hover:bg-[#cef9ea] rounded-lg">About Digital Futures Lab</a>
                <a href="#" className="block px-4 py-2 text-sm text-[#002c36] hover:bg-[#cef9ea] rounded-lg">Advisory Board</a>
                <a href="#" className="block px-4 py-2 text-sm text-[#002c36] hover:bg-[#cef9ea] rounded-lg">Industry Patrons</a>
                <a href="#" className="block px-4 py-2 text-sm text-[#002c36] hover:bg-[#cef9ea] rounded-lg">Our Team</a>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center text-base font-medium text-[#002c36] hover:text-[#004e54] focus:outline-none">
                Research Initiatives <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {/* Dropdown */}
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-2 z-50 border border-[#cef9ea] opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity">
                <a href="#" className="block px-4 py-2 text-sm text-[#002c36] hover:bg-[#cef9ea] rounded-lg">Ongoing Projects</a>
                <a href="#" className="block px-4 py-2 text-sm text-[#002c36] hover:bg-[#cef9ea] rounded-lg">Completed Projects</a>
              </div>
            </div>
            <a href="#" className="text-base font-medium text-[#002c36] hover:text-[#004e54]">Publications</a>
            <div className="relative group">
              <button className="flex items-center text-base font-medium text-[#002c36] hover:text-[#004e54] focus:outline-none">
                Interactions <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {/* Dropdown */}
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-2 z-50 border border-[#cef9ea] opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity">
                <a href="#" className="block px-4 py-2 text-sm text-[#002c36] hover:bg-[#cef9ea] rounded-lg">Upcoming Events</a>
                <a href="#" className="block px-4 py-2 text-sm text-[#002c36] hover:bg-[#cef9ea] rounded-lg">Past Events</a>
              </div>
            </div>
          </div>
        </nav>
        {/* Contact Us Button */}
        <div className="flex items-center flex-shrink-0">
          <a href="#" className="ml-8 px-8 py-3 bg-gradient-to-r from-[#2563eb] to-[#38bdf8] text-white font-semibold rounded-full shadow hover:from-[#004e54] hover:to-[#6ccea4] transition-colors">Contact Us</a>
        </div>
      </div>
    </header>
  );
};

export default Header;