type SectionHeaderProps = {
  index: string
  eyebrow: string
  title: string
  subtitle?: string
  id?: string
}

export function SectionHeader({ index, eyebrow, title, subtitle, id }: SectionHeaderProps) {
  return (
    <header className="mb-12 md:mb-16">
      <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-stone">
        <span className="text-cream">{index}</span>
        <span className="h-px w-10 bg-maroon" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 id={id} className="mt-4 font-serif text-4xl leading-tight text-balance text-cream md:text-6xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-pretty text-stone md:text-lg">{subtitle}</p>
      ) : null}
    </header>
  )
}
