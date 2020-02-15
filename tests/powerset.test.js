import { assert } from 'type-enforcer';
import { powerset } from '../index.js';

describe('powerset', () => {
	it('should return a powerset', () => {
		assert.equal(powerset([1, 2, 3]), [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]);
	});

	it('should return a powerset of length 2^(input length)', () => {
		assert.equal(powerset([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).length, 1024);
	});
});

