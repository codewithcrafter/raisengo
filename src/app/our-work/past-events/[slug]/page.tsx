import { notFound } from 'next/navigation';
import { pastEvents } from '@/data/our-work-past-events';
import { ProjectDetail } from '@/components/sections/ProjectDetail/ProjectDetail';
import { Metadata } from 'next';

export function generateStaticParams() {
  return pastEvents.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = pastEvents.find((p) => p.slug === slug);
  if (!project) {
    return { title: 'Not Found' };
  }

  return {
    title: project.seo?.metaTitle || `${project.title} | Raise India Foundation`,
    description: project.seo?.metaDescription || project.description,
    openGraph: {
      title: project.seo?.metaTitle || `${project.title} | Raise India Foundation`,
      description: project.seo?.metaDescription || project.description,
      images: [project.image],
    },
  };
}

export default async function PastEventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = pastEvents.find((p) => p.slug === slug);
  
  if (!project) {
    notFound();
  }

  const relatedProjects = pastEvents
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3)
    .map((p) => ({ title: p.title, slug: p.slug, image: p.image }));

  return (
    <ProjectDetail
      project={{
        ...project,
        badge: project.date,
        description: project.description,
        ctaText: project.ctaLabel,
      }}
      categoryName="Past Events"
      categoryLink="/our-work/past-events"
      relatedProjects={relatedProjects}
    />
  );
}
