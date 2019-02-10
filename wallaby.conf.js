const wallabyWebpack = require('wallaby-webpack');
const testRunnerConfig = require('test-runner-config');
const config = require('./testRunner.config.js');

const files = testRunnerConfig.getWallabyFiles(config, {
	src: (file) => {
		return {pattern: file, instrument: true, load: false};
	},
	specs: (file) => {
		return {pattern: file, instrument: false, load: false};
	}
});

module.exports = function(wallaby) {
	const webpackPostprocessor = wallabyWebpack();

	return {
		name: 'object-agent',
		files: files.files,
		tests: files.tests,
		testFramework: 'mocha',
		env: {
			kind: 'chrome'
		},
		postprocessor: webpackPostprocessor,
		compilers: {
			'**/*.js': wallaby.compilers.babel()
		},
		setup: function() {
			window.__moduleBundler.loadTests();
		},
		// debug: true,
		lowCoverageThreshold: 99
	};
};
