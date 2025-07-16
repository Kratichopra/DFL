import React from 'react';
import { Search, Lightbulb, DollarSign, Rocket, ArrowRight } from 'lucide-react';

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
    <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Partner With Us
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            We invite visionary organisations to join us as research collaborators, 
            roundtable hosts, and sponsors of industry whitepapers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {opportunities.map((opportunity, index) => (
            <div key={index} className="group bg-white bg-opacity-10 rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <opportunity.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {opportunity.title}
              </h3>
              <p className="text-sm opacity-90">
                {opportunity.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="group bg-white text-blue-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center mx-auto">
            Book a Discovery Call
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Partnership;