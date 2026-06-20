'use client'
import { useRef } from 'react'
import Link from 'next/link'
import { gsap, useGSAP } from '@/lib/gsap'

function ProductVisual({ variant }: { variant: 'assessment' | 'masterclass' }) {
  if (variant === 'assessment') {
    return (
      <div
        style={{
          width: '100%',
          height: 340,
          background: 'linear-gradient(135deg, #050505 0%, #0d1200 60%, #0a0a0a 100%)',
          border: '1px solid #1a1a1a',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 24,
        }}
      >
        {/* Radial glow */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at 60% 40%, rgba(118,185,0,0.1) 0%, transparent 65%)',
          }}
        />
        {/* Score display */}
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: 11,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#76b900',
              marginBottom: 16,
            }}
          >
            AI Readiness Score
          </div>
          {/* Score arc visualization */}
          <svg viewBox="0 0 200 120" style={{ width: 180, display: 'block', margin: '0 auto' }}>
            <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round" />
            <path d="M 20 100 A 80 80 0 0 1 145 38" fill="none" stroke="#76b900" strokeWidth="8" strokeLinecap="round" />
            <text x="100" y="85" textAnchor="middle" fill="#fff" fontFamily="Inter" fontWeight="700" fontSize="28">
              74
            </text>
            <text x="100" y="105" textAnchor="middle" fill="#757575" fontFamily="Inter" fontWeight="400" fontSize="10">
              out of 100
            </text>
          </svg>
          {/* Bar segments */}
          <div style={{ display: 'flex', gap: 6, marginTop: 20 }}>
            {['Data', 'Talent', 'Infra', 'Culture'].map((l, i) => (
              <div key={l} style={{ flex: 1, textAlign: 'center' }}>
                <div
                  style={{
                    height: [60, 45, 70, 50][i],
                    background: `rgba(118,185,0,${[0.9, 0.55, 1, 0.65][i]})`,
                    borderRadius: 2,
                    marginBottom: 4,
                  }}
                />
                <div style={{ fontSize: 9, color: '#757575', letterSpacing: '0.06em' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      style={{
        width: '100%',
        height: 340,
        background: 'linear-gradient(135deg, #060606 0%, #0d0d0d 100%)',
        border: '1px solid #1a1a1a',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 32,
        gap: 16,
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 30% 60%, rgba(118,185,0,0.08) 0%, transparent 65%)',
        }}
      />
      <div
        style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 700,
          fontSize: 11,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: '#76b900',
          position: 'relative',
          zIndex: 1,
        }}
      >
        Executive Programme
      </div>
      {/* Fake slide deck */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {[
          'AI Fundamentals for Leaders',
          'Governing AI — Board Priorities',
          'Making the Investment Case',
          'AI Risk & Responsibility',
          'Building Your AI Team',
        ].map((title, i) => (
          <div
            key={title}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '10px 14px',
              background: i === 1 ? 'rgba(118,185,0,0.12)' : 'rgba(255,255,255,0.03)',
              borderLeft: i === 1 ? '2px solid #76b900' : '2px solid transparent',
              borderRadius: 2,
              transition: '0.2s',
            }}
          >
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 10,
                fontWeight: 700,
                color: '#76b900',
                width: 20,
                flexShrink: 0,
              }}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 12,
                color: i === 1 ? '#fff' : 'rgba(255,255,255,0.5)',
                fontWeight: i === 1 ? 600 : 400,
              }}
            >
              {title}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Products() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.from('.products-header', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.products-header',
          start: 'top 80%',
        },
      })

      gsap.from('.product-row-1 .product-img', {
        x: -50,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.product-row-1',
          start: 'top 75%',
        },
      })

      gsap.from('.product-row-1 .product-text', {
        x: 50,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.product-row-1',
          start: 'top 75%',
        },
      })

      gsap.from('.product-row-2 .product-text', {
        x: -50,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.product-row-2',
          start: 'top 75%',
        },
      })

      gsap.from('.product-row-2 .product-img', {
        x: 50,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.product-row-2',
          start: 'top 75%',
        },
      })
    },
    { scope: sectionRef }
  )

  return (
    <section id="products" ref={sectionRef} style={{ background: '#fff', padding: '104px 0' }}>
      {/* Header */}
      <div
        className="products-header"
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 48px',
          display: 'flex',
          justifyContent: 'space-between',
          gap: 48,
          flexWrap: 'wrap',
          alignItems: 'flex-end',
          marginBottom: 72,
        }}
      >
        <div style={{ maxWidth: 560 }}>
          <span className="eyebrow" style={{ color: '#000', marginBottom: 22, display: 'inline-flex' }}>
            Products &amp; Programmes
          </span>
          <h2
            style={{
              margin: '22px 0 0',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: 40,
              lineHeight: 1.08,
              letterSpacing: '-0.01em',
              color: '#000',
            }}
          >
            Tools and programmes built for the AI era.
          </h2>
        </div>
        <p style={{ maxWidth: 360, fontSize: 16, lineHeight: 1.65, color: '#757575' }}>
          Practical, expert-led products to accelerate your organisation's digital and AI
          journey — from first diagnostic to board-level fluency.
        </p>
      </div>

      {/* Row 1 */}
      <div
        className="product-row-1"
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 48px',
          display: 'grid',
          gridTemplateColumns: '440px 1fr',
          gap: 72,
          alignItems: 'center',
          marginBottom: 96,
        }}
      >
        <div className="product-img">
          <ProductVisual variant="assessment" />
        </div>
        <div className="product-text">
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#76b900',
              marginBottom: 14,
            }}
          >
            AI Strategy
          </div>
          <h3
            style={{
              margin: '0 0 22px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: 28,
              lineHeight: 1.15,
              color: '#000',
            }}
          >
            AI Readiness Assessment
          </h3>
          <ul style={{ listStyle: 'none', margin: '0 0 28px', padding: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              'A structured diagnostic evaluating data maturity, talent, infrastructure, and culture.',
              'Produces a clear AI readiness score and a prioritised action roadmap.',
              'A 3–5 day engagement, designed for executive teams.',
            ].map((item) => (
              <li
                key={item}
                style={{ display: 'flex', gap: 14, fontSize: 15, lineHeight: 1.6, color: '#1a1a1a' }}
              >
                <span
                  style={{ width: 7, height: 7, background: '#76b900', flexShrink: 0, marginTop: 7 }}
                />
                {item}
              </li>
            ))}
          </ul>
          <Link href="#contact" className="btn-ghost-link">
            Learn More
          </Link>
        </div>
      </div>

      {/* Row 2 */}
      <div
        className="product-row-2"
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 48px',
          display: 'grid',
          gridTemplateColumns: '1fr 440px',
          gap: 72,
          alignItems: 'center',
        }}
      >
        <div className="product-text">
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#76b900',
              marginBottom: 14,
            }}
          >
            Education
          </div>
          <h3
            style={{
              margin: '0 0 22px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: 28,
              lineHeight: 1.15,
              color: '#000',
            }}
          >
            Executive AI Masterclass
          </h3>
          <ul style={{ listStyle: 'none', margin: '0 0 28px', padding: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              'For senior leaders who need to govern AI, commission it, and challenge it — without becoming data scientists.',
              'Delivered as a half or full day, built for the board and C-suite.',
              'Pairs with the Digital Leadership Academy for managers and teams.',
            ].map((item) => (
              <li
                key={item}
                style={{ display: 'flex', gap: 14, fontSize: 15, lineHeight: 1.6, color: '#1a1a1a' }}
              >
                <span
                  style={{ width: 7, height: 7, background: '#76b900', flexShrink: 0, marginTop: 7 }}
                />
                {item}
              </li>
            ))}
          </ul>
          <Link href="#contact" className="btn-ghost-link">
            Learn More
          </Link>
        </div>
        <div className="product-img">
          <ProductVisual variant="masterclass" />
        </div>
      </div>

    </section>
  )
}
