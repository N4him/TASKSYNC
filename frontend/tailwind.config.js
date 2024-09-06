// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Asegúrate de incluir la ruta correcta a tus archivos
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['GeistVF', 'sans-serif'],
        mono: ['GeistMonoVF', 'monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: 'hsl(var(--primary))',
        secondary: 'hsl(var(--secondary))',
        accent: 'hsl(var(--accent))',
        destructive: 'hsl(var(--destructive))',
        muted: 'hsl(var(--muted))',
        card: 'hsl(var(--card))',
        popover: 'hsl(var(--popover))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      borderRadius: {
        none: '0',
      },
    },
  },
  plugins: [],
};
