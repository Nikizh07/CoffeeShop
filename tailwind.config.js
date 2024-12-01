/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          'from': { width: '0' },
          'to': { width: '25%' },
        },
        cursorDisappear: {
          'to': { borderColor: 'transparent' }, // Make the cursor disappear
        },
      },
      animation: {
        typing: 'typing 3s steps(30, end)', // Typing animation
        cursorDisappear: 'cursorDisappear 0.5s ease-in-out 3s forwards', // Cursor disappearing after 3s
      },
    },
  },
  plugins: [],
};