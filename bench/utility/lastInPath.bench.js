import { benchSettings } from 'karma-webpack-bundle';
import { lastInPath } from '../../index.js';

suite('lastInPath', () => {
	let sandbox = '';

	benchmark('single item path', () => {
		sandbox = lastInPath('one');
	}, benchSettings);

	benchmark('multi item path', () => {
		sandbox = lastInPath('one.two.three');
	}, benchSettings);
});
