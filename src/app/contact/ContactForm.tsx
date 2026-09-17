'use client';

import React, { useState } from 'react';
import styles from './page.module.css';

export const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.formCard}>
      <h2>Send Us a Message</h2>
      <p>Have a question about our programs, partnership, or want to volunteer? Fill out the form below.</p>

      {submitted ? (
        <div className={styles.successMessage}>
          ✓ Thank you! Your message has been received. Our team will get back to you at{' '}
          <strong>{formData.email || 'your email'}</strong> within 24–48 hours.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Full Name *
              </label>
              <input
                id="name"
                type="text"
                required
                className={styles.input}
                placeholder="Your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                required
                className={styles.input}
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="phone" className={styles.label}>
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                className={styles.input}
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.label}>
                Area of Interest
              </label>
              <select
                id="subject"
                className={styles.select}
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              >
                <option value="General Inquiry">General Inquiry</option>
                <option value="Corporate CSR Partnership">Corporate CSR Partnership</option>
                <option value="Mission Little Heartbeats Support">Mission Little Heartbeats Support</option>
                <option value="Shikshalaya Education Centers">Shikshalaya Education Centers</option>
                <option value="Volunteering & Internship">Volunteering &amp; Internship</option>
                <option value="Donation & 80G Receipt">Donation &amp; 80G Receipt</option>
              </select>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>
              Your Message *
            </label>
            <textarea
              id="message"
              required
              className={styles.textarea}
              placeholder="How can we assist you or collaborate?"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <button type="submit" className={styles.submitBtn}>
            <span>Submit Message</span>
            <span>→</span>
          </button>
        </form>
      )}
    </div>
  );
};
