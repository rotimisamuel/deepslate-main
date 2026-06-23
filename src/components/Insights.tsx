'use client'
import { useRef } from 'react'
import Link from 'next/link'
import { gsap, useGSAP } from '@/lib/gsap'

const ARTICLES = [
  {
    category: 'AI Strategy',
    date: '14 Feb 2025',
    readTime: '8 min',
    title: 'AI strategy is not an IT question. It\'s a leadership question.',
    excerpt:
      'The organisations that succeed treat AI as a leadership challenge first — and a technology challenge second.',
    accent: '#76b900',
    bg: 'linear-gradient(135deg, #0d1a00 0%, #1a2e00 100%)',
  },
  {
    category: 'Education',
    date: '3 Feb 2025',
    readTime: '5 min',
    title: 'Why executive AI education fails — and what to do about it.',
    excerpt:
      'Too much AI training talks about the technology. Not enough trains leaders on the decisions they\'ll face.',
    accent: '#76b900',
    bg: 'linear-gradient(135deg, #0a1400 0%, #162000 100%)',
  },
  {
    category: 'Transformation',
    date: '22 Jan 2025',
    readTime: '6 min',
    title: 'Digital transformation fails when strategy stops at the slide deck.',
    excerpt:
      'Execution is where transformation lives or dies. Here\'s how to close the gap between ambition and action.',
    accent: '#76b900',
    bg: 'linear-gradient(135deg, #0d1a00 0%, #142200 100%)',
  },
]

const G = '#76b900'

