import { notFound } from 'next/navigation';
import { seasonalProjects } from '@/data/our-work-seasonal';
import { ProjectDetail } from '@/components/sections/ProjectDetail/ProjectDetail';
import { Metadata } from 'next';

export function generateStaticParams() {
  return seasonalProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = seasonalProjects.find((p) => p.slug === slug);
  if (!project) {
    return { title: 'Not Found' };
  }

  return {
    title: project.seo?.metaTitle || `${project.title} | Raise India Foundation`,
    description: project.seo?.metaDescription || project.fullDescription,
    openGraph: {
      title: project.seo?.metaTitle || `${project.title} | Raise India Foundation`,
      description: project.seo?.metaDescription || project.fullDescription,
      images: [project.image],
    },
  };
}

export default async function SeasonalProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = seasonalProjects.find((p) => p.slug === slug);
  
  if (!project) {
    notFound();
  }

  const relatedProjects = seasonalProjects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3)
    .map((p) => ({ title: p.title, slug: p.slug, image: p.image }));

  return (
    <ProjectDetail
      project={{
        ...project,
        badge: project.season,
        description: project.fullDescription,
      }}
      categoryName="Seasonal Projects"
      categoryLink="/our-work/seasonal-projects"
      relatedProjects={relatedProjects}
    />
  );
}
