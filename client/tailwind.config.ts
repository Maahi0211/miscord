/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        // ... existing animations
        float: 'float 6s ease-in-out infinite',
        'notification-0': 'notification 4s ease-in-out infinite',
        'notification-1': 'notification 4s ease-in-out infinite 1s',
        'notification-2': 'notification 4s ease-in-out infinite 2s',
        'spin-slow': 'spin 20s linear infinite',
        blob: "blob 7s infinite",
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'floating-blob': {
          '0%': { transform: 'translate(0, 0) scale(1) rotate(0deg)' },
          '20%': { transform: 'translate(40px, -50px) scale(1.1) rotate(45deg)' },
          '40%': { transform: 'translate(-40px, 60px) scale(0.9) rotate(90deg)' },
          '60%': { transform: 'translate(50px, 30px) scale(1.05) rotate(180deg)' },
          '80%': { transform: 'translate(-30px, -40px) scale(0.95) rotate(270deg)' },
          '100%': { transform: 'translate(0, 0) scale(1) rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};