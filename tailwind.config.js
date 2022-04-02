const fibbonaci = {
  g1: '8px',
  g2: '13px',
  g3: '21px',
  g4: '34px',
  g5: '55px,',
  g6: '89px,',
}

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        8: 'repeat(8, minmax(0, 1fr))',
        9: 'repeat(9, minmax(0, 1fr))',
      },
      spacing: {
        ...fibbonaci,
      },
      fontSize: {
        ...fibbonaci,
      },
      colors: {
      },
    },
  },
  plugins: [],
}
