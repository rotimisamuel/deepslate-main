'use client'
import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'

interface Props {
  size?: number
  animate?: boolean
  className?: string
}

export default function DeepSlateLogo({ size = 30, animate = false, className = '' }: Props) {
  const svgRef = useRef<SVGSVGElement>(null)

  useGSAP(() => {
    if (!animate || !svgRef.current) return
    const polys = svgRef.current.querySelectorAll('polygon')
    gsap.from(polys, {
      scale: 0,
      opacity: 0,
      transformOrigin: 'center center',
      stagger: 0.06,
      duration: 0.7,
      ease: 'back.out(1.4)',
    })
  }, { scope: svgRef, dependencies: [animate] })

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 220 220"
      width={size}
      height={size}
      className={className}
      style={{ display: 'block' }}
    >
      <polygon points="110,44 156.7,63.3 176,110 156.7,156.7 110,176 63.3,156.7 44,110 63.3,63.3" fill="#76b900" />
      <polygon points="110,54 153.8,75.1 164.6,122.5 134.3,160.5 85.7,160.5 55.4,122.5 66.2,75.1" fill="#000" />
      <polygon points="110,64 149.8,87 149.8,133 110,156 70.2,133 70.2,87" fill="#76b900" />
      <polygon points="110,74 144.2,98.9 131.2,139.1 88.8,139.1 75.7,98.9" fill="#000" />
      <polygon points="110,84 136,110 110,136 84,110" fill="#76b900" />
      <polygon points="110,94 123.9,118 96.1,118" fill="#000" />
    </svg>
  )
}
