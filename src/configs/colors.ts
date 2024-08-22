import { red, orange, blue, green, neutral } from "tailwindcss/colors";

export const COLORS = {
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
};
