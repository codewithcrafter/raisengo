'use client';
import React from 'react';

export default function TechshalaPage() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center text-center max-w-5xl mx-auto px-4 py-12 space-y-12 pt-32 bg-[#FAF6FB]">
      
      <div className="w-full">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#2D1145] tracking-tight uppercase mb-4">
          TECHSHAALA: EMPOWERING EDUCATION THROUGH TECHNOLOGY
        </h1>
        <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-8"></div>
        <p className="text-xl md:text-2xl text-gray-800 font-medium italic">
          Raise India Foundation partnered with Konverge Technologies Pvt. Ltd. to bridge the digital divide.
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl w-full mx-auto border border-purple-100 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">The Vision Behind TECHSHAALA</h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          TECHSHAALA aims to provide equal access to digital resources. In marginalized communities, children lack access to computers, limiting their growth. This initiative offers foundational computer skills, fostering a love for technology and ensuring readiness for a digital future.
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-2xl p-8 md:p-12 w-full mx-auto border border-purple-100 flex flex-col items-center text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Key Objectives</h2>
        <ul className="text-gray-600 text-base md:text-lg space-y-4 flex flex-col items-center w-full">
          <li className="flex flex-col items-center"><span className="text-purple-600 font-bold">✔ Digital Literacy:</span> Equip students with essential computer skills.</li>
          <li className="flex flex-col items-center"><span className="text-purple-600 font-bold">✔ Skill Building:</span> Introduce coding and basic programming.</li>
          <li className="flex flex-col items-center"><span className="text-purple-600 font-bold">✔ Empowering Educators:</span> Tools to integrate digital technology.</li>
          <li className="flex flex-col items-center"><span className="text-purple-600 font-bold">✔ Inclusivity:</span> Ensure all children have engagement opportunities.</li>
        </ul>
      </div>

      <div className="w-full">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#2D1145] mb-12">Courses OFFERED</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          
          {/* Course 1: Orange */}
          <div className="bg-white rounded-2xl p-8 shadow-md border-t-4 border-orange-500 hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 text-orange-600 text-2xl">📊</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">MS Office Proficiency</h3>
            <p className="text-gray-600">Mastering word processing, spreadsheets, and presentation tools.</p>
          </div>

          {/* Course 2: Purple */}
          <div className="bg-white rounded-2xl p-8 shadow-md border-t-4 border-purple-500 hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-purple-600 text-2xl">💰</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Tally Prime</h3>
            <p className="text-gray-600">Expertise in accounting software and GST applications.</p>
          </div>

          {/* Course 3: Green */}
          <div className="bg-white rounded-2xl p-8 shadow-md border-t-4 border-green-500 hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600 text-2xl">🎨</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Graphic Designing</h3>
            <p className="text-gray-600">Creative skill-building using digital tools to design visual content.</p>
          </div>

          {/* Course 4: Blue */}
          <div className="bg-white rounded-2xl p-8 shadow-md border-t-4 border-blue-500 hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600 text-2xl">💻</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Web Development</h3>
            <p className="text-gray-600">Foundational training in building and maintaining modern websites.</p>
          </div>

          {/* Course 5: Pink */}
          <div className="bg-white rounded-2xl p-8 shadow-md border-t-4 border-pink-500 hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4 text-pink-600 text-2xl">📱</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Social Media</h3>
            <p className="text-gray-600">Brand building, digital marketing, and communication strategies.</p>
          </div>

          {/* Course 6: Yellow/Gold */}
          <div className="bg-white rounded-2xl p-8 shadow-md border-t-4 border-yellow-500 hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4 text-yellow-600 text-2xl">🤖</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Artificial Intelligence</h3>
            <p className="text-gray-600">Introduction to AI concepts, practical applications, and the future.</p>
          </div>

        </div>
      </div>

      <div className="w-full bg-gradient-to-r from-purple-800 to-[#2D1145] rounded-3xl p-8 md:p-12 text-white shadow-xl mt-8 flex flex-col items-center">
        <h3 className="text-2xl font-bold mb-4">A Transformative Partnership</h3>
        <p className="text-lg text-purple-100">
          In collaboration with <strong>Konverge Technologies Pvt. Ltd.</strong>, we are creating a future where technology empowers minds and opens doors to boundless opportunities.
        </p>
      </div>

    </main>
  );
}
