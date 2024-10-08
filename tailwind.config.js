/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ["Pacifico"],
        roboto: ["Roboto"],
        quicksand: ["Quicksand"],
        nerko: ["Nerko one"],
      },
     
    },
  },
  plugins: [require("@xpd/tailwind-3dtransforms")],
};
