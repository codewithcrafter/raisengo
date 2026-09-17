'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container/Container';
import styles from './page.module.css';

export default function DonatePage() {
  const [step, setStep] = useState(1);
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [amount, setAmount] = useState<string>('2500');
  const [customAmount, setCustomAmount] = useState<string>('');

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setStep((prev) => Math.min(prev + 1, 3));
  };

  const handlePrevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleAmountSelect = (val: string) => {
    setAmount(val);
    setCustomAmount('');
  };

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <Container>
          <div className="grid-asymmetrical">
            <div className={styles.heroContent}>
              <div className={styles.eyebrowIcon}>💖</div>
              <h1 className="statement-text">
                Your generosity is the foundation of their future.
              </h1>
              <p className={styles.heroDescription}>
                Every contribution helps us reach further, bringing education, health, and hope to those who need it most. 
                All donations are eligible for 80G tax exemption.
              </p>
            </div>
            <div className={styles.heroImageWrapper}>
              <div className={styles.imagePlaceholder}></div>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.donateSection}>
        <Container>
          <div className={styles.donationContainer}>
            {/* Step Indicators */}
            <div className={styles.stepIndicator}>
              <div className={`${styles.step} ${step >= 1 ? styles.stepActive : ''}`}>1. Amount</div>
              <div className={`${styles.stepLine} ${step >= 2 ? styles.stepLineActive : ''}`}></div>
              <div className={`${styles.step} ${step >= 2 ? styles.stepActive : ''}`}>2. Details</div>
              <div className={`${styles.stepLine} ${step >= 3 ? styles.stepLineActive : ''}`}></div>
              <div className={`${styles.step} ${step >= 3 ? styles.stepActive : ''}`}>3. Payment</div>
            </div>

            {/* Step 1: Amount Selection */}
            {step === 1 && (
              <div className={styles.formStep}>
                <h2 className={styles.stepTitle}>Choose your donation amount</h2>
                
                <div className={styles.typeSelector}>
                  <button 
                    className={`${styles.typeBtn} ${donationType === 'one-time' ? styles.typeBtnActive : ''}`}
                    onClick={() => setDonationType('one-time')}
                  >
                    One Time
                  </button>
                  <button 
                    className={`${styles.typeBtn} ${donationType === 'monthly' ? styles.typeBtnActive : ''}`}
                    onClick={() => setDonationType('monthly')}
                  >
                    Monthly
                  </button>
                </div>

                <div className={styles.amountGrid}>
                  {['1000', '2500', '5000', '10000', '25000', 'custom'].map((val) => (
                    <button
                      key={val}
                      className={`${styles.amountBtn} ${amount === val ? styles.amountBtnActive : ''}`}
                      onClick={() => handleAmountSelect(val)}
                    >
                      {val === 'custom' ? 'Other' : `₹${val}`}
                    </button>
                  ))}
                </div>

                {amount === 'custom' && (
                  <div className={styles.customAmountGroup}>
                    <span className={styles.currencySymbol}>₹</span>
                    <input 
                      type="number" 
                      className={styles.customAmountInput}
                      placeholder="Enter amount"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      min="100"
                    />
                  </div>
                )}

                <button 
                  className={styles.nextBtn} 
                  onClick={handleNextStep}
                  disabled={amount === 'custom' && (!customAmount || parseInt(customAmount) < 100)}
                >
                  Continue &rarr;
                </button>
              </div>
            )}

            {/* Step 2: User Details */}
            {step === 2 && (
              <form onSubmit={handleNextStep} className={styles.formStep}>
                <h2 className={styles.stepTitle}>Your Details</h2>
                
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label>First Name</label>
                    <input type="text" required className={styles.input} />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Last Name</label>
                    <input type="text" required className={styles.input} />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Email Address</label>
                    <input type="email" required className={styles.input} />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Phone Number</label>
                    <input type="tel" required className={styles.input} />
                  </div>
                  <div className={styles.formGroupFull}>
                    <label>PAN Number (Required for 80G Tax Exemption)</label>
                    <input type="text" className={styles.input} style={{textTransform: 'uppercase'}} />
                  </div>
                </div>

                <div className={styles.actionRow}>
                  <button type="button" onClick={handlePrevStep} className={styles.prevBtn}>Back</button>
                  <button type="submit" className={styles.nextBtn}>Proceed to Payment</button>
                </div>
              </form>
            )}

            {/* Step 3: Payment UI Placeholder */}
            {step === 3 && (
              <div className={styles.formStep}>
                <h2 className={styles.stepTitle}>Complete Payment</h2>
                <div className={styles.paymentSummary}>
                  <p>You are donating:</p>
                  <h3>₹{amount === 'custom' ? customAmount : amount} {donationType === 'monthly' ? '/ month' : ''}</h3>
                </div>
                
                <div className={styles.paymentPlaceholder}>
                  <p>Payment Gateway UI will render here.</p>
                  <p className={styles.smallText}>(Integration pending actual payment provider)</p>
                </div>

                <div className={styles.actionRow}>
                  <button type="button" onClick={handlePrevStep} className={styles.prevBtn}>Back</button>
                  <button type="button" className={styles.nextBtn} disabled>Pay Now</button>
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>
    </main>
  );
}
