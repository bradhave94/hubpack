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
				tertiary: withOpacity('--color-tertiary'),
				'accent-one': withOpacity('--color-accent-one'),
				'accent-two': withOpacity('--color-accent-two'),
				'accent-three': withOpacity('--color-accent-three'),
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
			lg: [
				'1.125rem',
				{
					letterSpacing: '0',
					lineHeight: '1.75rem',
				},
			],
			xl: [
				'1.25rem',
				{
					letterSpacing: '0',
					lineHeight: '1.75rem',
				},
			],
			'2xl': [
				'1.5rem',
				{
					letterSpacing: '0',
					lineHeight: '2rem',
				},
			],
			'3xl': [
				'1.875rem',
				{
					letterSpacing: '0',
					lineHeight: '2.25rem',
				},
			],
			'4xl': [
				'2.25rem',
				{
					letterSpacing: '0',
					lineHeight: '2.5rem',
				},
			],
			'5xl': [
				'3rem',
				{
					letterSpacing: '0',
					lineHeight: '1',
				},
			],
			'6xl': [
				'3.75rem',
				{
					letterSpacing: '0',
					lineHeight: '1',
				},
			],
			'7xl': [
				'4.5rem',
				{
					letterSpacing: '0',
					lineHeight: '1',
				},
			],
			'8xl': [
				'6rem',
				{
					letterSpacing: '0',
					lineHeight: '1',
				},
			],
			'9xl': [
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
	plugins: [
		require('@tailwindcss/forms')({
			strategy: 'class',
		}),
	],
	corePlugins: {
		// ...
		fontSize: false,
	},
};
