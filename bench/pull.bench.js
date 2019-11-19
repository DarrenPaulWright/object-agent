import { benchSettings } from 'karma-webpack-bundle';
import { pull } from '../index';

suite('pull', () => {
	let sandbox = 0;

	benchmark('main', () => {
		sandbox = pull([{
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
		}], 'test4.2');
	}, benchSettings);

	benchmark('array.map', () => {
		sandbox = [{
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
		}].map((item) => item.test4[2]);
	}, benchSettings);
});
