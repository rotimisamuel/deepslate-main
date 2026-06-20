'use client'
import { useRef } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import { gsap, useGSAP } from '@/lib/gsap'

const PROGRAMMES = [
  {
    badge: 'AI Strategy',
    title: 'AI Readiness Assessment',
    desc: 'A structured diagnostic evaluating your data maturity, talent, infrastructure, and culture — producing a clear AI readiness score and a prioritised action roadmap.',
    details: ['Duration: 3–5 day engagement', 'Format: Workshops + interviews + analysis', 'Output: Written readiness report + action plan'],
    audience: 'Executive teams, CIOs, CDOs, Transformation leads',
    cta: 'Request an assessment',
    dark: false,
  },
  {
    badge: 'AI Strategy',
    title: 'AI Strategy Sprint',
    desc: 'An intensive facilitated workshop that takes leadership teams from scattered AI curiosity to a coherent, prioritised AI strategy with clear ownership and timelines.',
    details: ['Duration: 2-day intensive workshop', 'Format: In-person or virtual', 'Output: Strategy canvas + prioritised roadmap'],
    audience: 'C-suite, senior leadership, strategy teams',
    cta: 'Book a Sprint',
    dark: false,
  },
  {
    badge: 'Digital Transformation',
    title: 'Digital Transformation Roadmap',
    desc: 'A costed, sequenced transformation roadmap covering technology, people, process, and governance — aligned to your strategic objectives and realistic constraints.',
    details: ['Duration: 90-day engagement', 'Format: Embedded advisory', 'Output: Full transformation roadmap + governance pack'],
    audience: 'CEOs, COOs, Digital Directors, Transformation leads',
    cta: 'Start the conversation',
    dark: false,
  },
  {
    badge: 'Education',
    title: 'Executive AI Masterclass',
    desc: 'For senior leaders who need to understand AI deeply enough to govern it, commission it, and challenge it — without becoming data scientists. Rigorous. Practical. No hype.',
    details: ['Duration: Half-day or full-day', 'Format: In-person or virtual delivery', 'Output: Decision frameworks + reference pack'],
    audience: 'Board members, C-suite executives, Non-executive Directors',
    cta: 'View programme details',
    dark: false,
  },
  {
    badge: 'AI Governance',
    title: 'AI Governance Framework',
    desc: 'A bespoke AI governance framework covering risk, ethics, accountability, and policy — designed to meet emerging regulatory expectations and build organisational confidence in AI.',
    details: ['Duration: Consultancy + documentation', 'Format: Workshops + policy drafting', 'Output: Full governance framework pack'],
    audience: 'Risk, compliance, legal, technology executives',
    cta: 'Commission a framework',
    dark: false,
  },
  {
    badge: 'Bespoke',
    title: 'Bespoke Commission',
    desc: "Can't find exactly what you need? We design and deliver bespoke programmes for organisations with unique challenges — from board-level AI briefings to company-wide digital capability programmes.",
    details: ['Duration: To be agreed', 'Format: Fully bespoke', 'Output: As agreed with client'],
    audience: 'Any senior team or organisation',
    cta: 'Tell us what you need',
    dark: true,
  },
]

export default function ProgrammesPage() {
  const cardsRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from(cardsRef.current!.querySelectorAll('.prog-card'), {
      y: 30, opacity: 0, stagger: 0.09, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' },
    })
  }, { scope: cardsRef })

  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Programmes"
        title="Built for the decisions your people will actually face."
        description="Executive programmes, leadership masterclasses, and bespoke corporate learning."
      />

      <section style={{ padding: '80px 0' }}>
        <div ref={cardsRef} className="products-cards-grid" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {PROGRAMMES.map((p) => (
            <article key={p.title} className="prog-card" style={{ border: `1px solid ${p.dark ? '#333' : '#e8e8e8'}`, borderRadius: 2, padding: 30, position: 'relative', display: 'flex', flexDirection: 'column', background: p.dark ? '#060606' : '#fff', transition: 'box-shadow 0.2s, border-color 0.2s' }}
              onMouseEnter={(e) => { const el = e.currentTarget; el.style.boxShadow = p.dark ? '0 12px 32px rgba(118,185,0,0.15)' : '0 12px 32px rgba(0,0,0,0.09)'; el.style.borderColor = '#76b900' }}
              onMouseLeave={(e) => { const el = e.currentTarget; el.style.boxShadow = 'none'; el.style.borderColor = p.dark ? '#333' : '#e8e8e8' }}>
              <span style={{ position: 'absolute', top: 0, left: 0, width: 12, height: 12, background: '#76b900' }} />
              <span style={{ alignSelf: 'flex-start', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: p.dark ? '#000' : '#76b900', background: p.dark ? '#76b900' : 'transparent', border: `1px solid ${p.dark ? '#76b900' : '#e8e8e8'}`, borderRadius: 2, padding: '5px 10px', marginBottom: 18 }}>{p.badge}</span>
              <h4 style={{ margin: '0 0 12px', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 20, lineHeight: 1.2, color: p.dark ? '#fff' : '#000' }}>{p.title}</h4>
              <p style={{ margin: '0 0 18px', fontSize: 14.5, lineHeight: 1.65, color: p.dark ? 'rgba(255,255,255,0.65)' : '#757575', flex: 1 }}>{p.desc}</p>
              <div style={{ borderTop: `1px solid ${p.dark ? 'rgba(255,255,255,0.08)' : '#e8e8e8'}`, paddingTop: 16, marginBottom: 18 }}>
                {p.details.map((d) => (
                  <div key={d} style={{ display: 'flex', gap: 10, fontSize: 13, lineHeight: 1.5, color: p.dark ? 'rgba(255,255,255,0.55)' : '#757575', marginBottom: 6 }}>
                    <span style={{ width: 5, height: 5, background: '#76b900', flexShrink: 0, marginTop: 6 }} />
                    {d}
                  </div>
                ))}
              </div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: p.dark ? 'rgba(255,255,255,0.35)' : '#898989', marginBottom: 18 }}>
                {p.audience}
              </div>
              <Link href="/contact" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 14, color: '#76b900', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 'auto' }}>
                {p.cta} →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section style={{ background: '#000', color: '#fff', padding: '84px 0' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 48px', textAlign: 'center' }}>
          <h2 style={{ margin: '0 0 16px', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 40, lineHeight: 1.08 }}>Looking for something specific?</h2>
          <p style={{ margin: '0 0 30px', fontSize: 17, lineHeight: 1.6, color: 'rgba(255,255,255,0.62)' }}>Every bespoke commission starts with a conversation about your organisation&apos;s real needs.</p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: 16, padding: '15px 36px' }}>Get in touch</Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
