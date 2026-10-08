'use client';

import React, { useState } from 'react';
import { ArrowRight, Heart, Users, BriefcaseMedical } from 'lucide-react';

type DonationFormProps = {
  id: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  optionsSection: React.ReactNode;
};

const CombinedDonationCard = ({ id, title, subtitle, optionsSection }: DonationFormProps) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    pan: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl border border-[#E7DDED]/70 shadow-xl shadow-purple-900/5 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-900/10 transition-all duration-500 ease-out overflow-hidden p-8 md:p-12 mb-16">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#35164F] leading-[1.1] mb-3">
          {title}
        </h2>
        {subtitle && <div className="text-[#35164F] text-lg font-medium mb-8">{subtitle}</div>}
      </div>

      <div className="mb-10 w-full flex justify-center">
        {optionsSection}
      </div>

      <div className="pt-8 border-t border-[#E7DDED]/60 w-full">
        <div className="flex flex-col items-center mb-10 text-center">
          <h3 className="text-2xl font-bold text-[#241D29] tracking-tight">Donor Information</h3>
          <p className="text-[#35164F] font-medium mt-2 text-sm">All donations are eligible for 50% Tax Exemption u/s 80G</p>
        </div>

        <form className="space-y-8 w-full px-2 md:px-8" onSubmit={(e) => e.preventDefault()}>
          {/* INPUT ROW 1 (3 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label htmlFor={`firstName-${id}`} className="text-sm font-semibold text-[#241D29] tracking-wide">First Name</label>
              <input
                type="text"
                id={`firstName-${id}`}
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-xl border border-[#E7DDED] bg-white text-[#241D29] font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-[#35164F]/20 focus:border-[#35164F] transition-all duration-300 placeholder:text-[#665D6C]/70"
                placeholder="John"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor={`lastName-${id}`} className="text-sm font-semibold text-[#241D29] tracking-wide">Last Name</label>
              <input
                type="text"
                id={`lastName-${id}`}
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-xl border border-[#E7DDED] bg-white text-[#241D29] font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-[#35164F]/20 focus:border-[#35164F] transition-all duration-300 placeholder:text-[#665D6C]/70"
                placeholder="Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor={`mobile-${id}`} className="text-sm font-semibold text-[#241D29] tracking-wide">Mobile Number</label>
              <input
                type="tel"
                id={`mobile-${id}`}
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-xl border border-[#E7DDED] bg-white text-[#241D29] font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-[#35164F]/20 focus:border-[#35164F] transition-all duration-300 placeholder:text-[#665D6C]/70"
                placeholder="+91 00000 00000"
              />
            </div>
          </div>

          {/* INPUT ROW 2 (2 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor={`email-${id}`} className="text-sm font-semibold text-[#241D29] tracking-wide">Email Address</label>
              <input
                type="email"
                id={`email-${id}`}
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-xl border border-[#E7DDED] bg-white text-[#241D29] font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-[#35164F]/20 focus:border-[#35164F] transition-all duration-300 placeholder:text-[#665D6C]/70"
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor={`pan-${id}`} className="text-sm font-semibold text-[#241D29] tracking-wide">PAN Number</label>
              <input
                type="text"
                id={`pan-${id}`}
                name="pan"
                value={formData.pan}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-xl border border-[#E7DDED] bg-white text-[#241D29] font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-[#35164F]/20 focus:border-[#35164F] transition-all duration-300 uppercase placeholder:text-[#665D6C]/70"
                placeholder="ABCDE1234F"
              />
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <div className="mt-10 pt-4">
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-[#35164F] to-[#6A2C91] hover:from-[#E83E8C] hover:to-[#C0196A] text-white font-bold rounded-xl shadow-lg shadow-purple-900/20 hover:shadow-xl hover:shadow-[#E83E8C]/25 hover:-translate-y-1 transition-all duration-500 ease-out flex items-center justify-center gap-2 text-lg tracking-wide"
            >
              PROCEED TO DONATE <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default function DonatePage() {
  const [selectedChildAmt, setSelectedChildAmt] = useState<string>('₹5,000');
  const [childCustom, setChildCustom] = useState<string>('');

  const [selectedEduFreq, setSelectedEduFreq] = useState<string>('Monthly');
  const [selectedEduBen, setSelectedEduBen] = useState<string>('Girl');

  const [selectedWomenUnits, setSelectedWomenUnits] = useState<string>('10 Units');

  const amtBtnClass = (selected: boolean) =>
    selected
      ? 'bg-gradient-to-r from-[#35164F] to-[#6A2C91] text-white shadow-lg shadow-purple-900/20 scale-[1.02]'
      : 'bg-white text-[#241D29] border border-[#E7DDED] hover:border-[#35164F] hover:text-[#35164F] hover:shadow-md hover:shadow-purple-900/10';

  const pinkBtnClass = (selected: boolean) =>
    selected
      ? 'bg-gradient-to-r from-[#E83E8C] to-[#C0196A] text-white shadow-lg shadow-[#E83E8C]/25 scale-[1.02]'
      : 'bg-white text-[#241D29] border border-[#E7DDED] hover:border-[#E83E8C] hover:text-[#E83E8C] hover:shadow-md hover:shadow-pink-900/10';

  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#F3ECF8]/60 via-[#FCFAFD] to-[#FCFAFD] font-sans pt-40 md:pt-48 pb-24 w-full flex flex-col items-center">

      {/* ENFORCING GLOBAL CENTER CONTAINER */}
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8">

        {/* 1. HERO SECTION */}
        <section className="flex flex-col items-center text-center pb-16 md:pb-24">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#F3ECF8] text-[#35164F] font-bold text-sm tracking-widest uppercase mb-6 shadow-sm border border-[#E7DDED]">
            <Heart className="w-4 h-4 text-[#E83E8C]" /> Make an Impact
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#241D29] tracking-tight leading-[1.05] max-w-4xl">
            Make a Difference Today
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[#35164F] font-medium max-w-2xl leading-[1.65]">
            Your support can help create a better future for children. Every contribution, big or small, drives sustainable change in communities across India.
          </p>
          <div className="mt-10">
            <button className="px-8 py-4 bg-gradient-to-r from-[#E83E8C] to-[#C0196A] text-white font-bold rounded-full shadow-lg shadow-[#E83E8C]/30 hover:shadow-xl hover:shadow-[#E83E8C]/40 hover:-translate-y-1 transition-all duration-500 ease-out tracking-wide text-lg">
              DONATE NOW
            </button>
          </div>
        </section>

        {/* 2. IMPACT STATS */}
        <section className="pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-[#E7DDED]/70 shadow-lg shadow-purple-900/5 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-900/10 transition-all duration-500 ease-out p-8 text-center flex flex-col items-center justify-center group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F3ECF8] to-[#E7DDED] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                <Users className="w-8 h-8 text-[#35164F]" />
              </div>
              <h3 className="text-4xl font-extrabold text-[#35164F]">1000+</h3>
              <p className="text-sm font-bold tracking-wider text-[#35164F] uppercase mt-2">Children Supported</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-[#E7DDED]/70 shadow-lg shadow-purple-900/5 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-900/10 transition-all duration-500 ease-out p-8 text-center flex flex-col items-center justify-center group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FDE8F1] to-[#F9C8DC] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                <Heart className="w-8 h-8 text-[#E83E8C]" />
              </div>
              <h3 className="text-4xl font-extrabold text-[#E83E8C]">5000+</h3>
              <p className="text-sm font-bold tracking-wider text-[#35164F] uppercase mt-2">Lives Impacted</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-[#E7DDED]/70 shadow-lg shadow-purple-900/5 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-900/10 transition-all duration-500 ease-out p-8 text-center flex flex-col items-center justify-center group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F3ECF8] to-[#E7DDED] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                <BriefcaseMedical className="w-8 h-8 text-[#35164F]" />
              </div>
              <h3 className="text-4xl font-extrabold text-[#35164F]">100+</h3>
              <p className="text-sm font-bold tracking-wider text-[#35164F] uppercase mt-2">Active Projects</p>
            </div>
          </div>
        </section>

        {/* 3. CAMPAIGN 1: Help a Child */}
        <CombinedDonationCard
          id="campaign1"
          title={<>Help a Child, <span className="text-[#E83E8C]">Little Heartbeats</span></>}
          subtitle="Sponsor life-saving medical care and holistic development for underprivileged children fighting critical illnesses."
          optionsSection={
            <div className="w-full flex flex-col space-y-8 px-2 md:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full">
                {['₹3,000', '₹5,000', '₹10,000', '₹20,000'].map(amt => (
                  <button
                    key={amt}
                    onClick={() => { setSelectedChildAmt(amt); setChildCustom(''); }}
                    className={`w-full py-4 rounded-xl font-bold transition-all duration-300 text-lg ${amtBtnClass(selectedChildAmt === amt && !childCustom)}`}
                  >
                    {amt}
                  </button>
                ))}
              </div>

              <div className="w-full flex items-center justify-center my-8">
                <div className="flex-1 h-px bg-[#E7DDED]"></div>
                <span className="px-4 text-sm font-bold text-[#665D6C] uppercase tracking-widest">OR</span>
                <div className="flex-1 h-px bg-[#E7DDED]"></div>
              </div>

              <div className="w-full max-w-lg mx-auto">
                <input
                  type="text"
                  placeholder="Other Amount (₹)"
                  value={childCustom}
                  onChange={(e) => setChildCustom(e.target.value)}
                  className="w-full px-6 py-4 rounded-xl border border-[#E7DDED] bg-white text-[#241D29] font-bold text-center text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#35164F]/20 focus:border-[#35164F] transition-all duration-300 placeholder:text-[#665D6C]/70"
                />
              </div>
            </div>
          }
        />

        {/* 5. CAMPAIGN 2: Support Shikshalaya */}
        <CombinedDonationCard
          id="campaign2"
          title="Support Shikshalaya"
          subtitle={<><span className="font-extrabold text-[#E83E8C] block mb-2">Transforming Education, Transforming Lives</span>Provide access to quality education, learning materials, and modern infrastructure for first-generation learners.</>}
          optionsSection={
            <div className="w-full flex flex-col space-y-8 px-2 md:px-8">
              <div className="w-full">
                <p className="text-sm font-bold text-[#241D29] uppercase tracking-wider mb-4 text-center">Frequency</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                  {['Monthly', 'Quarterly', 'Annual'].map(freq => (
                    <button
                      key={freq}
                      onClick={() => setSelectedEduFreq(freq)}
                      className={`w-full py-4 rounded-xl font-bold transition-all duration-300 text-lg ${amtBtnClass(selectedEduFreq === freq)}`}
                    >
                      {freq}
                    </button>
                  ))}
                </div>
              </div>

              <div className="w-full flex items-center justify-center my-8">
                <div className="flex-1 h-px bg-[#E7DDED]"></div>
              </div>

              <div className="w-full">
                <p className="text-sm font-bold text-[#241D29] uppercase tracking-wider mb-4 text-center">Beneficiary</p>
                <div className="grid grid-cols-2 gap-6 w-full max-w-lg mx-auto">
                  {['Boy', 'Girl'].map(ben => (
                    <button
                      key={ben}
                      onClick={() => setSelectedEduBen(ben)}
                      className={`w-full py-4 rounded-xl font-bold transition-all duration-300 text-lg ${pinkBtnClass(selectedEduBen === ben)}`}
                    >
                      {ben}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          }
        />

        {/* 7. CAMPAIGN 3: Chuppi Todo */}
        <CombinedDonationCard
          id="campaign3"
          title="Chuppi Todo"
          subtitle={<><span className="font-extrabold text-[#E83E8C] block mb-2">Sharm Nahi Samman</span>Empower women with essential health awareness, menstrual hygiene dignity kits, and skill development programs.</>}
          optionsSection={
            <div className="w-full flex flex-col space-y-8 px-2 md:px-8">
              <div className="w-full">
                <p className="text-sm font-bold text-[#241D29] uppercase tracking-wider mb-4 text-center">Select Units</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                  {['1 Unit', '10 Units', '15 Units'].map(unit => (
                    <button
                      key={unit}
                      onClick={() => setSelectedWomenUnits(unit)}
                      className={`w-full py-4 rounded-xl font-bold transition-all duration-300 text-lg ${amtBtnClass(selectedWomenUnits === unit)}`}
                    >
                      {unit}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          }
        />

        {/* 9. BANK TRANSFER SECTION */}
        <section className="mb-20 w-full max-w-5xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl border border-[#E7DDED]/70 shadow-xl shadow-purple-900/5 p-8 md:p-12 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-900/10 transition-all duration-500 ease-out">
          <div className="text-center mb-10">
            <h2 className="text-sm font-bold text-[#E83E8C] tracking-widest uppercase mb-2">Other Ways to Donate</h2>
            <h3 className="text-3xl font-extrabold text-[#241D29]">Bank Transfer</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 flex flex-col justify-center items-center text-center bg-gradient-to-br from-[#F3ECF8]/60 to-[#FCFAFD] rounded-2xl border border-[#E7DDED]">
              <span className="text-sm font-bold text-[#35164F] uppercase tracking-wider mb-2">Account Name</span>
              <p className="text-xl font-extrabold text-[#241D29]">Raise India Foundation</p>
            </div>

            <div className="p-6 flex flex-col justify-center items-center text-center bg-gradient-to-br from-[#F3ECF8]/60 to-[#FCFAFD] rounded-2xl border border-[#E7DDED]">
              <span className="text-sm font-bold text-[#35164F] uppercase tracking-wider mb-2">Account Number</span>
              <p className="text-xl font-extrabold text-[#241D29] font-mono">916010019605596</p>
            </div>

            <div className="p-6 flex flex-col justify-center items-center text-center bg-gradient-to-br from-[#F3ECF8]/60 to-[#FCFAFD] rounded-2xl border border-[#E7DDED]">
              <span className="text-sm font-bold text-[#35164F] uppercase tracking-wider mb-2">IFSC Code</span>
              <p className="text-xl font-extrabold text-[#241D29] font-mono">UTIB0000696</p>
            </div>
          </div>
        </section>

        {/* 10. UPI / QR SECTION */}
        <section className="mb-20 w-full max-w-5xl mx-auto">
          <div className="flex flex-col items-center">
            <h3 className="text-3xl font-extrabold text-[#241D29] mb-10">UPI / QR</h3>
            <div className="flex flex-col md:flex-row gap-8 w-full max-w-2xl">
              <div className="flex-1 aspect-square bg-white/80 backdrop-blur-sm rounded-3xl border border-[#E7DDED]/70 shadow-xl shadow-purple-900/5 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-900/10 transition-all duration-500 ease-out flex flex-col items-center justify-center p-8">
                <div className="w-full h-full rounded-2xl border-2 border-dashed border-[#E7DDED] bg-gradient-to-br from-[#F3ECF8]/50 to-[#FCFAFD] flex items-center justify-center text-[#35164F] font-bold uppercase tracking-wider">
                  QR Placeholder
                </div>
              </div>
              <div className="flex-1 aspect-square bg-white/80 backdrop-blur-sm rounded-3xl border border-[#E7DDED]/70 shadow-xl shadow-purple-900/5 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-900/10 transition-all duration-500 ease-out flex flex-col items-center justify-center p-8">
                <div className="w-full h-full rounded-2xl border-2 border-dashed border-[#E7DDED] bg-gradient-to-br from-[#F3ECF8]/50 to-[#FCFAFD] flex items-center justify-center text-[#35164F] font-bold uppercase tracking-wider">
                  QR Placeholder
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 11. FINAL THANK YOU SECTION */}
        <section className="pt-8 pb-12 text-center w-full max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-extrabold text-[#35164F] mb-6">
            Thank You <span className="text-[#E83E8C]">❤️</span>
          </h2>
          <p className="text-xl text-[#35164F] font-medium mb-10 leading-[1.65]">
            Your contribution helps us create meaningful change. Together, we are building a foundation of hope, health, and education.
          </p>
          <button className="px-10 py-5 bg-gradient-to-r from-[#241D29] to-[#35164F] hover:from-[#35164F] hover:to-[#6A2C91] text-white font-bold rounded-full shadow-lg shadow-purple-900/20 hover:shadow-xl hover:shadow-purple-900/30 hover:-translate-y-1 transition-all duration-500 ease-out tracking-wide text-lg">
            SUPPORT US
          </button>
        </section>

      </div>
    </main>
  );
}
