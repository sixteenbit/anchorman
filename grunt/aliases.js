module.exports = {
	'default': [
		'styles',
		'notify:default'
	],
	'styles': [
		'clean:pre',
		'copy',
		'sass',
		'postcss:dev',
		'concat',
		'notify:styles'
	]
};
