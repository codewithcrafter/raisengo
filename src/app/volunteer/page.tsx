import React from 'react';
import { Container } from '@/components/ui/Container/Container';
import styles from './page.module.css';

export const metadata = {
  title: 'Volunteer | Raise India Foundation',
  description: 'Join our team of dedicated volunteers and make a real impact on the ground.',
};

export default function VolunteerPage() {
  return (
    <main className={styles.main}>
      <section className={`${styles.hero} full-bleed`}>
        <div className={styles.heroBlob}></div>
        <Container>
          <div className="grid-asymmetrical">
            <div className={styles.heroContent}>
              <div className={styles.eyebrowDecor}>🙌 Get Involved</div>
              <h1 className="statement-text">
                Give your time.<br />
                <span className={styles.highlightText}>Create an impact.</span>
              </h1>
              <p className={styles.heroDescription}>
                Volunteers are the backbone of our operations. Whether you want to teach, help at health camps, or assist with digital operations, there's a place for you here.
              </p>
            </div>
            <div className={styles.heroImageWrapper}>
               <div className={styles.imagePlaceholder}>
                 <span className={styles.imageDoodle}>🎨</span>
               </div>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.formSection}>
        <Container>
          <div className={styles.formContainer}>
            <div className={styles.formHeader}>
              <h2>Volunteer Application</h2>
              <p>Fill out the form below and our team will get in touch with you.</p>
            </div>
            
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Full Name *</label>
                <input type="text" id="name" required placeholder="John Doe" className={styles.input} />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" id="email" required placeholder="john@example.com" className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number *</label>
                  <input type="tel" id="phone" required placeholder="+91 98765 43210" className={styles.input} />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="city">City / Location *</label>
                <input type="text" id="city" required placeholder="New Delhi" className={styles.input} />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="skills">Skills & Expertise</label>
                <input type="text" id="skills" placeholder="e.g. Teaching, Photography, Web Design" className={styles.input} />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="availability">Availability</label>
                <select id="availability" className={styles.select}>
                  <option value="weekends">Weekends</option>
                  <option value="weekdays">Weekdays</option>
                  <option value="flexible">Flexible / Remote</option>
                  <option value="full-time">Full-time internship</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Why do you want to volunteer with us?</label>
                <textarea id="message" rows={5} placeholder="Tell us a bit about your motivation..." className={styles.textarea}></textarea>
              </div>

              <button type="submit" className={styles.submitBtn}>
                Submit Application
              </button>
            </form>
          </div>
        </Container>
      </section>
    </main>
  );
}
