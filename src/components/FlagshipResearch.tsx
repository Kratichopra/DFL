import React, { useState } from 'react';
import { Download, X } from 'lucide-react';

const FlagshipResearch = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setShowModal(false);
    setFormData({ name: '', email: '', organization: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-[#f1f5f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#ffffff] rounded-2xl border border-[#64748b] shadow-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2563eb] mb-6">
                Flagship Research
              </h2>
              <h3 className="text-2xl font-semibold text-[#1e293b] mb-4">
                Digital Futures Index 2025
              </h3>
              <p className="text-lg text-[#1e293b] mb-8 leading-relaxed">
                Based on extensive benchmarking of 120+ enterprises in India, this index offers 
                deep insights into the digital readiness, leadership maturity, and innovation 
                potential across sectors.
              </p>
              <button
                onClick={() => setShowModal(true)}
                className="group bg-[#38bdf8] hover:bg-[#2563eb] text-[#2563eb] hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Full Report
              </button>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Digital Research" 
                className="rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-[#2563eb] opacity-10 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-[#1e293b] bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-[#ffffff] border border-[#64748b] rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-[#2563eb]">Download Report</h3>
              <button 
                onClick={() => setShowModal(false)}
                className="text-[#64748b] hover:text-[#2563eb] transition-colors duration-200"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-[#1e293b] mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 bg-[#f1f5f9] border border-[#64748b] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38bdf8] text-[#1e293b] placeholder-[#64748b]"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-[#1e293b] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 bg-[#f1f5f9] border border-[#64748b] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38bdf8] text-[#1e293b] placeholder-[#64748b]"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-[#1e293b] mb-2">
                  Organization *
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 bg-[#f1f5f9] border border-[#64748b] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38bdf8] text-[#1e293b] placeholder-[#64748b]"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#38bdf8] hover:bg-[#2563eb] text-[#2563eb] hover:text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Download Report
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default FlagshipResearch;