module.exports = {
  plugins: {
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},
  },
  /* use stage 2 features + disable logical properties and values rule */
  stage: 2,
  features: {
    "logical-properties-and-values": false,
  },
};
