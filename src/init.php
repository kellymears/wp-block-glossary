<?php

/**
 * WP Block Glossary
 */
(new class {
	public static $assetManifest = __DIR__ . '/../dist/glossary.asset.php';

	public function __invoke() {
		add_action('enqueue_block_editor_assets', function () {
			if (file_exists(self::$assetManifest)) {
				$manifest = require self::$assetManifest;
			}

			wp_enqueue_script(
				'tinyblocks/glossary/js',
				plugins_url('/dist/glossary.js', dirname(__FILE__)),
				$manifest['dependencies'] ?: [],
				$manifest['version'] ?: null,
				true,
			);
		});
	}
})();
