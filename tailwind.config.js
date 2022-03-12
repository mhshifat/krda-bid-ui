module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				light: "#fff",
				"gray-light": "rgba(243, 243, 243, 0.6)",
				"gray-dark": "rgba(243, 243, 243, 0.9)",
				"smoke-darker": "rgba(0, 0, 0, 0.75)",
				"divider-gray-light": "rgba(243, 243, 243, 0.2)",
				"divider-hover-gray": "rgba(71, 71, 71, 0.6)",
			},
		},
		colors: {
			transparent: "transparent",
			gray: "#8393af",
			// light: "#fff",
			// "gray-light": "rgba(243, 243, 243, 0.6)",
			// "smoke-darker": "rgba(0, 0, 0, 0.75)",
		},
	},
	plugins: [],
};
