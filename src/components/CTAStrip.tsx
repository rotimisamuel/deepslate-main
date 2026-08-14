'use client'
import { useRef } from 'react'
import Link from 'next/link'
import { gsap, useGSAP } from '@/lib/gsap'

export default function CTAStrip() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      })

      tl.from('.cta-heading', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })
        .from(
          '.cta-sub',
          { y: 24, opacity: 0, duration: 0.7, ease: 'power3.out' },
          '-=0.5'
        )
        .from(
          '.cta-btns',
          { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' },
          '-=0.4'
        )
    },
    { scope: sectionRef }
  )

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        background: '#000',
        color: '#fff',
        padding: '104px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(118,185,0,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: 860,
          margin: '0 auto',
          padding: '0 48px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <h2
          className="cta-heading"
          style={{
            margin: '0 0 18px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            fontSize: 44,
            lineHeight: 1.08,
            letterSpacing: '-0.01em',
            color: '#fff',
          }}
        >
          Ready to start the conversation?
        </h2>
        <p
          className="cta-sub"
          style={{
            margin: '0 0 36px',
            fontSize: 17,
            lineHeight: 1.65,
            color: 'rgba(255,255,255,0.6)',
            maxWidth: 600,
            marginInline: 'auto',
          }}
        >
          Whether you&apos;re exploring AI strategy, planning a transformation, or looking for
          education programmes — we&apos;re here.
        </p>
        <div
          className="cta-btns"
          style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <Link href="mailto:info@deepslate.co.uk" className="btn-primary" style={{ fontSize: 16, padding: '15px 36px' }}>
            Get in Touch
          </Link>
          <Link href="#services" className="btn-outline-dark" style={{ fontSize: 16, padding: '14px 35px' }}>
            View our Services
          </Link>
        </div>
      </div>
    </section>
  )
}
