'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function VolunteerPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => { setIsSubmitting(false); alert('Application submitted!'); }, 1000);
  };

  return (
    <main className="w-full min-h-screen flex flex-col items-center text-center max-w-5xl mx-auto px-4 py-12 space-y-12 pt-32 bg-[#FAF6FB]">
      
      <div className="w-full">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#2D1145] tracking-tight uppercase mb-4">
          VOLUNTEERING
        </h1>
        <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-8"></div>
        <p className="text-xl md:text-2xl text-gray-800 font-medium italic mb-2">
          "The Smallest Act Of Kindness Is Worth More Than The Grandest Intention"
        </p>
        <p className="text-sm md:text-base text-purple-700 font-bold uppercase tracking-widest">
          - OSCAR WILDE
        </p>
      </div>

      <div className="w-56 h-56 relative rounded-full border-4 border-purple-600 shadow-xl mx-auto overflow-hidden flex-shrink-0">
        <Image className="object-cover" fill src="/Pop/2.webp" alt="Oscar Wilde Quote" sizes="224px" />
      </div>

      <div className="bg-white shadow-lg rounded-2xl p-8 md:p-12 w-full mx-auto border border-purple-100 flex flex-col items-center text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">As a volunteer, you will have the chance to...</h2>
        <ul className="text-gray-600 text-base md:text-lg space-y-4 flex flex-col items-center w-full">
          <li className="flex flex-col items-center"><span className="text-purple-600 text-2xl mb-1">✔</span> Make a direct impact on marginalized communities.</li>
          <li className="flex flex-col items-center"><span className="text-purple-600 text-2xl mb-1">✔</span> Gain valuable hands-on field experience.</li>
          <li className="flex flex-col items-center"><span className="text-purple-600 text-2xl mb-1">✔</span> Join a passionate, supportive community.</li>
        </ul>
      </div>

      <div className="bg-white shadow-lg rounded-2xl p-8 md:p-12 w-full mx-auto border border-purple-100 flex flex-col items-center text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Perks Of The Volunteering</h2>
        <ul className="text-gray-600 text-base md:text-lg space-y-4 flex flex-col items-center w-full">
          <li className="flex flex-col items-center"><span className="text-pink-600 text-2xl mb-1">★</span> Official Volunteer Certificate.</li>
          <li className="flex flex-col items-center"><span className="text-pink-600 text-2xl mb-1">★</span> Letter of Recommendation (LOR).</li>
          <li className="flex flex-col items-center"><span className="text-pink-600 text-2xl mb-1">★</span> Social Media Shoutout.</li>
        </ul>
      </div>

      <div className="bg-blue-50 shadow-xl rounded-2xl p-8 md:p-12 max-w-2xl w-full mx-auto border border-blue-200 flex flex-col items-center">
        <h2 className="text-3xl font-extrabold text-[#2D1145] mb-8">HOW TO Volunteer?</h2>
        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center space-y-6">
          <input required type="text" placeholder="Full Name" className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input required type="email" placeholder="Email Address" className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input required type="tel" placeholder="Whatsapp No." className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input required type="number" min="16" placeholder="Age" className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <textarea required rows={4} placeholder="Why do you want to volunteer?" className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg text-center resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          <select defaultValue="" required className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg text-center text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none" style={{ textAlignLast: 'center' }}>
            <option value="" disabled>Select Start Date</option>
            <option value="immediately">Immediately</option>
            <option value="within-1-week">Within 1 Week</option>
            <option value="within-1-month">Within 1 Month</option>
            <option value="later">Later</option>
          </select>
          <button type="submit" disabled={isSubmitting} className="mt-6 px-12 py-4 bg-red-600 text-white font-bold rounded-full shadow-lg hover:bg-red-700 hover:scale-105 transition-all w-full md:w-auto min-w-[200px] disabled:opacity-50">
            {isSubmitting ? 'Submitting...' : 'APPLY NOW'}
          </button>
        </form>
      </div>

    </main>
  );
}
