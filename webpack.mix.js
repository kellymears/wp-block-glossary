const mix = require('laravel-mix')

require('laravel-mix-wp-blocks')

const tailwindConfig = './tailwind.config.js'

const glossary = {
	js: {
		src: './src/entry.js',
		dist: 'dist/glossary.js',
	},
	css: {
		src: 'src/entry.css',
		dist: './dist/glossary.css',
	},
}

mix.block(
	glossary.js.src,
	glossary.js.dist,
)

mix.postCss(glossary.css.src, glossary.css.dist, [
	require('stylelint'),
	require('postcss-nested'),
	require('postcss-preset-env'),
	require('tailwindcss')(tailwindConfig),
	require('postcss-preset-env')({ stage: 0 }),
])

mix.setPublicPath('./dist')
