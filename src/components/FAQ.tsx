'use client'
import { useRef, useState } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'

const FAQS = [
  {
    q: 'What does DeepSlate do?',
    a: 'We help leaders navigate digital transformation, build credible AI strategies, and develop the human capabilities to make it last — across three interconnected practices: Digital Transformation, AI Strategy, and Education.',
  },
  {
    q: 'Who do you typically work with?',
    a: 'Executives and boards, public sector leaders, corporate teams, and individual practitioners — anyone responsible for leading change and adopting AI responsibly.',
  },
  {
    q: 'How does an engagement begin?',
    a: 'Every engagement begins with understanding your situation. No templates, no off-the-shelf answers — we start by grounding the work in your context, constraints, and objectives.',
  },
  {
    q: "What makes your AI Strategy practice different?",
    a: 'We help leaders ask the right questions before buying the wrong answers. AI strategy starts with purpose, not product selection — combining technical fluency with strategic discipline and responsible governance.',
  },
  {
    q: 'Do you offer education programmes?',
    a: 'Yes — executive workshops (in-person and virtual), leadership masterclasses, bespoke corporate programmes, board-level AI briefings, and self-paced online learning.',
  },
]

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null)
  const [open, setOpen] = useState<number | null>(0)

  useGSAP(
    () => {
      gsap.from('.faq-header', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      })

      gsap.from('.faq-item', {
        y: 20,
        opacity: 0,
        stagger: 0.08,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.faq-item',
          start: 'top 85%',
        },
      })
    },
    { scope: sectionRef }
  )

  const toggle = (i: number) => setOpen(open === i ? null : i)

  return (
    <section id="faq" ref={sectionRef} style={{ background: '#fff', padding: '104px 0' }}>
      <div
        className="faq-grid"
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 48px',
          display: 'grid',
          gridTemplateColumns: '360px 1fr',
          gap: 72,
          alignItems: 'start',
        }}
      >
        {/* Left */}
        <div className="faq-header">
          <span className="eyebrow" style={{ color: '#000', marginBottom: 22, display: 'inline-flex' }}>
            FAQs
          </span>
          <h2
            style={{
              margin: '22px 0 0',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: 40,
              lineHeight: 1.08,
              letterSpacing: '-0.01em',
              color: '#000',
            }}
          >
            Frequently asked questions
          </h2>
        </div>

        {/* Right: accordion */}
        <div>
          {FAQS.map((f, i) => (
            <div
              key={f.q}
              className="faq-item"
              style={{ borderTop: '1px solid #e8e8e8' }}
            >
              <button
                onClick={() => toggle(i)}
                style={{
                  width: '100%',
                  padding: '24px 0',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: 24,
                  alignItems: 'flex-start',
                  textAlign: 'left',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: 18,
                    color: '#000',
                    lineHeight: 1.35,
                  }}
                >
                  {f.q}
                </span>
                <span
                  style={{
                    fontSize: 22,
                    lineHeight: 1,
                    color: '#76b900',
                    fontWeight: 700,
                    flexShrink: 0,
                    width: 22,
                    textAlign: 'center',
                    transition: 'transform 0.25s ease',
                    transform: open === i ? 'rotate(45deg)' : 'none',
                    display: 'inline-block',
                    marginTop: 2,
                  }}
                >
                  +
                </span>
              </button>

              {/* Animated body */}
              <div
                style={{
                  overflow: 'hidden',
                  maxHeight: open === i ? 300 : 0,
                  transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <p
                  style={{
                    margin: '0 0 24px',
                    color: '#1a1a1a',
                    fontSize: 15,
                    lineHeight: 1.7,
                    maxWidth: 660,
                    opacity: open === i ? 1 : 0,
                    transition: 'opacity 0.3s ease 0.1s',
                  }}
                >
                  {f.a}
                </p>
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid #e8e8e8' }} />
        </div>
      </div>

    </section>
  )
}
