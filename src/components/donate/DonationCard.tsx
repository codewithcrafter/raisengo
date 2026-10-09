'use client';

import React from 'react';

export type CardTheme = 'red' | 'green' | 'purple';

interface DonationCardProps {
  id: string;
  theme: CardTheme;
  title: string;
  icon?: React.ReactNode;
  badge?: string;
  children: React.ReactNode;
}

export const DonationCard: React.FC<DonationCardProps> = ({
  id,
  theme,
  title,
  icon,
  badge,
  children,
}) => {
  const themeStyles = {
    red: {
      card: 'border-rose-200 bg-[#FFF5F7] shadow-rose-950/5',
      title: 'text-stone-900',
      badge: 'bg-rose-100 text-brand-red border-rose-200',
    },
    green: {
      card: 'border-emerald-200 bg-[#F0FDF4] shadow-emerald-950/5',
      title: 'text-stone-900',
      badge: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    },
    purple: {
      card: 'border-purple-200 bg-[#FAF5FF] shadow-purple-950/5',
      title: 'text-stone-900',
      badge: 'bg-purple-100 text-purple-800 border-purple-200',
    },
  }[theme];

  return (
    <article
      id={id}
      className={`rounded-3xl border p-5 sm:p-7 lg:p-9 shadow-lg transition-shadow hover:shadow-xl ${themeStyles.card}`}
    >
      <header className="mb-6 sm:mb-8">
        {badge && (
          <span
            className={`inline-block mb-2 rounded-full border px-3 py-0.5 text-xs font-semibold tracking-wide uppercase ${themeStyles.badge}`}
          >
            {badge}
          </span>
        )}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {icon && <div className="shrink-0">{icon}</div>}
          <h2 className={`text-xl font-bold tracking-tight sm:text-2xl lg:text-[1.65rem] ${themeStyles.title}`}>
            {title}
          </h2>
        </div>
      </header>

      {children}
    </article>
  );
};
