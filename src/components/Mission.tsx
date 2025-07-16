import React from 'react';
import { Eye, Zap, Target } from 'lucide-react';

const Mission = () => {
  const features = [
    {
      icon: Eye,
      title: 'Insight',
      description: 'Decode emerging trends in digital business.'
    },
    {
      icon: Zap,
      title: 'Experiment',
      description: 'Pilot next-generation ideas through rapid prototyping.'
    },
    {
      icon: Target,
      title: 'Impact',
      description: 'Build digital strategies that deliver real business outcomes.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-6">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Catallyst Digital Futures Lab (DFL) is a research and innovation hub dedicated to helping 
            organisations anticipate digital disruptions, foster a data-smart culture, and activate 
            scalable innovation. Our mission is to co-create actionable insights with industry and 
            academia that translate into measurable business value.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700/50 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;