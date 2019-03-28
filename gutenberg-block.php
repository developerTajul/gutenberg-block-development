<?php
/**
Plugin Name: Gutenberg Block Developer with WEB Pack
Plugin URI: http://facebook.com
Description: A starter gutenberg block
Author: Mohammad Tajul Islam
Version: 1.7.1
Author URI: http://facebook.com/developer.tajul
**/

defined('ABSPATH') || exit();


function lwhhgb_register_block_1() {
	
    wp_register_script(
        'lwhhgb-block-1',
        plugins_url( './src/index.js', __FILE__ ),
        array( 'wp-blocks', 'wp-element', 'wp-i18n' )
    );



    register_block_type( 'lwhhgb/hellow-world', array(
        'editor_script' => 'lwhhgb-block-1',
    ) );

    register_block_type( 'lwhhgb/km-testimonial', array(
        'editor_script' => 'lwhhgb-block-1',
    ) );

}
add_action( 'init', 'lwhhgb_register_block_1' );





/**
* Enqueue block styles on frontend and in editor
*
*/
function lwhhgb_enqueue_block_assets() {


	wp_enqueue_style( 
		'lwhhgb-block-1', 
		plugins_url('./src/style.css'.__FILE__), 
		array('wp-blocks')
	);



	if( is_admin() ){

		wp_enqueue_style( 
			'lwhhgb-block-1-editor', 
			plugins_url('./src/editor-style.css'.__FILE__), 
			array('wp-editor-blocks')
		);

	}



}
add_action( 'enqueue_block_assets', 'lwhhgb_enqueue_block_assets' );



/**
Custom Category
**/
function lwhhgb_add_new_categories($categories){

	return array_merge($categories, array(

			array(
				'title'	=> __('Kormo', ''),
				'slug'	=> 'kormo',
				'icon'	=> 'paperclip'
			)

	));


}


add_filter( 'block_categories', 'lwhhgb_add_new_categories' );