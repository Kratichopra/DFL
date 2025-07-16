import React from 'react';
import { 
  Users,
  Zap, 
  BookOpen,
  Search
} from 'lucide-react';

const FutureTechGrid = () => {
  const technologies = [
    {
      icon: Users,
      title: 'CXO Roundtables',
      description: 'Invite-only forums for executive dialogue on high-stakes digital shifts.',
      color: 'bg-blue-600'
    },
    {
      icon: Zap,
      title: 'Rapid Prototype Sprints',
      description: 'Four-week co-creation labs with client teams to test innovation hypotheses.',
      color: 'bg-blue-600'
    },
    {
      icon: BookOpen,
      title: 'Executive Briefings',
      description: 'Tailored learning journeys delivered in-house to inspire and align leadership.',
      color: 'bg-blue-600'
    },
    {
      icon: Search,
      title: 'Research Projects',
      description: 'Deep-dives into digital strategy, data value creation, and transformation case studies.',
      color: 'bg-blue-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6">
            Engagement Formats
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We offer diverse engagement models to meet your organization's specific needs 
            and drive meaningful digital transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500"
            >
              <div className="h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <tech.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                    {tech.title}
                  </h3>
                  
                  <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {tech.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureTechGrid;