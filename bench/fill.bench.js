import { benchSettings } from 'karma-webpack-bundle';
import { fill } from '../index.js';

suite('fill', () => {
	let sandbox = 0;

	benchmark('main', () => {
		sandbox = fill(10, (x) => x + 't');
	}, benchSettings);
});
