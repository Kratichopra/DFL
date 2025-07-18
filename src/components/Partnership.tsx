import React from 'react';
import { Search, Lightbulb, DollarSign, Rocket, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Partnership = () => {
  const opportunities = [
    {
      icon: Search,
      title: 'Co-Research',
      description: 'Collaborate on cutting-edge research projects'
    },
    {
      icon: Lightbulb,
      title: 'Lighthouse Evaluations',
      description: 'Pilot testing and validation of innovative solutions'
    },
    {
      icon: DollarSign,
      title: 'Sponsorship Opportunities',
      description: 'Support industry whitepapers and thought leadership'
    },
    {
      icon: Rocket,
      title: 'Pilot Projects',
      description: 'Test breakthrough technologies in real environments'
    }
  ];

  return (
    <section className="py-20 bg-[#f1f5f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2563eb] mb-6">
            Partner With Us
          </h2>
          <p className="text-xl text-[#1e293b] opacity-90 max-w-3xl mx-auto">
            We invite visionary organisations to join us as research collaborators, 
            roundtable hosts, and sponsors of industry whitepapers.
          </p>
        </div>
        {/* Step Timeline Layout */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-8 mb-16 relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-[#64748b] z-0" style={{ transform: 'translateY(-50%)' }} />
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative z-10 flex flex-col items-center text-center md:w-1/4 w-full px-4 py-8"
            >
              {/* Step circle with icon */}
              <div className="w-16 h-16 rounded-full bg-[#38bdf8] flex items-center justify-center mb-4 border-4 border-[#2563eb] shadow-lg">
                <opportunity.icon className="h-8 w-8 text-[#2563eb]" />
              </div>
              {/* Connector for mobile */}
              {index < opportunities.length - 1 && (
                <div className="block md:hidden w-1 h-8 bg-[#64748b] mx-auto my-2" />
              )}
              <h3 className="text-lg font-semibold text-[#2563eb] mb-2">
                {opportunity.title}
              </h3>
              <p className="text-sm text-[#1e293b] opacity-90">
                {opportunity.description}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <motion.button
            className="group bg-[#38bdf8] text-[#2563eb] px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center mx-auto border border-[#2563eb] hover:bg-[#2563eb] hover:text-white"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.98 }}
          >
            Book a Discovery Call
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Partnership;