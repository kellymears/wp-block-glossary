<?php
/**
 * Plugin Name: Glossary block
 * Plugin URI: https://github.com/kellymears/wp-block-glossary
 * Description: Glossary block
 * Author: Kelly Mears
 * Author URI: https://kellymears.me
 * Version: 1.2.0
 * License: MIT
 * License URI: https://github.com/kellymears/wp-block-glossary/tree/master/LICENSE.md
 */

namespace TinyPixel;

(new class {
	/** @var array */
	public static $block;

	/**
	 * Class constructor.
	 */
	public function __construct()
	{
		self::$block = [
			'name' => 'tinyblocks/glossary/js',
			'url' => \plugins_url('wp-block-glossary/dist/glossary.js'),
			'dependencies' => ['react', 'wp-block-editor', 'wp-blocks', 'wp-i18n'],
			'version' => null,
			'footer' => true,
		];
	}

	/**
	 * Class invocation.
	 *
	 * @return void
	 */
    public function __invoke(): void
    {
        \add_action('enqueue_block_editor_assets', function () {
            \wp_enqueue_script(...array_values(self::$block));
						\wp_enqueue_style('tinyblocks/glossary/css', \plugins_url('wp-block-glossary/dist/glossary.css'), [], null, false);
        });
    }
})();
