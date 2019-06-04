import { assert } from 'chai';
import { repeat } from '../src/';

describe('repeat', () => {
	it('should call the callback the specified number of times', () => {
		let count = 0;

		repeat(5, () => count++);

		assert.deepEqual(count, 5);
	});

	it('should provide the index value', () => {
		let count = 0;

		repeat(7, (index) => {
			assert.equal(index, count);
			count++;
		});

		assert.deepEqual(count, 7);
	});
});
