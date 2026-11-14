'use client'

import { useId, useState } from 'react'
import { ArrowUpRight, Calendar, ChevronDown, Gamepad2, Play } from 'lucide-react'
import type { Project, ProjectLink } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'
import { GitHubIcon } from './brand-icons'

function LinkButton({ link, prominent }: { link: ProjectLink; prominent: boolean }) {
  const Icon = link.kind === 'github' ? GitHubIcon : link.kind === 'demo' ? Play : ArrowUpRight
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all',
        prominent
          ? 'bg-cream text-ink hover:bg-cream/90'
          : link.kind === 'github'
            ? 'border border-cream/15 text-cream hover:border-cream/40 hover:bg-cream/5'
            : 'bg-maroon text-cream ring-1 ring-cream/10 hover:bg-burgundy hover:ring-cream/30',
      )}
    >
      <Icon className={cn('size-4', link.kind === 'demo' && 'fill-current')} aria-hidden="true" />
      {link.label}
      <span className="sr-only"> for this project (opens in a new tab)</span>
    </a>
  )
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false)
  const detailsId = useId()
  const featured = Boolean(project.featured)

  return (
    <article
      aria-labelledby={`${project.slug}-title`}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-0.5 md:p-8 motion-reduce:hover:translate-y-0',
        featured
          ? 'border-maroon bg-burgundy md:col-span-2'
          : 'border-border bg-charcoal hover:border-maroon/80',
      )}
    >
      {featured ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-maroon/60 blur-3xl"
        />
      ) : null}

      <div className="relative flex flex-wrap items-center justify-between gap-3">
        <span className="font-mono text-xs text-stone">{`/${String(index + 1).padStart(2, '0')}`}</span>
        <div className="flex flex-wrap items-center gap-2">
          {featured ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cream px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-ink">
              <Gamepad2 className="size-3" aria-hidden="true" />
              Live multiplayer
            </span>
          ) : null}
          {project.date ? (
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-stone">
              <Calendar className="size-3.5" aria-hidden="true" />
              {project.date}
            </span>
          ) : null}
        </div>
      </div>

      <div className={cn('relative mt-6', featured && 'md:grid md:grid-cols-[1.2fr_1fr] md:gap-12')}>
        <div>
          <h3 id={`${project.slug}-title`} className="font-serif text-3xl leading-tight text-balance text-cream md:text-4xl">
            {project.name}
          </h3>
          {project.tagline ? <p className="mt-2 text-sm text-stone">{project.tagline}</p> : null}

          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className={cn(
                  'rounded-md border px-2.5 py-1 font-mono text-xs',
                  featured ? 'border-cream/20 bg-ink/30 text-cream' : 'border-border bg-ink text-cream/85',
                )}
              >
                {tech}
              </li>
            ))}
          </ul>

          <p className="mt-6 leading-relaxed text-pretty text-cream/80">{project.description}</p>
        </div>

        <div className={cn(featured ? 'mt-6 md:mt-0' : 'mt-6')}>
          <button
            type="button"
            aria-expanded={expanded}
            aria-controls={detailsId}
            onClick={() => setExpanded((value) => !value)}
            className={cn(
              'inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-stone transition-colors hover:text-cream',
              featured && 'md:hidden',
            )}
          >
            {expanded ? 'Hide details' : 'Show details'}
            <ChevronDown className={cn('size-4 transition-transform', expanded && 'rotate-180')} aria-hidden="true" />
          </button>

          <div
            id={detailsId}
            className={cn(
              'grid transition-[grid-template-rows] duration-300',
              expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
              featured && 'md:grid-rows-[1fr]',
            )}
          >
            <div className="overflow-hidden">
              <div className={cn('pt-5', featured && 'md:pt-0')}>
                <h4 className="font-mono text-[11px] uppercase tracking-widest text-stone">Key features</h4>
                <ul className="mt-3 space-y-2.5">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm leading-relaxed text-cream/85">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-cream/60" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <h4 className="mt-6 font-mono text-[11px] uppercase tracking-widest text-stone">Skills demonstrated</h4>
                <p className="mt-2 text-sm leading-relaxed text-cream/70">{project.skills.join(' · ')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-auto flex flex-wrap gap-3 pt-8">
        {project.links.map((link) => (
          <LinkButton key={link.href} link={link} prominent={featured && link.kind === 'demo'} />
        ))}
      </div>
    </article>
  )
}
