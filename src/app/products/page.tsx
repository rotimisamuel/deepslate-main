'use client'
import { useRef } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import { gsap, useGSAP } from '@/lib/gsap'

const PRODUCTS = [
  { badge: 'AI Strategy', title: 'AI Readiness Assessment', desc: 'A structured diagnostic evaluating your data maturity, talent, infrastructure, and culture — producing a clear AI readiness score and prioritised action roadmap.', format: '3–5 day engagement', audience: 'Executive teams, CIOs, CDOs', cta: 'Request an assessment' },
  { badge: 'AI Strategy', title: 'AI Strategy Sprint', desc: 'An intensive facilitated workshop taking leadership teams from scattered AI curiosity to a coherent, prioritised AI strategy with clear ownership and timelines.', format: '2-day workshop', audience: 'C-suite, senior leadership', cta: 'Book a Sprint' },
  { badge: 'Digital Transformation', title: 'Digital Transformation Roadmap', desc: 'A costed, sequenced transformation roadmap covering technology, people, process, and governance — aligned to your strategic objectives.', format: '90-day engagement', audience: 'CEOs, COOs, transformation leads', cta: 'Start the conversation' },
  { badge: 'Education', title: 'Executive AI Masterclass', desc: 'For senior leaders who need to understand AI deeply enough to govern it, commission it, and challenge it — without becoming data scientists.', format: 'Half-day or full-day', audience: 'Board members, executives', cta: 'View programme' },
  { badge: 'AI Strategy', title: 'AI Governance Framework', desc: 'A bespoke governance framework covering AI risk, ethics, accountability, and policy — designed to meet regulatory expectations and build organisational confidence.', format: 'Consultancy + documentation', audience: 'Risk, compliance, legal, executives', cta: 'Learn more' },
  { badge: 'Education', title: 'Digital Leadership Academy', desc: 'A modular online programme covering digital strategy, data literacy, AI fundamentals, and change leadership. Self-paced with live cohort sessions.', format: 'Online (self-paced + live)', audience: 'Managers, emerging leaders', cta: 'Enrol now' },
]

export default function ProductsPage() {
  const cardsRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from(cardsRef.current!.querySelectorAll('.product-card'), {
      y: 30, opacity: 0, stagger: 0.08, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' },
    })
  }, { scope: cardsRef })

  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Products"
        title="Tools and programmes built for the AI era."
        description="Practical, expert-led products designed to accelerate your organisation's digital and AI journey."
      />

      <section style={{ padding: '80px 0' }}>
        <div ref={cardsRef} className="products-cards-grid" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {PRODUCTS.map((p) => (
            <article key={p.title} className="product-card" style={{ border: '1px solid #e8e8e8', borderRadius: 2, padding: 30, position: 'relative', display: 'flex', flexDirection: 'column', transition: 'box-shadow 0.2s, border-color 0.2s' }}
              onMouseEnter={(e) => { const el = e.currentTarget; el.style.boxShadow = '0 12px 32px rgba(0,0,0,0.09)'; el.style.borderColor = '#76b900' }}
              onMouseLeave={(e) => { const el = e.currentTarget; el.style.boxShadow = 'none'; el.style.borderColor = '#e8e8e8' }}>
              <span style={{ position: 'absolute', top: 0, left: 0, width: 12, height: 12, background: '#76b900' }} />
              <span style={{ alignSelf: 'flex-start', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#76b900', border: '1px solid #e8e8e8', borderRadius: 2, padding: '5px 10px', marginBottom: 18 }}>{p.badge}</span>
              <h4 style={{ margin: '0 0 12px', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 20, lineHeight: 1.2, color: '#000' }}>{p.title}</h4>
              <p style={{ margin: '0 0 20px', fontSize: 14.5, lineHeight: 1.65, color: '#757575', flex: 1 }}>{p.desc}</p>
              <div style={{ borderTop: '1px solid #e8e8e8', paddingTop: 16, marginBottom: 18, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ fontSize: 13, color: '#1a1a1a' }}>
                  <span style={{ display: 'block', fontWeight: 700, fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#898989', marginBottom: 3 }}>Format</span>
                  {p.format}
                </div>
                <div style={{ fontSize: 13, color: '#1a1a1a' }}>
                  <span style={{ display: 'block', fontWeight: 700, fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#898989', marginBottom: 3 }}>Audience</span>
                  {p.audience}
                </div>
              </div>
              <Link href="/contact" className="btn-ghost-link">{p.cta}</Link>
            </article>
          ))}
        </div>
      </section>

      <section style={{ background: '#000', color: '#fff', padding: '84px 0' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 48px', textAlign: 'center' }}>
          <h2 style={{ margin: '0 0 16px', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 40, lineHeight: 1.08 }}>Not sure where to start?</h2>
          <p style={{ margin: '0 0 30px', fontSize: 17, lineHeight: 1.6, color: 'rgba(255,255,255,0.62)' }}>Tell us about your situation and we&apos;ll point you to the right starting point.</p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: 16, padding: '15px 36px' }}>Get in touch</Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
