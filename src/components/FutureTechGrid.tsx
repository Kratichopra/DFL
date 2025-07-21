import React from 'react';
import { 
  Users,
  Zap, 
  BookOpen,
  Search
} from 'lucide-react';
import { motion } from 'framer-motion';

const FutureTechGrid = () => {
  const technologies = [
    {
      icon: Users,
      title: 'CXO Roundtables',
      description: 'Invite-only forums for executive dialogue on high-stakes digital shifts.',
    },
    {
      icon: Zap,
      title: 'Rapid Prototype Sprints',
      description: 'Four-week co-creation labs with client teams to test innovation hypotheses.',
    },
    {
      icon: BookOpen,
      title: 'Executive Briefings',
      description: 'Tailored learning journeys delivered in-house to inspire and align leadership.',
    },
    {
      icon: Search,
      title: 'Research Projects',
      description: 'Deep-dives into digital strategy, data value creation, and transformation case studies.',
    }
  ];

  return (
    <section className="py-20 bg-[#f1f5f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#2563eb] mb-6">
            Engagement Formats
          </h2>
          <p className="text-xl text-[#1e293b] max-w-3xl mx-auto leading-relaxed">
            We offer diverse engagement models to meet your organization's specific needs 
            and drive meaningful digital transformation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="group bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 min-h-[300px] flex flex-col items-center justify-between"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#2563eb] to-[#38bdf8] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <tech.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2563eb] mb-4 group-hover:text-[#1e293b] transition-colors duration-300 text-center">
                {tech.title}
              </h3>
              <p className="text-base text-[#1e293b] group-hover:text-[#38bdf8] transition-colors duration-300 leading-relaxed text-center">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureTechGrid;