import { experience } from '@/lib/portfolio-data'
import { SectionHeader } from './section-header'

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader index="04" eyebrow="Leadership" title="Experience" id="experience-heading" />
        <ol className="relative border-l border-maroon pl-8 md:ml-4 md:pl-12">
          {experience.map((item) => (
            <li key={item.role} className="relative">
              <span
                className="absolute top-2 -left-[37px] size-3 rounded-full border-2 border-cream bg-maroon md:-left-[53px]"
                aria-hidden="true"
              />
              <article className="rounded-2xl border border-border bg-charcoal p-7 md:p-10">
                <p className="font-mono text-xs uppercase tracking-widest text-stone">{item.organization}</p>
                <h3 className="mt-3 font-serif text-3xl text-cream md:text-4xl">{item.role}</h3>
                <ul className="mt-6 grid gap-3 md:grid-cols-2">
                  {item.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="flex gap-3 text-sm leading-relaxed text-cream/85 md:text-base">
                      <span className="mt-2.5 h-px w-4 shrink-0 bg-cream/50" aria-hidden="true" />
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
