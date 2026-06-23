'use client'
import { useRef, useState } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'

// ── Discover: Radar sweep ─────────────────────────────────────────────
function DiscoverVisual() {
  const ref = useRef<HTMLDivElement>(null)
  const sweepRef = useRef<SVGGElement>(null)
  const dotRefs = useRef<(SVGCircleElement | null)[]>([])

  const DOTS = [{ cx: 162, cy: 68 }, { cx: 148, cy: 158 }, { cx: 70, cy: 90 }, { cx: 82, cy: 150 }, { cx: 172, cy: 118 }, { cx: 55, cy: 65 }]

  useGSAP(() => {
    gsap.from(ref.current, { opacity: 0, duration: 0.5 })
    gsap.to(sweepRef.current, { rotation: '+=360', svgOrigin: '110 110', duration: 5, repeat: -1, ease: 'none' })
    const dots = dotRefs.current.filter(Boolean)
    if (dots.length) {
      gsap.to(dots, { opacity: 0.15, duration: 2, stagger: { each: 0.8, repeat: -1, yoyo: true }, ease: 'sine.inOut' })
    }
  }, { scope: ref })

  return (
    <div ref={ref} style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg viewBox="0 0 220 220" style={{ width: '70%', overflow: 'visible' }}>
        <circle cx="110" cy="110" r="90" fill="none" stroke="#76b900" strokeWidth="1" opacity="0.22" />
        <circle cx="110" cy="110" r="65" fill="none" stroke="#76b900" strokeWidth="1" strokeDasharray="3 5" opacity="0.16" />
        <circle cx="110" cy="110" r="38" fill="none" stroke="#76b900" strokeWidth="1" strokeDasharray="2 3" opacity="0.13" />
        <line x1="110" y1="20" x2="110" y2="200" stroke="#76b900" strokeWidth="0.5" opacity="0.1" />
        <line x1="20" y1="110" x2="200" y2="110" stroke="#76b900" strokeWidth="0.5" opacity="0.1" />
        <g ref={sweepRef}>
          <path d="M 110 110 L 200 110 A 90 90 0 0 0 181.6 54.1 Z" fill="#76b900" opacity="0.08" />
          <line x1="110" y1="110" x2="200" y2="110" stroke="#76b900" strokeWidth="2.5" strokeLinecap="round" />
        </g>
        {DOTS.map((d, i) => (
          <circle key={i} ref={el => { dotRefs.current[i] = el }} cx={d.cx} cy={d.cy} r="3" fill="#76b900" />
        ))}
        <circle cx="110" cy="110" r="5" fill="#76b900" />
      </svg>
    </div>
  )
}

// ── Design: Blueprint network ─────────────────────────────────────────
const D_NODES = [{ x: 110, y: 28 }, { x: 185, y: 72 }, { x: 168, y: 168 }, { x: 52, y: 168 }, { x: 35, y: 72 }]
const D_LINES = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0], [0, 2], [1, 3]]

function DesignVisual() {
  const ref = useRef<HTMLDivElement>(null)
  const lineRefs = useRef<(SVGLineElement | null)[]>([])
  const nodeRefs = useRef<(SVGCircleElement | null)[]>([])

  useGSAP(() => {
    gsap.from(ref.current, { opacity: 0, duration: 0.5 })
    gsap.set(lineRefs.current.filter(Boolean), { strokeDasharray: 220, strokeDashoffset: 220 })
    gsap.to(lineRefs.current.filter(Boolean), {
      strokeDashoffset: 0, duration: 0.55, stagger: 0.12, ease: 'power2.out',
      onComplete: () => {
        D_NODES.forEach((n, i) => {
          gsap.set(nodeRefs.current[i], { svgOrigin: `${n.x} ${n.y}` })
        })
        gsap.to(nodeRefs.current.filter(Boolean), {
          scale: 1.4, duration: 1.5, stagger: { each: 0.3, repeat: -1, yoyo: true }, ease: 'sine.inOut',
        })
      },
    })
  }, { scope: ref })

  return (
    <div ref={ref} style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg viewBox="0 0 220 220" style={{ width: '72%', overflow: 'visible' }}>
        {[40, 80, 120, 160].flatMap(x => [40, 80, 120, 160].map(y => (
          <circle key={`g-${x}-${y}`} cx={x} cy={y} r="1" fill="#76b900" opacity="0.1" />
        )))}
        {D_LINES.map(([a, b], i) => (
          <line key={i} ref={el => { lineRefs.current[i] = el }}
            x1={D_NODES[a].x} y1={D_NODES[a].y} x2={D_NODES[b].x} y2={D_NODES[b].y}
            stroke="#76b900" strokeWidth="1.2" opacity="0.5" />
        ))}
        {D_NODES.map((n, i) => (
          <circle key={i} ref={el => { nodeRefs.current[i] = el }}
            cx={n.x} cy={n.y} r={i === 0 ? 7 : 5} fill="#76b900" />
        ))}
      </svg>
    </div>
  )
}

