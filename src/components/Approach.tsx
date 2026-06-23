'use client'
import { useRef, useState } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'

function ApproachVisual({ active, triggerRef }: { active: number; triggerRef: React.RefObject<HTMLElement> }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const r1 = useRef<SVGPolygonElement>(null)
  const r2 = useRef<SVGPolygonElement>(null)
  const r3 = useRef<SVGPolygonElement>(null)
  const r4 = useRef<SVGPolygonElement>(null)
  const r5 = useRef<SVGPolygonElement>(null)
  const r6 = useRef<SVGPolygonElement>(null)

  useGSAP(() => {
    const origin = '110 110'
    const order = [r6, r5, r4, r3, r2, r1] // innermost → outermost

    gsap.set(order.map((r) => r.current), { opacity: 0, scale: 0, svgOrigin: origin })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: 'top center',
        once: true,
      },
      onComplete: () => {
        // Continuous counter-rotating rings after reveal
        const speeds = [22, 16, 11, 8, 5, 3]
        ;[r1, r2, r3, r4, r5, r6].forEach((ring, i) => {
          const dir = i % 2 === 0 ? '+=360' : '-=360'
          gsap.to(ring.current, {
            rotation: dir,
            svgOrigin: origin,
            duration: speeds[i],
            repeat: -1,
            ease: 'none',
          })
        })
        // Breathing glow
        gsap.to(glowRef.current, {
          opacity: 0.7,
          scale: 1.15,
          duration: 2.2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      },
    })

    order.forEach((ring, i) => {
      tl.to(
        ring.current,
        { opacity: 1, scale: 1, duration: 0.55, ease: 'back.out(1.6)', svgOrigin: origin },
        i * 0.6
      )
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef} style={{ width: '100%', aspectRatio: '4 / 3', background: '#060606', border: '1px solid #1e1e1e', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Pulsing glow — no grid */}
      <div ref={glowRef} style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 55% 55% at 50% 50%, rgba(118,185,0,0.22) 0%, transparent 70%)', pointerEvents: 'none' }} />

      {/* Logo — rendered innermost on top so stacking is correct */}
      <svg viewBox="0 0 220 220" style={{ width: '62%', position: 'relative', zIndex: 1, overflow: 'visible' }}>
        <polygon ref={r1} points="110,44 156.7,63.3 176,110 156.7,156.7 110,176 63.3,156.7 44,110 63.3,63.3" fill="#76b900" />
        <polygon ref={r2} points="110,54 153.8,75.1 164.6,122.5 134.3,160.5 85.7,160.5 55.4,122.5 66.2,75.1" fill="#060606" />
        <polygon ref={r3} points="110,64 149.8,87 149.8,133 110,156 70.2,133 70.2,87" fill="#76b900" />
        <polygon ref={r4} points="110,74 144.2,98.9 131.2,139.1 88.8,139.1 75.7,98.9" fill="#060606" />
        <polygon ref={r5} points="110,84 136,110 110,136 84,110" fill="#76b900" />
        <polygon ref={r6} points="110,94 123.9,118 96.1,118" fill="#060606" />
      </svg>

      {/* Stage label */}
      <div style={{ position: 'absolute', bottom: 24, left: 24, fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#76b900' }}>
        {STAGES[active].num} — {STAGES[active].title}
      </div>
    </div>
  )
}

const STAGES = [
  {
    num: '01',
    title: 'Discover',
    desc: 'Understand your current state, ambitions, and constraints through structured assessment — grounded in real insight, not assumptions.',
  },
  {
    num: '02',
    title: 'Design',
    desc: 'Co-create a transformation roadmap that is costed, sequenced, and grounded in reality, not a slide deck.',
  },
  {
    num: '03',
    title: 'Deliver',
    desc: 'Support execution with embedded advisors, change management, and programme governance.',
  },
  {
    num: '04',
    title: 'Sustain',
    desc: 'Build internal capability so the transformation outlasts the engagement.',
  },
]

export default function Approach() {
  const sectionRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)
  const descRefs = useRef<(HTMLParagraphElement | null)[]>([])

  useGSAP(
    () => {
      gsap.from('.approach-header', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      })

      gsap.from('.approach-stage', {
        x: -30,
        opacity: 0,
        stagger: 0.08,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.approach-accordion',
          start: 'top 80%',
        },
      })

      gsap.from('.approach-visual', {
        x: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.approach-visual',
          start: 'top 80%',
        },
      })
    },
    { scope: sectionRef }
  )

  const handleStageClick = (i: number) => {
    if (i === active) return
    setActive(i)
  }

  return (
    <section
      id="impact"
      ref={sectionRef}
      style={{ background: '#000', color: '#fff', padding: '104px 0' }}
    >
      {/* Header */}
      <div
        className="approach-header"
        style={{ maxWidth: 920, margin: '0 auto', padding: '0 48px', textAlign: 'center' }}
      >
        <span className="eyebrow" style={{ color: '#fff', justifyContent: 'center', marginBottom: 22 }}>
          Our Approach
        </span>
        <h2
          style={{
            margin: '22px 0 20px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            fontSize: 44,
            lineHeight: 1.06,
            letterSpacing: '-0.01em',
            color: '#fff',
          }}
        >
          How we create impact
        </h2>
        <p
          style={{
            margin: 0,
            fontSize: 17,
            lineHeight: 1.65,
            color: 'rgba(255,255,255,0.6)',
            maxWidth: 680,
            marginInline: 'auto',
          }}
        >
          Technology changes fast. The hard part is always people — their mindsets, habits, and how
          they lead. DeepSlate works at this intersection: rigorous strategy, practical education,
          and deep respect for the complexity of organisational change.
        </p>
      </div>

      {/* Accordion + Visual */}
      <div
        className="approach-grid"
        style={{
          maxWidth: 1180,
          margin: '64px auto 0',
          padding: '0 48px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 64,
          alignItems: 'start',
        }}
      >
        {/* Accordion */}
        <div className="approach-accordion">
          {STAGES.map((s, i) => (
            <div
              key={s.num}
              className="approach-stage"
              onClick={() => handleStageClick(i)}
              style={{
                borderTop: '1px solid #2a2a2a',
                padding: '22px 0',
                cursor: 'pointer',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: 13,
                    color: '#76b900',
                    width: 28,
                    flexShrink: 0,
                  }}
                >
                  {s.num}
                </span>
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: 21,
                    color: i === active ? '#fff' : 'rgba(255,255,255,0.65)',
                    transition: 'color 0.2s ease',
                  }}
                >
                  {s.title}
                </span>
                <span
                  style={{
                    marginLeft: 'auto',
                    color: '#76b900',
                    fontSize: 18,
                    fontWeight: 700,
                    transition: 'transform 0.2s ease',
                    transform: i === active ? 'rotate(45deg)' : 'none',
                  }}
                >
                  +
                </span>
              </div>

              {/* Animated description */}
              <div
                style={{
                  overflow: 'hidden',
                  maxHeight: i === active ? 200 : 0,
                  transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <p
                  ref={(el) => { descRefs.current[i] = el }}
                  style={{
                    margin: '14px 0 0 44px',
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: 15,
                    lineHeight: 1.65,
                    maxWidth: 460,
                    opacity: i === active ? 1 : 0,
                    transition: 'opacity 0.3s ease 0.1s',
                  }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid #2a2a2a' }} />
        </div>

        {/* Visual */}
        <div className="approach-visual" style={{ position: 'sticky', top: 100 }}>
          <ApproachVisual active={active} triggerRef={sectionRef} />
        </div>
      </div>

    </section>
  )
}
