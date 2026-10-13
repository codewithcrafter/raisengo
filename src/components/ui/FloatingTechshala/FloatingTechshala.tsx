'use client';
import React from 'react';
import Link from 'next/link';

export const FloatingTechshala = () => {
  return (
    <div className="fixed bottom-4 right-3 md:bottom-6 md:right-6 z-40">
      <Link href="/techshala">
        <button 
          className="bg-gradient-to-r from-purple-700 to-pink-600 text-white font-bold px-4 py-2.5 md:px-6 md:py-3 rounded-full shadow-[0_0_20px_rgba(147,51,234,0.6)] cursor-pointer hover:scale-105 transition-transform flex items-center gap-2"
        >
          <span className="text-base md:text-lg">✨</span>
          <span className="text-sm md:text-base">Techshala Now Open</span>
        </button>
      </Link>
    </div>
  );
};
