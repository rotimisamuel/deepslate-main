'use client'
import { useRef } from 'react'
import Link from 'next/link'
import { gsap, ScrollTrigger, useGSAP } from '@/lib/gsap'

const SERVICES = [
  {
    icon: '◆',
    title: 'Digital Transformation',
    desc: 'We help organisations reimagine processes, technology, and culture — moving from strategy to sustained, measurable change.',
  },
  {
    icon: '⬡',
    title: 'AI Strategy',
    desc: 'From readiness to governance, we guide executives and boards in adopting, governing, and scaling AI with confidence and clarity.',
  },
  {
    icon: '▤',
    title: 'Education',
    desc: 'Executive programmes, leadership masterclasses, and online courses that build the capabilities your organisation actually needs.',
  },
  {
    icon: '◈',
    title: 'AI Readiness',
    desc: 'A structured diagnostic of data, talent, infrastructure, and culture — producing a clear readiness score and prioritised roadmap.',
  },
]

const STATS = [
  { value: 200, suffix: '+', label: 'Organisations supported' },
  { value: 15, suffix: '+', label: 'Countries reached' },
  { value: 6, suffix: '', label: 'Expert products' },
  { value: 100, suffix: '%', label: 'Outcome focused' },
]

function AnimatedStat({
  value,
  suffix,
  label,
}: {
  value: number
  suffix: string
  label: string
}) {
  const numRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!numRef.current) return
    const counter = { val: 0 }
    const el = numRef.current
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(counter, {
          val: value,
          duration: 1.8,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = Math.round(counter.val) + suffix
          },
        })
      },
    })
  })

  return (
    <div
      style={{
        background: '#f7f7f7',
        border: '1px solid #e0e0e0',
        padding: '28px 24px',
        borderRadius: 2,
      }}
    >
      <div
        ref={numRef}
        style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 700,
          fontSize: 44,
          lineHeight: 1,
          color: '#000',
          letterSpacing: '-0.02em',
          marginBottom: 8,
        }}
      >
        0{suffix}
      </div>
      <div
        style={{
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: '#757575',
        }}
      >
        {label}
      </div>
    </div>
  )
}

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const cards = sectionRef.current?.querySelectorAll('.service-card')
      if (!cards?.length) return

      gsap.from(sectionRef.current!.querySelector('.services-header'), {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      })

      gsap.from(cards, {
        y: 32,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cards[0],
          start: 'top 80%',
        },
      })
    },
    { scope: sectionRef }
  )

  return (
    <section
      id="services"
      ref={sectionRef}
      style={{ background: '#fff', padding: '104px 0' }}
    >
      <div
        className="services-grid"
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 48px',
          display: 'grid',
          gridTemplateColumns: '340px 1fr',
          gap: 72,
        }}
      >
        {/* Left: header */}
        <div className="services-header">
          <span className="eyebrow" style={{ color: '#000', marginBottom: 22, display: 'inline-flex' }}>
            Services
          </span>
          <h2
            style={{
              margin: '22px 0 18px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: 40,
              lineHeight: 1.08,
              letterSpacing: '-0.01em',
              color: '#000',
            }}
          >
            What we do
          </h2>
          <p
            style={{
              margin: '0 0 32px',
              fontSize: 16,
              lineHeight: 1.65,
              color: '#1a1a1a',
              maxWidth: 300,
            }}
          >
            We partner with organisations to design, build, and scale digital and AI capability
            that drives lasting, measurable change.
          </p>
          <Link href="/services" className="btn-primary">
            View all services
          </Link>
        </div>

        {/* Right: service cards */}
        <div
          className="services-cards-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px 56px',
          }}
        >
          {SERVICES.map((s) => (
            <div key={s.title} className="service-card">
              <div
                style={{
                  fontSize: 26,
                  color: '#76b900',
                  lineHeight: 1,
                  marginBottom: 18,
                }}
              >
                {s.icon}
              </div>
              <h3
                style={{
                  margin: '0 0 10px',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: 13,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#000',
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: 15,
                  lineHeight: 1.65,
                  color: '#757575',
                }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats band */}
      <div
        className="stats-grid"
        style={{
          maxWidth: 1280,
          margin: '80px auto 0',
          padding: '0 48px',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 20,
        }}
      >
        {STATS.map((s) => (
          <AnimatedStat key={s.label} {...s} />
        ))}
      </div>

    </section>
  )
}
