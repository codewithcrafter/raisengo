'use client';

import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { DonationCard } from './DonationCard';
import { RupeeInput } from './RupeeInput';
import { DonorInfoFields } from './DonorInfoFields';
import { SponsorActionBar } from './SponsorActionBar';
import { submitDonation } from './submitHandler';
import { emptyDonor, type DonorFormData, type DonationPayload } from './types';
import { validateDonor } from './validation';

const PRESETS = [3000, 5000, 10000, 20000];

export const FormHelpAChild: React.FC = () => {
  const [selectedPreset, setSelectedPreset] = useState<number | null>(3000);
  const [otherAmount, setOtherAmount] = useState<string>('');
  const [formData, setFormData] = useState<DonorFormData>(emptyDonor);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [collected, setCollected] = useState(false);

  const clearError = (field: string) => {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleSelectPreset = (amt: number) => {
    setSelectedPreset(amt);
    setOtherAmount('');
    clearError('amount');
  };

  const handleOtherAmountChange = (val: string) => {
    setOtherAmount(val);
    setSelectedPreset(null);
    clearError('amount');
  };

  const currentAmount = selectedPreset !== null ? selectedPreset : parseInt(otherAmount, 10) || 0;

  const validate = (): boolean => {
    const nextErrors = validateDonor(formData);
    if (!currentAmount || currentAmount <= 0) {
      nextErrors.amount = 'Please select a preset amount or enter another amount greater than ₹0.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCollected(false);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    const payload: DonationPayload = {
      causeId: 'help-a-child',
      causeTitle: 'Help a Child (Little Heartbeats)',
      amount: currentAmount,
      amountMode: selectedPreset !== null ? 'preset' : 'other',
      donor: formData,
    };

    await submitDonation('help-a-child', payload);
    setIsSubmitting(false);
    setCollected(true);
  };

  return (
    <DonationCard
      id="help-a-child-form"
      theme="red"
      title="Help a Child (Little Heartbeats)"
      icon={<Heart className="h-7 w-7 fill-brand-red text-brand-red" aria-hidden="true" />}
      badge="Pediatric Healthcare • Mission Little Heartbeats"
    >
      <form onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column: Choices */}
          <div className="flex flex-col">
            <h3 className="mb-4 text-base font-bold text-stone-900 sm:text-lg">
              I would like to Support a Child
            </h3>

            {/* Preset Amount Buttons */}
            <div
              className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-4"
              role="radiogroup"
              aria-label="Preset donation amounts"
            >
              {PRESETS.map((amt) => {
                const isSelected = selectedPreset === amt;
                return (
                  <button
                    type="button"
                    key={amt}
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() => handleSelectPreset(amt)}
                    className={`flex min-h-12 flex-col items-center justify-center rounded-2xl border-2 px-3 py-2 text-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 ${
                      isSelected
                        ? 'border-brand-red bg-brand-red text-white shadow-md shadow-rose-500/25 ring-2 ring-brand-red/30'
                        : 'border-rose-200/80 bg-white text-stone-800 hover:border-rose-300 hover:bg-rose-50/50'
                    }`}
                  >
                    <span className="text-sm sm:text-base font-bold">
                      ₹{amt.toLocaleString('en-IN')}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Other Amount input */}
            <div className="mb-4">
              <RupeeInput
                id="form1-other-amount"
                label="Other Amount"
                value={otherAmount}
                onChange={handleOtherAmountChange}
                error={errors.amount}
                placeholder="Enter custom amount"
                theme="red"
              />
            </div>

            {/* Informational reassurance */}
            <p className="mt-auto pt-3 text-xs text-stone-500 leading-relaxed">
              Provides pediatric heart surgeries, emergency treatment, and critical post-operative medication for children born with congenital heart defects.
            </p>
          </div>

          {/* Right Column: Donor Information */}
          <div className="flex flex-col">
            <DonorInfoFields
              formId="form1"
              theme="red"
              formData={formData}
              setFormData={setFormData}
              errors={errors}
              onClearError={clearError}
            />
          </div>
        </div>

        {/* Sponsor Now Action Bar */}
        <SponsorActionBar
          theme="red"
          amount={currentAmount}
          sublabel="One-time contribution"
          isSubmitting={isSubmitting}
          collected={collected}
        />
      </form>
    </DonationCard>
  );
};
