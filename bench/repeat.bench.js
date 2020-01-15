import { benchSettings } from 'karma-webpack-bundle';
import { repeat } from '../index.js';

suite('repeat', () => {
	let sandbox = 0;

	benchmark('2 arrays', () => {
		repeat(10, (x) => sandbox = x);
	}, benchSettings);
});
