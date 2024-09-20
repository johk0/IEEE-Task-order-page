/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#edc84b",
				secondary: "#EDC84B",
				title: "#3A3A3A",
				description: "#7C7C7C",
			},
		},
	},
	plugins: [],
};
