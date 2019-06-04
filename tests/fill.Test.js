import { assert } from 'chai';
import { fill } from '../src/';

describe('fill', () => {
	it('should fill an array with index values if no callback is provided', () => {
		assert.deepEqual(fill(5), [0, 1, 2, 3, 4]);
	});

	it('should fill an array with the results of the callback', () => {
		assert.deepEqual(fill(3, (index) => index * 3), [0, 3, 6]);
	});
});
