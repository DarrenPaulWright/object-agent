import { assert } from 'chai';
import { combo } from '../index';

describe('combo', () => {
	it('should generate sets of two by default', () => {
		assert.deepEqual(combo([1, 2, 3]), [[1, 2], [1, 3], [2, 3]]);
	});

	it('should generate sets of three', () => {
		assert.deepEqual(combo([1, 2, 3, 4], 3), [[1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4]]);
	});
});
