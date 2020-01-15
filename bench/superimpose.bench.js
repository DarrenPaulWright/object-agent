import { benchSettings } from 'karma-webpack-bundle';
import { superimpose } from '../index.js';

suite('superimpose', () => {
	let sandbox = 0;

	benchmark('main', () => {
		sandbox = superimpose({
			'test1': new Date('1/2/2001'),
			'test2': /test/,
			'test3': 'test',
			'test4': [1, 2, 3, 4]
		}, {
			'test1': new Date('1/2/2001'),
			'test2': /test/,
			'test3': 'test',
			'test4': [1, 2, 3, 4, 5, 6],
			'test5': 23
		});
	}, benchSettings);
});
