// import React from 'react';
// import { Users, Zap, BookOpen, Search } from 'lucide-react';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const formats = [
  {
    image: 'https://via.placeholder.com/300x200?text=CXO',
    title: 'CXO Roundtables',
    description: 'Invite-only forums for executive dialogue on high-stakes digital shifts.',
  },
  {
    image: 'https://via.placeholder.com/300x200?text=Prototype',
    title: 'Rapid Prototype Sprints',
    description: 'Four-week co-creation labs with client teams to test innovation hypotheses.',
  },
  {
    image: 'https://via.placeholder.com/300x200?text=Briefing',
    title: 'Executive Briefings',
    description: 'Tailored learning journeys delivered in-house to inspire and align leadership.',
  },
  {
    image: 'https://via.placeholder.com/300x200?text=Research',
    title: 'Research Projects',
    description: 'Deep-dives into digital strategy, data value creation, and transformation case studies.',
  }
];

const EngagementFormats = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="py-20 bg-[#f1f5f9]">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Points List */}
        <div className="flex md:flex-col flex-row gap-4 md:w-1/2 w-full justify-center">
          {formats.map((format, idx) => (
            <motion.button
              key={idx}
              onClick={() => setSelected(idx)}
              className={`px-6 py-4 rounded-xl font-semibold text-lg border transition-all duration-300
                ${selected === idx
                  ? 'bg-[#38bdf8] text-[#2563eb] border-[#2563eb] shadow-lg scale-105'
                  : 'bg-[#ffffff] text-[#1e293b] border-[#64748b] hover:bg-[#2563eb] hover:text-white hover:border-[#38bdf8]'}
              `}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.98 }}
            >
              {format.title}
            </motion.button>
          ))}
        </div>
        {/* Image and Description */}
        <div className="flex flex-col items-center md:w-1/2 w-full">
          <AnimatePresence mode="wait">
            <motion.img
              key={formats[selected].image}
              src={formats[selected].image}
              alt={formats[selected].title}
              className="w-full max-w-md rounded-xl shadow-2xl mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
          <motion.h3
            key={formats[selected].title}
            className="text-2xl font-bold text-[#2563eb] mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {formats[selected].title}
          </motion.h3>
          <motion.p
            key={formats[selected].description}
            className="text-[#1e293b] text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {formats[selected].description}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default EngagementFormats;