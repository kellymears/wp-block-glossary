const mix = require(`laravel-mix`);
require(`laravel-mix-wp-blocks`);
mix
	.ts(`src/index.ts`, `dist/glossary.js`)
	.css(`src/index.css`, `glossary.css`)
	.babelConfig({
		presets: ["@babel/preset-react"],
	})
	.webpackConfig({
		externals: {
			"@wordpress/block-editor": "wp.blockEditor",
			"@wordpress/blocks": "wp.blocks",
			"@wordpress/i18n": "wp.i18n",
			react: "wp.react",
		},
	})
	.setPublicPath(`./dist`);
