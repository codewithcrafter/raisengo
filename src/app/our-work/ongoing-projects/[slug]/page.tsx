import { notFound } from 'next/navigation';
import { ongoingProjects } from '@/data/our-work-ongoing';
import { ProjectDetail } from '@/components/sections/ProjectDetail/ProjectDetail';
import { Metadata } from 'next';

export function generateStaticParams() {
  return ongoingProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = ongoingProjects.find((p) => p.slug === slug);
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

export default async function OngoingProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = ongoingProjects.find((p) => p.slug === slug);
  
  if (!project) {
    notFound();
  }

  const relatedProjects = ongoingProjects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3)
    .map((p) => ({ title: p.title, slug: p.slug, image: p.image }));

  return (
    <ProjectDetail
      project={{
        ...project,
        badge: project.partner,
        description: project.fullDescription,
      }}
      categoryName="Ongoing Projects"
      categoryLink="/our-work/ongoing-projects"
      relatedProjects={relatedProjects}
    />
  );
}
