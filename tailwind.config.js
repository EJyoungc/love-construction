/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./*.js",
    "./design-options/**/*.html",
    "./design-options/**/*.js",
    "./src/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#121316",
        gold: "#D6A43A",
        muted: "#B88A2B",
        paper: "#F8F5EE",
        love: {
          charcoal: "#121316",
          dark: "#1A1C20",
          cardDark: "#1E2025",
          gold: "#D6A43A",
          goldHover: "#C4922A",
          amber: "#F59E0B",
          clay: "#C25E38",
          clayDark: "#A44C29",
          linen: "#F8F5EE",
          linenDark: "#EFE8DA",
          umber: "#261E1A",
          sage: "#2D6A4F",
          sageLight: "#40916C",
          sageBg: "#F2F7F4",
          stone: "#E5E7EB",
          blueprint: "#0A192F"
        }
      },
      fontFamily: {
        display: ["Manrope", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
        editorial: ["Georgia", "serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"]
      },
      boxShadow: {
        'glow-gold': '0 0 25px -5px rgba(214, 164, 58, 0.4)',
        'glow-clay': '0 0 25px -5px rgba(194, 94, 56, 0.4)',
        'glow-sage': '0 0 25px -5px rgba(45, 106, 79, 0.4)',
        'soft-2xl': '0 20px 40px -15px rgba(0, 0, 0, 0.08)'
      }
    }
  },
  plugins: []
};

