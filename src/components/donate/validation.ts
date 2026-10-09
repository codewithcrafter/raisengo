import type { DonorFormData } from './types';

export const validateEmail = (email: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

export const validateMobile = (mobile: string): boolean => {
  const digits = mobile.replace(/\D/g, '');
  return /^[6-9]\d{9}$/.test(digits);
};

export const validatePAN = (pan: string): boolean =>
  /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan.trim().toUpperCase());

export const validateDonor = (formData: DonorFormData): Record<string, string> => {
  const errors: Record<string, string> = {};

  if (!formData.firstName.trim()) {
    errors.firstName = 'First name is required.';
  }

  if (!formData.lastName.trim()) {
    errors.lastName = 'Last name is required.';
  }

  if (!formData.mobile.trim()) {
    errors.mobile = 'Mobile number is required.';
  } else if (!validateMobile(formData.mobile)) {
    errors.mobile = 'Enter a valid 10-digit Indian mobile number.';
  }

  if (!formData.email.trim()) {
    errors.email = 'Email address is required.';
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Enter a valid email address.';
  }

  if (!formData.address.trim()) {
    errors.address = 'Address is required.';
  }

  if (formData.pan.trim() && !validatePAN(formData.pan)) {
    errors.pan = 'Enter a valid PAN (e.g. ABCDE1234F).';
  }

  return errors;
};
