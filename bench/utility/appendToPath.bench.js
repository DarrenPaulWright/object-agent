import { benchSettings } from 'karma-webpack-bundle';
import { appendToPath } from '../../index.js';

suite('appendToPath', () => {
	let sandbox = '';

	benchmark('empty path', () => {
		sandbox = appendToPath('', 'one');
	}, benchSettings);

	benchmark('existing path', () => {
		sandbox = appendToPath('one.two', 'three');
	}, benchSettings);
});
