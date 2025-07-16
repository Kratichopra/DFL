// import React from 'react';
// import { Users, Zap, BookOpen, Search } from 'lucide-react';

// const EngagementFormats = () => {
//   const formats = [
//     {
//       image: 'https://via.placeholder.com/80x80?text=CXO',
//       title: 'CXO Roundtables',
//       description: 'Invite-only forums for executive dialogue on high-stakes digital shifts.',
//       color: 'bg-blue-600'
//     },
//     {
//       image: 'https://via.placeholder.com/80x80?text=Prototype',
//       title: 'Rapid Prototype Sprints',
//       description: 'Four-week co-creation labs with client teams to test innovation hypotheses.',
//       color: 'bg-blue-600'
//     },
//     {
//       image: 'https://via.placeholder.com/80x80?text=Briefing',
//       title: 'Executive Briefings',
//       description: 'Tailored learning journeys delivered in-house to inspire and align leadership.',
//       color: 'bg-blue-600'
//     },
//     {
//       image: 'https://via.placeholder.com/80x80?text=Research',
//       title: 'Research Projects',
//       description: 'Deep-dives into digital strategy, data value creation, and transformation case studies.',
//       color: 'bg-blue-600'
//     }
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-b from-black to-gray-900">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-teal-200 bg-clip-text text-transparent mb-6">
//             Engagement Formats
//           </h2>
//           <p className="text-lg text-gray-300 max-w-3xl mx-auto">
//             We offer diverse engagement models to meet your organization's specific needs 
//             and drive meaningful digital transformation.
//           </p>
//         </div>
        
//         <div className="grid md:grid-cols-2 gap-8">
//           {formats.map((format, index) => (
//             <div key={index} className="group bg-gray-800/40 backdrop-blur-lg rounded-xl p-8 border border-gray-700/40 hover:border-teal-500/30 hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center">
//               <img
//                 src={format.image}
//                 alt={format.title}
//                 className="w-20 h-20 object-cover rounded-xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300"
//               />
//               <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-teal-300 transition-colors duration-300 text-center">
//                 {format.title}
//               </h3>
//               <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 text-center">
//                 {format.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EngagementFormats;
// src/components/EngagementFormats.tsx
import React, { useState } from 'react';

const formats = [
  {
    image: 'https://via.placeholder.com/300x200?text=CXO',
    title: 'CXO Roundtables',
    description: 'Invite-only forums for executive dialogue on high-stakes digital shifts.',
  },
  {
    image: 'https://via.placeholder.com/300x200?text=Prototype',
    title: 'Rapid Prototype Sprints',
    description: 'Four-week co-creation labs with client teams to test innovation hypotheses.',
  },
  {
    image: 'https://via.placeholder.com/300x200?text=Briefing',
    title: 'Executive Briefings',
    description: 'Tailored learning journeys delivered in-house to inspire and align leadership.',
  },
  {
    image: 'https://via.placeholder.com/300x200?text=Research',
    title: 'Research Projects',
    description: 'Deep-dives into digital strategy, data value creation, and transformation case studies.',
  }
];

const EngagementFormats = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Points List */}
        <div className="flex md:flex-col flex-row gap-4 md:w-1/2 w-full justify-center">
          {formats.map((format, idx) => (
            <button
              key={idx}
              onClick={() => setSelected(idx)}
              className={`px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300
                ${selected === idx
                  ? 'bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-lg scale-105'
                  : 'bg-gray-800/60 text-gray-300 hover:bg-blue-700/40 hover:text-white'}
              `}
            >
              {format.title}
            </button>
          ))}
        </div>
        {/* Image and Description */}
        <div className="flex flex-col items-center md:w-1/2 w-full">
          <img
            src={formats[selected].image}
            alt={formats[selected].title}
            className="w-full max-w-md rounded-xl shadow-2xl mb-6 transition-all duration-300"
          />
          <h3 className="text-2xl font-bold text-white mb-2">{formats[selected].title}</h3>
          <p className="text-gray-300 text-center">{formats[selected].description}</p>
        </div>
      </div>
    </section>
  );
};

export default EngagementFormats;