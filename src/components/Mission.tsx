import React, { useEffect, useRef } from 'react';
import { Eye, Zap, Target } from 'lucide-react';

const Mission = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-down');
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
    <section 
      ref={sectionRef}
      className="py-20 bg-[#f1f5f9] opacity-0 transform translate-y-16 transition-all duration-1000 ease-out"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#2563eb] mb-6">
            Our Mission
          </h2>
          <p className="text-lg md:text-2xl text-[#1e293b] max-w-4xl mx-auto leading-relaxed">
            Catallyst Digital Futures Lab (DFL) is a research and innovation hub dedicated to helping 
            organisations anticipate digital disruptions, foster a data-smart culture, and activate 
            scalable innovation. Our mission is to co-create actionable insights with industry and 
            academia that translate into measurable business value.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Lines between cards */}
          <div className="hidden md:block absolute top-1/2 left-1/3 w-0.5 h-20 bg-[#1e293b] opacity-60 transform -translate-y-10"></div>
          <div className="hidden md:block absolute top-1/2 right-1/3 w-0.5 h-20 bg-[#1e293b] opacity-60 transform -translate-y-10"></div>
          
          {features.map((feature, index) => (
            <div key={index} className={`group rounded-xl p-8 transition-all duration-300 transform hover:-translate-y-2 mission-card-${index}`}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg relative">
                <div className="w-full h-full rounded-full bg-[#38bdf8] flex items-center justify-center transition-transform duration-700 logo-container">
                  <feature.icon className="h-8 w-8 text-[#2563eb] transition-transform duration-700 logo-icon" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#2563eb] mb-3 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-[#1e293b] leading-relaxed transition-colors duration-300">
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