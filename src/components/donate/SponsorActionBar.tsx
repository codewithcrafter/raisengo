'use client';

import React from 'react';
import { Heart, Loader2 } from 'lucide-react';
import type { CardTheme } from './DonationCard';

interface SponsorActionBarProps {
  theme: CardTheme;
  amount: number;
  sublabel?: string;
  isSubmitting: boolean;
  collected: boolean;
}

export const SponsorActionBar: React.FC<SponsorActionBarProps> = ({
  theme,
  amount,
  sublabel,
  isSubmitting,
  collected,
}) => {
  const themeStyles = {
    red: {
      btn: 'bg-brand-red hover:bg-[#C53030] shadow-rose-500/25 focus-visible:ring-rose-400',
      totalText: 'text-brand-red',
    },
    green: {
      btn: 'bg-brand-green hover:bg-[#059669] shadow-emerald-500/25 focus-visible:ring-emerald-400',
      totalText: 'text-brand-green',
    },
    purple: {
      btn: 'bg-brand-purple hover:bg-[#6042A6] shadow-purple-500/25 focus-visible:ring-purple-400',
      totalText: 'text-brand-purple',
    },
  }[theme];

  return (
    <div className="mt-8 border-t border-stone-200/70 pt-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Live Total Display */}
        <div className="flex flex-col">
          <span className="text-xs font-semibold tracking-wider text-stone-500 uppercase">
            Total Contribution
          </span>
          <div className="flex items-baseline gap-2">
            <span className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${themeStyles.totalText}`}>
              ₹{amount > 0 ? amount.toLocaleString('en-IN') : '0'}
            </span>
            {sublabel && (
              <span className="text-xs sm:text-sm font-medium text-stone-600">
                ({sublabel})
              </span>
            )}
          </div>
        </div>

        {/* Sponsor Now Button with Heart Icon */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-2xl px-8 py-3.5 text-base font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:min-w-56 ${themeStyles.btn}`}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
              <span>Recording Pledge…</span>
            </>
          ) : (
            <>
              <Heart className="h-5 w-5 fill-current" aria-hidden="true" />
              <span>Sponsor Now</span>
            </>
          )}
        </button>
      </div>

      {/* Honest Local Collection Banner (No fake payment success) */}
      {collected && (
        <div
          role="status"
          className="mt-4 rounded-xl border border-amber-300 bg-amber-50/90 p-4 text-xs sm:text-sm leading-relaxed font-medium text-amber-950"
        >
          <p className="font-semibold text-amber-900 mb-0.5">
            ✓ Details collected in local handler
          </p>
          <p>
            Your sponsorship details have been captured and logged in the console. Live payment gateway integration
            (e.g., Razorpay / Easebuzz) is not connected yet, so no money was charged.
          </p>
        </div>
      )}
    </div>
  );
};
