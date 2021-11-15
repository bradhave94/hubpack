const HublParser = require('@spingroup/postcss-hubl/hubl-parse');

module.exports = {
	parser: HublParser,
	plugins: {
		'postcss-extend-rule': {},
		'postcss-advanced-variables': {},
		'postcss-preset-env': {},
		'postcss-atroot': {},
		'postcss-property-lookup': {},
		'postcss-nested': {},
		tailwindcss: {},
	},
};
