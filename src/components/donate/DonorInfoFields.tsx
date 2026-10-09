'use client';

import React from 'react';
import { AlertCircle, Shield } from 'lucide-react';
import type { DonorFormData } from './types';
import type { CardTheme } from './DonationCard';

interface DonorInfoFieldsProps {
  formId: string;
  theme?: CardTheme;
  formData: DonorFormData;
  setFormData: React.Dispatch<React.SetStateAction<DonorFormData>>;
  errors: Record<string, string>;
  onClearError: (field: string) => void;
}

interface FormInputProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  value: string;
  onChange: (val: string) => void;
  error?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode'];
  themeFocus?: string;
  helpText?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  id,
  name,
  label,
  type = 'text',
  value,
  onChange,
  error,
  required = false,
  placeholder,
  autoComplete,
  inputMode,
  themeFocus = 'focus-visible:border-brand-primary focus-visible:ring-brand-primary/20',
  helpText,
}) => (
  <div className="flex w-full flex-col gap-1.5">
    <div className="flex items-center justify-between">
      <label htmlFor={id} className="text-xs font-semibold tracking-wide text-stone-700">
        {label}
        {required && (
          <span className="ml-1 text-rose-500" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {helpText && <span className="text-[11px] text-stone-500">{helpText}</span>}
    </div>
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      autoComplete={autoComplete}
      inputMode={inputMode}
      aria-required={required}
      aria-invalid={!!error}
      aria-describedby={error ? `${id}-error` : undefined}
      className={`min-h-11 w-full rounded-xl border bg-white px-3.5 py-2.5 text-[16px] text-stone-900 placeholder:text-stone-400 transition-colors focus:outline-none focus-visible:ring-2 sm:text-sm ${
        error
          ? 'border-rose-400 focus-visible:border-rose-500 focus-visible:ring-rose-200'
          : `border-stone-200 hover:border-stone-300 ${themeFocus}`
      }`}
    />
    {error && (
      <p id={`${id}-error`} className="flex items-center gap-1 text-xs font-medium text-rose-600" role="alert">
        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        {error}
      </p>
    )}
  </div>
);

export const DonorInfoFields: React.FC<DonorInfoFieldsProps> = ({
  formId,
  theme = 'red',
  formData,
  setFormData,
  errors,
  onClearError,
}) => {
  const themeFocus = {
    red: 'focus-visible:border-brand-red focus-visible:ring-rose-400/30',
    green: 'focus-visible:border-brand-green focus-visible:ring-emerald-400/30',
    purple: 'focus-visible:border-brand-purple focus-visible:ring-purple-400/30',
  }[theme];

  const handleUpdate = (field: keyof DonorFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      onClearError(field);
    }
  };

  return (
    <div className="flex flex-col">
      <header className="mb-3">
        <h3 className="flex items-center gap-2 text-base font-bold text-stone-900 sm:text-lg">
          <Shield className="h-4 w-4 text-emerald-600 shrink-0" aria-hidden="true" />
          Donor Information
        </h3>
        <p className="mt-1 text-xs sm:text-sm leading-relaxed text-stone-600">
          All donations to Raise India Foundation are eligible for 50% tax exemption u/s 80G(5) of the Income Tax Act, 1961.
        </p>
      </header>

      <div className="mt-2 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
        <FormInput
          id={`firstName-${formId}`}
          name="firstName"
          label="First Name"
          placeholder="First name"
          value={formData.firstName}
          onChange={(val) => handleUpdate('firstName', val)}
          error={errors.firstName}
          required
          autoComplete="given-name"
          themeFocus={themeFocus}
        />

        <FormInput
          id={`lastName-${formId}`}
          name="lastName"
          label="Last Name"
          placeholder="Last name"
          value={formData.lastName}
          onChange={(val) => handleUpdate('lastName', val)}
          error={errors.lastName}
          required
          autoComplete="family-name"
          themeFocus={themeFocus}
        />

        <FormInput
          id={`mobile-${formId}`}
          name="mobile"
          label="Mobile Number"
          type="tel"
          placeholder="10-digit mobile number"
          value={formData.mobile}
          onChange={(val) => handleUpdate('mobile', val.replace(/\D/g, '').slice(0, 10))}
          error={errors.mobile}
          required
          autoComplete="tel"
          inputMode="numeric"
          themeFocus={themeFocus}
        />

        <FormInput
          id={`email-${formId}`}
          name="email"
          label="Email Address"
          type="email"
          placeholder="name@example.com"
          value={formData.email}
          onChange={(val) => handleUpdate('email', val)}
          error={errors.email}
          required
          autoComplete="email"
          themeFocus={themeFocus}
        />

        <div className="sm:col-span-2">
          <FormInput
            id={`address-${formId}`}
            name="address"
            label="Address"
            placeholder="Complete postal address for tax receipt"
            value={formData.address}
            onChange={(val) => handleUpdate('address', val)}
            error={errors.address}
            required
            autoComplete="street-address"
            themeFocus={themeFocus}
          />
        </div>

        <div className="sm:col-span-2">
          <FormInput
            id={`pan-${formId}`}
            name="pan"
            label="PAN Number"
            placeholder="ABCDE1234F"
            helpText="Optional (required for 80G tax receipt)"
            value={formData.pan}
            onChange={(val) => handleUpdate('pan', val.toUpperCase().slice(0, 10))}
            error={errors.pan}
            autoComplete="off"
            themeFocus={themeFocus}
          />
        </div>
      </div>
    </div>
  );
};
