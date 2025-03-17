import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: "#e6f1ff",
                    100: "#cce3ff",
                    200: "#99c7ff",
                    300: "#66aaff",
                    400: "#338eff",
                    500: "#0072ff", // メインブルー
                    600: "#005bcc",
                    700: "#004499",
                    800: "#002d66",
                    900: "#001733",
                },
                secondary: {
                    50: "#f0f5ff",
                    100: "#e1ecff",
                    200: "#c3d9ff",
                    300: "#a5c6ff",
                    400: "#87b3ff",
                    500: "#69a0ff",
                    600: "#5480cc",
                    700: "#3f6099",
                    800: "#2a4066",
                    900: "#152033",
                },
                accent: {
                    gold: "#d4af37",
                    navy: "#001f3f",
                },
                background: {
                    light: "#f8fafc",
                    dark: "#1a202c",
                },
            },
            fontFamily: {
                sans: ["Noto Sans JP", "Helvetica Neue", "Arial", "sans-serif"],
                heading: [
                    "Noto Sans JP",
                    "Helvetica Neue",
                    "Arial",
                    "sans-serif",
                ],
            },
            spacing: {
                "128": "32rem",
                "144": "36rem",
            },
            borderRadius: {
                "4xl": "2rem",
            },
            animation: {
                "fade-in": "fadeIn 0.5s ease-in-out",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
            },
        },
    },
    plugins: [],
} satisfies Config;

export default config;
