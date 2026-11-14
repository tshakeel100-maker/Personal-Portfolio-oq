import { Binary, Terminal, Wrench } from 'lucide-react'
import { skillGroups } from '@/lib/portfolio-data'
import { SectionHeader } from './section-header'

const groupIcons = [Terminal, Binary, Wrench]

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader index="02" eyebrow="Toolkit" title="Technical Skills" id="skills-heading" />
        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = groupIcons[index] ?? Terminal
            return (
              <article
                key={group.title}
                className="group rounded-2xl border border-border bg-charcoal p-7 transition-colors hover:border-maroon"
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-burgundy text-cream">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-xs text-stone">{`0${index + 1}`}</span>
                </div>
                <h3 className="mt-6 text-lg font-medium text-cream">{group.title}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-ink px-3 py-1.5 text-sm text-cream/90"
                    >
                      {skill.name}
                      {skill.level ? (
                        <span className="rounded-full bg-maroon px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-cream">
                          {skill.level}
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
