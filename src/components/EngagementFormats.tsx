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
  return (
    <section className="py-20 bg-[#f1f5f9]">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-[#2563eb] mb-10 text-center">Engagement Formats</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {formats.map((format, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl shadow-xl flex flex-col items-center p-6 transition-transform hover:scale-105"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <img
                src={format.image}
                alt={format.title}
                className="w-24 h-24 object-contain mb-4 rounded-full bg-[#f1f5f9] border border-[#38bdf8] shadow"
              />
              <h3 className="text-xl font-bold text-[#2563eb] mb-2 text-center">{format.title}</h3>
              <p className="text-[#1e293b] text-center text-sm">{format.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagementFormats;