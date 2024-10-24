import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const streams = [
  { name: 'B. Tech.', exams: '38 Exams', image: '/api/placeholder/400/300' },
  { name: 'MBA', exams: '32 Exams', image: '/api/placeholder/400/300' },
  { name: 'Medical', exams: '87 Exams', image: '/api/placeholder/400/300' },
  { name: 'M. Tech', exams: '31 Exams', image: '/api/placeholder/400/300' },
  { name: 'Design', exams: '10 Exams', image: '/api/placeholder/400/300' },
  { name: 'Law', exams: '29 Exams', image: '/api/placeholder/400/300' },
];

const StreamSlider = () => {
  const [startIndex, setStartIndex] = useState(0);

  const slideLeft = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const slideRight = () => {
    setStartIndex((prev) => Math.min(prev + 1, streams.length - 4));
  };

  return (
    <section className="py-16 px-5 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Predict Colleges based on exams you have taken
        </h2>
        
        <div className="relative">
          <button 
            onClick={slideLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg z-10 disabled:opacity-50"
            disabled={startIndex === 0}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="overflow-hidden mx-8">
            <div 
              className="flex gap-6 transition-transform duration-300"
              style={{ transform: `translateX(-${startIndex * 25}%)` }} 
              >
              {streams.map((stream, index) => (
                <div 
                  key={stream.name}
                  className="flex-none w-1/4"
                >
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="h-48 relative">
                      <img 
                        src={stream.image} 
                        alt={stream.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="font-bold text-lg mb-1">{stream.name}</h3>
                      <p className="text-gray-600">{stream.exams}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={slideRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg z-10 disabled:opacity-50"
            disabled={startIndex >= streams.length - 4}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default StreamSlider;
