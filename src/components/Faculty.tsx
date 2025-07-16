import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent mb-6">
            Faculty & Advisors
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our global network of academic partners and industry experts brings 
            world-class expertise to drive meaningful research and innovation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {faculty.map((member, index) => (
            <div key={index} className="group bg-gray-800/30 backdrop-blur-lg rounded-xl p-8 border border-gray-700/30 hover:border-green-500/30 hover:bg-gray-800/50 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300 text-center">
              <div className="relative mb-6">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 w-32 h-32 rounded-full mx-auto bg-gradient-to-t from-green-600 to-transparent opacity-30"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green-300 transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-green-400 font-medium mb-2">
                {member.title}
              </p>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {member.institution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;