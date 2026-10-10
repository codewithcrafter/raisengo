'use client';

import React from 'react';
import styles from './FloatingWhatsApp.module.css';

interface FloatingWhatsAppProps {
  phoneNumber?: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  phoneNumber = '919311726817',
}) => {
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=${phoneNumber}&type=phone_number&app_absent=0`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.floatingWhatsApp}
      aria-label="Contact us on WhatsApp"
      title="Contact us on WhatsApp"
    >
      {/* Official WhatsApp SVG Icon */}
      <svg
        className={styles.whatsappIcon}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.73C7 10.96 7.9 12.14 8.02 12.31C8.15 12.47 9.77 15.08 12.3 16.08C14.4 16.92 14.83 16.75 15.28 16.71C15.74 16.67 16.75 16.11 16.96 15.52C17.17 14.93 17.17 14.43 17.11 14.32C17.04 14.21 16.88 14.15 16.63 14.03C16.39 13.9 15.19 13.31 14.96 13.23C14.74 13.15 14.58 13.11 14.41 13.35C14.25 13.6 13.78 14.15 13.63 14.32C13.49 14.49 13.34 14.51 13.1 14.38C12.85 14.26 11.82 13.92 10.6 12.84C9.65 11.99 9.01 10.95 8.89 10.74C8.76 10.53 8.87 10.42 9 10.3C9.11 10.19 9.24 10.01 9.37 9.87C9.49 9.72 9.53 9.62 9.61 9.45C9.7 9.29 9.65 9.15 9.59 9.02C9.53 8.9 9.06 7.74 8.86 7.27C8.67 6.8 8.47 6.87 8.33 6.86C8.2 6.85 8.04 6.85 7.87 6.85L8.53 7.33Z"/>
      </svg>
      <span className={styles.pulseRing} aria-hidden="true" />
    </a>
  );
};
