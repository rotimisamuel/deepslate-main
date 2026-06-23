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
    bg: 'linear-gradient(135deg, #050a00 0%, #0d1400 100%)',
  },
  {
    category: 'Education',
    date: '3 Feb 2025',
    readTime: '5 min',
    title: 'Why executive AI education fails — and what to do about it.',
    excerpt:
      'Too much AI training talks about the technology. Not enough trains leaders on the decisions they\'ll face.',
    accent: '#76b900',
    bg: 'linear-gradient(135deg, #060606 0%, #111 100%)',
  },
  {
    category: 'Transformation',
    date: '22 Jan 2025',
    readTime: '6 min',
    title: 'Digital transformation fails when strategy stops at the slide deck.',
    excerpt:
      'Execution is where transformation lives or dies. Here\'s how to close the gap between ambition and action.',
    accent: '#76b900',
    bg: 'linear-gradient(135deg, #040404 0%, #0a0a0a 100%)',
  },
]

function CardVisual({ index }: { index: number }) {
  if (index === 0) {
    // AI Strategy: leadership hierarchy above a neural network
    return (
      <svg viewBox="0 0 200 130" style={{ width: '74%', display: 'block', margin: '0 auto', overflow: 'visible' }}>
        {/* Leadership apex */}
        <polygon points="100,14 66,56 134,56" fill="none" stroke="#76b900" strokeWidth="1.2" strokeOpacity={0.45} />
        <circle cx="100" cy="14" r="6.5" fill="#76b900" />
        <circle cx="66" cy="56" r="4.5" fill="#76b900" fillOpacity={0.7} />
        <circle cx="134" cy="56" r="4.5" fill="#76b900" fillOpacity={0.7} />
        {/* Bridge to network */}
        <line x1="100" y1="56" x2="100" y2="70" stroke="#76b900" strokeWidth="1.2" strokeOpacity={0.35} strokeDasharray="2 2" />
        {/* Neural network */}
        <circle cx="65" cy="88" r="4" fill="#76b900" fillOpacity={0.5} />
        <circle cx="100" cy="78" r="6" fill="#76b900" fillOpacity={0.65} />
        <circle cx="135" cy="88" r="4" fill="#76b900" fillOpacity={0.5} />
        <circle cx="48" cy="112" r="3" fill="#76b900" fillOpacity={0.3} />
        <circle cx="82" cy="110" r="3" fill="#76b900" fillOpacity={0.3} />
        <circle cx="118" cy="110" r="3" fill="#76b900" fillOpacity={0.3} />
        <circle cx="152" cy="112" r="3" fill="#76b900" fillOpacity={0.3} />
        <line x1="65" y1="88" x2="100" y2="78" stroke="#76b900" strokeWidth="0.9" strokeOpacity={0.3} />
        <line x1="135" y1="88" x2="100" y2="78" stroke="#76b900" strokeWidth="0.9" strokeOpacity={0.3} />
        <line x1="48" y1="112" x2="65" y2="88" stroke="#76b900" strokeWidth="0.7" strokeOpacity={0.2} />
        <line x1="82" y1="110" x2="65" y2="88" stroke="#76b900" strokeWidth="0.7" strokeOpacity={0.2} />
        <line x1="82" y1="110" x2="100" y2="78" stroke="#76b900" strokeWidth="0.7" strokeOpacity={0.2} />
        <line x1="118" y1="110" x2="100" y2="78" stroke="#76b900" strokeWidth="0.7" strokeOpacity={0.2} />
        <line x1="118" y1="110" x2="135" y2="88" stroke="#76b900" strokeWidth="0.7" strokeOpacity={0.2} />
        <line x1="152" y1="112" x2="135" y2="88" stroke="#76b900" strokeWidth="0.7" strokeOpacity={0.2} />
      </svg>
    )
  }
  if (index === 1) {
    // Education: ascending bars that fade and then stop — knowledge that doesn't stick
    return (
      <svg viewBox="0 0 200 130" style={{ width: '68%', display: 'block', margin: '0 auto' }}>
        <rect x="18" y="94" width="28" height="30" rx="1" fill="#76b900" fillOpacity={0.75} />
        <rect x="52" y="74" width="28" height="50" rx="1" fill="#76b900" fillOpacity={0.58} />
        <rect x="86" y="54" width="28" height="70" rx="1" fill="#76b900" fillOpacity={0.38} />
        <rect x="120" y="34" width="28" height="90" rx="1" fill="#76b900" fillOpacity={0.2} />
        {/* Gap then empty step */}
        <line x1="148" y1="24" x2="160" y2="16" stroke="#76b900" strokeWidth="1.5" strokeOpacity={0.2} strokeDasharray="2 3" strokeLinecap="round" />
        <rect x="158" y="14" width="28" height="110" rx="1" fill="none" stroke="#76b900" strokeWidth="1" strokeOpacity={0.12} strokeDasharray="3 3" />
      </svg>
    )
  }
  // index === 2: Transformation — polished slides, broken arrow, empty execution
  return (
    <svg viewBox="0 0 200 130" style={{ width: '74%', display: 'block', margin: '0 auto' }}>
      {/* Slide deck */}
      <rect x="10" y="28" width="78" height="54" rx="2" fill="#76b900" fillOpacity={0.07} stroke="#76b900" strokeWidth="1.2" strokeOpacity={0.5} />
      <line x1="22" y1="43" x2="78" y2="43" stroke="#76b900" strokeWidth="2" strokeOpacity={0.65} strokeLinecap="round" />
      <line x1="22" y1="54" x2="70" y2="54" stroke="#76b900" strokeWidth="1" strokeOpacity={0.4} strokeLinecap="round" />
      <line x1="22" y1="63" x2="74" y2="63" stroke="#76b900" strokeWidth="1" strokeOpacity={0.4} strokeLinecap="round" />
      <line x1="22" y1="72" x2="62" y2="72" stroke="#76b900" strokeWidth="1" strokeOpacity={0.3} strokeLinecap="round" />
      {/* Broken arrow */}
      <line x1="96" y1="55" x2="108" y2="55" stroke="#76b900" strokeWidth="1.5" strokeOpacity={0.45} strokeLinecap="round" strokeDasharray="3 2" />
      <polyline points="105,50 111,55 105,60" fill="none" stroke="#76b900" strokeWidth="1.5" strokeOpacity={0.45} strokeLinecap="round" strokeLinejoin="round" />
      {/* Empty execution box */}
      <rect x="118" y="28" width="72" height="54" rx="2" fill="none" stroke="#76b900" strokeWidth="1" strokeOpacity={0.16} strokeDasharray="5 4" />
      <text x="154" y="61" textAnchor="middle" fill="#76b900" fillOpacity={0.18} fontSize="22" fontFamily="Inter,sans-serif" fontWeight="700">?</text>
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
