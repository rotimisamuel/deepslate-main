'use client'
import { useRef, useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import { gsap, useGSAP } from '@/lib/gsap'

const ARTICLES = [
  { slug: 'ai-leadership', cat: 'AI Strategy', meta: '14 Feb 2025 · 8 min read', title: "AI strategy is not an IT question. It's a leadership question.", excerpt: 'Most organisations approach AI as a technology deployment problem. The ones that succeed treat it as a leadership challenge first — and a technology challenge second.' },
  { slug: 'edu-fails', cat: 'Education', meta: '3 Feb 2025 · 5 min read', title: 'Why executive AI education fails — and what to do about it.', excerpt: "Too much AI training talks about the technology. Not enough trains leaders on the decisions they'll actually face." },
  { slug: 'slide-deck', cat: 'Digital Transformation', meta: '22 Jan 2025 · 6 min read', title: 'Digital transformation fails when strategy stops at the slide deck.', excerpt: "Execution is where transformation lives or dies. Here's how to close the gap between ambition and action." },
  { slug: 'board-ai', cat: 'AI Strategy', meta: '10 Jan 2025 · 7 min read', title: "The board's AI blind spot: governance without understanding.", excerpt: "Boards are increasingly being asked to govern AI. Most aren't yet equipped to do so. Here's what good AI governance actually looks like." },
  { slug: 'culture', cat: 'Digital Transformation', meta: '5 Jan 2025 · 4 min read', title: 'The quiet failure of digital transformation: why culture beats technology every time.', excerpt: 'The hardest part of transformation was never the tech. It was always the people — and that matters more than ever.' },
  { slug: 'stop-buying', cat: 'Opinion', meta: '18 Dec 2024 · 5 min read', title: 'Stop buying AI. Start thinking about AI.', excerpt: 'The rush to adopt AI tools is producing a new kind of organisational debt. Slow down, think strategically, then move with purpose.' },
]

export default function InsightsPage() {
  const cardsRef = useRef<HTMLDivElement>(null)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  useGSAP(() => {
    gsap.from(cardsRef.current!.querySelectorAll('.insight-card-inner'), {
      y: 30, opacity: 0, stagger: 0.08, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' },
    })
  }, { scope: cardsRef })

  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Insights"
        title="Ideas that move organisations forward."
        description="Thinking on digital transformation, AI strategy, and the future of leadership."
      />

      <section style={{ padding: '80px 0' }}>
        <div ref={cardsRef} className="insights-grid" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {ARTICLES.map((a, i) => (
            <Link key={a.slug} href={`/insights/${a.slug}`} className="insight-card-inner" style={{ textDecoration: 'none', border: '1px solid #e8e8e8', borderRadius: 2, overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s' }}
              onMouseEnter={(e) => { const el = e.currentTarget; el.style.transform = 'translateY(-5px)'; el.style.boxShadow = '0 16px 40px rgba(0,0,0,0.09)'; el.style.borderColor = '#76b900' }}
              onMouseLeave={(e) => { const el = e.currentTarget; el.style.transform = 'none'; el.style.boxShadow = 'none'; el.style.borderColor = '#e8e8e8' }}>
              <div style={{ height: 180, background: '#060606', display: 'flex', alignItems: 'flex-end', padding: 18, position: 'relative', overflow: 'hidden' }}>
                <img src={`/images/insight-${a.slug}.jpg`} alt="" aria-hidden
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.35 }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 70%)' }} />
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#000', background: '#76b900', borderRadius: 2, padding: '5px 10px', position: 'relative', zIndex: 1 }}>{a.cat}</span>
              </div>
              <div style={{ padding: 26, display: 'flex', flexDirection: 'column', flex: 1 }}>
                <p style={{ margin: '0 0 12px', fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#898989' }}>{a.meta}</p>
                <h4 style={{ margin: '0 0 12px', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 19, lineHeight: 1.3, color: '#000' }}>{a.title}</h4>
                <p style={{ margin: '0 0 16px', fontSize: 14, lineHeight: 1.65, color: '#757575', flex: 1 }}>{a.excerpt}</p>
                <span className="btn-ghost-link" style={{ fontSize: 13 }}>Read more</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ background: '#f7f7f7', padding: '72px 0' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 48px', textAlign: 'center' }}>
          <h3 style={{ margin: '0 0 24px', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 30, lineHeight: 1.12, color: '#000' }}>
            Get our latest thinking delivered to your inbox.
          </h3>
          {subscribed ? (
            <p style={{ fontSize: 16, color: '#76b900', fontWeight: 700 }}>✓ You&apos;re subscribed. Thank you!</p>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); if (email) setSubscribed(true) }} style={{ display: 'flex', gap: 10, maxWidth: 460, margin: '0 auto' }}>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" required
                style={{ flex: 1, background: '#fff', border: '1px solid #e8e8e8', borderRadius: 2, fontFamily: 'Inter, sans-serif', fontSize: 15, padding: '13px 16px', outline: 'none', color: '#000' }} />
              <button type="submit" style={{ background: '#76b900', color: '#000', border: 'none', borderRadius: 2, fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 15, padding: '13px 24px', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
