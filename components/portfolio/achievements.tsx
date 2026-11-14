import { Award, BadgeCheck, ExternalLink } from 'lucide-react'
import { certifications, honors, profile } from '@/lib/portfolio-data'
import { SectionHeader } from './section-header'

export function Achievements() {
  return (
    <section id="achievements" aria-labelledby="achievements-heading" className="border-t border-border bg-charcoal/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader index="05" eyebrow="Recognition" title="Academic Achievements" id="achievements-heading" />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="relative overflow-hidden rounded-2xl border border-maroon bg-burgundy p-8 md:p-10">
            <p className="font-mono text-xs uppercase tracking-widest text-stone">Cumulative GPA</p>
            <p className="mt-4 font-serif text-[7rem] leading-none text-cream md:text-[9rem]">{profile.gpa}</p>
            <p className="mt-4 text-sm text-cream/75">{profile.university}</p>
          </div>

          <ul className="grid gap-6 sm:grid-cols-2">
            {honors.map((honor) => (
              <li key={honor.term} className="flex flex-col justify-between rounded-2xl border border-border bg-charcoal p-7">
                <span className="flex size-10 items-center justify-center rounded-lg bg-burgundy text-cream">
                  <Award className="size-5" aria-hidden="true" />
                </span>
                <div className="mt-10">
                  <p className="text-lg font-medium text-cream">{honor.title}</p>
                  <p className="mt-1 font-mono text-sm text-stone">{honor.term}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-24">
          <h3 id="certifications-heading" className="font-serif text-3xl text-cream md:text-4xl">
            {'Certifications & Learning'}
          </h3>
          <ul className="mt-8 grid gap-6 md:grid-cols-2" aria-labelledby="certifications-heading">
            {certifications.map((cert) => (
              <li key={cert.title} className="group flex items-start gap-5 rounded-2xl border border-border bg-charcoal p-7 transition-colors hover:border-maroon">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-maroon bg-burgundy text-cream">
                  <BadgeCheck className="size-6" aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-lg font-medium text-pretty text-cream">{cert.title}</p>
                  <p className="mt-1 text-sm text-stone">{cert.organization}</p>
                  {cert.verifyUrl ? (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm text-cream underline decoration-maroon underline-offset-4 hover:decoration-cream"
                    >
                      Verify credential
                      <ExternalLink className="size-3.5" aria-hidden="true" />
                    </a>
                  ) : (
                    <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-stone/70">
                      Verification link coming soon
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
