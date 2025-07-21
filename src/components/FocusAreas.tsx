import React, { useState } from 'react';
import { motion } from 'framer-motion';

const focusAreasData = [
  {
    number: '1',
    title: 'Digital Culture & Leadership',
    description: 'Shaping future-ready mindsets and leading digital transformation.',
    color: 'bg-gradient-to-br from-blue-600 to-purple-600',
    image: 'src/components/assets/fa1.png'
  },
  {
    number: '2',
    title: 'AI-Powered Business Models',
    description: 'Embedding artificial intelligence in revenue-generating strategies.',
    color: 'bg-gradient-to-br from-purple-600 to-indigo-600',
    image: 'src/components/assets/fa2.png'
  },
  {
    number: '3',
    title: 'Data Monetisation & Ethics',
    description: 'Converting data into value while ensuring responsible AI.',
    color: 'bg-gradient-to-br from-indigo-600 to-blue-700',
    image: 'src/components/assets/fa3.png'
  },
  {
    number: '4',
    title: 'Emerging Tech Prototyping',
    description: 'Testing high-impact technologies through focused sprints.',
    color: 'bg-gradient-to-br from-blue-700 to-purple-700',
    image: 'src/components/assets/fa4.png'
  },
  {
    number: '5',
    title: 'Digital Readiness & Adoption',
    description: 'Assessing and improving organisational readiness for digital execution.',
    color: 'bg-gradient-to-br from-purple-700 to-indigo-700',
    image: 'src/components/assets/fa5.png'
  }
];

const FocusAreas = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index: number) => {
    console.log('Dot clicked:', index, 'Current:', currentIndex);
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-[#f1f5f9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#2563eb] mb-6">
            Focus Areas
          </h2>
          <p className="text-lg md:text-xl text-[#1e293b] max-w-3xl mx-auto">
            Our research and innovation efforts are concentrated across five strategic areas 
            that drive meaningful digital transformation.
          </p>
        </div>
        <div className="relative">
          {/* Focus Areas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 justify-items-center">
            {focusAreasData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ y: -300, scale: 0.3 }}
                animate={{ y: 0, scale: 1 }}
                transition={{ 
                  delay: idx * 0.15, 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                  bounce: 0.6
                }}
                className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${
                  idx === currentIndex ? 'scale-105 z-10' : 'opacity-90 hover:opacity-100 hover:scale-105'
                }`}
                onClick={() => setCurrentIndex(idx)}
              >
                {/* Circle */}
                <div
                  className={`w-64 h-64 rounded-full border-4 border-[#64748b] flex flex-col items-center justify-center text-center px-6 shadow-xl hover:border-[#38bdf8] transition-all duration-300 relative overflow-hidden
                    ${idx === currentIndex ? 'ring-4 ring-[#38bdf8] animate-pulse' : ''}`}
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    ...(idx === currentIndex ? { boxShadow: '0 0 0 8px #38bdf855' } : {})
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col items-center justify-center px-6">
                    <div className="text-5xl font-bold mb-3 text-[#38bdf8] drop-shadow-lg">{item.number}</div>
                    <h3 className="text-lg font-semibold mb-2 leading-tight text-[#cef9ea] drop-shadow">{item.title}</h3>
                    <p className="text-xs leading-relaxed text-[#ffffff] drop-shadow">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Dots Indicator */}
          <div className="flex justify-center mt-10 space-x-2">
            {focusAreasData.map((_, idx) => (
              <motion.button
                key={idx}
                className={`w-3 h-3 rounded-full border-2 ${idx === currentIndex ? 'bg-[#38bdf8] border-[#2563eb]' : 'bg-[#64748b] border-[#38bdf8]'}`}
                onClick={() => handleDotClick(idx)}
                aria-label={`Go to focus area ${idx + 1}`}
                animate={idx === currentIndex ? { scale: 1.3 } : { scale: 1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;