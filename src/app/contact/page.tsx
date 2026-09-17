import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container/Container';
import { FinalCTA } from '@/components/sections/FinalCTA/FinalCTA';
import { organization } from '@/lib/content-data';
import { ContactForm } from './ContactForm';
import styles from './page.module.css';

export const metadata = {
  title: 'Contact Us | Raise India Foundation',
  description: 'Reach out to Raise India Foundation. Address: Uttam Nagar, New Delhi. Phone: +91-11-41254474. Email: care@raiseindiafoundation.org.',
};

export default function ContactPage() {
  return (
    <main className={styles.main}>
      {/* Hero */}
      <section className={styles.hero}>
        <Container>
          <span className={styles.eyebrow}>GET IN TOUCH</span>
          <h1 className={styles.title}>
            Contact <span className={styles.highlightText}>Raise India Foundation</span>
          </h1>
          <p className={styles.heroDesc}>
            Whether you want to partner on a CSR initiative, sponsor a child's cardiac surgery, enroll a child at Shikshalaya, or volunteer on the ground — we would love to hear from you.
          </p>
        </Container>
      </section>

      {/* Contact Grid */}
      <section className={styles.contactSection}>
        <Container>
          <div className={styles.contactGrid}>
            {/* Left Contact Details */}
            <div className={styles.infoColumn}>
              {/* Address */}
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>📍</div>
                <div className={styles.infoContent}>
                  <h3>Registered Head Office</h3>
                  <p>
                    {organization.address.line1},<br />
                    {organization.address.line2},<br />
                    {organization.address.city} – {organization.address.pincode}, {organization.address.country}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>📞</div>
                <div className={styles.infoContent}>
                  <h3>Official Helpline</h3>
                  <p>
                    <a href={`tel:${organization.phone.replace(/[^0-9+]/g, '')}`} className={styles.infoLink}>
                      {organization.phone}
                    </a>
                  </p>
                  <p style={{ fontSize: '13px', color: '#814CBA', marginTop: '4px' }}>
                    Mon – Sat: 10:00 AM – 6:00 PM IST
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>✉</div>
                <div className={styles.infoContent}>
                  <h3>General &amp; Donor Inquiries</h3>
                  <p>
                    <a href={`mailto:${organization.email}`} className={styles.infoLink}>
                      {organization.email}
                    </a>
                  </p>
                  <p style={{ fontSize: '13px', color: '#814CBA', marginTop: '4px' }}>
                    Typically responds within 24 hours
                  </p>
                </div>
              </div>

              {/* Social Connect */}
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>🌐</div>
                <div className={styles.infoContent}>
                  <h3>Connect Across Channels</h3>
                  <div style={{ display: 'flex', gap: '16px', marginTop: '8px', flexWrap: 'wrap' }}>
                    <a href={organization.social.facebook} target="_blank" rel="noopener noreferrer" className={styles.infoLink}>
                      Facebook
                    </a>
                    <span>•</span>
                    <a href={organization.social.instagram} target="_blank" rel="noopener noreferrer" className={styles.infoLink}>
                      Instagram
                    </a>
                    <span>•</span>
                    <a href={organization.social.youtube} target="_blank" rel="noopener noreferrer" className={styles.infoLink}>
                      YouTube
                    </a>
                    <span>•</span>
                    <a href={organization.social.twitter} target="_blank" rel="noopener noreferrer" className={styles.infoLink}>
                      Twitter/X
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <ContactForm />
          </div>
        </Container>
      </section>

      <FinalCTA />
    </main>
  );
}
