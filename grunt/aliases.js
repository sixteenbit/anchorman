module.exports = {
	'default': [
		'styles',
		'notify:default'
	],
	'styles': [
		'clean:pre',
		'sass',
		'postcss:dev',
		'concat',
		'notify:styles'
	]
};
