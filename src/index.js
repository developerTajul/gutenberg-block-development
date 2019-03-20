const { registerBlockType } = wp.blocks;
const { createElement } = wp.element;
const { __ } = wp.i18n;

registerBlockType('lwhhgb/hellow-world', {
	title 		: __('Fancy Title', 'samsu'),
	description : __('This is hellow world block', 'samsu'),
	category	: 'kormo',
	keywords	: [
		__('Hellow World', 'samsu'),
		__('Dummy Word', 'samsu')
	],
	attributes  : {},
	style 		: [],
	icon		: {
		src : 'smiley',
		background: 'red',
		foreground: '#fff'
	},
	transforms	: {},
	// parent		: [],
	supports	: {
		align: true,
		alignWide: true,
	},
	edit(){
		return createElement('p', {}, 'Hellow Samsu');
	},
	save(){
		return createElement('p', {}, 'Hellow Samsu');
	}
});
