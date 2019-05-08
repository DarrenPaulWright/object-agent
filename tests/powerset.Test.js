import { assert } from 'chai';
import { powerset } from '../src/';

describe('powerset', () => {
	it('should return a powerset', () => {
		assert.deepEqual(powerset([1, 2, 3]), [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]);
	});

	it('should return a powerset of length 2^(input length)', () => {
		assert.deepEqual(powerset([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).length, 1024);
	});
});

