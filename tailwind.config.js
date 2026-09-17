/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        olive: '#7A9D6E',
        clover: '#E24B63',
        daisy: '#F9D9DC',
        blush: '#EFA3AC',
        peach: '#C81E3A',
        gold: '#D9A441',
        noir: '#2A0A0F',
        'noir-soft': '#4A1420',
        bg: '#FFFAF9',
        'bg-deep': '#FDECEA',
        surface: '#FFFFFF',
        'surface-soft': '#FFF4F3',
        ink: '#2C1013',
        'ink-soft': '#8B5B60',
      },
      fontFamily: {
        heading: ['Fraunces', 'serif'],
        body: ['Manrope', 'sans-serif'],
      },
      borderRadius: {
        cozy: '1.25rem',
        stitch: '1.75rem',
      },
      boxShadow: {
        soft: '0 14px 34px -14px rgba(42, 10, 15, 0.35)',
        gentle: '0 4px 16px -6px rgba(42, 10, 15, 0.18)',
        glow: '0 0 0 1px rgba(255,255,255,0.06), 0 20px 50px -18px rgba(200, 30, 58, 0.55)',
      },
      backgroundImage: {
        'peach-fade': 'radial-gradient(circle at 15% 0%, #FDECEA 0%, #FFFAF9 45%, #FFFAF9 100%)',
        'blush-fade': 'linear-gradient(135deg, #E24B63 0%, #C81E3A 100%)',
        'noir-fade': 'linear-gradient(135deg, #2A0A0F 0%, #5C1220 55%, #8C1F2E 100%)',
        'noir-radial': 'radial-gradient(circle at 80% 20%, rgba(216,45,68,0.35) 0%, rgba(42,10,15,0) 55%)',
      },
    },
  },
  plugins: [],
}
