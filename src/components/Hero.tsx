import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-blue-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/8439089/pexels-photo-8439089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Future-Proofing Businesses Through{' '}
            <span className="text-blue-400">Digital Innovation</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
            Welcome to Catallyst Digital Futures Lab — a global knowledge hub advancing 
            enterprise transformation through AI, data, and digital culture.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center">
              <Download className="mr-2 h-5 w-5" />
              Download the Digital Readiness Index 2025
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;