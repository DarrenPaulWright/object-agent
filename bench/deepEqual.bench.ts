import { bench, describe } from 'hippogriff';
import { deepEqual } from '../index.js';

describe('deepEqual', () => {
	bench('true', () => {
		deepEqual({
			test1: 1,
			test2: 2,
			test3: [1, 2, 3]
		}, {
			test1: 1,
			test2: 2,
			test3: [1, 2, 3]
		});
	});

	bench('false', () => {
		deepEqual({
			test1: 1,
			test2: 2,
			test3: [1, 2, 3]
		}, {
			test1: 1,
			test2: 2,
			test3: [1, 2, 4]
		});
	});
});
