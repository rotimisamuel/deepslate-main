'use client'
import { useRef, useState } from 'react'
import Link from 'next/link'
import { gsap, useGSAP } from '@/lib/gsap'
import DeepSlateLogo from './DeepSlateLogo'

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  useGSAP(
    () => {
      gsap.from('.footer-cols', {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 85%',
        },
      })
    },
    { scope: footerRef }
  )

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubscribed(true)
  }

  return (
    <footer
      ref={footerRef}
      style={{
        background: '#000',
        color: '#fff',
        paddingTop: 80,
        borderTop: '1px solid #1a1a1a',
      }}
    >
      <div
        className="footer-cols"
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 48px',
          display: 'grid',
          gridTemplateColumns: '1.6fr 1fr 1fr 1.3fr',
          gap: 40,
        }}
      >
        {/* Brand col */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
            <DeepSlateLogo size={26} />
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: 20,
                color: '#fff',
              }}
            >
              DeepSlate
            </span>
          </div>
          <p
            style={{
              margin: '0 0 24px',
              fontSize: 14,
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.55)',
              maxWidth: 300,
            }}
          >
            Digital Transformation · AI Strategy · Education. Helping organisations navigate
            change, build AI capability, and develop their people.
          </p>
          {/* Newsletter */}
          {subscribed ? (
            <div
              style={{
                fontSize: 13,
                color: '#76b900',
                fontWeight: 600,
              }}
            >
              ✓ You&apos;re subscribed. Thank you!
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              style={{ display: 'flex', gap: 8, maxWidth: 320 }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                style={{
                  flex: 1,
                  background: '#111',
                  border: '1px solid #2a2a2a',
                  borderRadius: 2,
                  color: '#fff',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 14,
                  padding: '10px 14px',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                }}
                onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = '#76b900')}
                onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = '#2a2a2a')}
              />
              <button
                type="submit"
                style={{
                  background: '#76b900',
                  color: '#000',
                  border: 'none',
                  borderRadius: 2,
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: 13,
                  padding: '10px 16px',
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.background = '#5a8d00')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.background = '#76b900')}
              >
                Subscribe
              </button>
            </form>
          )}
        </div>

        {/* Services */}
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#76b900', marginBottom: 16 }}>
            Services
          </div>
          {[
            { label: 'Digital Transformation', href: '/services' },
            { label: 'AI Strategy', href: '/services' },
            { label: 'Education', href: '/services' },
            { label: 'AI Readiness', href: '/products' },
          ].map(({ label, href }) => (
            <Link key={label} href={href}
              style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.55)', textDecoration: 'none', lineHeight: 2.2, transition: 'color 0.15s' }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#76b900')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.55)')}>
              {label}
            </Link>
          ))}
        </div>

        {/* Products */}
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#76b900', marginBottom: 16 }}>
            Products
          </div>
          {[
            { label: 'AI Readiness Assessment', href: '/products' },
            { label: 'AI Strategy Sprint', href: '/products' },
            { label: 'Executive AI Masterclass', href: '/programmes' },
            { label: 'Digital Leadership Academy', href: '/programmes' },
          ].map(({ label, href }) => (
            <Link key={label} href={href}
              style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.55)', textDecoration: 'none', lineHeight: 2.2, transition: 'color 0.15s' }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#76b900')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.55)')}>
              {label}
            </Link>
          ))}
        </div>

        {/* Company */}
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#76b900', marginBottom: 16 }}>
            Get in touch
          </div>
          <a href="mailto:info@deepslate.co.uk"
            style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.55)', textDecoration: 'none', lineHeight: 2, transition: 'color 0.15s' }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#76b900')}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.55)')}>
            info@deepslate.co.uk
          </a>
          {[
            { label: 'About', href: '/about' },
            { label: 'Insights', href: '/insights' },
            { label: 'Case Studies', href: '/cases' },
            { label: 'Programmes', href: '/programmes' },
            { label: 'Contact', href: '/contact' },
          ].map(({ label, href }) => (
            <Link key={label} href={href}
              style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.55)', textDecoration: 'none', lineHeight: 2.2, transition: 'color 0.15s' }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#76b900')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.55)')}>
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Large wordmark */}
      <div
        style={{
          maxWidth: 1280,
          margin: '48px auto 0',
          padding: '0 48px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(80px, 15vw, 210px)',
            lineHeight: 0.8,
            letterSpacing: '-0.03em',
            color: 'rgba(255,255,255,0.04)',
            whiteSpace: 'nowrap',
            userSelect: 'none',
          }}
        >
          DeepSlate
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid #1a1a1a', marginTop: 24 }}>
        <div
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            padding: '22px 48px',
            display: 'flex',
            justifyContent: 'space-between',
            gap: 24,
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>
            © 2025 DeepSlate. All rights reserved.
          </span>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy Policy', 'Terms & Conditions', 'LinkedIn', 'X / Twitter'].map((l) => (
              <Link
                key={l}
                href="#"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 12,
                  color: 'rgba(255,255,255,0.4)',
                  textDecoration: 'none',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#76b900')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.4)')}
              >
                {l}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </footer>
  )
}
