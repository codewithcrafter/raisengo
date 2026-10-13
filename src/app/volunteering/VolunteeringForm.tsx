'use client';

import React, { useState } from 'react';
import {
  User,
  Mail,
  Phone,
  Calendar,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
  RotateCcw,
} from 'lucide-react';
import styles from './page.module.css';

interface FormData {
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

const initialFormData: FormData = {
  fullName: '',
  email: '',
  whatsapp: '',
  age: '',
  reason: '',
  startDate: '',
};

export const VolunteeringForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [confirmationDetails, setConfirmationDetails] = useState<{
    referenceId: string;
    fullName: string;
  } | null>(null);

  const validateField = (name: keyof FormData, value: string): string | undefined => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return 'Full Name is required.';
        if (value.trim().length < 2) return 'Please enter at least 2 characters.';
        if (value.trim().length > 100) return 'Must be 100 characters or fewer.';
        return undefined;

      case 'email':
        if (!value.trim()) return 'Email address is required.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return 'Please enter a valid email address.';
        }
        return undefined;

      case 'whatsapp':
        if (!value.trim()) return 'WhatsApp number is required.';
        const cleanPhone = value.replace(/[\s\-\(\)\+]/g, '');
        if (cleanPhone.length < 10 || cleanPhone.length > 15 || !/^\d+$/.test(cleanPhone)) {
          return 'Please enter a valid phone number (at least 10 digits).';
        }
        return undefined;

      case 'age':
        if (!value.trim()) return 'Age is required.';
        const ageNum = parseInt(value.trim(), 10);
        if (isNaN(ageNum) || ageNum < 14 || ageNum > 99) {
          return 'Please enter a valid age between 14 and 99.';
        }
        return undefined;

      case 'reason':
        if (!value.trim()) return 'Please share why you want to volunteer.';
        if (value.trim().length < 10) return 'Please write at least 10 characters.';
        if (value.trim().length > 3000) return 'Must be within 3,000 characters.';
        return undefined;

      case 'startDate':
        if (!value.trim()) return 'Please select when you would like to start.';
        const parsed = new Date(value);
        if (isNaN(parsed.getTime())) return 'Please select a valid date.';
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const inputD = new Date(parsed);
        inputD.setHours(0, 0, 0, 0);
        const grace = new Date(today.getTime() - 86400000);
        if (inputD < grace) return 'Start date cannot be in the past.';
        return undefined;

      default:
        return undefined;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setServerError(null);

    if (touched[name]) {
      const err = validateField(name as keyof FormData, value);
      setErrors((prev) => ({ ...prev, [name]: err }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const err = validateField(name as keyof FormData, value);
    setErrors((prev) => ({ ...prev, [name]: err }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Validate all fields
    const newErrors: FormErrors = {};
    (Object.keys(formData) as Array<keyof FormData>).forEach((field) => {
      const err = validateField(field, formData[field]);
      if (err) newErrors[field] = err;
    });

    setTouched({
      fullName: true,
      email: true,
      whatsapp: true,
      age: true,
      reason: true,
      startDate: true,
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Focus first error field
      const firstErrorField = Object.keys(newErrors)[0];
      const element = document.getElementById(`field-${firstErrorField}`);
      element?.focus();
      return;
    }

    setIsSubmitting(true);
    setServerError(null);

    try {
      const res = await fetch('/api/volunteering', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        if (data.errors) {
          setErrors(data.errors);
        }
        setServerError(
          data.message || 'Submission failed. Please check the fields and try again.'
        );
        setIsSubmitting(false);
        return;
      }

      setSubmitSuccess(true);
      setConfirmationDetails({
        referenceId: data.referenceId || 'RIF-VOL-CONFIRMED',
        fullName: formData.fullName,
      });
      setFormData(initialFormData);
      setErrors({});
      setTouched({});
    } catch (err) {
      console.error('Submission network error:', err);
      setServerError('A network error occurred. Please check your internet connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitSuccess(false);
    setConfirmationDetails(null);
    setFormData(initialFormData);
    setErrors({});
    setTouched({});
    setServerError(null);
  };

  return (
    <div id="volunteer-form" className={styles.formContainerWrapper}>
      {submitSuccess && confirmationDetails ? (
        <div className={styles.successCard} role="alert" aria-live="polite">
          <div className={styles.successIconWrapper}>
            <CheckCircle2 className="w-12 h-12 text-emerald-600" aria-hidden="true" />
          </div>
          <h3 className={styles.successHeading}>Application Submitted Successfully!</h3>
          <p className={styles.successMessage}>
            Thank you, <strong>{confirmationDetails.fullName}</strong>. We have received your application to volunteer with Raise India Foundation.
          </p>

          <div className={styles.successMetaBox}>
            <div className={styles.successMetaRow}>
              <span className={styles.successMetaLabel}>Application Reference:</span>
              <span className={styles.successMetaValue}>{confirmationDetails.referenceId}</span>
            </div>
            <div className={styles.successMetaRow}>
              <span className={styles.successMetaLabel}>Next Step:</span>
              <span className={styles.successMetaValue}>
                Our volunteer coordinator will review your profile and reach out via WhatsApp/Email.
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleReset}
            className={styles.resetBtn}
            aria-label="Submit another volunteer application"
          >
            <RotateCcw className="w-4 h-4 mr-2" aria-hidden="true" />
            <span>Submit Another Application</span>
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className={styles.formCard}
          noValidate
          aria-label="Volunteering Application Form"
        >
          <div className={styles.formHeader}>
            <div className={styles.formBadge}>
              <Sparkles className="w-3.5 h-3.5 text-pink-500 mr-1.5" aria-hidden="true" />
              <span>JOIN OUR COMMUNITY</span>
            </div>
            <h3 className={styles.formTitle}>Apply for Volunteering</h3>
            <p className={styles.formSubtitle}>
              Fill out the details below. Our team connects volunteers with impactful initiatives matched to their interests and availability.
            </p>
          </div>

          {serverError && (
            <div className={styles.serverErrorAlert} role="alert">
              <AlertCircle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
              <span>{serverError}</span>
            </div>
          )}

          <div className={styles.formGrid}>
            {/* Field 1: Full Name */}
            <div className={styles.formGroup}>
              <label htmlFor="field-fullName" className={styles.formLabel}>
                Full Name <span className={styles.requiredAsterisk} aria-hidden="true">*</span>
              </label>
              <div className={styles.inputWrapper}>
                <User className={styles.fieldIcon} aria-hidden="true" />
                <input
                  id="field-fullName"
                  name="fullName"
                  type="text"
                  required
                  placeholder="e.g. Priya Sharma"
                  value={formData.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={!!errors.fullName}
                  aria-describedby={errors.fullName ? 'error-fullName' : undefined}
                  className={`${styles.formInput} ${errors.fullName ? styles.inputError : ''}`}
                  disabled={isSubmitting}
                />
              </div>
              {errors.fullName && (
                <p id="error-fullName" className={styles.fieldErrorText} role="alert">
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Field 2: Email */}
            <div className={styles.formGroup}>
              <label htmlFor="field-email" className={styles.formLabel}>
                Email Address <span className={styles.requiredAsterisk} aria-hidden="true">*</span>
              </label>
              <div className={styles.inputWrapper}>
                <Mail className={styles.fieldIcon} aria-hidden="true" />
                <input
                  id="field-email"
                  name="email"
                  type="email"
                  required
                  placeholder="e.g. priya@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'error-email' : undefined}
                  className={`${styles.formInput} ${errors.email ? styles.inputError : ''}`}
                  disabled={isSubmitting}
                />
              </div>
              {errors.email && (
                <p id="error-email" className={styles.fieldErrorText} role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Field 3: WhatsApp No. */}
            <div className={styles.formGroup}>
              <label htmlFor="field-whatsapp" className={styles.formLabel}>
                WhatsApp No. <span className={styles.requiredAsterisk} aria-hidden="true">*</span>
              </label>
              <div className={styles.inputWrapper}>
                <Phone className={styles.fieldIcon} aria-hidden="true" />
                <input
                  id="field-whatsapp"
                  name="whatsapp"
                  type="tel"
                  required
                  placeholder="e.g. +91 98765 43210"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={!!errors.whatsapp}
                  aria-describedby={errors.whatsapp ? 'error-whatsapp' : undefined}
                  className={`${styles.formInput} ${errors.whatsapp ? styles.inputError : ''}`}
                  disabled={isSubmitting}
                />
              </div>
              {errors.whatsapp && (
                <p id="error-whatsapp" className={styles.fieldErrorText} role="alert">
                  {errors.whatsapp}
                </p>
              )}
            </div>

            {/* Field 4: Age */}
            <div className={styles.formGroup}>
              <label htmlFor="field-age" className={styles.formLabel}>
                Age <span className={styles.requiredAsterisk} aria-hidden="true">*</span>
              </label>
              <div className={styles.inputWrapper}>
                <Calendar className={styles.fieldIcon} aria-hidden="true" />
                <input
                  id="field-age"
                  name="age"
                  type="number"
                  min="14"
                  max="99"
                  required
                  placeholder="e.g. 21"
                  value={formData.age}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={!!errors.age}
                  aria-describedby={errors.age ? 'error-age' : undefined}
                  className={`${styles.formInput} ${errors.age ? styles.inputError : ''}`}
                  disabled={isSubmitting}
                />
              </div>
              {errors.age && (
                <p id="error-age" className={styles.fieldErrorText} role="alert">
                  {errors.age}
                </p>
              )}
            </div>

            {/* Field 5: Start Date */}
            <div className={`${styles.formGroup} ${styles.fullWidthGroup}`}>
              <label htmlFor="field-startDate" className={styles.formLabel}>
                When would you like to start the Volunteering?{' '}
                <span className={styles.requiredAsterisk} aria-hidden="true">*</span>
              </label>
              <div className={styles.inputWrapper}>
                <Clock className={styles.fieldIcon} aria-hidden="true" />
                <input
                  id="field-startDate"
                  name="startDate"
                  type="date"
                  required
                  value={formData.startDate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={!!errors.startDate}
                  aria-describedby={errors.startDate ? 'error-startDate' : undefined}
                  className={`${styles.formInput} ${errors.startDate ? styles.inputError : ''}`}
                  disabled={isSubmitting}
                />
              </div>
              {errors.startDate && (
                <p id="error-startDate" className={styles.fieldErrorText} role="alert">
                  {errors.startDate}
                </p>
              )}
            </div>

            {/* Field 6: Statement / Motivation */}
            <div className={`${styles.formGroup} ${styles.fullWidthGroup}`}>
              <label htmlFor="field-reason" className={styles.formLabel}>
                Why do you want to do this Volunteering?{' '}
                <span className={styles.requiredAsterisk} aria-hidden="true">*</span>
              </label>
              <div className={styles.textareaWrapper}>
                <textarea
                  id="field-reason"
                  name="reason"
                  rows={4}
                  required
                  placeholder="Share your background, cause interests (education, healthcare, relief, environment), or specific skills you would like to offer..."
                  value={formData.reason}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={!!errors.reason}
                  aria-describedby={errors.reason ? 'error-reason' : undefined}
                  className={`${styles.formTextarea} ${errors.reason ? styles.inputError : ''}`}
                  disabled={isSubmitting}
                  maxLength={3000}
                />
              </div>
              <div className={styles.textareaMeta}>
                {errors.reason ? (
                  <p id="error-reason" className={styles.fieldErrorText} role="alert">
                    {errors.reason}
                  </p>
                ) : (
                  <span className={styles.helperText}>Min 10 characters</span>
                )}
                <span className={styles.charCount}>{formData.reason.length} / 3000</span>
              </div>
            </div>
          </div>

          <div className={styles.formFooter}>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`${styles.submitBtn} ${isSubmitting ? styles.submitBtnDisabled : ''}`}
              aria-label="Submit Volunteering Application"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin mr-2" aria-hidden="true" />
                  <span>Submitting Application...</span>
                </>
              ) : (
                <>
                  <span>Submit Volunteer Application</span>
                  <Send className="w-4 h-4 ml-2" aria-hidden="true" />
                </>
              )}
            </button>
            <p className={styles.privacyNote}>
              🔒 Your information is confidential and used solely for volunteer onboarding by Raise India Foundation.
            </p>
          </div>
        </form>
      )}
    </div>
  );
};
