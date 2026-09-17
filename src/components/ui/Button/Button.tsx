"use client";

import React, { useState, useEffect } from 'react';
import styles from './Button.module.css';

// Custom Ripple Component for major buttons
const Ripple = ({ isRippling, onCompleted }: { isRippling: boolean, onCompleted: () => void }) => {
  useEffect(() => {
    if (isRippling) {
      const timer = setTimeout(onCompleted, 400); // 400ms duration
      return () => clearTimeout(timer);
    }
  }, [isRippling, onCompleted]);

  if (!isRippling) return null;
  return <span className={styles.ripple} />;
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', fullWidth = false, className = '', children, ...props }, ref) => {
    const [isRippling, setIsRippling] = useState(false);
    
    // Only apply ripple to primary/secondary
    const hasRipple = variant === 'primary' || variant === 'secondary';

    const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (hasRipple) setIsRippling(true);
      if (props.onMouseDown) props.onMouseDown(e);
    };

    const classNames = [
      styles.button,
      styles[variant],
      styles[size],
      fullWidth ? styles.fullWidth : '',
      className,
    ].filter(Boolean).join(' ');

    return (
      <button 
        ref={ref} 
        className={classNames} 
        {...props} 
        onMouseDown={handleMouseDown}
      >
        <span className={styles.content}>{children}</span>
        {hasRipple && <Ripple isRippling={isRippling} onCompleted={() => setIsRippling(false)} />}
      </button>
    );
  }
);

Button.displayName = 'Button';
