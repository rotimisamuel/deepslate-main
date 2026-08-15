'use client'
import { useRef } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import { gsap, useGSAP } from '@/lib/gsap'

const TEAM = [
  { href: '/team/founder', name: 'Rotimi Samuels, PhD', role: 'Founder & Managing Director', focus: 'Digital Transformation · AI Strategy', bio: 'Academic, practitioner, and strategic advisor with deep experience in digital transformation and AI strategy across public and private sectors.' },
  { href: '/team/ai', name: 'Tamie Stephen', role: 'AI Strategy Lead', focus: 'AI Governance · Data Strategy', bio: 'Specialist in AI governance and data strategy, advising board-level clients on responsible AI adoption and policy frameworks.' },
  { href: '/team/education', name: 'Laud Ochei Charles, PhD', role: 'Head of Education', focus: 'Executive Learning · Programme Design', bio: 'Expert in executive education with a track record of designing and delivering high-impact leadership programmes for senior audiences.' },
]

const VALUES = [
  { label: 'Rigour', title: 'Precise and evidence-based', desc: 'We say what we think, back it with reasoning, and avoid comfortable generalities.' },
  { label: 'Pragmatism', title: 'Ideas must translate into action', desc: 'We measure success by what changes in practice, not what gets written in reports.' },
  { label: 'Humanity', title: 'People before technology', desc: 'Technology is a means, never an end. We hold organisations accountable to this principle.' },
]

export default function AboutPage() {
  const missionRef = useRef<HTMLElement>(null)
  const teamRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.from(missionRef.current!.querySelectorAll('.mission-left, .mission-right'), {
      y: 40, opacity: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: missionRef.current, start: 'top 75%' },
    })
  }, { scope: missionRef })

  useGSAP(() => {
    gsap.from(teamRef.current!.querySelectorAll('.team-card'), {
      y: 30, opacity: 0, stagger: 0.12, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: teamRef.current, start: 'top 80%' },
    })
  }, { scope: teamRef })

  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="About us"
        title="We believe transformation is fundamentally a human endeavour."
        description="Technology enables change. People make it happen — or stop it in its tracks."
      />

      {/* Mission */}
      <section ref={missionRef} style={{ padding: '80px 0', borderBottom: '1px solid #e8e8e8' }}>
        <div className="two-col-grid" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'start' }}>
          <div className="mission-left">
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#76b900', marginBottom: 14 }}>Our mission</div>
            <h2 style={{ margin: '0 0 24px', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 30, lineHeight: 1.12, color: '#000' }}>
              Built at the intersection of strategy, technology, and people.
            </h2>
            <p style={{ margin: '0 0 20px', fontSize: 16, lineHeight: 1.7, color: '#1a1a1a' }}>
              DeepSlate was founded on a simple observation: most organisations struggling with digital transformation aren&apos;t failing because of technology. They&apos;re failing because of leadership, culture, and capability gaps that no software can fix.
            </p>
            <p style={{ margin: '0 0 28px', fontSize: 16, lineHeight: 1.7, color: '#1a1a1a' }}>
              We exist to close those gaps — through rigorous consulting, credible AI strategy, and education programmes that give leaders the frameworks and confidence to act.
            </p>
            <Link href="/contact" className="btn-primary">Work with us</Link>
          </div>
          <div className="mission-right" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {VALUES.map((v) => (
              <div key={v.label} style={{ border: '1px solid #e8e8e8', borderRadius: 2, padding: 28, position: 'relative' }}>
                <span style={{ position: 'absolute', top: 0, left: 0, width: 12, height: 12, background: '#76b900' }} />
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#76b900', marginBottom: 10 }}>{v.label}</div>
                <h5 style={{ margin: '0 0 8px', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 18, color: '#000' }}>{v.title}</h5>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: '#757575' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section ref={teamRef} style={{ padding: '80px 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px' }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#76b900', marginBottom: 14 }}>The team</div>
          <h2 style={{ margin: '0 0 48px', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 34, lineHeight: 1.1, color: '#000' }}>
            Practitioners, not just advisors.
          </h2>
          <div className="team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {TEAM.map((m) => (
              <Link key={m.href} href={m.href} className="team-card" style={{ textDecoration: 'none', border: '1px solid #e8e8e8', borderRadius: 2, overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'border-color 0.2s, box-shadow 0.2s' }}
                onMouseEnter={(e) => { const el = e.currentTarget; el.style.borderColor = '#76b900'; el.style.boxShadow = '0 12px 32px rgba(0,0,0,0.09)' }}
                onMouseLeave={(e) => { const el = e.currentTarget; el.style.borderColor = '#e8e8e8'; el.style.boxShadow = 'none' }}>
                <div style={{ padding: 26 }}>
                  <h4 style={{ margin: '0 0 4px', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 19, color: '#000' }}>{m.name}</h4>
                  <p style={{ margin: '0 0 2px', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 13, color: '#76b900' }}>{m.role}</p>
                  <p style={{ margin: '0 0 14px', fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#898989' }}>{m.focus}</p>
                  <p style={{ margin: '0 0 16px', fontSize: 14, lineHeight: 1.65, color: '#757575' }}>{m.bio}</p>
                  <span className="btn-ghost-link" style={{ fontSize: 13 }}>View bio</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#000', color: '#fff', padding: '84px 0' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 48px', textAlign: 'center' }}>
          <h2 style={{ margin: '0 0 16px', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 40, lineHeight: 1.08 }}>Work with us.</h2>
          <p style={{ margin: '0 0 30px', fontSize: 17, lineHeight: 1.6, color: 'rgba(255,255,255,0.62)' }}>Tell us about your situation. Every engagement starts with understanding.</p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: 16, padding: '15px 36px' }}>Get in touch</Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
