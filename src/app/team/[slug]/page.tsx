'use client'
export const runtime = 'edge'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const BIOS: Record<string, {
  name: string; role: string; focus: string[]; bio: string[]
  expertise: string[]; education: string[]
}> = {
  founder: {
    name: 'Rotimi Ogunsakin, PhD',
    role: 'Founder & Managing Director',
    focus: ['Digital Transformation', 'AI Strategy', 'Executive Education'],
    bio: [
      'Rotimi Ogunsakin is an academic, practitioner, and strategic advisor with deep experience in digital transformation and AI strategy across public and private sectors.',
      "As Founder and Managing Director of DeepSlate, Rotimi brings together a rare combination of academic rigour and real-world delivery experience. He has advised boards and executive teams across financial services, healthcare, government, and education on their most complex digital and AI challenges.",
      "Rotimi holds a PhD and has published widely on digital transformation, technology adoption, and organisational change. He brings this evidence base to every client engagement — ensuring that DeepSlate's advice is grounded in research, not just instinct.",
    ],
    expertise: ['Digital transformation strategy', 'AI governance and policy', 'Executive leadership development', 'Public sector digital reform', 'Organisational change management'],
    education: ['PhD, [University]', 'MBA', 'Various executive education qualifications'],
  },
  ai: {
    name: 'Gold Samuels',
    role: 'AI Strategy Lead',
    focus: ['AI Governance', 'Data Strategy', 'Responsible AI'],
    bio: [
      'Gold Samuels is a specialist in AI governance and data strategy, advising board-level clients on responsible AI adoption and policy frameworks.',
      'With a background spanning data science, technology strategy, and organisational risk, Gold brings a distinctive perspective to AI strategy engagements — combining technical depth with an understanding of how organisations actually make decisions.',
      "Gold leads DeepSlate's AI strategy practice, working with executive teams to navigate the rapidly evolving AI landscape — from initial readiness assessment through to governance framework development and ongoing advisory.",
    ],
    expertise: ['AI readiness assessment', 'AI governance frameworks', 'Data strategy', 'Responsible AI policy', 'AI risk management'],
    education: ['MSc Data Science', 'BSc Computer Science', 'Certified in AI Ethics'],
  },
  education: {
    name: 'Laud Ochei Charles, PhD',
    role: 'Head of Education',
    focus: ['Executive Learning', 'Programme Design', 'Leadership Development'],
    bio: [
      'Laud Ochei Charles is an expert in executive education with a track record of designing and delivering high-impact leadership programmes for senior audiences across multiple sectors.',
      'With a PhD in Education and extensive experience in corporate learning design, Laud leads the development and delivery of all DeepSlate educational programmes — ensuring they combine intellectual rigour with practical applicability.',
      "Laud's approach to executive education is grounded in adult learning theory and a deep understanding of the constraints and pressures facing senior leaders. Programmes are designed to be immediately useful — not just intellectually stimulating.",
    ],
    expertise: ['Executive programme design', 'Leadership development', 'AI education for non-technical audiences', 'Digital capability building', 'Facilitation and coaching'],
    education: ['PhD, Education', 'MA Leadership & Management', 'Post-graduate Certificate in Executive Education'],
  },
}

export default function TeamBioPage({ params }: { params: { slug: string } }) {
  const member = BIOS[params.slug]
  if (!member) notFound()

  return (
    <main>
      <Navbar />

      {/* Bio hero */}
      <section style={{ background: '#000', color: '#fff', padding: '128px 0 64px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 60%, rgba(118,185,0,0.07) 0%, transparent 60%)' }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px', position: 'relative', zIndex: 1 }}>
          {/* Name/role */}
          <div>
            {member.focus.map((f) => (
              <span key={f} style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#76b900', border: '1px solid rgba(118,185,0,0.3)', borderRadius: 2, padding: '4px 10px', marginRight: 8, marginBottom: 8 }}>{f}</span>
            ))}
            <h1 style={{ margin: '18px 0 6px', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 3.5vw, 40px)', lineHeight: 1.1 }}>{member.name}</h1>
            <p style={{ margin: 0, fontSize: 16, color: 'rgba(255,255,255,0.55)', fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>{member.role}</p>
          </div>
        </div>
      </section>

      {/* Bio content */}
      <section style={{ padding: '64px 0 80px' }}>
        <div className="bio-grid" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64, alignItems: 'start' }}>
          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#76b900', marginBottom: 16 }}>Expertise</div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {member.expertise.map((e) => (
                  <li key={e} style={{ display: 'flex', gap: 10, fontSize: 14, color: '#1a1a1a', lineHeight: 1.5 }}>
                    <span style={{ width: 6, height: 6, background: '#76b900', flexShrink: 0, marginTop: 5 }} />
                    {e}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ borderTop: '1px solid #e8e8e8', paddingTop: 28 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#76b900', marginBottom: 16 }}>Education</div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {member.education.map((e) => (
                  <li key={e} style={{ fontSize: 13.5, color: '#757575', lineHeight: 1.5 }}>{e}</li>
                ))}
              </ul>
            </div>
            <div style={{ borderTop: '1px solid #e8e8e8', paddingTop: 28 }}>
              <Link href="/contact" className="btn-primary" style={{ display: 'block', textAlign: 'center' }}>Work with us</Link>
            </div>
          </div>

          {/* Bio paragraphs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {member.bio.map((para, i) => (
              <p key={i} style={{ margin: 0, fontSize: 17, lineHeight: 1.75, color: '#1a1a1a' }}>{para}</p>
            ))}
            <div style={{ marginTop: 20, padding: '28px 28px 28px 32px', borderLeft: '3px solid #76b900', background: '#f7f7f7' }}>
              <p style={{ margin: 0, fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 16, lineHeight: 1.5, color: '#000' }}>
                &ldquo;Interested in working together? Get in touch to discuss your situation.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team navigation */}
      <section style={{ borderTop: '1px solid #e8e8e8', padding: '40px 0 64px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px' }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#76b900', marginBottom: 20 }}>The rest of the team</div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {(['founder', 'ai', 'education'] as const).filter((s) => s !== params.slug).map((s) => {
              const m = BIOS[s]
              return (
                <Link key={s} href={`/team/${s}`} style={{ textDecoration: 'none', border: '1px solid #e8e8e8', borderRadius: 2, padding: '14px 20px', display: 'flex', flexDirection: 'column', gap: 3, transition: 'border-color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#76b900')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#e8e8e8')}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 15, color: '#000' }}>{m.name}</span>
                  <span style={{ fontSize: 13, color: '#76b900' }}>{m.role}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
