import { redirect, notFound } from 'next/navigation';
import { successStoriesData } from '@/data/success-stories';

const legacySlugMap: Record<string, string> = {
  'baby-shauryas-heart-beats-strong-again': 'shaurya',
  'aarvis-little-heart-beats-strong-again': 'aarvi',
  'satyam-a-child-with-down-syndrome': 'satyam',
  'mitanshus-new-heartbeat': 'mitanshu',
  'baby-raj-kushwaha': 'shivaay',
  'amritas-successful-cardiac-surgery': 'amrita',
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const legacySlugs = Object.keys(legacySlugMap);
  const currentSlugs = successStoriesData.map((s) => s.slug);
  const all = Array.from(new Set([...legacySlugs, ...currentSlugs]));
  return all.map((slug) => ({ slug }));
}

export default async function LegacyStoryDetailPage({ params }: PageProps) {
  const { slug } = await params;

  if (legacySlugMap[slug]) {
    redirect(`/success-stories/${legacySlugMap[slug]}`);
  }

  const directMatch = successStoriesData.find((s) => s.slug === slug);
  if (directMatch) {
    redirect(`/success-stories/${directMatch.slug}`);
  }

  notFound();
}
