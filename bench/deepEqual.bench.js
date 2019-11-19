import { benchSettings } from 'karma-webpack-bundle';
import { deepEqual } from '../index';

suite('deepEqual', () => {
	benchmark('true', () => {
		deepEqual({
			'test1': 1,
			'test2': 2,
			'test3': [1, 2, 3]
		}, {
			'test1': 1,
			'test2': 2,
			'test3': [1, 2, 3]
		});
	}, benchSettings);

	benchmark('false', () => {
		deepEqual({
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
