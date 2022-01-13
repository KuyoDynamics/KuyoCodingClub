module.exports = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      animation: {
        gradient: "carousel 3s ease infinite",
      },
      keyframes: {
        carousel: {
          "0%": { "background-position": "left top" },
          "50%": { "background-position": "bottom right" },
          "100%": { "background-position": "left top" },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
