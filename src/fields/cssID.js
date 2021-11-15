const { Group, Field } = require('@igomoon/hubspot-fields-js');

module.exports = function() {
	return new Group()
		.name('group', 'Group')
		.children([
			Field.color(),
			// Other Fields/Groups
			new Group().name('sub_content', 'SubContent').children([
				Field.color(),
				// Other Fields/Groups
			]),
		])
		.set('tab', 'STYLE');
};
