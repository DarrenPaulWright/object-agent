import { assert } from 'chai';
import { pull } from '../src/';

describe('pull', () => {
	it('should pull the values from an array of objects', () => {
		const input = [{
			level1: 'something'
		}, {
			level1: 'something2'
		}];
		const output = ['something', 'something2'];

		assert.deepEqual(pull(input, 'level1'), output);
	});

	it('should pull the values from an array of objects and null', () => {
		const input = [{
			level1: 'something'
		}, {
			level1: 'something2'
		}, null];
		const output = ['something', 'something2', undefined];

		assert.deepEqual(pull(input, ['level1']), output);
	});

	it('should pull the values from an array of nested objects', () => {
		const input = [{
			level1: {
				level2: [1, 2, 3]
			}
		}, {
			level1: {
				level2: [4, 5, 6]
			}
		}];
		const output = [[1, 2, 3], [4, 5, 6]];

		assert.deepEqual(pull(input, ['level1', 'level2']), output);
	});

	it('should pull the values from an array of nested objects with arrays', () => {
		const input = [{
			level1: {
				level2: [1, 2, 3]
			}
		}, {
			level1: {
				level2: [4, 5, 6]
			}
		}];
		const output = [2, 5];

		assert.deepEqual(pull(input, ['level1', 'level2', 1]), output);
	});
});
