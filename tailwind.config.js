// @ts-nocheck
/** @type {import('tailwindcss').Config} */
export const content = ['./index.html', './src/**/*.{js,jsx,ts,tsx}']
export const theme = {
	extend: {
		fontFamily: {
			sans: ['Inter', 'sans-serif'],
		},
		colors: {
			primary: '#3b82f6',
			neutral: '#f3f4f6',
			textPrimary: '#111827',
			textSecondary: '#6b7280',
		},
	},
}
export const plugins = []
