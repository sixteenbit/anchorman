module.exports = {
	/**
	 * grunt-contrib-concat
	 *
	 * Concatenate files.
	 *
	 * Concatenates an array of js files set in /grunt/vars.js
	 *
	 * @link https://www.npmjs.com/package/grunt-contrib-concat
	 */
	options: {
		stripBanners: true
	},
	app: {
		src: [
			'bower_components/prism/prism.js',
			'bower_components/prism/components/prism-bash.js',
			'bower_components/prism/components/prism-scss.js'
		],
		dest: 'docs/js/prism.js'
	}
};
