<?php
/**
 * Plugin Name: Glossary
 * Plugin URI: https://github.com/kellymears/wp-block-glossary
 * Description: Glossary block
 * Author: Kelly Mears
 * Author URI: https://kellymears.me
 * Version: 1.1.0
 * License: MIT
 * License URI: https://github.com/kellymears/wp-block-glossary/tree/master/LICENSE.md
 */

(new class {
	/** @var string */
    public static $assetManifest = __DIR__ . '/dist/glossary.asset.php';

	/** @var array */
	public static $block;

	/**
	 * Class constructor.
	 */
	public function __construct()
	{
		if (file_exists(self::$assetManifest)) {
			$manifest = require self::$assetManifest;
		}

		self::$block = [
			'name'         => 'tinyblocks/glossary/js',
			'url'          => plugins_url('wp-block-glossary/dist/glossary.js'),
			'dependencies' => $manifest['dependencies'] ?: [],
			'version'      => $manifest['version'] ?: null,
			'footer'       => true,
		];
	}

	/**
	 * Class invocation.
	 */
    public function __invoke()
    {
        add_action('enqueue_block_editor_assets', function () {
            wp_enqueue_script(...array_values(self::$block));
        });
    }
})();
