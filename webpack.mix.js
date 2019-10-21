const mix = require('laravel-mix')

require('laravel-mix-wp-blocks')

const tailwindConfig = './tailwind.config.js'

const glossary = {
	js: {
		src: './src/entry.js',
		dist: 'dist/glossary.js',
	},
}

mix.block(
	glossary.js.src,
	glossary.js.dist,
)

mix.setPublicPath('./dist')
