'use client';

import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { DonationCard } from './DonationCard';
import { RupeeInput } from './RupeeInput';
import { DonorInfoFields } from './DonorInfoFields';
import { PanNoticeBox } from './PanNoticeBox';
import { SponsorActionBar } from './SponsorActionBar';
import { submitDonation } from './submitHandler';
import { emptyDonor, type DonorFormData, type DonationPayload } from './types';
import { validateDonor } from './validation';

const DIGNITY_OPTIONS = [
  { label: '1 Dignity Unit', count: 1, amount: 500 },
  { label: '10 Dignity Unit', count: 10, amount: 5000 },
  { label: '15 Dignity Unit', count: 15, amount: 7500 },
  { label: '25 Dignity Unit', count: 25, amount: 12500 },
] as const;

type DignityUnitLabel = (typeof DIGNITY_OPTIONS)[number]['label'];

export const FormChuppiTodo: React.FC = () => {
  const [selectedUnit, setSelectedUnit] = useState<DignityUnitLabel>('1 Dignity Unit');
  const [amountMode, setAmountMode] = useState<'specific' | 'other'>('specific');
  const [otherAmount, setOtherAmount] = useState<string>('');
  const [formData, setFormData] = useState<DonorFormData>(emptyDonor);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [collected, setCollected] = useState(false);

  const activeOption =
    DIGNITY_OPTIONS.find((opt) => opt.label === selectedUnit) || DIGNITY_OPTIONS[0];

  const currentAmount =
    amountMode === 'specific' ? activeOption.amount : parseInt(otherAmount, 10) || 0;

  const clearError = (field: string) => {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleUnitSelect = (unit: DignityUnitLabel) => {
    setSelectedUnit(unit);
    setAmountMode('specific');
    setOtherAmount('');
    clearError('amount');
  };

  const handleSelectSpecificAmount = () => {
    setAmountMode('specific');
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
    if (!currentAmount || currentAmount <= 0) {
      nextErrors.amount = 'Please select a Dignity Unit amount or enter another amount greater than ₹0.';
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
      causeId: 'chuppi-todo',
      causeTitle: 'Chuppi Todo – Sharm Nahi Samman',
      amount: currentAmount,
      dignityUnits: selectedUnit,
      amountMode,
      donor: formData,
    };

    await submitDonation('chuppi-todo', payload);
    setIsSubmitting(false);
    setCollected(true);
  };

  return (
    <DonationCard
      id="chuppi-todo-form"
      theme="purple"
      title="Chuppi Todo – Sharm Nahi Samman"
      icon={<Sparkles className="h-7 w-7 text-brand-purple" aria-hidden="true" />}
      badge="Menstrual Health & Dignity • Women Welfare"
    >
      <form onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column: Choices */}
          <div className="flex flex-col">
            <h3 className="mb-4 text-base font-bold text-stone-900 sm:text-lg">
              I would like to Sponsor a Child
            </h3>

            {/* Dignity Unit options */}
            <fieldset className="mb-5">
              <legend className="mb-2 text-xs font-semibold tracking-wide text-stone-700">
                Dignity Unit
              </legend>
              <div
                className="grid grid-cols-2 gap-3 sm:grid-cols-4"
                role="radiogroup"
                aria-label="Dignity unit options"
              >
                {DIGNITY_OPTIONS.map((opt) => {
                  const isSelected = selectedUnit === opt.label;
                  return (
                    <button
                      type="button"
                      key={opt.label}
                      role="radio"
                      aria-checked={isSelected}
                      onClick={() => handleUnitSelect(opt.label)}
                      className={`flex min-h-12 flex-col items-center justify-center rounded-2xl border-2 px-2.5 py-2 text-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                        isSelected
                          ? 'border-brand-purple bg-brand-purple text-white shadow-md shadow-purple-600/25 ring-2 ring-brand-purple/30'
                          : 'border-purple-200/80 bg-white text-stone-800 hover:border-purple-300 hover:bg-purple-50/50'
                      }`}
                    >
                      <span className="text-xs sm:text-sm font-bold leading-tight">
                        {opt.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </fieldset>

            {/* "Amount" option (Specific Amount mode) */}
            <div className="mb-3">
              <label className="mb-1.5 block text-xs font-semibold tracking-wide text-stone-700">
                Amount
              </label>
              <button
                type="button"
                onClick={handleSelectSpecificAmount}
                className={`flex w-full items-center justify-between rounded-2xl border-2 p-3.5 text-left transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                  amountMode === 'specific'
                    ? 'border-brand-purple bg-purple-50/90 text-stone-900 ring-2 ring-purple-500/20 shadow-sm'
                    : 'border-purple-200/80 bg-white text-stone-700 hover:border-purple-300'
                }`}
              >
                <div>
                  <div className="text-sm sm:text-base font-bold text-stone-900">
                    ₹{activeOption.amount.toLocaleString('en-IN')}
                  </div>
                  <div className="text-xs text-stone-600">
                    Specific Amount for {selectedUnit}
                  </div>
                </div>
                <div
                  className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                    amountMode === 'specific'
                      ? 'border-brand-purple bg-brand-purple'
                      : 'border-stone-300 bg-white'
                  }`}
                  aria-hidden="true"
                >
                  {amountMode === 'specific' && (
                    <div className="h-2 w-2 rounded-full bg-white" />
                  )}
                </div>
              </button>
            </div>

            {/* "OR" Divider */}
            <div className="my-2.5 flex items-center gap-3">
              <div className="h-px flex-1 bg-purple-200/80" />
              <span className="text-xs font-bold tracking-wider text-purple-700 uppercase">
                OR
              </span>
              <div className="h-px flex-1 bg-purple-200/80" />
            </div>

            {/* "Other Amount" input */}
            <div className="mb-2">
              <RupeeInput
                id="chuppi-other-amount"
                label="Other Amount"
                value={otherAmount}
                onChange={handleOtherAmountChange}
                error={errors.amount}
                placeholder="Enter custom amount"
                theme="purple"
              />
            </div>

            {/* Reassurance text */}
            <p className="mt-auto pt-3 text-xs text-stone-500 leading-relaxed">
              Provides sanitary dignity kits (high-grade pads, hygiene soap, towel) and menstrual health awareness workshops for women living in slums and construction worker settlements.
            </p>
          </div>

          {/* Right Column: Donor Information */}
          <div className="flex flex-col">
            <DonorInfoFields
              formId="form3"
              theme="purple"
              formData={formData}
              setFormData={setFormData}
              errors={errors}
              onClearError={clearError}
            />
          </div>
        </div>

        {/* Sponsor Now Action Bar */}
        <SponsorActionBar
          theme="purple"
          amount={currentAmount}
          sublabel={amountMode === 'specific' ? selectedUnit : 'Custom pledge'}
          isSubmitting={isSubmitting}
          collected={collected}
        />

        {/* Highlighted Animated Notice Box */}
        <PanNoticeBox />
      </form>
    </DonationCard>
  );
};
