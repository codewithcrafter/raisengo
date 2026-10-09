import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Donate | Raise India Foundation',
  description:
    'Sponsor a child, support Shikshalaya education, or fund Chuppi Todo dignity kits. Donations are eligible for 50% tax exemption under section 80G.',
};

export default function DonateLayout({ children }: { children: React.ReactNode }) {
  return children;
}
