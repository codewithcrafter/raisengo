'use client';

import React from 'react';
import { Info } from 'lucide-react';

export const PanNoticeBox: React.FC = () => {
  return (
    <div
      role="note"
      aria-label="PAN Tax Exemption Notice"
      className="pan-notice-animated mt-4 flex items-start gap-3 rounded-2xl border border-amber-300/80 bg-amber-50/90 p-4 text-amber-950 shadow-sm"
    >
      <Info className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" aria-hidden="true" />
      <p className="text-xs sm:text-sm leading-relaxed font-medium">
        Please note that if you do not provide your PAN Number, you will not be able to claim 50% tax exemption u/s 80G
        in India
      </p>
    </div>
  );
};
