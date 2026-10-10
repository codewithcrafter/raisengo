'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { QrCode, X, ZoomIn, CheckCircle2 } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '@/components/ui/Animation/RevealOnScroll';
import styles from './page.module.css';

interface QrCardData {
  id: string;
  imageSrc: string;
  altText: string;
  caption: string;
  supportingLabel: string;
  badge: string;
}

const QR_ITEMS: QrCardData[] = [
  {
    id: 'rif-upi',
    imageSrc: '/images/qr/raise-india-donation-qr.webp',
    altText: 'Raise India Foundation UPI QR Code - Scan with Paytm, GPay, PhonePe, BHIM',
    caption: 'Raise India Foundation',
    supportingLabel: 'Scan to Pay',
    badge: 'All UPI Apps Supported',
  },
  {
    id: 'paytm-qr',
    imageSrc: '/images/qr/raise-india-paytm-qr.webp',
    altText: 'Paytm QR Code for Raise India Foundation - 9311726817',
    caption: 'Paytm QR Code',
    supportingLabel: 'Scan to Pay',
    badge: 'Paytm Accepted Here',
  },
];

export function QrSection() {
  const [activeModalImg, setActiveModalImg] = useState<QrCardData | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalImg(null);
      }
    };
    if (activeModalImg) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeModalImg]);

  return (
    <section 
      id="qr-payments" 
      className={styles.qrSection}
      aria-labelledby="qr-section-heading"
    >
      {/* Restrained Purple/Pink Accent & Header */}
      <div className={styles.qrHeader}>
        <div className={styles.qrEyebrowWrapper}>
          <span className={styles.qrEyebrow}>
            <QrCode className="w-3.5 h-3.5" />
            <span>INSTANT UPI TRANSFER</span>
          </span>
        </div>

        <h2 id="qr-section-heading" className={styles.qrTitle}>
          Scan &amp; Pay
        </h2>

        <p className={styles.qrSubtitle}>
          Prefer UPI or QR payments? Scan one of the codes below using your supported payment app.
        </p>
      </div>

      {/* Two Balanced QR Cards Side by Side on Desktop */}
      <StaggerContainer className={styles.qrCardsGrid}>
        {QR_ITEMS.map((item, idx) => (
          <StaggerItem
            key={item.id}
            index={idx}
            className={styles.qrCard}
            onClick={() => setActiveModalImg(item)}
            role="button"
            tabIndex={0}
            onKeyDown={(e: React.KeyboardEvent) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setActiveModalImg(item);
              }
            }}
            aria-label={`View enlarged ${item.caption} for easy scanning`}
          >
            {/* Top Supporting Label & Badge */}
            <div className={styles.qrCardTopRow}>
              <span className={styles.qrSupportingLabel}>{item.supportingLabel}</span>
              <span className={styles.qrBadgePill}>{item.badge}</span>
            </div>

            {/* Complete, Uncropped QR Image Container */}
            <div className={styles.qrImageFrame}>
              <Image
                src={item.imageSrc}
                alt={item.altText}
                width={380}
                height={520}
                priority
                className={styles.qrImage}
              />
              <div className={styles.qrZoomHint}>
                <ZoomIn className="w-4 h-4" />
                <span>Click to Enlarge</span>
              </div>
            </div>

            {/* Bottom Caption & Verification */}
            <div className={styles.qrCardFooter}>
              <h3 className={styles.qrCaption}>{item.caption}</h3>
              <div className={styles.qrTrustNote}>
                <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                <span>Verified Public Trust UPI</span>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Supportive Notice for 80G Receipt */}
      <div className={styles.qrNoticeBanner}>
        <span className={styles.qrNoticeText}>
          <strong>Tax Exemption Note:</strong> After completing your UPI transfer, please email your transaction ID / screenshot along with your PAN to{' '}
          <a href="mailto:care@raiseindiafoundation.org" className="underline font-bold text-[#6A2C91]">
            care@raiseindiafoundation.org
          </a>
          . Your verified Section 80G certificate will be dispatched within 48 hours.
        </span>
      </div>

      {/* Accessible Lightbox Modal */}
      {activeModalImg && (
        <div 
          className={styles.modalBackdrop}
          onClick={() => setActiveModalImg(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Enlarged ${activeModalImg.caption}`}
        >
          <div 
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <div>
                <h4 className={styles.modalTitle}>{activeModalImg.caption}</h4>
                <p className={styles.modalSub}>Scan using Google Pay, PhonePe, Paytm, or BHIM</p>
              </div>
              <button
                type="button"
                className={styles.modalCloseBtn}
                onClick={() => setActiveModalImg(null)}
                aria-label="Close enlarged QR code"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className={styles.modalImageWrapper}>
              <Image
                src={activeModalImg.imageSrc}
                alt={activeModalImg.altText}
                width={480}
                height={660}
                className={styles.modalImage}
              />
            </div>

            <p className={styles.modalHint}>
              Point your phone camera or UPI scanner at the QR code above.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
