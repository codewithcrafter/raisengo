'use client';

import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  HelpCircle, 
  FileText 
} from 'lucide-react';
import styles from './page.module.css';

interface FormState {
  fullName: string;
  email: string;
  whatsapp: string;
  age: string;
  reason: string;
  startDate: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  whatsapp?: string;
  age?: string;
  reason?: string;
  startDate?: string;
}

export const InternshipForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    email: '',
    whatsapp: '',
    age: '',
    reason: '',
    startDate: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [serverMessage, setServerMessage] = useState<string>('');
  const [applicationId, setApplicationId] = useState<string>('');

  // Get today's date formatted as YYYY-MM-DD for min date attribute
  const todayDate = new Date().toISOString().split('T')[0];

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    // 1. Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your complete name (at least 2 characters).';
    } else if (formData.fullName.trim().length > 100) {
      newErrors.fullName = 'Name cannot exceed 100 characters.';
    }

    // 2. Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address (e.g. name@example.com).';
    }

    // 3. WhatsApp No.
    const cleanPhone = formData.whatsapp.replace(/[\s\-\(\)\+]/g, '');
    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = 'WhatsApp number is required.';
    } else if (cleanPhone.length < 10 || cleanPhone.length > 15 || !/^\d+$/.test(cleanPhone)) {
      newErrors.whatsapp = 'Please enter a valid WhatsApp number (at least 10 digits).';
    }

    // 4. Age
    const parsedAge = parseInt(formData.age.trim(), 10);
    if (!formData.age.trim()) {
      newErrors.age = 'Age is required.';
    } else if (isNaN(parsedAge) || parsedAge < 15 || parsedAge > 99) {
      newErrors.age = 'Please enter a valid age between 15 and 99.';
    }

    // 5. Why do you want to do this internship?
    if (!formData.reason.trim()) {
      newErrors.reason = 'Please explain why you want to do this internship.';
    } else if (formData.reason.trim().length < 10) {
      newErrors.reason = 'Please provide at least 10 characters explaining your interest.';
    } else if (formData.reason.trim().length > 3000) {
      newErrors.reason = 'Your explanation cannot exceed 3,000 characters.';
    }

    // 6. When would you like to start the internship?
    if (!formData.startDate.trim()) {
      newErrors.startDate = 'Please select your preferred start date.';
    } else {
      const selected = new Date(formData.startDate);
      if (isNaN(selected.getTime())) {
        newErrors.startDate = 'Please enter a valid date.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field error on edit
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) {
      setStatus('error');
      setServerMessage('Please correct the highlighted fields before submitting.');
      return;
    }

    setStatus('loading');
    setServerMessage('');

    try {
      const response = await fetch('/api/internship', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setApplicationId(data.applicationId || 'RIF-INT-CONFIRMED');
        setServerMessage(
          data.message ||
            'Your application has been received successfully! Our internship coordinator will contact you shortly.'
        );
      } else {
        setStatus('error');
        if (data.errors) {
          setErrors(data.errors);
          setServerMessage('Some fields could not be validated. Please check the form.');
        } else {
          setServerMessage(
            data.message || 'Unable to submit application. Please check your connection and try again.'
          );
        }
      }
    } catch {
      setStatus('error');
      setServerMessage(
        'A network error occurred while submitting your application. Your entered details have been preserved; please try again.'
      );
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      whatsapp: '',
      age: '',
      reason: '',
      startDate: '',
    });
    setErrors({});
    setStatus('idle');
    setServerMessage('');
    setApplicationId('');
  };

  return (
    <div className={styles.formContainer} id="application-form">
      {status === 'success' ? (
        <div className={styles.successBox} role="status" aria-live="polite">
          <div className={styles.successIconWrapper}>
            <CheckCircle2 className="w-12 h-12 text-emerald-600" aria-hidden="true" />
          </div>
          <h3 className={styles.successHeading}>Application Submitted Successfully!</h3>
          <p className={styles.successSubtext}>
            Thank you, <strong>{formData.fullName}</strong>. We have received your application for the Crowdfunding Internship.
          </p>
          {applicationId && (
            <div className={styles.referenceBadge}>
              <span className={styles.refLabel}>Application Reference:</span>
              <code className={styles.refCode}>{applicationId}</code>
            </div>
          )}
          <p className={styles.successNextStep}>
            Our internship coordinator will contact you at <strong>{formData.whatsapp}</strong> or{' '}
            <strong>{formData.email}</strong> to discuss potential opportunities and next steps.
          </p>
          <button
            type="button"
            onClick={handleReset}
            className={styles.resetBtn}
          >
            Submit Another Application
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className={styles.formCard} aria-labelledby="form-heading">
          <div className={styles.formHeader}>
            <span className={styles.formEyebrow}>JOIN OUR TEAM</span>
            <h2 id="form-heading" className={styles.formTitle}>
              Apply for Crowdfunding Internship
            </h2>
            <p className={styles.formSubtitle}>
              Fill out the details below to begin your journey of social change with Raise India Foundation.
            </p>
          </div>

          {status === 'error' && serverMessage && (
            <div className={styles.serverErrorBanner} role="alert" aria-live="assertive">
              <AlertCircle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
              <span>{serverMessage}</span>
            </div>
          )}

          <div className={styles.formGrid}>
            {/* 1. Full Name */}
            <div className={styles.formGroup}>
              <label htmlFor="fullName" className={styles.formLabel}>
                Full Name <span className={styles.requiredMark} aria-hidden="true">*</span>
              </label>
              <div className={styles.inputWrapper}>
                <User className={styles.inputIcon} aria-hidden="true" />
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Aarav Sharma"
                  disabled={status === 'loading'}
                  className={`${styles.formInput} ${errors.fullName ? styles.inputError : ''}`}
                  aria-required="true"
                  aria-invalid={!!errors.fullName}
                  aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                />
              </div>
              {errors.fullName && (
                <p id="fullName-error" className={styles.fieldError} role="alert">
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* 2. Email */}
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>
                Email Address <span className={styles.requiredMark} aria-hidden="true">*</span>
              </label>
              <div className={styles.inputWrapper}>
                <Mail className={styles.inputIcon} aria-hidden="true" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. aarav@example.com"
                  disabled={status === 'loading'}
                  className={`${styles.formInput} ${errors.email ? styles.inputError : ''}`}
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
              </div>
              {errors.email && (
                <p id="email-error" className={styles.fieldError} role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            {/* 3. WhatsApp No. */}
            <div className={styles.formGroup}>
              <label htmlFor="whatsapp" className={styles.formLabel}>
                WhatsApp No. <span className={styles.requiredMark} aria-hidden="true">*</span>
              </label>
              <div className={styles.inputWrapper}>
                <Phone className={styles.inputIcon} aria-hidden="true" />
                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="e.g. +91 9876543210"
                  disabled={status === 'loading'}
                  className={`${styles.formInput} ${errors.whatsapp ? styles.inputError : ''}`}
                  aria-required="true"
                  aria-invalid={!!errors.whatsapp}
                  aria-describedby={errors.whatsapp ? 'whatsapp-error' : undefined}
                />
              </div>
              {errors.whatsapp && (
                <p id="whatsapp-error" className={styles.fieldError} role="alert">
                  {errors.whatsapp}
                </p>
              )}
            </div>

            {/* 4. Age */}
            <div className={styles.formGroup}>
              <label htmlFor="age" className={styles.formLabel}>
                Age <span className={styles.requiredMark} aria-hidden="true">*</span>
              </label>
              <div className={styles.inputWrapper}>
                <HelpCircle className={styles.inputIcon} aria-hidden="true" />
                <input
                  id="age"
                  name="age"
                  type="number"
                  min="15"
                  max="99"
                  step="1"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="e.g. 21"
                  disabled={status === 'loading'}
                  className={`${styles.formInput} ${errors.age ? styles.inputError : ''}`}
                  aria-required="true"
                  aria-invalid={!!errors.age}
                  aria-describedby={errors.age ? 'age-error' : undefined}
                />
              </div>
              {errors.age && (
                <p id="age-error" className={styles.fieldError} role="alert">
                  {errors.age}
                </p>
              )}
            </div>

            {/* 6. When would you like to start the internship? */}
            <div className={`${styles.formGroup} ${styles.fullWidthGroup}`}>
              <label htmlFor="startDate" className={styles.formLabel}>
                When would you like to start the internship?{' '}
                <span className={styles.requiredMark} aria-hidden="true">*</span>
              </label>
              <div className={styles.inputWrapper}>
                <Calendar className={styles.inputIcon} aria-hidden="true" />
                <input
                  id="startDate"
                  name="startDate"
                  type="date"
                  min={todayDate}
                  value={formData.startDate}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  className={`${styles.formInput} ${errors.startDate ? styles.inputError : ''}`}
                  aria-required="true"
                  aria-invalid={!!errors.startDate}
                  aria-describedby={errors.startDate ? 'startDate-error' : undefined}
                />
              </div>
              {errors.startDate && (
                <p id="startDate-error" className={styles.fieldError} role="alert">
                  {errors.startDate}
                </p>
              )}
            </div>

            {/* 5. Why do you want to do this internship? */}
            <div className={`${styles.formGroup} ${styles.fullWidthGroup}`}>
              <label htmlFor="reason" className={styles.formLabel}>
                Why do you want to do this internship?{' '}
                <span className={styles.requiredMark} aria-hidden="true">*</span>
              </label>
              <div className={styles.textareaWrapper}>
                <FileText className={styles.textareaIcon} aria-hidden="true" />
                <textarea
                  id="reason"
                  name="reason"
                  rows={4}
                  value={formData.reason}
                  onChange={handleChange}
                  placeholder="Share your motivation, passion for social impact, and how you hope to contribute to our crowdfunding initiatives..."
                  disabled={status === 'loading'}
                  className={`${styles.formTextarea} ${errors.reason ? styles.inputError : ''}`}
                  aria-required="true"
                  aria-invalid={!!errors.reason}
                  aria-describedby={errors.reason ? 'reason-error' : undefined}
                />
              </div>
              {errors.reason && (
                <p id="reason-error" className={styles.fieldError} role="alert">
                  {errors.reason}
                </p>
              )}
            </div>
          </div>

          <div className={styles.formActions}>
            <button
              type="submit"
              disabled={status === 'loading'}
              className={styles.submitBtn}
              aria-label="Submit internship application"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin mr-2" aria-hidden="true" />
                  <span>Submitting Application...</span>
                </>
              ) : (
                <>
                  <span>Submit Application</span>
                  <Send className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </>
              )}
            </button>
            <p className={styles.privacyNote}>
              🔒 Your contact information is kept strictly confidential and only used for recruitment purposes.
            </p>
          </div>
        </form>
      )}
    </div>
  );
};
