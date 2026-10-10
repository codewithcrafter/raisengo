'use client';

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '@/components/ui/Animation/RevealOnScroll';
import styles from './page.module.css';

interface BankDetail {
  id: string;
  name: string;
  logoUrl: string;
  localFallback: string;
  altText: string;
  holderName: string;
  accountNo: string;
  ifscCode: string;
  address: string;
}

const BANK_DATA: BankDetail[] = [
  {
    id: 'axis',
    name: 'Axis Bank',
    logoUrl: 'https://www.raiseindiafoundation.org/assets/img/axis-bank-logo.webp',
    localFallback: '/images/banks/axis-bank-logo.webp',
    altText: 'Axis Bank logo',
    holderName: 'Raise India Foundation',
    accountNo: '916010019605596',
    ifscCode: 'UTIB0000696',
    address: 'Uttam Nagar, New Delhi 110059',
  },
  {
    id: 'kotak',
    name: 'Kotak Mahindra Bank',
    logoUrl: 'https://www.raiseindiafoundation.org/assets/img/Kotak_Mahindra_Bank_logo.webp',
    localFallback: '/images/banks/Kotak_Mahindra_Bank_logo.webp',
    altText: 'Kotak Mahindra Bank logo',
    holderName: 'Raise India Foundation',
    accountNo: '4612861721',
    ifscCode: 'KKBK0004614',
    address: 'Property Bearing No. Thana Road, Najafgarh New Delhi 110043',
  },
  {
    id: 'yes',
    name: 'YES BANK',
    logoUrl: 'https://www.raiseindiafoundation.org/assets/img/yes-bank-logo.webp',
    localFallback: '/images/banks/yes-bank-logo.webp',
    altText: 'YES BANK logo',
    holderName: 'Raise India Foundation',
    accountNo: '052288700000082',
    ifscCode: 'YESB0000522',
    address: 'Janak Puri, New Delhi 110058',
  },
];

export function BankTransferCards() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2200);
  };

  return (
    <section 
      id="bank-transfer" 
      className={styles.bankTransferSection}
      aria-labelledby="bank-transfer-heading"
    >
      <div className={styles.bankSectionHeader}>
        <span className={styles.bankSectionEyebrow}>VERIFIED TRUST ACCOUNTS</span>
        <h2 id="bank-transfer-heading" className={styles.bankSectionTitle}>
          Direct Bank Transfer
        </h2>
        <p className={styles.bankSectionSub}>
          You can also support us through direct bank transfer. Use the following details:
        </p>
      </div>

      <StaggerContainer className={styles.bankCardsGrid}>
        {BANK_DATA.map((bank, idx) => {
          const accCopyKey = `${bank.id}-acc`;
          const ifscCopyKey = `${bank.id}-ifsc`;

          return (
            <StaggerItem key={bank.id} index={idx} className={styles.bankCard}>
              {/* Bank Logo with Natural Proportions and Hover Scaling */}
              <div className={styles.bankLogoWrapper}>
                <img
                  src={bank.logoUrl}
                  alt={bank.altText}
                  className={styles.bankLogo}
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to local copy if remote image fails
                    const target = e.currentTarget;
                    if (target.src !== bank.localFallback) {
                      target.src = bank.localFallback;
                    }
                  }}
                />
              </div>

              {/* Thin Divider */}
              <div className={styles.bankCardDivider} />

              {/* Four Neatly Aligned Account Detail Rows */}
              <div className={styles.bankRowsList}>
                {/* Row 1: A/C Holder Name */}
                <div className={styles.bankDetailRow}>
                  <span className={styles.bankRowLabel}>A/C Holder Name</span>
                  <div className={styles.bankRowValue}>{bank.holderName}</div>
                </div>

                {/* Row 2: A/C No. */}
                <div className={styles.bankDetailRow}>
                  <span className={styles.bankRowLabel}>A/C No.</span>
                  <div className={styles.bankRowValueWrapper}>
                    <span className={styles.bankRowValueMono}>{bank.accountNo}</span>
                    <button
                      type="button"
                      className={styles.btnCopyMini}
                      onClick={() => handleCopy(bank.accountNo, accCopyKey)}
                      aria-label={`Copy account number for ${bank.name}`}
                    >
                      {copiedKey === accCopyKey ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-green-600" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Row 3: IFSC Code */}
                <div className={styles.bankDetailRow}>
                  <span className={styles.bankRowLabel}>IFSC Code</span>
                  <div className={styles.bankRowValueWrapper}>
                    <span className={styles.bankRowValueMono}>{bank.ifscCode}</span>
                    <button
                      type="button"
                      className={styles.btnCopyMini}
                      onClick={() => handleCopy(bank.ifscCode, ifscCopyKey)}
                      aria-label={`Copy IFSC code for ${bank.name}`}
                    >
                      {copiedKey === ifscCopyKey ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-green-600" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Row 4: Address */}
                <div className={styles.bankDetailRow}>
                  <span className={styles.bankRowLabel}>Address</span>
                  <div className={styles.bankAddressValue}>{bank.address}</div>
                </div>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </section>
  );
}
