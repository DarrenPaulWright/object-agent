import { benchSettings } from 'karma-webpack-bundle';
import { mix } from '../index';

suite('mix', () => {
	let sandbox = '';

	benchmark('2 arrays', () => {
		sandbox = mix([1, 2], [3, 4]);
	}, benchSettings);

	benchmark('3 arrays', () => {
		sandbox = mix([1, 2], [3, 4], [5, 6]);
	}, benchSettings);
});
