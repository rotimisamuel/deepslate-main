'use client'
import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'

interface Props {
  eyebrow: string
  title: string
  description: string
}

export default function PageHero({ eyebrow, title, description }: Props) {
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.55 })
    tl.from('.ph-eyebrow', { x: -20, opacity: 0, duration: 0.6, ease: 'power3.out' })
      .from('.ph-title', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.3')
      .from('.ph-desc', { y: 20, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4')
  }, { scope: ref })

  return (
    <section
      ref={ref}
      style={{ background: '#000', color: '#fff', padding: '128px 0 84px' }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px' }}>
        <div
          className="ph-eyebrow"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#76b900',
            marginBottom: 24,
          }}
        >
          <span style={{ width: 8, height: 8, background: '#76b900', display: 'inline-block', flexShrink: 0 }} />
          {eyebrow}
        </div>
        <h1
          className="ph-title"
          style={{
            margin: 0,
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(40px, 5.2vw, 66px)',
            lineHeight: 1.02,
            letterSpacing: '-0.02em',
            maxWidth: 980,
          }}
        >
          {title}
        </h1>
        <p
          className="ph-desc"
          style={{
            margin: '24px 0 0',
            fontSize: 18,
            lineHeight: 1.65,
            color: 'rgba(255,255,255,0.62)',
            maxWidth: 640,
          }}
        >
          {description}
        </p>
      </div>
    </section>
  )
}
