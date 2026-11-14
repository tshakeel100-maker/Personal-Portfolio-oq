import { BrainCircuit, Code2, GraduationCap, Puzzle, Sparkles, Trophy } from 'lucide-react'
import { SectionHeader } from './section-header'

const highlights = [
  { icon: GraduationCap, label: 'Computer Science at UNT' },
  { icon: Trophy, label: '4.0 GPA' },
  { icon: Code2, label: 'Software Engineering' },
  { icon: BrainCircuit, label: 'Artificial Intelligence' },
  { icon: Puzzle, label: 'Problem-Solving' },
  { icon: Sparkles, label: 'Continuous Learning' },
]

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="border-t border-border bg-charcoal/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader index="01" eyebrow="About" title="A Little About Me" id="about-heading" />
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <div className="space-y-6 text-base leading-relaxed text-pretty text-cream/80 md:text-lg">
            <p>
              {
                "I'm currently pursuing a Bachelor's degree in Computer Science alongside an undergraduate certificate in Artificial Intelligence at the University of North Texas. I have a 4.0 GPA with an expected graduation date of May 2029. My academic journey has helped me develop a strong foundation in programming, algorithms, and computer systems."
              }
            </p>
            <p>
              {
                "I'm particularly interested in software engineering, artificial intelligence, and building technology that solves real-world problems. I enjoy working on projects that challenge me to think critically, learn new technologies, and turn ideas into functional applications."
              }
            </p>
            <p>
              Beyond academics, I enjoy leadership, collaboration, and connecting with people from different backgrounds.
            </p>
          </div>

          <div>
            <dl className="mb-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border">
              <div className="bg-ink p-5">
                <dt className="font-mono text-[11px] uppercase tracking-widest text-stone">Degree</dt>
                <dd className="mt-2 text-sm text-cream">B.S. Computer Science</dd>
              </div>
              <div className="bg-ink p-5">
                <dt className="font-mono text-[11px] uppercase tracking-widest text-stone">Certificate</dt>
                <dd className="mt-2 text-sm text-cream">Artificial Intelligence</dd>
              </div>
              <div className="bg-ink p-5">
                <dt className="font-mono text-[11px] uppercase tracking-widest text-stone">GPA</dt>
                <dd className="mt-2 text-sm text-cream">4.0</dd>
              </div>
              <div className="bg-ink p-5">
                <dt className="font-mono text-[11px] uppercase tracking-widest text-stone">Expected</dt>
                <dd className="mt-2 text-sm text-cream">May 2029</dd>
              </div>
            </dl>
            <ul className="grid grid-cols-2 gap-3" aria-label="Focus areas">
              {highlights.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 rounded-lg border border-border bg-ink/60 px-3 py-3 text-sm text-cream/90"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-burgundy text-cream">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
