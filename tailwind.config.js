/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
	theme: {
		extend: {
			fontFamily:{
				'robot':['"Roboto"']
			},
			colors: {
				primary: '#104e94',
				secondary: '#104e94'
			},
			keyframes: {
				loading: {
					'100%': { 'background-position': '-288px' }
				}
			},
			animation: {
				loading: 'loading 0.8s steps(12) infinite'
			}
		},
	},
	plugins: [
		plugin(({ addVariant, e }) => {
			addVariant('data-active', ({ modifySelectors, separator }) => {
				modifySelectors(({ className }) => {
					return `.${e(`data-active${separator}${className}`)}[data-active="true"]`;
				})
			})
		})
	],
}

