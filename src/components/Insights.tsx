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
        {/* Grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(118,185,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(118,185,0,0.06) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        {/* Article number */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            fontSize: 64,
            lineHeight: 1,
            color: 'rgba(118,185,0,0.15)',
            letterSpacing: '-0.04em',
          }}
        >
          {String(index + 1).padStart(2, '0')}
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
