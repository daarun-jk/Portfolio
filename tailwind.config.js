/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{html,js,jsx}"],
	theme: {
		fontFamily: {
			poppins: ["Poppins", "ui-sans-serif"],
			fira: ["Fira Code", "ui-sans-serif"],
		},
		extend: {
			colors: {
				gray: "#abb2bf",
				green: "#00a09a",
				black: "#222221",
			},
			backgroundImage: {
				"project6": "url('/src/assets/img/project.png')",
				"project7": "url('/src/assets/img/VTF2.png')",
				"project8": "url('/src/assets/img/Unisys1.png')",
				"project9": "url('/src/assets/img/kvslogo3.png')",
				"project10": "url('/src/assets/img/CSA3.png')",
				"project11": "url('/src/assets/img/NMIT3.png')",
				"project12": "url('/src/assets/img/Blockchain1.png')",
				"project13": "url('/src/assets/img/CryptoSMS1.png')",			
				"project14": "url('/src/assets/img/Openeyes1.png')",
				"project15": "url('/src/assets/img/Droverot1.png')",
			},
			boxShadow: {
				card: "0 10px 30px -10px rgba(34, 34, 33, 0.2)",
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
