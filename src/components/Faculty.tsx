import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Faculty = () => {
  const faculty = [
    {
      name: 'Prof. Jane Smith',
      title: 'AI Strategy',
      institution: 'Oxford University',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Dr. Rajnish Dass',
      title: 'Digital Business Innovation',
      institution: 'CEEI',
      image: 'src/components/Rajinish.jpg'
    },
    {
      name: 'Prof. Michael Chu',
      title: 'Platform Thinking',
      institution: 'Harvard',
      image: 'src/components/michael_chu_01.jpg'
    }
  ];

  return (
    <section className="py-20 bg-[#f1f5f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2563eb] mb-6">
            Faculty & Advisors
          </h2>
          <p className="text-lg text-[#1e293b] max-w-3xl mx-auto">
            Our global network of academic partners and industry experts brings 
            world-class expertise to drive meaningful research and innovation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {faculty.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px #2563eb22' }}
              className="group rounded-xl p-8 border-2 border-transparent hover:border-[#38bdf8] transition-all duration-300 text-center relative overflow-hidden"
              style={{ 
                background: `linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)`,
                boxShadow: '0 4px 20px rgba(37, 99, 235, 0.1)'
              }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb] via-[#38bdf8] to-[#0ea5e9] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              
              <div className="relative mb-6">
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Gradient ring around image */}
                  <div className="absolute inset-0 w-32 h-32 rounded-full mx-auto bg-gradient-to-r from-[#2563eb] to-[#38bdf8] opacity-20 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-[#2563eb] mb-2 group-hover:text-[#1e293b] transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-[#38bdf8] font-medium mb-2 bg-gradient-to-r from-[#2563eb] to-[#38bdf8] bg-clip-text text-transparent">
                  {member.title}
                </p>
                <p className="text-[#1e293b] group-hover:text-[#2563eb] transition-colors duration-300">
                  {member.institution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;