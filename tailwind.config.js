import { orange, red, neutral, green, blue } from "tailwindcss/colors";
/** @type {import('tailwindcss').Config} */

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					50: "#fcfbea",
					100: "#f8f6c9",
					200: "#f3eb95",
					300: "#ebda59",
					400: "#e2c31f",
					500: "#d4b01e",
					600: "#b78a17",
					700: "#926416",
					800: "#79501a",
					900: "#68421b",
					950: "#3c230c",
					DEFAULT: "#e2c31f"
				},
				secondary: {
					50: "#fffbeb",
					100: "#fff3c6",
					200: "#ffe588",
					300: "#ffd24a",
					400: "#ffbe20",
					500: "#f99b07",
					600: "#db7302",
					700: "#b75006",
					800: "#943d0c",
					900: "#7a320d",
					950: "#461902",
					DEFAULT: "#f99b07"
				},
				danger: {
					...red,
					DEFAULT: red[500]
				},
				warning: {
					...orange,
					DEFAULT: orange[500]
				},
				success: {
					...green,
					DEFAULT: green[500]
				},
				info: {
					...blue,
					DEFAULT: blue[500]
				},
				default: {
					...neutral,
					DEFAULT: neutral[700]
				}
			},
			keyframes: {
				slideDownAndFade: {
					from: { opacity: "0", transform: "translateY(-2px)" },
					to: { opacity: "1", transform: "translateY(0)" }
				},
				slideLeftAndFade: {
					from: { opacity: "0", transform: "translateX(2px)" },
					to: { opacity: "1", transform: "translateX(0)" }
				},
				slideUpAndFade: {
					from: { opacity: "0", transform: "translateY(2px)" },
					to: { opacity: "1", transform: "translateY(0)" }
				},
				slideRightAndFade: {
					from: { opacity: "0", transform: "translateX(-2px)" },
					to: { opacity: "1", transform: "translateX(0)" }
				},
				overlayShow: {
					from: { opacity: "0" },
					to: { opacity: "1" }
				},
				contentShow: {
					from: {
						opacity: "0",
						transform: "translate(-50%, -48%) scale(0.96)"
					},
					to: {
						opacity: "1",
						transform: "translate(-50%, -50%) scale(1)"
					}
				}
			},
			animation: {
				slideDownAndFade:
					"slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
				slideLeftAndFade:
					"slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
				slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
				slideRightAndFade:
					"slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
				overlayShow: "overlayShow 500ms cubic-bezier(0.16, 1, 0.3, 1)",
				contentShow: "contentShow 500ms cubic-bezier(0.16, 1, 0.3, 1)"
			}
		}
	},
	darkMode: "class",
	plugins: []
};
