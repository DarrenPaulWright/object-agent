import { benchSettings } from 'karma-webpack-bundle';
import { combo } from '../index.js';

suite('combo', () => {
	let sandbox = '';

	benchmark('length 2', () => {
		sandbox = combo([1, 2, 3, 4]);
	}, benchSettings);

	benchmark('length 3', () => {
		sandbox = combo([1, 2, 3, 4], 3);
	}, benchSettings);
});