function CardVisual({ index }: { index: number }) {
  if (index === 0) {
    return (
      <svg viewBox="0 0 200 130" width="160" height="104" style={{ display: 'block', margin: '0 auto' }}>
        {/* Leadership triangle */}
        <line x1="100" y1="16" x2="62" y2="56" stroke={G} strokeWidth="1.5" opacity="0.6" />
        <line x1="100" y1="16" x2="138" y2="56" stroke={G} strokeWidth="1.5" opacity="0.6" />
        <line x1="62" y1="56" x2="138" y2="56" stroke={G} strokeWidth="1.5" opacity="0.6" />
        <circle cx="100" cy="16" r="7" fill={G} />
        <circle cx="62" cy="56" r="5" fill={G} opacity="0.75" />
        <circle cx="138" cy="56" r="5" fill={G} opacity="0.75" />
        {/* Connector */}
        <line x1="100" y1="56" x2="100" y2="70" stroke={G} strokeWidth="1.5" strokeDasharray="3 2" opacity="0.5" />
        {/* Neural net */}
        <line x1="65" y1="88" x2="100" y2="76" stroke={G} strokeWidth="1" opacity="0.45" />
        <line x1="135" y1="88" x2="100" y2="76" stroke={G} strokeWidth="1" opacity="0.45" />
        <line x1="50" y1="112" x2="65" y2="88" stroke={G} strokeWidth="1" opacity="0.3" />
        <line x1="82" y1="110" x2="65" y2="88" stroke={G} strokeWidth="1" opacity="0.3" />
        <line x1="82" y1="110" x2="100" y2="76" stroke={G} strokeWidth="1" opacity="0.3" />
        <line x1="118" y1="110" x2="100" y2="76" stroke={G} strokeWidth="1" opacity="0.3" />
        <line x1="118" y1="110" x2="135" y2="88" stroke={G} strokeWidth="1" opacity="0.3" />
        <line x1="150" y1="112" x2="135" y2="88" stroke={G} strokeWidth="1" opacity="0.3" />
        <circle cx="65" cy="88" r="4.5" fill={G} opacity="0.7" />
        <circle cx="100" cy="76" r="6.5" fill={G} />
        <circle cx="135" cy="88" r="4.5" fill={G} opacity="0.7" />
        <circle cx="50" cy="112" r="3.5" fill={G} opacity="0.45" />
        <circle cx="82" cy="110" r="3.5" fill={G} opacity="0.45" />
        <circle cx="118" cy="110" r="3.5" fill={G} opacity="0.45" />
        <circle cx="150" cy="112" r="3.5" fill={G} opacity="0.45" />
      </svg>
    )
  }
  if (index === 1) {
    return (
      <svg viewBox="0 0 200 120" width="160" height="96" style={{ display: 'block', margin: '0 auto' }}>
        {/* Ascending bars — solid, fading toward top */}
        <rect x="14" y="80" width="32" height="36" rx="1" fill={G} opacity="1" />
        <rect x="54" y="60" width="32" height="56" rx="1" fill={G} opacity="0.75" />
        <rect x="94" y="40" width="32" height="76" rx="1" fill={G} opacity="0.5" />
        <rect x="134" y="20" width="32" height="96" rx="1" fill={G} opacity="0.25" />
        {/* Broken step */}
        <line x1="166" y1="10" x2="180" y2="0" stroke={G} strokeWidth="2" strokeDasharray="3 3" opacity="0.35" strokeLinecap="round" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 220 120" width="176" height="96" style={{ display: 'block', margin: '0 auto' }}>
      {/* Slide */}
      <rect x="8" y="20" width="84" height="58" rx="2" fill={G} opacity="0.12" stroke={G} strokeWidth="1.5" />
      <line x1="20" y1="36" x2="82" y2="36" stroke={G} strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />
      <line x1="20" y1="48" x2="74" y2="48" stroke={G} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <line x1="20" y1="58" x2="78" y2="58" stroke={G} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <line x1="20" y1="68" x2="66" y2="68" stroke={G} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      {/* Broken arrow */}
      <line x1="100" y1="49" x2="118" y2="49" stroke={G} strokeWidth="2" strokeDasharray="4 3" strokeLinecap="round" opacity="0.7" />
      <polyline points="114,43 121,49 114,55" fill="none" stroke={G} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
      {/* Empty box */}
      <rect x="128" y="20" width="84" height="58" rx="2" fill="none" stroke={G} strokeWidth="1.5" strokeDasharray="6 4" opacity="0.4" />
      <text x="170" y="55" textAnchor="middle" fill={G} opacity="0.45" fontSize="24" fontFamily="Inter,sans-serif" fontWeight="700">?</text>
    </svg>
  )
}

function InsightCard({ article, index }: { article: typeof ARTICLES[0]; index: number }) {
  return (
    <article
      className="insight-card"
      style={{
        background: '#fff',
        border: '1px solid #e8e8e8',
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.transform = 'translateY(-6px)'
        el.style.boxShadow = '0 20px 48px rgba(0,0,0,0.1)'
        el.style.borderColor = '#76b900'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.transform = 'none'
        el.style.boxShadow = 'none'
        el.style.borderColor = '#e8e8e8'
      }}
    >
      {/* Visual header */}
      <div
        style={{
          height: 180,
          background: article.bg,
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Illustration */}
        <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          <CardVisual index={index} />
        </div>
        {/* Category badge */}
        <div
          style={{
            position: 'absolute',
            top: 14,
            left: 14,
            fontFamily: 'Inter, sans-serif',
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            background: '#76b900',
            color: '#000',
            padding: '4px 10px',
            borderRadius: 2,
          }}
        >
          {article.category}
        </div>
      </div>

      {/* Body */}
      <div
        style={{
          padding: 24,
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          flex: 1,
        }}
      >
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#757575',
          }}
        >
          {article.date} · {article.readTime}
        </div>
        <h3
          style={{
            margin: 0,
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            fontSize: 18,
            lineHeight: 1.35,
            color: '#000',
          }}
        >
          {article.title}
        </h3>
        <p
          style={{
            margin: 0,
            fontSize: 14,
            lineHeight: 1.65,
            color: '#757575',
          }}
        >
          {article.excerpt}
        </p>
        <div style={{ marginTop: 'auto', paddingTop: 8 }}>
          <span className="btn-ghost-link">Read more</span>
        </div>
      </div>
    </article>
  )
}

export default function Insights() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.from('.insights-header', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.insights-header',
          start: 'top 80%',
        },
      })

      gsap.from('.insight-card', {
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.insight-card',
          start: 'top 85%',
        },
      })
    },
    { scope: sectionRef }
  )

  return (
    <section id="insights" ref={sectionRef} style={{ background: '#f7f7f7', padding: '104px 0' }}>
      <div
        className="insights-header"
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 48px',
          textAlign: 'center',
          marginBottom: 56,
        }}
      >
        <span className="eyebrow" style={{ color: '#000', justifyContent: 'center', marginBottom: 20 }}>
          Latest Insights
        </span>
        <h2
          style={{
            margin: '20px 0 20px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            fontSize: 40,
            lineHeight: 1.08,
            letterSpacing: '-0.01em',
            color: '#000',
          }}
        >
          Ideas that move organisations forward.
        </h2>
        <Link href="#" className="btn-ghost-link">
          View all insights
        </Link>
      </div>

      <div
        className="insights-grid"
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 48px',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
        }}
      >
        {ARTICLES.map((a, i) => (
          <InsightCard key={a.title} article={a} index={i} />
        ))}
      </div>

    </section>
  )
}
