'use client';
import React from 'react';
import Link from 'next/link';

export const FloatingTechshala = () => {
  return (
    <div className="fixed top-28 right-6 z-40">
      <Link href="/techshala">
        <button 
          className="bg-gradient-to-r from-purple-700 to-pink-600 text-white font-bold px-6 py-3 rounded-full shadow-[0_0_20px_rgba(147,51,234,0.6)] cursor-pointer animate-bounce hover:scale-105 transition-transform flex items-center gap-2"
        >
          <span className="text-lg">✨</span>
          <span>Techshala Now Open</span>
        </button>
      </Link>
    </div>
  );
};
