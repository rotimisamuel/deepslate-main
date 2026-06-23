'use client'
import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { gsap, useGSAP } from '@/lib/gsap'
import DeepSlateLogo from './DeepSlateLogo'

const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Programmes', href: '/programmes' },
  { label: 'Insights', href: '/insights' },
  { label: 'Case Studies', href: '/cases' },
  { label: 'About', href: '/about' },
]

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -80,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      delay: 0.1,
    })
  }, { scope: navRef })

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const isHome = pathname === '/'
  const alwaysDark = !isHome // inner pages always use solid nav

  return (
    <>
      <nav
        ref={navRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: (scrolled || alwaysDark) ? 'rgba(0,0,0,0.97)' : 'transparent',
          borderBottom: (scrolled || alwaysDark) ? '1px solid #1a1a1a' : '1px solid transparent',
          backdropFilter: (scrolled || alwaysDark) ? 'blur(12px)' : 'none',
          transition: 'background 0.35s ease, border-color 0.35s ease',
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            width: '100%',
            margin: '0 auto',
            padding: '0 48px',
            height: 68,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 24,
          }}
        >
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <DeepSlateLogo size={32} />
            <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 20, letterSpacing: '-0.01em', color: '#fff' }}>
              DeepSlate
            </span>
          </Link>

          <div className="nav-links-desktop" style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
            {NAV_LINKS.map((l) => {
              const active = pathname.startsWith(l.href)
              return (
                <Link
                  key={l.label}
                  href={l.href}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: 14.5,
                    color: active ? '#76b900' : 'rgba(255,255,255,0.8)',
                    textDecoration: 'none',
                    borderBottom: active ? '2px solid #76b900' : '2px solid transparent',
                    paddingBottom: 2,
                    transition: 'color 0.15s ease, border-color 0.15s ease',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={(e) => { const el = e.target as HTMLElement; if (!active) el.style.color = '#fff' }}
                  onMouseLeave={(e) => { const el = e.target as HTMLElement; if (!active) el.style.color = 'rgba(255,255,255,0.8)' }}
                >
                  {l.label}
                </Link>
              )
            })}
            <Link href="/contact" className="btn-outline-dark" style={{ fontSize: 14, padding: '9px 20px' }}>
              Contact Us
            </Link>
          </div>

          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 8, flexDirection: 'column', gap: 5 }}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span key={i} style={{
                display: 'block', width: 22, height: 2, background: '#fff', borderRadius: 2, transition: '0.3s',
                transform: menuOpen
                  ? i === 0 ? 'rotate(45deg) translate(5px, 5px)'
                  : i === 2 ? 'rotate(-45deg) translate(5px, -5px)'
                  : 'scaleX(0)' : 'none',
              }} />
            ))}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div style={{ position: 'fixed', inset: 0, background: '#000', zIndex: 49, display: 'flex', flexDirection: 'column', padding: '100px 32px 48px', gap: 0 }}>
          {NAV_LINKS.map((l) => (
            <Link key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 28, color: '#fff', textDecoration: 'none', borderBottom: '1px solid #1a1a1a', padding: '20px 0', transition: 'color 0.15s' }}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="btn-primary"
            style={{ marginTop: 32, fontSize: 16, padding: '14px 28px', textAlign: 'center' }}>
            Contact Us
          </Link>
        </div>
      )}
    </>
  )
}
