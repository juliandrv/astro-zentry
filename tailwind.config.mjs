/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        zentry: ['zentry', 'sans-serif'],
        general: ['general', 'sans-serif'],
        'circular-web': ['circular-web', 'sans-serif'],
        'rober-medium': ['rober-medium', 'sans-serif'],
        'robert-regular': ['robert-regular', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#dfdff0',
          75: '#dedff2',
          100: '#f0f2fa',
          200: '#010101',
          300: '#4fb7dd',
        },
        violet: {
          300: '#5724ff',
        },
        yellow: {
          100: '#8e983f',
          300: '#edff66',
        },
      },
    },
  },
  plugins: [],
};
