import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#76b900',
        'primary-dark': '#5a8d00',
        'primary-pale': '#bff230',
        ink: '#000000',
        body: '#1a1a1a',
        mute: '#757575',
        stone: '#898989',
        ash: '#a7a7a7',
        surface: '#f7f7f7',
        hairline: '#cccccc',
        'hairline-strong': '#5e5e5e',
        canvas: '#ffffff',
      },
      fontFamily: {
        brand: ['Inter', 'Arial', 'Helvetica', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.03em',
        tighter: '-0.02em',
        tight: '-0.01em',
        eyebrow: '0.14em',
        caps: '0.08em',
        wide: '0.1em',
        wider: '0.12em',
        widest: '0.14em',
      },
    },
  },
  plugins: [],
}

export default config
