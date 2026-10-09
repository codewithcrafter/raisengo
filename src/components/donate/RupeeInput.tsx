'use client';

import React from 'react';
import { AlertCircle } from 'lucide-react';
import type { CardTheme } from './DonationCard';

interface RupeeInputProps {
  id: string;
  name?: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
  theme?: CardTheme;
  required?: boolean;
}

export const RupeeInput: React.FC<RupeeInputProps> = ({
  id,
  name = id,
  label,
  value,
  onChange,
  error,
  placeholder = 'Enter amount',
  theme = 'red',
  required = false,
}) => {
  const themeFocusRing = {
    red: 'focus-visible:border-brand-red focus-visible:ring-rose-400/30',
    green: 'focus-visible:border-brand-green focus-visible:ring-emerald-400/30',
    purple: 'focus-visible:border-brand-purple focus-visible:ring-purple-400/30',
  }[theme];

  return (
    <div className="flex w-full flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-semibold tracking-wide text-stone-700">
        {label}
        {required && (
          <span className="ml-1 text-rose-500" aria-hidden="true">
            *
          </span>
        )}
      </label>
      <div className="relative">
        <span
          className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-base font-semibold text-stone-500 sm:text-sm"
          aria-hidden="true"
        >
          ₹
        </span>
        <input
          id={id}
          name={name}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value.replace(/\D/g, ''))}
          aria-required={required}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`min-h-11 w-full rounded-xl border bg-white py-2.5 pr-3.5 pl-9 text-[16px] font-semibold text-stone-900 placeholder:font-normal placeholder:text-stone-400 transition-colors focus:outline-none focus-visible:ring-2 sm:text-sm ${
            error
              ? 'border-rose-400 focus-visible:border-rose-500 focus-visible:ring-rose-200'
              : `border-stone-200 hover:border-stone-300 ${themeFocusRing}`
          }`}
        />
      </div>
      {error && (
        <p
          id={`${id}-error`}
          className="flex items-center gap-1 text-xs font-medium text-rose-600"
          role="alert"
        >
          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
};
