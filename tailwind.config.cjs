/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      white: "#ffffff",
      black: "#000",
      purple: "#800080",
      beige: "#EEAEAE",
      gray: "#4D4D4D",
    },
   
    extend: {
      fontSize:{
        heading:['32px',{lineHeight:'48px',fontWeight:500}],
        heading2:['24px',{lineHeight:'36px',fontWeight:600}],
        heading3:['20px',{lineHeight:'30px',fontWeight:500,letterSpacing:30}],
        heading4:['16px',{lineHeight:'24px',fontWeight:500}],
        heading5:['14px',{lineHeight:'21px',fontWeight:400}],
        navLink:['18px',{lineHeight:'22p.23x',fontWeight:500}],
        paragraph:['16px',{lineHeight:'24px',fontWeight:400}]
        
            },

    },
  },
  plugins: [],
};
