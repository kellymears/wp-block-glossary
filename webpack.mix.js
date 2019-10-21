const mix = require(`laravel-mix`)

require(`laravel-mix-wp-blocks`)

const glossary = {
	js: {
		src: `./src/entry.js`,
		dist: `dist/glossary.js`,
	},
}

mix
	.block(glossary.js.src, glossary.js.dist)
	.setPublicPath(`./dist`)
