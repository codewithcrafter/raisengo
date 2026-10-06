"use client";

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';


const photos = [
  { src: '10.webp', zoom: 1.0 },
  { src: '11.webp', zoom: 1.25 },
  { src: '4.webp', zoom: 1.0 },
  { src: '5.webp', zoom: 1.0 },
  { src: '6.webp', zoom: 1.30 },
  { src: '7.webp', zoom: 1.0 },
  { src: '8.webp', zoom: 1.0 },
  { src: '9.webp', zoom: 1.45 },
  { src: '9989ce61-f18c-486d-b17d-c636e1bd3ffc.webp', zoom: 1.40 },
  { src: 'news1.webp', zoom: 1.25 },
  { src: 'news2.webp', zoom: 1.35 }
];

export default function GalleryClient() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedPhoto(null);
    };

    if (selectedPhoto) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedPhoto]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {photos.map((photo, index) => (
          <div 
            key={index} 
            className="relative w-[305.63px] h-[367px] overflow-hidden rounded-xl border-4 border-purple-700 shadow-lg cursor-pointer group"
            onClick={() => setSelectedPhoto(photo.src)}
          >
            <div className="absolute inset-0 w-full h-full" style={{ transform: `scale(${photo.zoom})` }}>
              <img
                src={`/Photos/${photo.src}`}
                alt={`Print Media ${index + 1}`}
                className="absolute inset-0 grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-105"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        ))}
      </div>

      {selectedPhoto && typeof document !== 'undefined' && createPortal(
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-md w-screen h-screen overflow-hidden"
          onClick={() => setSelectedPhoto(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white text-5xl hover:text-gray-300 focus:outline-none z-50 p-2 leading-none"
            onClick={() => setSelectedPhoto(null)}
            aria-label="Close"
          >
            &times;
          </button>
          <img
            src={`/Photos/${selectedPhoto}`}
            alt="Selected full size photo"
            className="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>,
        document.body
      )}
    </>
  );
}
