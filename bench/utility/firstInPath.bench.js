import { benchSettings } from 'karma-webpack-bundle';
import { firstInPath } from '../../index.js';

suite('firstInPath', () => {
	let sandbox = '';

	benchmark('single item path', () => {
		sandbox = firstInPath('one');
	}, benchSettings);

	benchmark('multi item path', () => {
		sandbox = firstInPath('one.two.three');
	}, benchSettings);
});
