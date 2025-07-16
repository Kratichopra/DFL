import React, { useState } from 'react';

const focusAreasData = [
  {
    number: '1',
    title: 'Digital Culture & Leadership',
    description: 'Shaping future-ready mindsets and leading digital transformation.',
    color: 'bg-gradient-to-br from-blue-600 to-purple-600'
  },
  {
    number: '2',
    title: 'AI-Powered Business Models',
    description: 'Embedding artificial intelligence in revenue-generating strategies.',
    color: 'bg-gradient-to-br from-purple-600 to-indigo-600'
  },
  {
    number: '3',
    title: 'Data Monetisation & Ethics',
    description: 'Converting data into value while ensuring responsible AI.',
    color: 'bg-gradient-to-br from-indigo-600 to-blue-700'
  },
  {
    number: '4',
    title: 'Emerging Tech Prototyping',
    description: 'Testing high-impact technologies through focused sprints.',
    color: 'bg-gradient-to-br from-blue-700 to-purple-700'
  },
  {
    number: '5',
    title: 'Digital Readiness & Adoption',
    description: 'Assessing and improving organisational readiness for digital execution.',
    color: 'bg-gradient-to-br from-purple-700 to-indigo-700'
  }
];

const FocusAreas = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index: number) => {
    console.log('Dot clicked:', index, 'Current:', currentIndex);
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-6">
            Focus Areas
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our research and innovation efforts are concentrated across five strategic areas 
            that drive meaningful digital transformation.
          </p>
        </div>
        
        <div className="relative">
          {/* Focus Areas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 justify-items-center">
            {focusAreasData.map((item, idx) => (
              <div
                key={idx}
                className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${
                  idx === currentIndex ? 'scale-105 z-10' : 'opacity-90 hover:opacity-100 hover:scale-105'
                }`}
                onClick={() => setCurrentIndex(idx)}
              >
                {/* Circle */}
                <div className={`w-64 h-64 rounded-full ${item.color} relative overflow-hidden shadow-2xl mb-4 border-4 border-gray-700/30 hover:border-blue-500/50 transition-all duration-300`}>
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col items-center justify-center text-white text-center px-6">
                    <div className="text-5xl font-bold mb-3 text-blue-200">{item.number}</div>
                    <h3 className="text-lg font-semibold mb-2 leading-tight">{item.title}</h3>
                    <p className="text-xs leading-relaxed text-gray-200">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {focusAreasData.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`w-5 h-5 rounded-full transition-all duration-300 cursor-pointer transform hover:scale-110 ${
                  idx === currentIndex 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/50 scale-125' 
                    : 'bg-gray-600 hover:bg-gray-500 hover:shadow-md'
                }`}
                title={`${item.number}. ${item.title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;