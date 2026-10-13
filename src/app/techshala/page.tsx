'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen, Heart, Code, Palette, MonitorPlay, BarChart, Users } from 'lucide-react';

export default function TechshalaPage() {
  return (
    <main className="w-full bg-[#FAF6FB] min-h-screen">
      {/* SECTION 1 — PROGRAM HERO */}
      <section className="relative w-full min-h-[560px] lg:min-h-[650px] pt-[120px] md:pt-[160px] pb-16 px-5 md:px-6 lg:px-8 flex flex-col justify-center items-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-transparent pointer-events-none" />
        <div className="max-w-[780px] mx-auto relative z-10 flex flex-col items-center w-full">
          <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-purple-600 uppercase mb-4">
            RAISE INDIA FOUNDATION • EDUCATION INITIATIVE
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#2D1145] tracking-tight mb-5 md:mb-6">
            TECHSHAALA
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-medium w-full mb-8 md:mb-10 leading-relaxed">
            Empowering Education Through Technology
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
            <Link href="#courses" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#2D1145] rounded-full hover:bg-purple-900 transition-colors duration-300">
              Explore Courses
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="/get-involved" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#2D1145] bg-purple-100/80 rounded-full hover:bg-purple-200 transition-colors duration-300">
              Support Techshaala
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2 — INTRODUCTION / THE VISION */}
      <section className="w-full pt-[80px] pb-[80px] md:pt-[100px] md:pb-[100px] px-5 md:px-6 lg:px-8 bg-white">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[56px] md:gap-[72px] items-center">
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-widest text-pink-600 uppercase mb-3 md:mb-4">THE VISION</span>
            <h2 className="text-[32px] md:text-[42px] lg:text-[48px] font-bold text-[#2D1145] leading-[1.1] mb-4 md:mb-5">
              Bridging the Digital Divide
            </h2>
            <div className="w-12 h-1 bg-purple-600 rounded-full mb-5 md:mb-6" />
            <p className="text-lg text-gray-600 leading-relaxed">
              TECHSHAALA aims to provide equal access to digital resources. In marginalized communities, children lack access to computers, limiting their growth. This initiative offers foundational computer skills, fostering a love for technology and ensuring readiness for a digital future.
            </p>
          </div>
          <div className="relative w-full h-[420px] md:h-[480px] rounded-[20px] overflow-hidden group">
            <Image 
              src="/Photos/7.webp" 
              alt="Students learning at Techshaala" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* SECTION 3 — IMPACT / PURPOSE STRIP */}
      <section className="w-full h-auto md:h-[82px] py-6 md:py-0 px-5 md:px-6 lg:px-8 border-y border-purple-100 bg-[#FAF6FB]/50 flex items-center">
        <div className="max-w-[1240px] w-full mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 text-center md:divide-x divide-purple-200">
          <div className="flex flex-col items-center justify-center px-4">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mb-2" />
            <h4 className="text-[13px] md:text-[14px] font-bold text-[#2D1145] uppercase tracking-wider">Digital Literacy</h4>
          </div>
          <div className="flex flex-col items-center justify-center px-4">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mb-2" />
            <h4 className="text-[13px] md:text-[14px] font-bold text-[#2D1145] uppercase tracking-wider">Skill Building</h4>
          </div>
          <div className="flex flex-col items-center justify-center px-4">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mb-2" />
            <h4 className="text-[13px] md:text-[14px] font-bold text-[#2D1145] uppercase tracking-wider">Educator Support</h4>
          </div>
          <div className="flex flex-col items-center justify-center px-4">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mb-2" />
            <h4 className="text-[13px] md:text-[14px] font-bold text-[#2D1145] uppercase tracking-wider">Inclusive Access</h4>
          </div>
        </div>
      </section>

      {/* SECTION 4 — KEY OBJECTIVES */}
      <section className="w-full pt-[76px] pb-[80px] md:pt-[90px] md:pb-[90px] px-5 md:px-6 lg:px-8 bg-[#FAF6FB]">
        <div className="max-w-[1240px] mx-auto">
          <div className="max-w-[1200px]">
            <h2 className="text-[32px] md:text-[42px] lg:text-[48px] leading-[1.1] font-bold text-[#2D1145]">Key Objectives</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[56px] lg:gap-x-[72px] gap-y-[44px] lg:gap-y-[52px] mt-[42px] md:mt-[50px]">
            {/* Objective 1 */}
            <div className="flex flex-col border-t border-purple-200 pt-5 md:pt-6 pb-7 md:pb-8">
              <span className="text-[13px] md:text-[14px] font-bold text-purple-600 mb-3 md:mb-4 tracking-widest">01</span>
              <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-bold text-gray-900 mb-2 md:mb-3">DIGITAL LITERACY</h3>
              <p className="text-[16px] md:text-[18px] text-gray-600">Equip students with essential computer skills.</p>
            </div>
            
            {/* Objective 2 */}
            <div className="flex flex-col border-t border-purple-200 pt-5 md:pt-6 pb-7 md:pb-8">
              <span className="text-[13px] md:text-[14px] font-bold text-pink-600 mb-3 md:mb-4 tracking-widest">02</span>
              <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-bold text-gray-900 mb-2 md:mb-3">SKILL BUILDING</h3>
              <p className="text-[16px] md:text-[18px] text-gray-600">Introduce coding and basic programming.</p>
            </div>
            
            {/* Objective 3 */}
            <div className="flex flex-col border-t border-purple-200 pt-5 md:pt-6 pb-7 md:pb-8">
              <span className="text-[13px] md:text-[14px] font-bold text-indigo-600 mb-3 md:mb-4 tracking-widest">03</span>
              <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-bold text-gray-900 mb-2 md:mb-3">EMPOWERING EDUCATORS</h3>
              <p className="text-[16px] md:text-[18px] text-gray-600">Tools to integrate digital technology.</p>
            </div>
            
            {/* Objective 4 */}
            <div className="flex flex-col border-t border-purple-200 pt-5 md:pt-6 pb-7 md:pb-8">
              <span className="text-[13px] md:text-[14px] font-bold text-rose-500 mb-3 md:mb-4 tracking-widest">04</span>
              <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-bold text-gray-900 mb-2 md:mb-3">INCLUSIVITY</h3>
              <p className="text-[16px] md:text-[18px] text-gray-600">Ensure all children have engagement opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — COURSES OFFERED */}
      <section id="courses" className="w-full pt-[80px] pb-[80px] md:pt-[100px] md:pb-[100px] px-5 md:px-6 lg:px-8 bg-white">
        <div className="max-w-[1240px] mx-auto flex flex-col">
          <div className="max-w-[1200px]">
            <span className="text-sm font-bold tracking-widest text-purple-600 uppercase block mb-3 md:mb-4">LEARNING AT TECHSHAALA</span>
            <h2 className="text-[32px] md:text-[42px] lg:text-[48px] leading-[1.1] font-bold text-[#2D1145] mb-4 md:mb-5">Courses Offered</h2>
            <p className="text-[16px] md:text-[18px] text-gray-600 max-w-[700px]">
              Our curriculum is designed to equip students with practical, future-ready skills that open doors to new opportunities in the digital world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[28px] mt-[32px] md:mt-[44px]">
            {/* Course 1 */}
            <div className="group border border-gray-100 bg-gray-50/50 hover:bg-white p-[28px] md:p-[30px] rounded-[18px] md:rounded-[20px] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col h-full">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <BarChart className="w-6 h-6" />
              </div>
              <h3 className="text-[20px] md:text-[22px] font-bold text-gray-900 mt-[18px] md:mt-[20px]">MS Office Proficiency</h3>
              <p className="text-[15px] md:text-[16px] text-gray-600 mt-[10px] md:mt-[12px] leading-relaxed">Mastering word processing, spreadsheets, and presentation tools.</p>
              <span className="inline-flex items-center text-[14px] md:text-[15px] font-semibold text-orange-600 group-hover:text-orange-700 mt-auto pt-[20px] md:pt-[24px]">Learn More <ArrowRight className="ml-1.5 w-4 h-4" /></span>
            </div>

            {/* Course 2 */}
            <div className="group border border-gray-100 bg-gray-50/50 hover:bg-white p-[28px] md:p-[30px] rounded-[18px] md:rounded-[20px] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col h-full">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-[20px] md:text-[22px] font-bold text-gray-900 mt-[18px] md:mt-[20px]">Tally Prime</h3>
              <p className="text-[15px] md:text-[16px] text-gray-600 mt-[10px] md:mt-[12px] leading-relaxed">Expertise in accounting software and GST applications.</p>
              <span className="inline-flex items-center text-[14px] md:text-[15px] font-semibold text-purple-600 group-hover:text-purple-700 mt-auto pt-[20px] md:pt-[24px]">Learn More <ArrowRight className="ml-1.5 w-4 h-4" /></span>
            </div>

            {/* Course 3 */}
            <div className="group border border-gray-100 bg-gray-50/50 hover:bg-white p-[28px] md:p-[30px] rounded-[18px] md:rounded-[20px] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col h-full">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Palette className="w-6 h-6" />
              </div>
              <h3 className="text-[20px] md:text-[22px] font-bold text-gray-900 mt-[18px] md:mt-[20px]">Graphic Designing</h3>
              <p className="text-[15px] md:text-[16px] text-gray-600 mt-[10px] md:mt-[12px] leading-relaxed">Creative skill-building using digital tools to design visual content.</p>
              <span className="inline-flex items-center text-[14px] md:text-[15px] font-semibold text-green-600 group-hover:text-green-700 mt-auto pt-[20px] md:pt-[24px]">Learn More <ArrowRight className="ml-1.5 w-4 h-4" /></span>
            </div>

            {/* Course 4 */}
            <div className="group border border-gray-100 bg-gray-50/50 hover:bg-white p-[28px] md:p-[30px] rounded-[18px] md:rounded-[20px] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col h-full">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-[20px] md:text-[22px] font-bold text-gray-900 mt-[18px] md:mt-[20px]">Web Development</h3>
              <p className="text-[15px] md:text-[16px] text-gray-600 mt-[10px] md:mt-[12px] leading-relaxed">Foundational training in building and maintaining modern websites.</p>
              <span className="inline-flex items-center text-[14px] md:text-[15px] font-semibold text-blue-600 group-hover:text-blue-700 mt-auto pt-[20px] md:pt-[24px]">Learn More <ArrowRight className="ml-1.5 w-4 h-4" /></span>
            </div>

            {/* Course 5 */}
            <div className="group border border-gray-100 bg-gray-50/50 hover:bg-white p-[28px] md:p-[30px] rounded-[18px] md:rounded-[20px] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col h-full">
              <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-[20px] md:text-[22px] font-bold text-gray-900 mt-[18px] md:mt-[20px]">Social Media</h3>
              <p className="text-[15px] md:text-[16px] text-gray-600 mt-[10px] md:mt-[12px] leading-relaxed">Brand building, digital marketing, and communication strategies.</p>
              <span className="inline-flex items-center text-[14px] md:text-[15px] font-semibold text-pink-600 group-hover:text-pink-700 mt-auto pt-[20px] md:pt-[24px]">Learn More <ArrowRight className="ml-1.5 w-4 h-4" /></span>
            </div>

            {/* Course 6 */}
            <div className="group border border-gray-100 bg-gray-50/50 hover:bg-white p-[28px] md:p-[30px] rounded-[18px] md:rounded-[20px] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col h-full">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <MonitorPlay className="w-6 h-6" />
              </div>
              <h3 className="text-[20px] md:text-[22px] font-bold text-gray-900 mt-[18px] md:mt-[20px]">Artificial Intelligence</h3>
              <p className="text-[15px] md:text-[16px] text-gray-600 mt-[10px] md:mt-[12px] leading-relaxed">Introduction to AI concepts, practical applications, and the future.</p>
              <span className="inline-flex items-center text-[14px] md:text-[15px] font-semibold text-indigo-600 group-hover:text-indigo-700 mt-auto pt-[20px] md:pt-[24px]">Learn More <ArrowRight className="ml-1.5 w-4 h-4" /></span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — SUPPORT / CTA */}
      <section className="w-full pt-[80px] pb-[80px] md:pt-[96px] md:pb-[96px] px-5 md:px-6 lg:px-8 bg-[#2D1145] text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="max-w-[1240px] mx-auto flex flex-col items-center text-center relative z-10">
          <Heart className="w-12 h-12 text-pink-400 mb-6 md:mb-8" />
          <h2 className="text-[32px] md:text-[42px] lg:text-[48px] leading-[1.1] font-bold mb-5 md:mb-6">
            Help Bridge the Digital Divide
          </h2>
          <p className="text-[16px] md:text-[18px] text-purple-200 max-w-[700px] mb-8 md:mb-10 leading-relaxed">
            In collaboration with <strong className="text-white">Konverge Technologies Pvt. Ltd.</strong>, we are creating a future where technology empowers minds and opens doors to boundless opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
            <Link href="/donate" className="inline-flex items-center justify-center px-8 py-4 text-[15px] md:text-[16px] font-semibold text-[#2D1145] bg-white rounded-full hover:bg-gray-100 transition-colors duration-300">
              Donate Now
            </Link>
            <Link href="/get-involved" className="inline-flex items-center justify-center px-8 py-4 text-[15px] md:text-[16px] font-semibold text-white bg-purple-800/50 border border-purple-500 rounded-full hover:bg-purple-800 transition-colors duration-300">
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

