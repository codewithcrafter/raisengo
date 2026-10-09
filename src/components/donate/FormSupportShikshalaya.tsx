'use client';

import React, { useState } from 'react';
import { BookOpen, Minus, Plus } from 'lucide-react';
import { DonationCard } from './DonationCard';
import { RupeeInput } from './RupeeInput';
import { DonorInfoFields } from './DonorInfoFields';
import { PanNoticeBox } from './PanNoticeBox';
import { SponsorActionBar } from './SponsorActionBar';
import { submitDonation } from './submitHandler';
import { emptyDonor, type DonorFormData, type DonationPayload } from './types';
import { validateDonor } from './validation';

const FREQUENCIES = [
  { label: 'Monthly', months: 1 },
  { label: 'Quarterly', months: 3 },
  { label: 'Half Yearly', months: 6 },
  { label: 'Yearly', months: 12 },
] as const;

type FrequencyType = (typeof FREQUENCIES)[number]['label'];

const BASE_SPONSOR_PER_CHILD_MONTH = 1500;

export const FormSupportShikshalaya: React.FC = () => {
  const [frequency, setFrequency] = useState<FrequencyType>('Monthly');
  const [childPreference, setChildPreference] = useState<'Boy' | 'Girl'>('Boy');
  const [numberOfChildren, setNumberOfChildren] = useState<number>(1);
  const [amountMode, setAmountMode] = useState<'calculated' | 'other'>('calculated');
  const [otherAmount, setOtherAmount] = useState<string>('');
  const [formData, setFormData] = useState<DonorFormData>(emptyDonor);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [collected, setCollected] = useState(false);

  const freqMonths = FREQUENCIES.find((f) => f.label === frequency)?.months || 1;
  const calculatedAmount = BASE_SPONSOR_PER_CHILD_MONTH * freqMonths * numberOfChildren;

  const currentAmount =
    amountMode === 'calculated' ? calculatedAmount : parseInt(otherAmount, 10) || 0;

  const clearError = (field: string) => {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleDecreaseChildren = () => {
    setNumberOfChildren((prev) => Math.max(1, prev - 1));
  };

  const handleIncreaseChildren = () => {
    setNumberOfChildren((prev) => prev + 1);
  };

  const handleSelectCalculatedAmount = () => {
    setAmountMode('calculated');
    setOtherAmount('');
    clearError('amount');
  };

  const handleOtherAmountChange = (val: string) => {
    setOtherAmount(val);
    setAmountMode('other');
    clearError('amount');
  };

  const validate = (): boolean => {
    const nextErrors = validateDonor(formData);
    if (numberOfChildren < 1) {
      nextErrors.children = 'Number of children must be at least 1.';
    }
    if (!currentAmount || currentAmount <= 0) {
      nextErrors.amount = 'Please enter a donation amount greater than ₹0.';
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
      causeId: 'support-shikshalaya',
      causeTitle: 'Support Shikshalaya: Transforming Education, Transforming Lives',
      amount: currentAmount,
      frequency,
      childPreference,
      numberOfChildren,
      amountMode: amountMode === 'calculated' ? 'specific' : 'other',
      donor: formData,
    };

    await submitDonation('support-shikshalaya', payload);
    setIsSubmitting(false);
    setCollected(true);
  };

  return (
    <DonationCard
      id="support-shikshalaya-form"
      theme="green"
      title="Support Shikshalaya: Transforming Education, Transforming Lives"
      icon={<BookOpen className="h-7 w-7 text-brand-green" aria-hidden="true" />}
      badge="Education & Literacy • Learning Centers"
    >
      <form onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column: Choices */}
          <div className="flex flex-col">
            <h3 className="mb-4 text-base font-bold text-stone-900 sm:text-lg">
              I would like to Sponsor a Child
            </h3>

            {/* Frequency options */}
            <div className="mb-5">
              <label className="mb-2 block text-xs font-semibold tracking-wide text-stone-700">
                Frequency
              </label>
              <div
                className="grid grid-cols-2 gap-2 rounded-2xl bg-white/90 p-1.5 border border-emerald-100 sm:grid-cols-4"
                role="radiogroup"
                aria-label="Donation frequency"
              >
                {FREQUENCIES.map((freq) => {
                  const isSelected = frequency === freq.label;
                  return (
                    <button
                      type="button"
                      key={freq.label}
                      role="radio"
                      aria-checked={isSelected}
                      onClick={() => setFrequency(freq.label)}
                      className={`min-h-11 rounded-xl px-2 py-2 text-xs sm:text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                        isSelected
                          ? 'bg-brand-green text-white shadow-sm ring-1 ring-brand-green/30 font-bold'
                          : 'text-stone-700 hover:bg-emerald-50/70 hover:text-stone-900'
                      }`}
                    >
                      {freq.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Boy and Girl Toggle Buttons */}
            <div className="mb-5">
              <label className="mb-2 block text-xs font-semibold tracking-wide text-stone-700">
                Child Preference
              </label>
              <div
                className="grid grid-cols-2 gap-3"
                role="radiogroup"
                aria-label="Child gender preference"
              >
                <button
                  type="button"
                  role="radio"
                  aria-checked={childPreference === 'Boy'}
                  onClick={() => setChildPreference('Boy')}
                  className={`flex min-h-12 items-center justify-center rounded-2xl border-2 px-4 py-2.5 text-sm sm:text-base font-bold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                    childPreference === 'Boy'
                      ? 'border-brand-green bg-brand-green text-white shadow-md shadow-emerald-600/25'
                      : 'border-emerald-200/80 bg-white text-stone-700 hover:border-emerald-300 hover:bg-emerald-50/50'
                  }`}
                >
                  Boy
                </button>
                <button
                  type="button"
                  role="radio"
                  aria-checked={childPreference === 'Girl'}
                  onClick={() => setChildPreference('Girl')}
                  className={`flex min-h-12 items-center justify-center rounded-2xl border-2 px-4 py-2.5 text-sm sm:text-base font-bold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                    childPreference === 'Girl'
                      ? 'border-brand-green bg-brand-green text-white shadow-md shadow-emerald-600/25'
                      : 'border-emerald-200/80 bg-white text-stone-700 hover:border-emerald-300 hover:bg-emerald-50/50'
                  }`}
                >
                  Girl
                </button>
              </div>
            </div>

            {/* Number of Children with minus / number / plus controls */}
            <div className="mb-5">
              <label
                htmlFor="num-children-input"
                className="mb-2 block text-xs font-semibold tracking-wide text-stone-700"
              >
                Number of Children
              </label>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleDecreaseChildren}
                  disabled={numberOfChildren <= 1}
                  aria-label="Decrease number of children"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-emerald-200 bg-white text-stone-800 shadow-sm transition-all hover:bg-emerald-50 hover:border-emerald-300 disabled:cursor-not-allowed disabled:opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 active:scale-95"
                >
                  <Minus className="h-5 w-5" aria-hidden="true" />
                </button>

                <div className="relative">
                  <input
                    id="num-children-input"
                    type="number"
                    min={1}
                    value={numberOfChildren}
                    onChange={(e) => {
                      const val = parseInt(e.target.value, 10);
                      if (!Number.isNaN(val) && val >= 1) {
                        setNumberOfChildren(val);
                      }
                    }}
                    aria-label="Number of children count"
                    className="h-12 w-24 rounded-2xl border-2 border-emerald-200 bg-white text-center text-lg font-bold text-stone-900 shadow-sm focus:outline-none focus-visible:border-brand-green focus-visible:ring-2 focus-visible:ring-emerald-400/30"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleIncreaseChildren}
                  aria-label="Increase number of children"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-emerald-200 bg-white text-stone-800 shadow-sm transition-all hover:bg-emerald-50 hover:border-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 active:scale-95"
                >
                  <Plus className="h-5 w-5" aria-hidden="true" />
                </button>

                <span className="text-xs sm:text-sm text-stone-600 font-medium">
                  {numberOfChildren === 1 ? '1 Child' : `${numberOfChildren} Children`}
                </span>
              </div>
            </div>

            {/* Amount Section */}
            <div className="mb-4">
              <label className="mb-2 block text-xs font-semibold tracking-wide text-stone-700">
                Amount
              </label>

              <button
                type="button"
                onClick={handleSelectCalculatedAmount}
                className={`flex w-full items-center justify-between rounded-2xl border-2 p-3.5 text-left transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                  amountMode === 'calculated'
                    ? 'border-brand-green bg-emerald-50/90 text-stone-900 ring-2 ring-emerald-500/20 shadow-sm'
                    : 'border-emerald-200/80 bg-white text-stone-700 hover:border-emerald-300'
                }`}
              >
                <div>
                  <div className="text-sm sm:text-base font-bold text-stone-900">
                    ₹{calculatedAmount.toLocaleString('en-IN')}
                  </div>
                  <div className="text-xs text-stone-600">
                    Sponsorship for {numberOfChildren} {childPreference} {numberOfChildren === 1 ? 'child' : 'children'} ({frequency})
                  </div>
                </div>
                <div
                  className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                    amountMode === 'calculated'
                      ? 'border-brand-green bg-brand-green'
                      : 'border-stone-300 bg-white'
                  }`}
                  aria-hidden="true"
                >
                  {amountMode === 'calculated' && (
                    <div className="h-2 w-2 rounded-full bg-white" />
                  )}
                </div>
              </button>
            </div>

            {/* Other Amount input */}
            <div className="mb-2">
              <RupeeInput
                id="shikshalaya-other-amount"
                label="Other Amount"
                value={otherAmount}
                onChange={handleOtherAmountChange}
                error={errors.amount}
                placeholder="Enter custom amount"
                theme="green"
              />
            </div>
          </div>

          {/* Right Column: Donor Information */}
          <div className="flex flex-col">
            <DonorInfoFields
              formId="form2"
              theme="green"
              formData={formData}
              setFormData={setFormData}
              errors={errors}
              onClearError={clearError}
            />
          </div>
        </div>

        {/* Sponsor Now Action Bar */}
        <SponsorActionBar
          theme="green"
          amount={currentAmount}
          sublabel={`${frequency} • ${numberOfChildren} ${childPreference} ${numberOfChildren === 1 ? 'Child' : 'Children'}`}
          isSubmitting={isSubmitting}
          collected={collected}
        />

        {/* Highlighted Animated Notice Box */}
        <PanNoticeBox />
      </form>
    </DonationCard>
  );
};
