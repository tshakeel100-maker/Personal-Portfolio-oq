'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ImagePlus } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'

export function ProfilePhoto() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl)
    }
  }, [previewUrl])

  const src = previewUrl ?? profile.photo

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-burgundy">
      {src ? (
        <Image
          src={src}
          alt="Portrait of Tooba Shakeel"
          fill
          priority
          sizes="(min-width: 1024px) 420px, 80vw"
          className="object-cover grayscale-[15%]"
          unoptimized={Boolean(previewUrl)}
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-6 p-8 text-center">
          <span className="font-serif text-8xl text-cream/90" aria-hidden="true">
            TS
          </span>
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-4 py-2 font-mono text-xs uppercase tracking-widest text-stone transition-colors hover:border-cream/50 hover:text-cream"
          >
            <ImagePlus className="size-4" aria-hidden="true" />
            Upload photo
          </button>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="sr-only"
            aria-label="Upload profile photograph"
            onChange={(event) => {
              const file = event.target.files?.[0]
              if (file) setPreviewUrl(URL.createObjectURL(file))
            }}
          />
        </div>
      )}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent"
        aria-hidden="true"
      />
    </div>
  )
}
