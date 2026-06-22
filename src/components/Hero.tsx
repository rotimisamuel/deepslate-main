'use client'
import { useRef } from 'react'
import Link from 'next/link'
import { gsap, useGSAP } from '@/lib/gsap'
import DeepSlateLogo from './DeepSlateLogo'

function GeometricBg() {
  const bgRef = useRef<SVGSVGElement>(null)
  const innerRef = useRef<SVGSVGElement>(null)

  useGSAP(() => {
    if (!bgRef.current || !innerRef.current) return
    gsap.to(bgRef.current, {
      rotation: 360,
      transformOrigin: 'center center',
      duration: 120,
      repeat: -1,
      ease: 'none',
    })
    gsap.to(innerRef.current, {
      rotation: -360,
      transformOrigin: 'center center',
      duration: 80,
      repeat: -1,
      ease: 'none',
    })
  })

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      {/* Large outer polygon watermark */}
      <svg
        ref={bgRef}
        viewBox="0 0 220 220"
        style={{
          position: 'absolute',
          right: '-5%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: 'min(680px, 70vw)',
          height: 'min(680px, 70vw)',
          opacity: 0.04,
        }}
      >
        <polygon points="110,44 156.7,63.3 176,110 156.7,156.7 110,176 63.3,156.7 44,110 63.3,63.3" fill="#76b900" />
        <polygon points="110,54 153.8,75.1 164.6,122.5 134.3,160.5 85.7,160.5 55.4,122.5 66.2,75.1" fill="transparent" stroke="#76b900" strokeWidth="1" />
        <polygon points="110,64 149.8,87 149.8,133 110,156 70.2,133 70.2,87" fill="#76b900" />
        <polygon points="110,74 144.2,98.9 131.2,139.1 88.8,139.1 75.7,98.9" fill="transparent" stroke="#76b900" strokeWidth="1" />
        <polygon points="110,84 136,110 110,136 84,110" fill="#76b900" />
        <polygon points="110,94 123.9,118 96.1,118" fill="transparent" stroke="#76b900" strokeWidth="1" />
      </svg>

      {/* Second smaller polygon, bottom-left */}
      <svg
        ref={innerRef}
        viewBox="0 0 220 220"
        style={{
          position: 'absolute',
          left: '5%',
          bottom: '-8%',
          width: 'min(260px, 30vw)',
          height: 'min(260px, 30vw)',
          opacity: 0.03,
        }}
      >
        <polygon points="110,44 156.7,63.3 176,110 156.7,156.7 110,176 63.3,156.7 44,110 63.3,63.3" fill="#76b900" />
        <polygon points="110,64 149.8,87 149.8,133 110,156 70.2,133 70.2,87" fill="#76b900" />
        <polygon points="110,84 136,110 110,136 84,110" fill="#76b900" />
      </svg>

      {/* Subtle green glow */}
      <div
        style={{
          position: 'absolute',
          right: '10%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: 'min(500px, 50vw)',
          height: 'min(500px, 50vw)',
          background: 'radial-gradient(circle, rgba(118,185,0,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
    </div>
  )
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const eyebrowRef = useRef<HTMLDivElement>(null)
  const line1Ref = useRef<HTMLDivElement>(null)
  const line2Ref = useRef<HTMLDivElement>(null)
  const line3Ref = useRef<HTMLDivElement>(null)
  const statBadgeRef = useRef<HTMLDivElement>(null)
  const subheadRef = useRef<HTMLDivElement>(null)
  const btnsRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.4 })

    tl.from(eyebrowRef.current, {
      x: -24,
      opacity: 0,
      duration: 0.7,
      ease: 'power3.out',
    })
      .from(
        [line1Ref.current, line2Ref.current, line3Ref.current],
        {
          y: '105%',
          opacity: 0,
          stagger: 0.1,
          duration: 0.9,
          ease: 'power4.out',
        },
        '-=0.4'
      )
      .from(
        statBadgeRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
        },
        '-=0.5'
      )
      .from(
        subheadRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
        },
        '-=0.5'
      )
      .from(
        btnsRef.current,
        {
          y: 16,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',
        },
        '-=0.4'
      )
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: '#060606',
        backgroundImage: 'url(/images/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      <GeometricBg />

      {/* Main gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(105deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.75) 42%, rgba(0,0,0,0.5) 100%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Bottom gradient fade */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 180,
          background: 'linear-gradient(to bottom, transparent, #060606)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          flex: 1,
          maxWidth: 1280,
          width: '100%',
          margin: '0 auto',
          padding: '0 48px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          paddingBottom: 80,
          paddingTop: 140,
        }}
      >
        <div ref={eyebrowRef}>
          <span className="eyebrow" style={{ color: '#fff', marginBottom: 0 }}>
            Digital Transformation · AI Strategy · Education
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: 48,
            flexWrap: 'wrap',
            marginTop: 48,
          }}
        >
          {/* Left: badge + headline */}
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 28, flexWrap: 'wrap' }}>
            {/* Stat badge */}
            <div
              ref={statBadgeRef}
              style={{
                background: '#fff',
                borderRadius: 2,
                padding: '18px 16px',
                width: 172,
                flexShrink: 0,
                border: '1px solid #e0e0e0',
              }}
            >
              <div
                style={{
                  width: 22,
                  height: 22,
                  background: '#76b900',
                  display: 'inline-block',
                  marginBottom: 18,
                }}
              />
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#757575',
                  lineHeight: 1.5,
                  marginBottom: 20,
                }}
              >
                Transformation is a human endeavour — we work where strategy meets people.
              </div>
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: 40,
                  lineHeight: 1,
                  color: '#000',
                }}
              >
                200+
              </div>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#757575',
                  marginTop: 6,
                }}
              >
                Organisations supported
              </div>
            </div>

            {/* Headline */}
            <h1
              style={{
                margin: 0,
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                lineHeight: 0.96,
                letterSpacing: '-0.02em',
                color: '#fff',
                fontSize: 'clamp(52px, 7vw, 88px)',
              }}
            >
              <div style={{ overflow: 'hidden' }}>
                <div ref={line1Ref}>Transform.</div>
              </div>
              <div style={{ overflow: 'hidden' }}>
                <div ref={line2Ref}>Strategise.</div>
              </div>
              <div style={{ overflow: 'hidden' }}>
                <div ref={line3Ref} style={{ color: '#76b900' }}>
                  Educate.
                </div>
              </div>
            </h1>
          </div>

          {/* Right: subhead + CTA */}
          <div ref={subheadRef} style={{ maxWidth: 380, paddingBottom: 6 }}>
            <p
              style={{
                margin: '0 0 24px',
                fontFamily: 'Inter, sans-serif',
                fontSize: 17,
                lineHeight: 1.65,
                color: 'rgba(255,255,255,0.82)',
              }}
            >
              We help leaders navigate digital transformation, build credible AI strategies, and
              develop the human capabilities to make it last.
            </p>
            <div ref={btnsRef} style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="#contact" className="btn-primary" style={{ fontSize: 15, padding: '13px 28px' }}>
                Start a Project
              </Link>
              <Link href="#services" className="btn-outline-dark" style={{ fontSize: 15, padding: '12px 27px' }}>
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          opacity: 0.4,
        }}
      >
        <div
          style={{
            width: 1,
            height: 48,
            background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.8))',
          }}
        />
      </div>

      <style>{`
        @media (max-width: 760px) {
          .hero-inner {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </section>
  )
}
