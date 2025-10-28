module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
      extend: {},
    },
    corePlugins: {
      preflight: true,
      // Ensure transforms are included
      transform: true,
      translate: true,
    },
    plugins: [],
  };
  