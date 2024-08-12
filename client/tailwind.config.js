import { hslaColors } from './src/lib/utils';
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	// corePlugins: {
	// 	preflight: false,
	// },
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			fontSize: {
				'clamp-7xl': 'clamp(34px, calc(5px + 5vw), 72px)',
				'clamp-h1':
					'clamp(34px, calc(2.8px + 3.2vw), 54px)',
				'clamp-h2': 'clamp(30px, calc(2.8px + 3vw), 46px)',
				'clamp-h3': 'clamp(28px, 2.6vw, 36px)',
				'clamp-h4': 'clamp(24px, 2.4vw, 32px)',
				'clamp-h5': 'clamp(20px, 2.2vw, 24px)',
				'clamp-h6': 'clamp(18px, 2vw, 20px)',
			},
			colors: {
				'color-base':
					'hsl(var(--color-base) / <alpha-value>)',
				bkg: {
					base: 'hsl(var(--bg-base) / <alpha-value>)',
				},
				...hslaColors('primary'),
			},
			boxShadow: {
				center: '0 0 20px 2px rgba(0, 0, 0, .4)',
				'glass-inset':
					'inset 0 17px 5px -9px rgba(164, 143, 255, 0.05)',
				'glass-sm': '5px 5px 10px 0 rgba(21,31,71,1)',
				'inset-left':
					'inset -7px 0 30px -7px rgba(0, 0, 0, .4)',
				'inset-right':
					'inset 7px 0 30px -7px rgba(0, 0, 0, .4)',
				light:
					'0 0 15px #fff, 0 0 50px #fff, 0 0 100px #fff, 0 0 200px #fff, 0 0 300px #fff',
			},
			backgroundColor: {
				glass: 'rgba(255,255,255,0.1)',
			},
			backgroundImage: {
				'background-contact':
					"url('/src/assets/img/contact_bg.jpeg')",
			},
			keyframes: {
				'border-spin': {
					'100%': {
						transform: 'rotate(-360deg)',
					},
				},
			},
			animation: {
				'border-spin': 'border-spin 7s linear infinite',
			},
		},
	},
	darkMode: ['class', '[data-theme="dark"]'],
	plugins: [],
};
