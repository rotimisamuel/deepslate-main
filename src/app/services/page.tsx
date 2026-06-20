'use client'
import { useRef } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import { gsap, useGSAP } from '@/lib/gsap'

function BulletList({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
      {items.map((item) => (
        <li key={item} style={{ display: 'flex', gap: 14, fontSize: 15, lineHeight: 1.6, color: '#1a1a1a' }}>
          <span style={{ width: 7, height: 7, background: '#76b900', flexShrink: 0, marginTop: 7 }} />
          {item}
        </li>
      ))}
    </ul>
  )
}

function ServiceBlock({ num, title, description, bullets, right, last }: {
  num: string; title: string; description: string; bullets: string[]; right: React.ReactNode; last?: boolean
}) {
  const ref = useRef<HTMLElement>(null)
  useGSAP(() => {
    gsap.from(['.s-left-' + num, '.s-right-' + num], {
      y: 40, opacity: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 75%' },
    })
  }, { scope: ref })

  return (
    <section ref={ref} style={{ padding: '80px 0', borderBottom: last ? 'none' : '1px solid #e8e8e8' }}>
      <div className="two-col-grid" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'start' }}>
        <div className={`s-left-${num}`}>
          <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 46, color: '#e8e8e8', lineHeight: 1, marginBottom: 16 }}>{num}</div>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#76b900', marginBottom: 14 }}>Service</div>
          <h3 style={{ margin: '0 0 16px', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 30, lineHeight: 1.1, color: '#000' }}>{title}</h3>
          <p style={{ margin: '0 0 24px', fontSize: 16, lineHeight: 1.65, color: '#1a1a1a' }}>{description}</p>
          <BulletList items={bullets} />
        </div>
        <div className={`s-right-${num}`}>{right}</div>
      </div>
    </section>
  )
}

export default function ServicesPage() {
  const pageRef = useRef<HTMLDivElement>(null)

  return (
    <main ref={pageRef}>
      <Navbar />
      <PageHero
        eyebrow="What we do"
        title="Strategy that translates into outcomes, not slide decks."
        description="Three interconnected service areas, delivered with rigour and designed for lasting impact."
      />

      <ServiceBlock num="01" title="Digital Transformation"
        description="We help organisations reimagine their processes, technology, and culture. Not a one-off project — a sustained capability for continuous change."
        bullets={['Transformation strategy and roadmapping', 'Operating model design', 'Change management and culture', 'Technology architecture advisory', 'Digital maturity assessments']}
        right={
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {[
              { n: '01', title: 'Discover', desc: 'Understand your current state, ambitions, and constraints through structured assessment.' },
              { n: '02', title: 'Design', desc: 'Co-create a transformation roadmap that is costed, sequenced, and grounded in reality.' },
              { n: '03', title: 'Deliver', desc: 'Support execution with embedded advisors, change management, and programme governance.' },
              { n: '04', title: 'Sustain', desc: 'Build internal capability so the transformation outlasts the engagement.' },
            ].map((s) => (
              <div key={s.n} style={{ border: '1px solid #e8e8e8', borderRadius: 2, padding: 24, position: 'relative' }}>
                <span style={{ position: 'absolute', top: 0, left: 0, width: 12, height: 12, background: '#76b900' }} />
                <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 13, color: '#76b900', marginBottom: 10 }}>{s.n}</div>
                <h5 style={{ margin: '0 0 8px', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 17, color: '#000' }}>{s.title}</h5>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: '#757575' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        }
      />

      <ServiceBlock num="02" title="AI Strategy"
        description="We help leaders ask the right questions before buying the wrong answers. AI strategy starts with purpose, not product selection."
        bullets={['AI readiness assessments', 'AI governance frameworks', 'Use-case identification and prioritisation', 'AI ethics and responsible AI policy', 'Board and executive advisory']}
        right={
          <div style={{ background: '#000', borderRadius: 2, padding: 48, position: 'relative' }}>
            <span style={{ position: 'absolute', top: 0, left: 0, width: 14, height: 14, background: '#76b900' }} />
            <p style={{ margin: '0 0 22px', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 26, lineHeight: 1.25, color: '#fff' }}>
              &ldquo;Most organisations are not ready for AI. We help them get there.&rdquo;
            </p>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.6)' }}>
              Our AI Strategy practice combines technical fluency with strategic discipline to move organisations from AI curiosity to AI confidence — with a clear plan, responsible governance, and measurable outcomes.
            </p>
          </div>
        }
      />

      <ServiceBlock num="03" title="Education" last
        description="Executive programmes, leadership masterclasses, and bespoke corporate learning — built for the decisions your people will actually face."
        bullets={['Executive workshops (in-person and virtual)', 'Leadership masterclasses', 'Bespoke corporate programmes', 'Online and self-paced learning', 'Board-level AI briefings']}
        right={
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {[
              { n: '4', title: 'Delivery modes', sub: 'In-person · Virtual\nHybrid · Self-paced' },
              { n: '6+', title: 'Core programmes', sub: 'Covering AI, digital transformation, data strategy & leadership' },
              { n: '∞', title: 'Bespoke commissions', sub: "Tailored to your organisation's context and challenges" },
            ].map((s) => (
              <div key={s.title} style={{ background: '#f7f7f7', borderRadius: 2, padding: 24 }}>
                <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 34, color: '#000', lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#000', margin: '8px 0 6px' }}>{s.title}</div>
                <div style={{ fontSize: 13, lineHeight: 1.5, color: '#757575', whiteSpace: 'pre-line' }}>{s.sub}</div>
              </div>
            ))}
            <div style={{ background: '#000', borderRadius: 2, padding: 24 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#76b900', marginBottom: 12 }}>Audiences</div>
              <div style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
                Executives &amp; boards<br />Public sector leaders<br />Corporate teams<br />Individual practitioners
              </div>
            </div>
          </div>
        }
      />

      <section style={{ background: '#000', color: '#fff', padding: '84px 0' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 48px', textAlign: 'center' }}>
          <h2 style={{ margin: '0 0 16px', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 40, lineHeight: 1.08 }}>
            Let&apos;s start a conversation.
          </h2>
          <p style={{ margin: '0 0 30px', fontSize: 17, lineHeight: 1.6, color: 'rgba(255,255,255,0.62)' }}>
            Every engagement begins with understanding your situation. No templates, no off-the-shelf answers.
          </p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: 16, padding: '15px 36px' }}>Get in touch</Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
