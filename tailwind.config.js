/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
	theme: {
		extend: {
			fontFamily:{
				'robot':['"Roboto"']
			},
			colors: {
				primary: '#82A6A6',
				secondary: '#F4E8DA',
				icon:'#F4A466',
				iconHeavy:'#DA803B',
				iconSecondary:'#FBCB72',
				accent:'#A1D8E6',
				accentHeavy:'#998675',
				textSecondary:'#666'
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

