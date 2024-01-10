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
				// "project1": "url('/src/assets/img/img1.png')",
				// "project2": "url('/src/assets/img/img2.png')",
				// "project3": "url('/src/assets/img/img3.png')",
				// "project4": "url('/src/assets/img/img4.png')",
				"project6": "url('/src/assets/img/project.png')",
				"project7": "url('/src/assets/img/VTF2.png')",
				"project8": "url('/src/assets/img/Unisys4.png')",
				"project9": "url('/src/assets/img/kvslogo.jpg')",
				"project10": "url('/src/assets/img/CSA3.png')",
				"project11": "url('/src/assets/img/NMIT3.png')",			
				"project14": "url('/src/assets/img/kvslogo1.jpg')",
			},
			boxShadow: {
				card: "0 10px 30px -10px rgba(34, 34, 33, 0.2)",
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
