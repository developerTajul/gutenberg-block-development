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
	style 		: [
		{
	        name: 'default',
	        label: __( 'Rounded' ),
	        isDefault: true
	    },
	    {
	        name: 'outline',
	        label: __( 'Outline' )
	    },
	    {
	        name: 'squared',
	        label: __( 'Squared' )
	    },
	],
	icon		: {
		src : 'smiley',
		background: 'green',
		foreground: '#fff'
	},
	transforms	: {},
	// parent		: [],
	supports	: {
		align: true,
		alignWide: true,
		anchor: true,
	},
	edit(){
		return createElement('p', {}, 'This is Tajul Via, speaking');
	},
	save(){
		return createElement('p', {}, 'Hellow Samsu');
	}
});





registerBlockType('lwhhgb/km-testimonial', {
	title 		: __('Testimonial', 'samsu'),
	description : __('Testimonial Section', 'samsu'),
	category	: 'kormo',
	keywords	: [
		__('testimonial', 'samsu'),
		__('shak', 'samsu')
	],
	attributes  : {},
	style 		: [],
	icon		: {
		src : 'smiley',
		background: 'blue',
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