// ── Deliver: Flowing data streams ─────────────────────────────────────
const DEL_TRACKS = [
  { y: 78, w: 1.5, op: 0.6, speed: 2.2 },
  { y: 110, w: 3, op: 1, speed: 1.7 },
  { y: 142, w: 1.5, op: 0.6, speed: 2.6 },
]

function DeliverVisual() {
  const ref = useRef<HTMLDivElement>(null)
  const flowRefs = useRef<(SVGPathElement | null)[]>([])

  useGSAP(() => {
    gsap.from(ref.current, { opacity: 0, duration: 0.5 })
    flowRefs.current.filter(Boolean).forEach((el, i) => {
      gsap.to(el, { strokeDashoffset: `-=${220}`, duration: DEL_TRACKS[i].speed, repeat: -1, ease: 'none' })
    })
  }, { scope: ref })

  return (
    <div ref={ref} style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg viewBox="0 0 220 220" style={{ width: '80%' }}>
        {DEL_TRACKS.map((t, i) => (
          <line key={`rail-${i}`} x1="20" y1={t.y} x2="192" y2={t.y} stroke="#76b900" strokeWidth="0.8" opacity="0.12" />
        ))}
        {DEL_TRACKS.map((t, i) => (
          <path key={`flow-${i}`} ref={el => { flowRefs.current[i] = el }}
            d={`M 20 ${t.y} L 192 ${t.y}`}
            stroke="#76b900" strokeWidth={t.w} fill="none"
            strokeDasharray="18 12" opacity={t.op} strokeLinecap="round"
          />
        ))}
        {/* Origin nodes */}
        {DEL_TRACKS.map((t, i) => (
          <circle key={`start-${i}`} cx="20" cy={t.y} r={i === 1 ? 5.5 : 3.5} fill="#76b900" opacity={t.op} />
        ))}
        {/* End milestone */}
        <circle cx="192" cy="110" r="9" fill="none" stroke="#76b900" strokeWidth="1.5" opacity="0.5" />
        <polyline points="187,110 190,114 197,106" fill="none" stroke="#76b900" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

// ── Sustain: Orbital rings ────────────────────────────────────────────
function SustainVisual() {
  const ref = useRef<HTMLDivElement>(null)
  const o1Ref = useRef<SVGGElement>(null)
  const o2Ref = useRef<SVGGElement>(null)
  const coreRef = useRef<SVGPolygonElement>(null)
  const pulseRef = useRef<SVGCircleElement>(null)

  useGSAP(() => {
    gsap.from(ref.current, { opacity: 0, duration: 0.5 })
    gsap.to(o1Ref.current, { rotation: '+=360', svgOrigin: '110 110', duration: 9, repeat: -1, ease: 'none' })
    gsap.to(o2Ref.current, { rotation: '-=360', svgOrigin: '110 110', duration: 14, repeat: -1, ease: 'none' })
    gsap.to(coreRef.current, { scale: 1.1, svgOrigin: '110 110', duration: 2.2, repeat: -1, yoyo: true, ease: 'sine.inOut' })
    gsap.to(pulseRef.current, { scale: 1.7, opacity: 0, svgOrigin: '110 110', duration: 2.2, repeat: -1, ease: 'power2.out' })
  }, { scope: ref })

  return (
    <div ref={ref} style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg viewBox="0 0 220 220" style={{ width: '70%', overflow: 'visible' }}>
        <ellipse cx="110" cy="110" rx="84" ry="28" fill="none" stroke="#76b900" strokeWidth="1" opacity="0.18" />
        <ellipse cx="110" cy="110" rx="60" ry="60" fill="none" stroke="#76b900" strokeWidth="1" opacity="0.14" />
        <circle ref={pulseRef} cx="110" cy="110" r="30" fill="none" stroke="#76b900" strokeWidth="1.5" opacity="0.35" />
        <g ref={o1Ref}>
          <circle cx="194" cy="110" r="6.5" fill="#76b900" />
        </g>
        <g ref={o2Ref}>
          <circle cx="170" cy="110" r="4.5" fill="#76b900" opacity="0.85" />
          <circle cx="50" cy="110" r="4.5" fill="#76b900" opacity="0.85" />
        </g>
        <polygon ref={coreRef} points="110,76 130,90 130,120 110,134 90,120 90,90" fill="#76b900" />
      </svg>
    </div>
  )
}

// ── Container ─────────────────────────────────────────────────────────
function ApproachVisual({ active }: { active: number }) {
  return (
    <div style={{ width: '100%', aspectRatio: '4 / 3', background: '#060606', border: '1px solid #1e1e1e', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 55% 55% at 50% 50%, rgba(118,185,0,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0 }}>
        {active === 0 && <DiscoverVisual />}
        {active === 1 && <DesignVisual />}
        {active === 2 && <DeliverVisual />}
        {active === 3 && <SustainVisual />}
      </div>
      <div style={{ position: 'absolute', bottom: 24, left: 24, fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#76b900' }}>
        {STAGES[active].num} — {STAGES[active].title}
      </div>
    </div>
  )
}

const STAGES = [
  { num: '01', title: 'Discover', desc: 'Understand your current state, ambitions, and constraints through structured assessment — grounded in real insight, not assumptions.' },
  { num: '02', title: 'Design', desc: 'Co-create a transformation roadmap that is costed, sequenced, and grounded in reality, not a slide deck.' },
  { num: '03', title: 'Deliver', desc: 'Support execution with embedded advisors, change management, and programme governance.' },
  { num: '04', title: 'Sustain', desc: 'Build internal capability so the transformation outlasts the engagement.' },
]

export default function Approach() {
  const sectionRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)

  useGSAP(() => {
    gsap.from('.approach-header', { y: 40, opacity: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' } })
    gsap.from('.approach-stage', { x: -30, opacity: 0, stagger: 0.08, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: '.approach-accordion', start: 'top 80%' } })
    gsap.from('.approach-visual', { x: 40, opacity: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: '.approach-visual', start: 'top 80%' } })
  }, { scope: sectionRef })

  return (
    <section id="impact" ref={sectionRef} style={{ background: '#000', color: '#fff', padding: '104px 0' }}>
      <div className="approach-header" style={{ maxWidth: 920, margin: '0 auto', padding: '0 48px', textAlign: 'center' }}>
        <span className="eyebrow" style={{ color: '#fff', justifyContent: 'center', marginBottom: 22 }}>Our Approach</span>
        <h2 style={{ margin: '22px 0 20px', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 44, lineHeight: 1.06, letterSpacing: '-0.01em', color: '#fff' }}>
          How we create impact
        </h2>
        <p style={{ margin: 0, fontSize: 17, lineHeight: 1.65, color: 'rgba(255,255,255,0.6)', maxWidth: 680, marginInline: 'auto' }}>
          Technology changes fast. The hard part is always people — their mindsets, habits, and how they lead. DeepSlate works at this intersection: rigorous strategy, practical education, and deep respect for the complexity of organisational change.
        </p>
      </div>

      <div className="approach-grid" style={{ maxWidth: 1180, margin: '64px auto 0', padding: '0 48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
        {/* Accordion */}
        <div className="approach-accordion">
          {STAGES.map((s, i) => (
            <div key={s.num} className="approach-stage" onClick={() => setActive(i)}
              style={{ borderTop: '1px solid #2a2a2a', padding: '22px 0', cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 13, color: '#76b900', width: 28, flexShrink: 0 }}>{s.num}</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 21, color: i === active ? '#fff' : 'rgba(255,255,255,0.65)', transition: 'color 0.2s ease' }}>{s.title}</span>
                <span style={{ marginLeft: 'auto', color: '#76b900', fontSize: 18, fontWeight: 700, transition: 'transform 0.2s ease', transform: i === active ? 'rotate(45deg)' : 'none' }}>+</span>
              </div>
              <div style={{ overflow: 'hidden', maxHeight: i === active ? 200 : 0, transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1)' }}>
                <p style={{ margin: '14px 0 0 44px', color: 'rgba(255,255,255,0.6)', fontSize: 15, lineHeight: 1.65, maxWidth: 460, opacity: i === active ? 1 : 0, transition: 'opacity 0.3s ease 0.1s' }}>
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid #2a2a2a' }} />
        </div>

        {/* Visual */}
        <div className="approach-visual" style={{ position: 'sticky', top: 100 }}>
          <ApproachVisual active={active} />
        </div>
      </div>
    </section>
  )
}
