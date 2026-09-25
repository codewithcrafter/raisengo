'use client';

import React, { useState } from 'react';
import styles from './page.module.css';

interface FormData {
  name: string;
  email: string;
  mobile: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  mobile?: string;
  subject?: string;
  message?: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    mobile: '',
    subject: 'General Enquiry',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [serverMessage, setServerMessage] = useState<string>('');

  const validate = (): boolean => {
    const errors: FormErrors = {};

    if (!formData.name.trim()) {
      errors.name = 'Please enter your full name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'Please enter your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }

    const cleanMobile = formData.mobile.replace(/[\s\-\(\)\+]/g, '');
    if (!formData.mobile.trim()) {
      errors.mobile = 'Please enter your mobile number.';
    } else if (cleanMobile.length < 10 || cleanMobile.length > 15 || !/^\d+$/.test(cleanMobile)) {
      errors.mobile = 'Please enter a valid 10-digit mobile number.';
    }

    if (!formData.subject.trim()) {
      errors.subject = 'Please choose a subject.';
    }

    if (!formData.message.trim()) {
      errors.message = 'Please share your message.';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Please provide a message of at least 10 characters.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) {
      setStatus('error');
      setServerMessage('Please complete the highlighted fields below.');
      return;
    }

    setStatus('loading');
    setServerMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setServerMessage(data.message || 'Thank you for reaching out. Your message has been received.');
      } else {
        setStatus('error');
        if (data.errors) {
          setFormErrors(data.errors);
          setServerMessage('Please check the indicated fields and try again.');
        } else {
          setServerMessage(data.message || 'Unable to submit your message. Please try again.');
        }
      }
    } catch {
      setStatus('error');
      setServerMessage('Network error. Please check your connection or contact us directly.');
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      mobile: '',
      subject: 'General Enquiry',
      message: '',
    });
    setFormErrors({});
    setStatus('idle');
    setServerMessage('');
  };

  return (
    <div className={styles.formCard} id="contact-form">
      {status === 'success' ? (
        <div className={styles.successCard} role="status" aria-live="polite">
          <div className={styles.successIconBadge}>
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3 className={styles.successTitle}>Thank you for reaching out.</h3>
          <p className={styles.successDesc}>
            Your message has been received. Our team will review your enquiry for{' '}
            <strong className={styles.successEmail}>{formData.email}</strong>.
          </p>
          <button type="button" onClick={handleReset} className={styles.resetButton}>
            <span>Send Another Message</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.formElement} noValidate>
          {status === 'error' && serverMessage && (
            <div className={styles.errorAlert} role="alert">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" x2="12" y1="8" y2="12" />
                <line x1="12" x2="12.01" y1="16" y2="16" />
              </svg>
              <span>{serverMessage}</span>
            </div>
          )}

          <div className={styles.formRow}>
            {/* Full Name */}
            <div className={styles.inputWrapper}>
              <label htmlFor="name" className={styles.fieldLabel}>
                Full Name <span className={styles.requiredAsterisk}>*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                disabled={status === 'loading'}
                className={`${styles.textInput} ${formErrors.name ? styles.inputHasError : ''}`}
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                aria-invalid={Boolean(formErrors.name)}
                aria-describedby={formErrors.name ? 'name-error' : undefined}
              />
              {formErrors.name && (
                <span id="name-error" className={styles.errorMessage}>
                  {formErrors.name}
                </span>
              )}
            </div>

            {/* Email Address */}
            <div className={styles.inputWrapper}>
              <label htmlFor="email" className={styles.fieldLabel}>
                Email Address <span className={styles.requiredAsterisk}>*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                disabled={status === 'loading'}
                className={`${styles.textInput} ${formErrors.email ? styles.inputHasError : ''}`}
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
                aria-invalid={Boolean(formErrors.email)}
                aria-describedby={formErrors.email ? 'email-error' : undefined}
              />
              {formErrors.email && (
                <span id="email-error" className={styles.errorMessage}>
                  {formErrors.email}
                </span>
              )}
            </div>
          </div>

          <div className={styles.formRow}>
            {/* Mobile */}
            <div className={styles.inputWrapper}>
              <label htmlFor="mobile" className={styles.fieldLabel}>
                Mobile <span className={styles.requiredAsterisk}>*</span>
              </label>
              <input
                id="mobile"
                name="mobile"
                type="tel"
                required
                autoComplete="tel"
                disabled={status === 'loading'}
                className={`${styles.textInput} ${formErrors.mobile ? styles.inputHasError : ''}`}
                placeholder="+91 98765 43210"
                value={formData.mobile}
                onChange={handleChange}
                aria-invalid={Boolean(formErrors.mobile)}
                aria-describedby={formErrors.mobile ? 'mobile-error' : undefined}
              />
              {formErrors.mobile && (
                <span id="mobile-error" className={styles.errorMessage}>
                  {formErrors.mobile}
                </span>
              )}
            </div>

            {/* Subject */}
            <div className={styles.inputWrapper}>
              <label htmlFor="subject" className={styles.fieldLabel}>
                Subject <span className={styles.requiredAsterisk}>*</span>
              </label>
              <div className={styles.selectContainer}>
                <select
                  id="subject"
                  name="subject"
                  required
                  disabled={status === 'loading'}
                  className={`${styles.selectInput} ${formErrors.subject ? styles.inputHasError : ''}`}
                  value={formData.subject}
                  onChange={handleChange}
                  aria-invalid={Boolean(formErrors.subject)}
                  aria-describedby={formErrors.subject ? 'subject-error' : undefined}
                >
                  <option value="General Enquiry">General Enquiry</option>
                  <option value="Corporate CSR Partnership">Corporate CSR Partnership</option>
                  <option value="Volunteering & Internship">Volunteering &amp; Internship</option>
                  <option value="Donations & 80G Tax Exemption">Donations &amp; 80G Tax Exemption</option>
                  <option value="Mission Little Heartbeats Support">Mission Little Heartbeats Support</option>
                  <option value="Shikshalaya Education Centers">Shikshalaya Education Centers</option>
                  <option value="Chuppi Todo Menstrual Hygiene Drive">Chuppi Todo Menstrual Hygiene</option>
                </select>
                <span className={styles.selectArrow} aria-hidden="true">
                  ▾
                </span>
              </div>
              {formErrors.subject && (
                <span id="subject-error" className={styles.errorMessage}>
                  {formErrors.subject}
                </span>
              )}
            </div>
          </div>

          {/* Message */}
          <div className={styles.inputWrapper}>
            <label htmlFor="message" className={styles.fieldLabel}>
              Message <span className={styles.requiredAsterisk}>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              disabled={status === 'loading'}
              className={`${styles.textareaInput} ${formErrors.message ? styles.inputHasError : ''}`}
              placeholder="How can we assist you or collaborate?"
              value={formData.message}
              onChange={handleChange}
              aria-invalid={Boolean(formErrors.message)}
              aria-describedby={formErrors.message ? 'message-error' : undefined}
            />
            {formErrors.message && (
              <span id="message-error" className={styles.errorMessage}>
                {formErrors.message}
              </span>
            )}
          </div>

          {/* Form Action */}
          <div className={styles.formActionRow}>
            <button
              type="submit"
              disabled={status === 'loading'}
              className={styles.sendButton}
            >
              {status === 'loading' ? (
                <>
                  <span className={styles.buttonSpinner} aria-hidden="true" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <span className={styles.btnArrowIcon} aria-hidden="true">
                    →
                  </span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
