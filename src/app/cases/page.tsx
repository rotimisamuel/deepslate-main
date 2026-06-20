'use client'
import { useRef, useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import { gsap, useGSAP } from '@/lib/gsap'

type Cat = 'all' | 'ai' | 'dt' | 'edu'

const ALL_CASES = [
  {
    cat: 'ai' as Cat,
    badge: 'AI Strategy',
    sector: 'Financial Services · UK',
    title: 'Building an enterprise AI strategy for a mid-size bank',
    challenge: 'A mid-size UK bank had invested significantly in AI tooling but lacked a coherent strategy. Teams were running disconnected pilots with no shared framework for prioritisation, governance, or measurement.',
    approach: 'We ran an 8-week AI strategy engagement: assessing maturity across six dimensions, facilitating executive alignment workshops, and producing a prioritised AI roadmap with governance structures and success metrics.',
    stats: [{ n: '3×', l: 'AI use cases prioritised' }, { n: '8wk', l: 'Delivery timeline' }, { n: 'Board', l: 'Alignment achieved' }],
    quote: '"DeepSlate gave us the clarity we\'d been searching for. We now have a strategy we can defend to the board and execute with confidence."',
    cite: '— Chief Data Officer, UK Bank (anonymised)',
    cta: 'Work with us on AI Strategy',
  },
  {
    cat: 'dt' as Cat,
    badge: 'Digital Transformation',
    sector: 'Public Sector · Central Government',
    title: 'Digital operating model redesign for a government agency',
    challenge: 'A central government agency was struggling to deliver digital services at pace. Legacy operating structures and fragmented technology teams were creating bottlenecks and eroding public trust.',
    approach: "Working with the agency's leadership over 12 weeks, we redesigned their digital operating model — introducing product-led teams, service ownership, and a governance framework balancing agility with accountability.",
    stats: [{ n: '40%', l: 'Faster delivery cycles' }, { n: '12wk', l: 'Engagement duration' }, { n: '5', l: 'Product teams launched' }],
    quote: '"The new operating model has fundamentally changed how we work. We\'re delivering better services faster — and our teams are energised again."',
    cite: '— Director of Digital, Central Government Agency (anonymised)',
    cta: 'Work with us on Digital Transformation',
  },
  {
    cat: 'edu' as Cat,
    badge: 'Education',
    sector: 'FTSE 250 · Manufacturing',
    title: 'AI leadership programme for 120 senior managers',
    challenge: 'A FTSE 250 manufacturer was rolling out AI tools across operations. Senior managers lacked the confidence and vocabulary to lead their teams through the change — creating anxiety and inconsistent adoption.',
    approach: 'We designed and delivered a bespoke 2-day AI Leadership Programme for four cohorts of 30 managers, combining AI fundamentals with practical decision-making frameworks and change leadership tools.',
    stats: [{ n: '120', l: 'Leaders trained' }, { n: '94%', l: 'Satisfaction rating' }, { n: '4', l: 'Cohorts delivered' }],
    quote: '"Our managers came out genuinely excited — not afraid. That shift in mindset was worth more than any tool we could have deployed."',
    cite: '— Chief People Officer, FTSE 250 Manufacturer (anonymised)',
    cta: 'Commission a bespoke programme',
  },
  {
    cat: 'ai' as Cat,
    badge: 'AI Governance',
    sector: 'NHS Trust · Healthcare',
    title: 'AI governance framework for a large NHS Trust',
    challenge: 'An NHS Trust was being approached by AI vendors and needed a robust governance framework before any deployments — covering ethics, procurement, clinical risk, and staff impact.',
    approach: 'We developed a comprehensive AI Governance Framework tailored to NHS context: an AI ethics policy, vendor assessment toolkit, clinical AI risk register template, and board-level reporting dashboard.',
    stats: [{ n: '6wk', l: 'Delivery timeline' }, { n: '4', l: 'Policy documents' }, { n: 'Board', l: 'Approved framework' }],
    quote: '"We now have the confidence to engage with AI vendors from a position of strength. The framework is already being shared across the wider ICS."',
    cite: '— Medical Director, NHS Trust (anonymised)',
    cta: 'Work with us on AI Governance',
  },
]

const FILTERS: { label: string; key: Cat }[] = [
  { label: 'All', key: 'all' },
  { label: 'AI Strategy', key: 'ai' },
  { label: 'Digital Transformation', key: 'dt' },
  { label: 'Education', key: 'edu' },
]

export default function CasesPage() {
  const [filter, setFilter] = useState<Cat>('all')
  const cardsRef = useRef<HTMLDivElement>(null)

  const visible = filter === 'all' ? ALL_CASES : ALL_CASES.filter((c) => c.cat === filter)

  useGSAP(() => {
    gsap.from(cardsRef.current!.querySelectorAll('.case-card'), {
      y: 30, opacity: 0, stagger: 0.1, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' },
    })
  }, { scope: cardsRef })

  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Case Studies"
        title="Real challenges. Measurable outcomes."
        description="A selection of engagements across digital transformation, AI strategy, and executive education."
      />

      <section style={{ padding: '64px 0 80px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px' }}>
          {/* Filters */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 48 }}>
            {FILTERS.map((f) => (
              <button key={f.key} onClick={() => setFilter(f.key)}
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 14, borderRadius: 2, padding: '10px 20px', cursor: 'pointer', border: '1px solid', transition: '0.15s', borderColor: filter === f.key ? '#000' : '#e8e8e8', background: filter === f.key ? '#000' : '#fff', color: filter === f.key ? '#fff' : '#000' }}>
                {f.label}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div ref={cardsRef} className="cases-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {visible.map((c) => (
              <article key={c.title} className="case-card" style={{ border: '1px solid #e8e8e8', borderRadius: 2, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ background: '#000', padding: 30, position: 'relative' }}>
                  <span style={{ position: 'absolute', top: 0, left: 0, width: 12, height: 12, background: '#76b900' }} />
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#000', background: '#76b900', borderRadius: 2, padding: '5px 10px' }}>{c.badge}</span>
                  <p style={{ margin: '18px 0 8px', fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>{c.sector}</p>
                  <h3 style={{ margin: 0, fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 22, lineHeight: 1.2, color: '#fff' }}>{c.title}</h3>
                </div>
                <div style={{ padding: 30, display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <p style={{ margin: '0 0 6px', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#76b900' }}>The Challenge</p>
                  <p style={{ margin: '0 0 18px', fontSize: 14.5, lineHeight: 1.65, color: '#1a1a1a' }}>{c.challenge}</p>
                  <p style={{ margin: '0 0 6px', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#76b900' }}>Our Approach</p>
                  <p style={{ margin: '0 0 24px', fontSize: 14.5, lineHeight: 1.65, color: '#1a1a1a' }}>{c.approach}</p>
                  <div style={{ display: 'flex', borderTop: '1px solid #e8e8e8', borderBottom: '1px solid #e8e8e8', marginBottom: 24 }}>
                    {c.stats.map((s, i) => (
                      <div key={s.l} style={{ flex: 1, padding: '18px 12px', borderLeft: i === 0 ? 'none' : '1px solid #e8e8e8' }}>
                        <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 26, color: '#000', lineHeight: 1 }}>{s.n}</div>
                        <div style={{ fontSize: 12, color: '#757575', marginTop: 6, lineHeight: 1.3 }}>{s.l}</div>
                      </div>
                    ))}
                  </div>
                  <blockquote style={{ margin: '0 0 22px', paddingLeft: 18, borderLeft: '3px solid #76b900' }}>
                    <p style={{ margin: '0 0 8px', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 15, lineHeight: 1.5, color: '#000' }}>{c.quote}</p>
                    <cite style={{ fontSize: 12, fontStyle: 'normal', color: '#898989' }}>{c.cite}</cite>
                  </blockquote>
                  <Link href="/contact" className="btn-ghost-link" style={{ marginTop: 'auto' }}>{c.cta}</Link>
                </div>
              </article>
            ))}
          </div>

          {/* CTA band */}
          <div style={{ marginTop: 56, background: '#000', borderRadius: 2, padding: 56, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <span style={{ position: 'absolute', top: 0, left: 0, width: 14, height: 14, background: '#76b900' }} />
            <h3 style={{ margin: '0 0 12px', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 30, color: '#fff' }}>Every engagement starts with a conversation.</h3>
            <p style={{ margin: '0 0 30px', fontSize: 16, color: 'rgba(255,255,255,0.6)' }}>Tell us about your challenge — we&apos;ll tell you how we&apos;d approach it.</p>
            <Link href="/contact" className="btn-primary" style={{ fontSize: 16, padding: '15px 36px' }}>Work with us</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
