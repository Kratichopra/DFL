import React, { useState, useEffect, useRef } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const visibleCount = windowWidth < 768 ? 1 : 2;
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % insights.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [insights.length]);
  // Calculate visible cards
  const getVisible = () => {
    if (insights.length <= visibleCount) return insights;
    // If at the end, wrap to the start
    if (current + visibleCount > insights.length) {
      return [
        ...insights.slice(current, insights.length),
        ...insights.slice(0, (current + visibleCount) % insights.length)
      ];
    }
    return insights.slice(current, current + visibleCount);
  };
  const visibleInsights = getVisible();
  // For sliding effect
  const slideWidth = 100 / visibleCount;
  const totalSlides = insights.length;
  const getIndex = (i) => (current + i) % totalSlides;
  const handlePrev = () => setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  const handleNext = () => setCurrent((prev) => (prev + 1) % totalSlides);

  return (
    <section className="py-20 bg-[#f1f5f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2563eb] mb-6">
            Latest Insights
          </h2>
          <p className="text-lg text-[#1e293b] max-w-3xl mx-auto">
            Stay ahead with our latest research findings, industry analyses, and 
            thought leadership on digital transformation.
          </p>
        </div>
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            aria-label="Previous"
            className="absolute left-0 z-20 bg-[#2563eb] text-white rounded-full p-2 shadow-lg hover:bg-[#38bdf8] transition-colors duration-200 disabled:opacity-40"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          {/* Carousel */}
          <div className="overflow-hidden w-full">
            <motion.div
              ref={containerRef}
              className="flex gap-8"
              style={{ width: `${slideWidth * insights.length}%` }}
              animate={{ x: `-${current * (100 / insights.length)}%` }}
              transition={{ type: 'spring', stiffness: 200, damping: 30 }}
            >
              {insights.concat(insights.slice(0, visibleCount)).map((insight, index) => (
                index < insights.length + visibleCount - 1 && (
                  <div
                    key={insight.title + index}
                    className="group bg-[#ffffff] rounded-xl overflow-hidden border-2 border-[#64748b] hover:border-[#38bdf8] shadow-lg transition-all duration-300 flex flex-col w-full max-w-md min-w-0 flex-shrink-0"
                    style={{ width: `${100 / insights.length}%`, minWidth: 0 }}
                  >
                    <div className="relative">
                      <img 
                        src={insight.image} 
                        alt={insight.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center text-[#64748b] text-sm mb-3">
                        <Calendar className="h-4 w-4 mr-2" />
                        {insight.date}
                      </div>
                      <h3 className="text-xl font-semibold text-[#2563eb] mb-3 line-clamp-2 group-hover:text-[#38bdf8] transition-colors duration-300">
                        {insight.title}
                      </h3>
                      <p className="text-[#1e293b] mb-4 line-clamp-3 group-hover:text-[#38bdf8] transition-colors duration-300">
                        {insight.excerpt}
                      </p>
                      <button className="group flex items-center text-[#38bdf8] hover:text-[#2563eb] font-medium transition-colors duration-200 mt-auto">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </button>
                    </div>
                  </div>
                )
              ))}
            </motion.div>
          </div>
          {/* Right Arrow */}
          <button
            onClick={handleNext}
            aria-label="Next"
            className="absolute right-0 z-20 bg-[#2563eb] text-white rounded-full p-2 shadow-lg hover:bg-[#38bdf8] transition-colors duration-200 disabled:opacity-40"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestInsights;