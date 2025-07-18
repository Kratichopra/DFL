import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-[#F6F6F2] text-gray-900 overflow-hidden">
      {/* Optional: subtle animated gradient or pattern background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-50 to-teal-50 opacity-60"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            A NO-LIMITS BRANDING AGENCY
            <span className="block bg-gradient-to-r from-blue-400 via-purple-300 to-teal-300 bg-clip-text text-transparent">
              Digital Innovation
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90 text-gray-700">
            An NYC Creative Agency Offering Branding, Web Design, and Video Editing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-blue-300 to-purple-200 hover:from-blue-400 hover:to-purple-300 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center">
              <Download className="mr-2 h-5 w-5" />
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
      {/* Optional: fade to transparent at bottom for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F6F6F2] to-transparent"></div>
    </section>
  );
};

export default Hero;