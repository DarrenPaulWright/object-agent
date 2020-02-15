import { assert } from 'type-enforcer';
import { firstInPath } from '../../index.js';

describe('firstInPath', () => {
	it('should return an empty string if an empty string is provided', () => {
		assert.equal(firstInPath(''), '');
	});

	it('should return the first key in a string of keys', () => {
		assert.equal(firstInPath('test1.test2'), 'test1');
	});

	it('should return the path if there is only one key', () => {
		assert.equal(firstInPath('test1'), 'test1');
	});
});
