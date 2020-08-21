const { wallabyConfig } = require('karma-webpack-bundle');
const testRunnerConfig = require('./testRunner.config.js');

module.exports = wallabyConfig(testRunnerConfig, {
	name: 'object-agent'
});
