<?php
/**
 * Enqueu blocks
 */
add_action('enqueue_block_editor_assets', function () {
    wp_enqueue_script('tinyblocks/glossary/js', plugins_url('/dist/glossary.js', dirname(__FILE__)), ['wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor'], true);
});
