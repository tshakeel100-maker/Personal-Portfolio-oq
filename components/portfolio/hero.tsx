import { ArrowDownRight } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'
import { GitHubIcon, LinkedInIcon } from './brand-icons'

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-heading" className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,#f5efea_1px,transparent_1px),linear-gradient(to_bottom,#f5efea_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_top_right,black_20%,transparent_70%)]"
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-maroon bg-burgundy/60 px-3 py-1 font-mono text-xs text-cream">
            <span className="size-1.5 rounded-full bg-cream" aria-hidden="true" />
            CS @ University of North Texas
          </p>

          <h1 id="hero-heading" className="mt-8 font-serif text-5xl leading-[1.05] text-balance text-cream sm:text-6xl md:text-7xl">
            {"Hi, I'm Tooba Shakeel."}
          </h1>
          <p className="mt-4 font-serif text-2xl italic text-stone md:text-3xl">Building ideas into technology.</p>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-pretty text-cream/80 md:text-lg">
            {
              "I'm a Computer Science student at the University of North Texas with a strong academic background and a passion for software engineering, problem-solving, and emerging technologies. I enjoy building practical applications, exploring new technologies, and continuously developing my technical skills."
            }
          </p>

          <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-stone">{profile.headline}</p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-maroon px-6 py-3 text-sm font-medium text-cream ring-1 ring-cream/10 transition-all hover:bg-burgundy hover:ring-cream/30"
            >
              Explore My Work
              <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-6 py-3 text-sm font-medium text-cream transition-colors hover:border-cream/50"
            >
              {"Let's Connect"}
            </a>
            <div className="flex items-center gap-2 sm:ml-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-11 items-center justify-center rounded-full border border-border text-stone transition-colors hover:border-cream/40 hover:text-cream"
              >
                <GitHubIcon className="size-5" />
                <span className="sr-only">GitHub profile (opens in a new tab)</span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-11 items-center justify-center rounded-full border border-border text-stone transition-colors hover:border-cream/40 hover:text-cream"
              >
                <LinkedInIcon className="size-5" />
                <span className="sr-only">LinkedIn profile (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
