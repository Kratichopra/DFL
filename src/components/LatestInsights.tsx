import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const LatestInsights = () => {
  const insights = [
    {
      title: "How Digital Readiness Predicts Enterprise Growth: Lessons from 120 Indian Firms",
      date: "December 15, 2024",
      excerpt: "Discover key patterns in digital transformation success and how readiness metrics correlate with business outcomes.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "The Rise of Data Monetisation: Are You Leaving Value on the Table?",
      date: "December 10, 2024",
      excerpt: "Explore innovative approaches to data monetisation and the ethical frameworks that ensure sustainable value creation.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Designing AI Strategy That Drives Competitive Advantage",
      date: "December 5, 2024",
      excerpt: "Learn how leading organizations are embedding AI into their core business strategies for sustainable competitive advantage.",
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent mb-6">
            Latest Insights
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Stay ahead with our latest research findings, industry analyses, and 
            thought leadership on digital transformation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <article key={index} className="group bg-gray-800/40 backdrop-blur-lg rounded-xl overflow-hidden border border-gray-700/40 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <img 
                  src={insight.image} 
                  alt={insight.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-600 to-transparent opacity-30"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-400 text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {insight.date}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2 group-hover:text-cyan-300 transition-colors duration-300">
                  {insight.title}
                </h3>
                
                <p className="text-gray-400 mb-4 line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">
                  {insight.excerpt}
                </p>
                
                <button className="group flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestInsights;