'use client'
import { useRef, useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import { gsap, useGSAP } from '@/lib/gsap'

const ENQUIRY_TYPES = ['Select…', 'Services', 'Products', 'Programmes', 'Case Studies / Evidence', 'Media & Press', 'Partnerships', 'General']

const fieldStyle: React.CSSProperties = {
  width: '100%',
  background: '#fff',
  border: '1px solid #e8e8e8',
  borderRadius: 2,
  fontFamily: 'Inter, sans-serif',
  fontSize: 15,
  padding: '13px 14px',
  outline: 'none',
  color: '#000',
  transition: 'border-color 0.18s',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'Inter, sans-serif',
  fontWeight: 700,
  fontSize: 11,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: '#898989',
  marginBottom: 8,
}

export default function ContactPage() {
  const formRef = useRef<HTMLDivElement>(null)
  const [submitted, setSubmitted] = useState(false)

  useGSAP(() => {
    gsap.from(['.contact-form', '.contact-details'], {
      y: 40, opacity: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: formRef.current, start: 'top 75%' },
    })
  }, { scope: formRef })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Contact"
        title="Don't be a stranger."
        description="We respond to all enquiries within one business day. Start with a message — we'll take it from there."
      />

      <section style={{ padding: '80px 0' }}>
        <div ref={formRef} className="two-col-14" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64, alignItems: 'start' }}>
          {/* Form */}
          <div className="contact-form">
            {submitted ? (
              <div style={{ border: '1px solid #76b900', borderRadius: 2, padding: 40, position: 'relative' }}>
                <span style={{ position: 'absolute', top: 0, left: 0, width: 14, height: 14, background: '#76b900' }} />
                <div style={{ fontSize: 30, color: '#76b900', marginBottom: 12 }}>✓</div>
                <h3 style={{ margin: '0 0 10px', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 24, color: '#000' }}>Message sent.</h3>
                <p style={{ margin: '0 0 24px', fontSize: 16, lineHeight: 1.65, color: '#1a1a1a' }}>Thanks for reaching out — we&apos;ll be in touch within one business day.</p>
                <button onClick={() => setSubmitted(false)} style={{ background: 'transparent', color: '#000', border: '1.5px solid #e8e8e8', borderRadius: 2, fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 15, padding: '11px 24px', cursor: 'pointer', transition: 'border-color 0.15s' }}>
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
                  <div>
                    <label style={labelStyle}>Name</label>
                    <input type="text" placeholder="Your full name" required style={fieldStyle}
                      onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = '#76b900')}
                      onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = '#e8e8e8')} />
                  </div>
                  <div>
                    <label style={labelStyle}>Organisation</label>
                    <input type="text" placeholder="Your company or institution" style={fieldStyle}
                      onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = '#76b900')}
                      onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = '#e8e8e8')} />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input type="email" placeholder="your@email.com" required style={fieldStyle}
                    onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = '#76b900')}
                    onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = '#e8e8e8')} />
                </div>
                <div>
                  <label style={labelStyle}>Type of enquiry</label>
                  <select style={fieldStyle}
                    onFocus={(e) => ((e.target as HTMLSelectElement).style.borderColor = '#76b900')}
                    onBlur={(e) => ((e.target as HTMLSelectElement).style.borderColor = '#e8e8e8')}>
                    {ENQUIRY_TYPES.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Message</label>
                  <textarea rows={6} placeholder="Tell us about your situation and what you're looking for…" required style={{ ...fieldStyle, resize: 'vertical' }}
                    onFocus={(e) => ((e.target as HTMLTextAreaElement).style.borderColor = '#76b900')}
                    onBlur={(e) => ((e.target as HTMLTextAreaElement).style.borderColor = '#e8e8e8')} />
                </div>
                <button type="submit" style={{ background: '#76b900', color: '#000', border: 'none', borderRadius: 2, fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 16, padding: 15, cursor: 'pointer', transition: 'background 0.18s' }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.background = '#5a8d00')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.background = '#76b900')}>
                  Send message
                </button>
              </form>
            )}
          </div>

          {/* Details */}
          <div className="contact-details" style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            <div>
              <h5 style={{ margin: '0 0 10px', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#76b900' }}>London</h5>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: '#1a1a1a' }}>
                3rd Floor, 86–90 Paul Street<br />EC2A 4NE, London<br />United Kingdom<br /><br />
                <a href="tel:+447379499922" style={{ color: '#000', textDecoration: 'none', fontWeight: 700 }}>+44 737 9499 922</a>
              </p>
            </div>
            <div style={{ borderTop: '1px solid #e8e8e8', paddingTop: 28 }}>
              <h5 style={{ margin: '0 0 10px', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#76b900' }}>Email</h5>
              <a href="mailto:info@deepslate.co.uk" style={{ fontSize: 15, color: '#000', textDecoration: 'none', fontWeight: 700 }}>info@deepslate.co.uk</a>
            </div>
            <div style={{ borderTop: '1px solid #e8e8e8', paddingTop: 28 }}>
              <h5 style={{ margin: '0 0 10px', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#76b900' }}>LinkedIn</h5>
              <a href="#" style={{ fontSize: 15, color: '#000', textDecoration: 'none', fontWeight: 700 }}>linkedin.com/company/deepslate</a>
            </div>
            <div style={{ background: '#000', borderRadius: 2, padding: 30, position: 'relative' }}>
              <span style={{ position: 'absolute', top: 0, left: 0, width: 12, height: 12, background: '#76b900' }} />
              <p style={{ margin: '0 0 12px', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 18, color: '#fff', lineHeight: 1.4 }}>
                &ldquo;Every engagement starts with understanding your situation.&rdquo;
              </p>
              <p style={{ margin: 0, fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65 }}>
                No templates. No off-the-shelf answers. We respond to all enquiries within one business day.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
