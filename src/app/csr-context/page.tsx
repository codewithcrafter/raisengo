import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container/Container';

export default function CsrContextPage() {
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '70px', minHeight: '60vh' }}>
      <Container>
        <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', color: '#E0679D', textTransform: 'uppercase' }}>
          CORPORATE PARTNERSHIPS
        </span>
        <h1 style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 700, color: '#2D1145', marginTop: '10px', marginBottom: '14px', letterSpacing: '-0.02em' }}>
          CSR Context &amp; Corporate Social Responsibility
        </h1>
        <p style={{ fontSize: '16px', color: '#564861', maxWidth: '640px', lineHeight: 1.6, marginBottom: '28px' }}>
          Partner with Raise India Foundation to create sustainable social impact through customized CSR initiatives, employee engagement, and corporate philanthropy.
        </p>
        <Link 
          href="/partners"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 20px',
            minHeight: '40px',
            background: 'linear-gradient(135deg, #E0679D 0%, #814CBA 100%)',
            color: '#FFFFFF',
            fontWeight: 600,
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '14px',
            boxShadow: '0 2px 8px rgba(224, 103, 157, 0.25)',
          }}
        >
          Explore Corporate Partners →
        </Link>
      </Container>
    </div>
  );
}
