import React from 'react';
import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container/Container';
import { organization } from '@/lib/content-data';
import { ContactForm } from './ContactForm';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Contact Us | Raise India Foundation',
  description:
    "We'd love to hear from you. Reach Raise India Foundation at our Registered Head Office in Uttam Nagar, New Delhi, via phone at +91-11-41254474, or email at care@raiseindiafoundation.org.",
};

export default function ContactPage() {
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${organization.address.line1}, ${organization.address.line2}, ${organization.address.city} ${organization.address.pincode}`
  )}`;

  return (
    <main className={styles.contactMain}>
      {/* ─────────────────────────────────────────────────────────
          1. COMPACT CONTACT INTRO
          ───────────────────────────────────────────────────────── */}
      <section className={styles.introSection} aria-labelledby="contact-heading">
        <Container>
          <div className={styles.introContent}>
            <span className={styles.introEyebrow}>CONTACT US</span>
            <h1 id="contact-heading" className={styles.introTitle}>
              Let&apos;s start a <span className={styles.titleHighlight}>conversation.</span>
            </h1>
            <p className={styles.introDesc}>
              Whether you want to connect with Raise India Foundation, explore a partnership, volunteer, support our work, or simply ask a question, we&apos;re here to listen.
            </p>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────
          2. CONTACT FORM SECTION (Directly below Intro)
          ───────────────────────────────────────────────────────── */}
      <section className={styles.formSection} aria-labelledby="form-heading">
        <Container>
          <div className={styles.formLayout}>
            {/* Left Context */}
            <div className={styles.formContextCol}>
              <span className={styles.contextEyebrow}>LET&apos;S TALK</span>
              <h2 id="form-heading" className={styles.contextHeading}>
                Have a question, partnership idea, or project enquiry?
              </h2>
              <p className={styles.contextParagraph}>
                Our team is here to assist. Fill out the form and we will review your message directly.
              </p>
              <div className={styles.contextDetailsList}>
                <div className={styles.contextDetailItem}>
                  <span className={styles.detailCheck} aria-hidden="true">✓</span>
                  <span>Direct reply from foundation coordinators</span>
                </div>
                <div className={styles.contextDetailItem}>
                  <span className={styles.detailCheck} aria-hidden="true">✓</span>
                  <span>Assistance for CSR, donations, 80G tax receipts &amp; volunteering</span>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className={styles.formMainCol}>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────
          3. CONTACT INFORMATION (Editorial 3-Column Panel - Bridge between Form & Map)
          ───────────────────────────────────────────────────────── */}
      <section className={styles.infoSection} aria-labelledby="channels-heading">
        <Container>
          <div className={styles.infoSectionHeader}>
            <div className={styles.headerTitleRow}>
              <span className={styles.sectionSmallEyebrow}>DIRECT CHANNELS</span>
              <div className={styles.headerAccentLine} aria-hidden="true" />
            </div>
            <h2 id="channels-heading" className={styles.sectionHeading}>
              Contact Information
            </h2>
          </div>

          <div className={styles.threeColumnPanel}>
            {/* Column 01: WRITE TO US */}
            <div className={styles.infoCol}>
              <div className={styles.colTopRow}>
                <span className={styles.colNumber}>01</span>
                <div className={styles.colIconWrap} aria-hidden="true">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
              </div>

              <span className={styles.colEyebrow}>WRITE TO US</span>

              <div className={styles.colValueWrapper}>
                <a
                  href={`mailto:${organization.email}`}
                  className={styles.colLinkValue}
                >
                  {organization.email}
                </a>
              </div>

              <p className={styles.colSubtext}>
                For partnerships, donor queries, volunteering, and general enquiries.
              </p>

              <div className={styles.colActionWrapper}>
                <a
                  href={`mailto:${organization.email}`}
                  className={styles.colActionLink}
                >
                  <span>Send an Email</span>
                  <span className={styles.colActionArrow} aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            {/* Column 02: CONTACT US AT */}
            <div className={styles.infoCol}>
              <div className={styles.colTopRow}>
                <span className={styles.colNumber}>02</span>
                <div className={styles.colIconWrap} aria-hidden="true">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
              </div>

              <span className={styles.colEyebrow}>CONTACT US AT</span>

              <div className={styles.colValueWrapper}>
                <a
                  href={`tel:${organization.phone.replace(/[^0-9+]/g, '')}`}
                  className={styles.colLinkValue}
                >
                  {organization.phone}
                </a>
              </div>

              <p className={styles.colSubtext}>
                Available Monday through Saturday, 10:00 AM – 6:00 PM IST.
              </p>

              <div className={styles.colActionWrapper}>
                <a
                  href={`tel:${organization.phone.replace(/[^0-9+]/g, '')}`}
                  className={styles.colActionLink}
                >
                  <span>Call Foundation Office</span>
                  <span className={styles.colActionArrow} aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            {/* Column 03: REACH US */}
            <div className={styles.infoCol}>
              <div className={styles.colTopRow}>
                <span className={styles.colNumber}>03</span>
                <div className={styles.colIconWrap} aria-hidden="true">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
              </div>

              <span className={styles.colEyebrow}>REACH US</span>

              <div className={styles.colValueWrapper}>
                <address className={styles.colAddressValue}>
                  {organization.address.line1},<br />
                  {organization.address.line2},<br />
                  {organization.address.city} – {organization.address.pincode}
                </address>
              </div>

              <p className={styles.colSubtext}>
                Near Uttam Nagar Metro Stations (Delhi Metro Blue Line).
              </p>

              <div className={styles.colActionWrapper}>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.colActionLink}
                >
                  <span>Get Directions</span>
                  <span className={styles.colActionArrow} aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────
          4. MAP / LOCATION SECTION (Below Contact Information)
          ───────────────────────────────────────────────────────── */}
      <section className={styles.mapSection} aria-label="Office Location Map">
        <Container>
          <div className={styles.mapSectionHeader}>
            <span className={styles.sectionSmallEyebrow}>HEAD OFFICE</span>
            <h2 className={styles.mapTitle}>Find Us in New Delhi</h2>
          </div>

          <div className={styles.mapCanvas}>
            <iframe
              title="Raise India Foundation Registered Office Location"
              src="https://maps.google.com/maps?q=B-16,+Ramdutt+Enclave,+Uttam+Nagar,+New+Delhi+110059&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className={styles.mapIframe}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />

            {/* Floating Location Information Badge */}
            <div className={styles.floatingLocationBox}>
              <span className={styles.floatingBoxEyebrow}>VISIT US</span>
              <h3 className={styles.floatingBoxTitle}>Raise India Foundation</h3>
              <address className={styles.floatingBoxAddress}>
                {organization.address.line1},<br />
                {organization.address.line2},<br />
                {organization.address.city} – {organization.address.pincode}
              </address>
              <div className={styles.floatingBoxAction}>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.floatingDirectionsLink}
                >
                  <span>GET DIRECTIONS</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
