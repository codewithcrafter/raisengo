'use client';

import React, { useState, useEffect, useCallback } from 'react';

const testimonialsData = [
  {
    quote: "I am Aarju Sheoran, and I am currently studying at TAPMI, Bengaluru. I completed my social internship at Raise India Foundation. Working as an intern at Raise India Foundation, specifically on the Shikshalaya project, has been an extraordinary experience. Shikshalaya provides free education to children, and being a part of this initiative was an incredibly rewarding experience. Every day was filled with new experiences and learnings. Teaching the children alongside the dedicated faculty members was not only fulfilling but also deeply motivating. Interacting with the children and helping them with their studies was an eye-opener for me. It made me appreciate the teaching profession and the challenges teachers face daily. I never thought I would find myself in the teaching field, but this internship allowed me to experience firsthand the difficulties and rewards of educating and managing young minds. Working for a social cause like this has been a blessing. Seeing the happiness and progress in the children's lives and knowing I contributed to it brought immense joy. The children taught me valuable lessons that I will carry with me throughout my life. Raise India Foundation is doing a commendable job. They not only provide education to these children but also treat them and their families as part of the Shikshalaya family. This holistic approach makes a significant impact, and I am proud to have been a part of it.",
    author: "— Aarju Sheoran"
  },
  {
    quote: "I have spent a lifetime with charities and over the years got polarized from the many organizations that existed as tax shelters or for profiteering. Insulated, I typically help people that I come to know of and almost always on a “one on one” basis. Roughly two years ago, a young lady from Raise India Foundation (RIF), called me out of the “cold” seeking donations. I made some excuse or the other and repeatedly turned her away, but she persisted and after 8 months of her trying I agreed to help and by sheer luck also got to know the organization and their directors, Shipra and Sanjeev. RIF proved to be too good to be true, and in the truest sense of the phrase, was a “breath of fresh” air. This organization is all hands on deck, serving humanity where it hurts the most. Their focus is empowerment to live with dignity, food, shelter, medicines and they do everything as efficiently as possible. If anyone witnesses their staff in action, they will see that RIF is an epitome of affection and hope to the masses they assist. Unlike others that I have come across, the organizers here are not merely issuing orders, Shipra and Sanjeev, get into the trenches and work with their hands. I was invited to an event at the school they run and the abundance of happy faces of the children and parents they have helped, is a happiness that would dwarf any jackpot. If anyone is wondering how to give back to society, or seeking avenues to help the poor, then look no further, I strongly recommend to donate to RIF. Palo Alto, CA 94306, USA",
    author: "— Mr. Ajay Agarwal"
  },
  {
    quote: "I am so happy to see my donation going for a useful purpose, thanks to Raise India Foundation, who makes it happen. i truly love their campaigns such as khana khilao punya kamao, Kambal udhao zindagi bachao. I even participated in their activities as well. I love to take my song along with me and show the generosity of work they are doing. Team Raise India Foundation, you are all doing amazing work. Thankyou for providing the opportunity to contribute to your noble work. God bless you and gives you continued strength to service humanity.",
    author: "— Mr. Vimal Malik"
  },
  {
    quote: "I feel proud and honored to share my ideas and ethics with a team like this. You all are enthusiatic, energetic, and have the positive attitude. I thank everyone of you for the constant hardwork and dedication. With the help of your team we are able to cherish moment of some people not known to us.",
    author: "— Mr. Sunil Sharma"
  },
  {
    quote: "As someone who has been a donor and through my own NGO, collaborator of the Raise India Foundation, I must commend their efforts for working for the downtrodden sections of our society. Anyone is free to see their activities on the ground and the genuine difference they are making to lives of our fellow citizens, irrespective of caste, creed, gender or linguistic affiliation. I am not only immensely satisfied but would urge one and all with the means to support them in their wonderful initiatives. Jai Hind!",
    author: "— Mr. Gaurav Jain"
  },
  {
    quote: "I am privileged to be part of Raise India Foundation and really happy to see outstanding work done by them. It is a best way to stay connected with the noble cause and have the feeling of doing something for society. And the best part is, you don't need huge money to contribute for such noble causes, even a small amount can make a massive difference. I am very happy to be part of initiatives like girl education, support for Covid 19, distribution of sanitization kit to women, khana khilao punya kamao and many more.",
    author: "— Mr. Sachin Sharma"
  }
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const total = testimonialsData.length;

  const handleNext = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [isAnimating, total]);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [isAnimating, total]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative flex justify-center">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-pink-200/40 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-6xl px-6 lg:px-8 relative z-10 flex flex-col md:flex-row gap-10 lg:gap-16 items-center mx-auto">
        
        {/* Left Column: Heading */}
        <div className="w-full md:w-5/12 text-center md:text-left flex flex-col items-center md:items-start">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
            Testimonials
          </h2>
          <div className="w-16 h-1.5 bg-purple-600 rounded-full mb-6"></div>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-sm">
            Hear what our interns, donors, and supporters have to say about the impact we are making together.
          </p>
        </div>

        {/* Right Column: Slider */}
        <div className="w-full md:w-7/12 relative">
          <div 
            className="bg-white rounded-3xl p-6 md:p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg border-2 border-purple-100 hover:border-purple-400 cursor-default relative group"
          >
            {/* Quotation Icon */}
            <div className="absolute top-4 right-6 text-6xl text-purple-50 font-serif leading-none select-none pointer-events-none z-0">
              &ldquo;
            </div>

            {/* Slider Content */}
            <div className="relative z-10 flex flex-col min-h-[180px]">
              <div className={`transition-opacity duration-500 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                <p className="text-gray-700 text-sm leading-relaxed mb-5 italic">
                  "{currentTestimonial.quote}"
                </p>
                <p className="text-sm text-purple-900">
                  <strong>{currentTestimonial.author}</strong>
                </p>
              </div>
            </div>

            {/* Navigation Controls Fixed to Bottom of Card */}
            <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between z-20 relative">
              <div className="flex gap-2">
                {testimonialsData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!isAnimating && idx !== currentIndex) {
                        setIsAnimating(true);
                        setCurrentIndex(idx);
                      }
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-purple-600' : 'bg-purple-200 hover:bg-purple-400'}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              
              <div className="flex gap-3">
                <button
                  onClick={handlePrev}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-purple-50 text-purple-600 border border-purple-100 hover:bg-purple-600 hover:text-white transition-colors duration-300 focus:outline-none"
                  aria-label="Previous testimonial"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-purple-50 text-purple-600 border border-purple-100 hover:bg-purple-600 hover:text-white transition-colors duration-300 focus:outline-none"
                  aria-label="Next testimonial"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};
