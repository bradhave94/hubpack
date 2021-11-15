function withOpacity(variableName) {
	return ({ opacityValue }) => {
		if (opacityValue !== undefined) {
			return `rgba(var(${variableName}), ${opacityValue})`;
		}
		return `rgb(var(${variableName}))`;
	};
}

module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: withOpacity('--color-primary'),
				secondary: withOpacity('--color-secondary'),

				white: withOpacity('--color-white'),
				black: withOpacity('--color-black'),
			},
		},
		fontSize: {
			xs: [
				'0.75rem',
				{
					letterSpacing: '0',
					lineHeight: '1rem',
				},
			],
			sm: [
				'0.875rem',
				{
					letterSpacing: '0',
					lineHeight: '1.25rem',
				},
			],
			base: [
				'1rem;',
				{
					letterSpacing: '0',
					lineHeight: '1.5rem',
				},
			],
			h6: [
				'1.125rem',
				{
					letterSpacing: '0',
					lineHeight: '1.75rem',
				},
			],
			h5: [
				'1.25rem',
				{
					letterSpacing: '0',
					lineHeight: '1.75rem',
				},
			],
			h4: [
				'1.5rem',
				{
					letterSpacing: '0',
					lineHeight: '2rem',
				},
			],
			h3: [
				'1.875rem',
				{
					letterSpacing: '0',
					lineHeight: '2.25rem',
				},
			],
			h2: [
				'2.25rem',
				{
					letterSpacing: '0',
					lineHeight: '2.5rem',
				},
			],
			h1: [
				'3rem',
				{
					letterSpacing: '0',
					lineHeight: '1',
				},
			],
			lg: [
				'1.5rem',
				{
					letterSpacing: '0',
					lineHeight: '1.75rem',
				},
			],
			xl: [
				'3.75rem',
				{
					letterSpacing: '0',
					lineHeight: '1',
				},
			],
			'2xl': [
				'4.5rem',
				{
					letterSpacing: '0',
					lineHeight: '1',
				},
			],
			'3xl': [
				'6rem',
				{
					letterSpacing: '0',
					lineHeight: '1',
				},
			],
			'4xl': [
				'8rem',
				{
					letterSpacing: '0',
					lineHeight: '1',
				},
			],
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
			},
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1440px',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
