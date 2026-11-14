import { ArrowUpRight, Mail } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'
import { GitHubIcon, LinkedInIcon } from './brand-icons'

const channels = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail, external: false },
  { label: 'LinkedIn', value: 'in/tooba-shakeel-', href: profile.linkedin, icon: LinkedInIcon, external: true },
  { label: 'GitHub', value: 'tshakeel100-maker', href: profile.github, icon: GitHubIcon, external: true },
]

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-maroon bg-burgundy px-6 py-16 md:px-16 md:py-20">
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -left-20 size-96 rounded-full bg-maroon/70 blur-3xl" />
          <div className="relative grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-stone">06 — Contact</p>
              <h2 id="contact-heading" className="mt-4 font-serif text-5xl leading-tight text-cream md:text-7xl">
                {"Let's Connect."}
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-pretty text-cream/80 md:text-lg">
                {
                  "I'm always interested in connecting with fellow developers, exploring new opportunities, collaborating on projects, and discussing technology."
                }
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-cream/90"
              >
                Get in Touch
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </div>

            <ul className="divide-y divide-cream/10 rounded-2xl border border-cream/10 bg-ink/40">
              {channels.map(({ label, value, href, icon: Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group flex items-center gap-4 p-5 transition-colors hover:bg-cream/5"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-cream/15 text-cream">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-mono text-[11px] uppercase tracking-widest text-stone">{label}</span>
                      <span className="block truncate text-sm text-cream">{value}</span>
                    </span>
                    <ArrowUpRight
                      className="size-4 text-stone transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cream"
                      aria-hidden="true"
                    />
                    {external ? <span className="sr-only">(opens in a new tab)</span> : null}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
