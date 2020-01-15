import { benchSettings } from 'karma-webpack-bundle';
import { diffUpdate } from '../index.js';

suite('diffUpdate', () => {
	let sandbox = 0;

	benchmark('main', () => {
		sandbox = diffUpdate({
			'test1': 1,
			'test2': 2,
			'test3': [1, 2, 3]
		}, {
			'test1': 1,
			'test2': 2,
			'test3': [1, 2, 4]
		});
	}, benchSettings);
});
