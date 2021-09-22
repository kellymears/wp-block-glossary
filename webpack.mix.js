require(`laravel-mix-wp-blocks`);

require(`laravel-mix`)
	.block(`src/index.js`, `dist/glossary.js`)
	.setPublicPath(`./dist`);
