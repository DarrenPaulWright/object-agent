import { benchSettings } from 'karma-webpack-bundle';
import { walkPath } from '../../index.js';

suite('walkPath', () => {
	let sandbox = '';

	benchmark('single item path', () => {
		walkPath('one', (key, path) => {
			sandbox = path;
		});
	}, benchSettings);

	benchmark('multi item path', () => {
		walkPath('one.two.three', (key, path) => {
			sandbox = path;
		});
	}, benchSettings);
});
