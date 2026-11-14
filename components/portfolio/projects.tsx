import { projects } from '@/lib/portfolio-data'
import { ProjectCard } from './project-card'
import { SectionHeader } from './section-header'

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="border-t border-border bg-charcoal/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          index="03"
          eyebrow="Selected work"
          title="Engineering Projects"
          id="projects-heading"
          subtitle="Turning ideas into functional solutions through code, creativity, and problem-solving."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects
            .map((project, index) => ({ project, index }))
            .sort((a, b) => Number(Boolean(b.project.featured)) - Number(Boolean(a.project.featured)))
            .map(({ project, index }) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
        </div>
      </div>
    </section>
  )
}
