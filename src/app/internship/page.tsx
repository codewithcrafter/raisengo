'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function InternshipPage() {
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
          CROWDFUNDING INTERNSHIP
        </h1>
        <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-8"></div>
        <p className="text-xl md:text-2xl text-gray-800 font-medium italic mb-2">
          "The Best Way To Find Yourself Is To Lose Yourself In The Service Of Others"
        </p>
        <p className="text-sm md:text-base text-purple-700 font-bold uppercase tracking-widest">
          - MAHATMA GANDHI
        </p>
      </div>

      <div className="w-56 h-56 relative rounded-full border-4 border-purple-600 shadow-xl mx-auto overflow-hidden flex-shrink-0">
        <Image className="object-cover" fill src="/Pop/1.webp" alt="Mahatma Gandhi" sizes="224px" />
      </div>

      <div className="bg-white shadow-lg rounded-2xl p-8 md:p-12 w-full mx-auto border border-purple-100 flex flex-col items-center text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Dear Interns,</h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          Welcome to the Raise India Foundation community. This internship is more than just an experience; it's an opportunity to create a tangible impact. By joining us, you are stepping up to uplift the marginalized and bring light into the lives of those who need it most. Let's make a difference together!
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-2xl p-8 md:p-12 w-full mx-auto border border-purple-100 flex flex-col items-center text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Why Intern With Us?</h2>
        <ul className="text-gray-600 text-base md:text-lg space-y-4 flex flex-col items-center w-full">
          <li className="flex flex-col items-center"><span className="text-purple-600 text-2xl mb-1">✔</span> Meaningful work and direct societal impact.</li>
          <li className="flex flex-col items-center"><span className="text-purple-600 text-2xl mb-1">✔</span> Skill development in leadership and communication.</li>
          <li className="flex flex-col items-center"><span className="text-purple-600 text-2xl mb-1">✔</span> Flexibility with remote working options.</li>
          <li className="flex flex-col items-center"><span className="text-purple-600 text-2xl mb-1">✔</span> Networking with professionals and peers.</li>
        </ul>
      </div>

      <div className="bg-white shadow-lg rounded-2xl p-8 md:p-12 w-full mx-auto border border-purple-100 flex flex-col items-center text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Perks Of The Internship</h2>
        <ul className="text-gray-600 text-base md:text-lg space-y-4 flex flex-col items-center w-full">
          <li className="flex flex-col items-center"><span className="text-pink-600 text-2xl mb-1">★</span> Certificate of Completion.</li>
          <li className="flex flex-col items-center"><span className="text-pink-600 text-2xl mb-1">★</span> Performance-based stipend.</li>
          <li className="flex flex-col items-center"><span className="text-pink-600 text-2xl mb-1">★</span> Letter of Recommendation (LOR) for top performers.</li>
          <li className="flex flex-col items-center"><span className="text-pink-600 text-2xl mb-1">★</span> Social Media Shoutout.</li>
        </ul>
      </div>

      <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12 max-w-2xl w-full mx-auto border border-purple-100 flex flex-col items-center">
        <h2 className="text-3xl font-extrabold text-[#2D1145] mb-8">HOW TO Apply?</h2>
        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center space-y-6">
          <input required type="text" placeholder="Full Name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-purple-500" />
          <input required type="email" placeholder="Email Address" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-purple-500" />
          <input required type="tel" placeholder="Whatsapp No." className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-purple-500" />
          <input required type="number" min="16" placeholder="Age" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-purple-500" />
          <textarea required rows={4} placeholder="Why do you want to join this internship?" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-center resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>
          <select defaultValue="" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-center text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none" style={{ textAlignLast: 'center' }}>
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
