export default {
  darkMode: "class",

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        "tertiary-fixed": "#e6e1df",
        tertiary: "#cac6c3",
        "accent-dim": "#B87A30",
        "on-secondary-container": "#ffeddd",
        surface: "#161616",
        "primary-fixed-dim": "#c9c6c5",
        "surface-container-lowest": "#0e0e0e",
        muted: "#5A5A5A",
        "secondary-container": "#9b6000",
        "surface-container-highest": "#353434",
        "inverse-on-surface": "#313030",
        "on-tertiary": "#32302f",
        "surface-container-high": "#2b2a2a",
        accent: "#E8A045",
        body: "#C8C8C8",
        "tertiary-container": "#0e0d0c",
        "on-secondary-fixed": "#2b1700",
        "surface-bright": "#3a3939",
        "inverse-primary": "#5f5e5e",
        "secondary-fixed": "#ffddb9",
        heading: "#F0EDE6",
        "on-tertiary-container": "#7d7a78",
        "primary-fixed": "#e5e2e1",
        "on-primary-container": "#7c7a7a",
        background: "#141313",
        "secondary-fixed-dim": "#ffb964",
        "on-tertiary-fixed": "#1d1b1a",
        bg: "#0D0D0D",
        "surface-dim": "#141313",
        "primary-container": "#0d0d0d",
        "on-tertiary-fixed-variant": "#484645",
        "on-secondary": "#482a00",
        primary: "#c9c6c5",
        "on-primary-fixed-variant": "#474646",
        "error-container": "#93000a",
        "on-surface-variant": "#c4c7c7",
        outline: "#8e9192",
        "surface-tint": "#c9c6c5",
        "on-primary-fixed": "#1c1b1b",
        "on-surface": "#e5e2e1",
        "surface-container-low": "#1c1b1b",
        success: "#4ADE80",
        secondary: "#ffb964",
        "on-secondary-fixed-variant": "#663e00",
        "tertiary-fixed-dim": "#cac6c3",
        error: "#ffb4ab",
        "on-primary": "#313030",
        "inverse-surface": "#e5e2e1",
        "outline-variant": "#444748",
        "on-error": "#690005",
        "on-background": "#e5e2e1",
        "on-error-container": "#ffdad6",
        "surface-variant": "#353434",
        border: "#2A2A2A",
        "surface-container": "#201f1f",
      },

      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },

      spacing: {
        "margin-x": "3rem",
        "container-max": "72rem",
        gutter: "1.5rem",
        "section-py": "6rem",
      },

      fontFamily: {
        "section-title": ["DM Serif Display"],
        "card-title": ["DM Serif Display"],
        "body-main": ["DM Sans"],
        "label-mono": ["JetBrains Mono"],
        "hero-name": ["Playfair Display"],
      },

      fontSize: {
        "section-title": ["48px", { lineHeight: "1.2", fontWeight: "400" }],

        "card-title": ["24px", { lineHeight: "1.2", fontWeight: "400" }],

        "body-main": ["18px", { lineHeight: "1.6", fontWeight: "400" }],

        "label-mono": [
          "14px",
          { lineHeight: "1.5", letterSpacing: "0.1em", fontWeight: "500" },
        ],

        "hero-name": ["128px", { lineHeight: "1.1", fontWeight: "700" }],
      },
    },
  },

  plugins: [],
};
