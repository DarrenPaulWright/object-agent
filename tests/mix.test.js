import { assert } from 'type-enforcer';
import { mix } from '../index.js';

describe('mix', () => {
	it('should produce pairs when two arrays are provided', () => {
		const input = [1, 2, 3];
		const output = mix(input, input);

		assert.equal(output, [[1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [2, 3], [3, 1], [3, 2], [3, 3]]);
	});

	it('should produce triplets when three arrays are provided', () => {
		const input = [1, 2, 3];
		const output = mix(input, input, input);

		assert.equal(output, [
			[1, 1, 1],
			[1, 1, 2],
			[1, 1, 3],
			[1, 2, 1],
			[1, 2, 2],
			[1, 2, 3],
			[1, 3, 1],
			[1, 3, 2],
			[1, 3, 3],
			[2, 1, 1],
			[2, 1, 2],
			[2, 1, 3],
			[2, 2, 1],
			[2, 2, 2],
			[2, 2, 3],
			[2, 3, 1],
			[2, 3, 2],
			[2, 3, 3],
			[3, 1, 1],
			[3, 1, 2],
			[3, 1, 3],
			[3, 2, 1],
			[3, 2, 2],
			[3, 2, 3],
			[3, 3, 1],
			[3, 3, 2],
			[3, 3, 3]
		]);
	});
});
