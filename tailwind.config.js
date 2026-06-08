/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				poppins: "'Poppins', sans-serif",
				fira: "'Fira Code', monospace",
			},
			backgroundImage: {
				"project6": "url('/src/assets/img/project.png')",
				"VTF_logo": "url('/src/assets/img/VTF2.png')",
				"Unisys_logo": "url('/src/assets/img/Unisys1.png')",
				"KV_logo": "url('/src/assets/img/kvslogo3.png')",
				"IISc_logo": "url('/src/assets/img/CSA3.png')",
				"NMIT_logo": "url('/src/assets/img/NMIT3.png')",
				"UTD_logo": "url('/src/assets/img/UTD3.png')",
				"blockchain_logo": "url('/src/assets/img/Blockchain1.png')",
				"cryptosms_logo": "url('/src/assets/img/CryptoSMS1.png')",			
				"openeyes_logo": "url('/src/assets/img/Openeyes1.png')",
				"droverot_logo": "url('/src/assets/img/Droverot1.png')",
			},
		},
	},
	plugins: [],
};
