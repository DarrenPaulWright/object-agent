import { benchSettings } from 'karma-webpack-bundle';
import { fill } from '../index';

suite('fill', () => {
	let sandbox = 0;

	benchmark('main', () => {
		sandbox = fill(10, (x) => x + 't');
	}, benchSettings);
});
