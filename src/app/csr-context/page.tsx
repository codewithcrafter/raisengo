import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container/Container';

export default function CsrContextPage() {
  return (
    <div style={{ paddingTop: '140px', paddingBottom: '100px', minHeight: '70vh' }}>
      <Container>
        <span style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.14em', color: '#E0679D', textTransform: 'uppercase' }}>
          CORPORATE PARTNERSHIPS
        </span>
        <h1 style={{ fontSize: '42px', fontWeight: 800, color: '#2D1145', marginTop: '12px', marginBottom: '20px' }}>
          CSR Context & Corporate Social Responsibility
        </h1>
        <p style={{ fontSize: '18px', color: '#564861', maxWidth: '680px', lineHeight: 1.6, marginBottom: '32px' }}>
          Partner with Raise India Foundation to create sustainable social impact through customized CSR initiatives, employee engagement, and corporate philanthropy.
        </p>
        <Link 
          href="/partners"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 24px',
            background: 'linear-gradient(135deg, #E0679D 0%, #814CBA 100%)',
            color: '#FFFFFF',
            fontWeight: 700,
            borderRadius: '999px',
            textDecoration: 'none',
            fontSize: '14px',
          }}
        >
          Explore Corporate Partners →
        </Link>
      </Container>
    </div>
  );
}
