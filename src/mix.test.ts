import { assert, describe, it } from 'hippogriff';
import { mix } from '../index.js';

describe('mix', () => {
	it('should produce pairs when two arrays are provided', () => {
		const input = [1, 2, 3];
		const output = mix(input, input);

		assert.equal(output, [[1, 1],
			[1, 2],
			[1, 3],
			[2, 1],
			[2, 2],
			[2, 3],
			[3, 1],
			[3, 2],
			[3, 3]]);
	});

	it('should produce triplets when three arrays are provided', () => {
		const output = mix([1, 2, 3], ['a', 'b', 'c'], [4, 5, 6]);

		assert.equal(output, [
			[1, 'a', 4],
			[1, 'a', 5],
			[1, 'a', 6],
			[1, 'b', 4],
			[1, 'b', 5],
			[1, 'b', 6],
			[1, 'c', 4],
			[1, 'c', 5],
			[1, 'c', 6],
			[2, 'a', 4],
			[2, 'a', 5],
			[2, 'a', 6],
			[2, 'b', 4],
			[2, 'b', 5],
			[2, 'b', 6],
			[2, 'c', 4],
			[2, 'c', 5],
			[2, 'c', 6],
			[3, 'a', 4],
			[3, 'a', 5],
			[3, 'a', 6],
			[3, 'b', 4],
			[3, 'b', 5],
			[3, 'b', 6],
			[3, 'c', 4],
			[3, 'c', 5],
			[3, 'c', 6]
		]);
	});
});
