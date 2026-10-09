'use client';

import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { FormHelpAChild } from '@/components/donate/FormHelpAChild';
import { FormSupportShikshalaya } from '@/components/donate/FormSupportShikshalaya';
import { FormChuppiTodo } from '@/components/donate/FormChuppiTodo';

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-[#FFFDFC] pb-24 sm:pb-32" style={{ paddingTop: '150px' }}>
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Page title area: small, clean heading with 80G badge */}
        <header className="mb-8 sm:mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 sm:gap-4">
            <div>
              <p className="text-xs font-bold tracking-widest text-brand-red uppercase">
                Raise India Foundation
              </p>
              <h1 className="mt-0.5 text-2xl font-extrabold tracking-tight text-stone-900 sm:text-3xl">
                Donate
              </h1>
            </div>
            <div className="inline-flex self-start sm:self-auto items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50/90 px-3 py-1 text-xs font-semibold text-emerald-800 shadow-xs">
              <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" aria-hidden="true" />
              <span>50% Tax Exemption u/s 80G</span>
            </div>
          </div>
        </header>

        {/* Three stacked form cards */}
        <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12">
          <FormHelpAChild />
          <FormSupportShikshalaya />
          <FormChuppiTodo />
        </div>
      </div>
    </main>
  );
}
