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

        <div id="certifications" className="mt-24 scroll-mt-24">
          <h3 id="certifications-heading" className="font-serif text-3xl text-balance text-cream md:text-4xl">
            {'Certifications & Professional Development'}
          </h3>
          <ul className="mt-8 grid gap-6 md:grid-cols-2" aria-labelledby="certifications-heading">
            {certifications.map((cert) => (
              <li
                key={cert.credentialId}
                className="flex flex-col rounded-2xl border border-border bg-charcoal p-7 transition-colors hover:border-maroon"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex items-center gap-2 rounded-full border border-maroon bg-burgundy/60 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-cream">
                    <BadgeCheck className="size-3.5" aria-hidden="true" />
                    {cert.organization}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-stone">Certified</span>
                </div>

                <h4 className="mt-6 font-serif text-2xl leading-tight text-pretty text-cream md:text-3xl">{cert.title}</h4>
                <p className="mt-1 text-sm text-stone">{`Issued by ${cert.organization}`}</p>

                <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-border pt-5 font-mono text-xs">
                  <div>
                    <dt className="uppercase tracking-widest text-stone/80">Issued</dt>
                    <dd className="mt-1 text-cream/90">{cert.issued}</dd>
                  </div>
                  <div>
                    <dt className="uppercase tracking-widest text-stone/80">Expires</dt>
                    <dd className="mt-1 text-cream/90">{cert.expires}</dd>
                  </div>
                  <div>
                    <dt className="uppercase tracking-widest text-stone/80">Credential ID</dt>
                    <dd className="mt-1 break-all text-cream/90">{cert.credentialId}</dd>
                  </div>
                </dl>

                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-cream px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-cream/85"
                >
                  Show Credential
                  <ExternalLink className="size-3.5" aria-hidden="true" />
                  <span className="sr-only">{`for ${cert.title} (opens in a new tab)`}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
