'use client'
import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'

const PARTNERS = [
  'Fussion9',
  'Slate',
  'Pelago',
  'Starkville Tech',
  'Digital Features Africa',
  'Nexus Group',
  'Vantage AI',
  'CoreLogic',
]

export default function Partners() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
      })
    },
    { scope: sectionRef }
  )

  const doubled = [...PARTNERS, ...PARTNERS]

  return (
    <section
      ref={sectionRef}
      style={{
        background: '#fff',
        padding: '56px 0',
        borderBottom: '1px solid #e8e8e8',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 48px',
          textAlign: 'center',
          marginBottom: 32,
        }}
      >
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#898989',
          }}
        >
          Partners &amp; Affiliations
        </div>
      </div>

      <div style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Left fade */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: 120,
            background: 'linear-gradient(to right, #fff, transparent)',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />
        {/* Right fade */}
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: 120,
            background: 'linear-gradient(to left, #fff, transparent)',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />

        <div
          ref={trackRef}
          className="marquee-track"
          style={{
            display: 'flex',
            gap: 64,
            width: 'max-content',
            alignItems: 'center',
            padding: '8px 0',
          }}
        >
          {doubled.map((name, i) => (
            <span
              key={i}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: 20,
                color: '#000',
                letterSpacing: '-0.01em',
                opacity: 0.35,
                whiteSpace: 'nowrap',
                flexShrink: 0,
                transition: 'opacity 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = '0.8')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = '0.35')}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
