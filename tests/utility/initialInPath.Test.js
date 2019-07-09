import { assert } from 'chai';
import { initialInPath } from '../../src/';

describe('initialInPath', () => {
	it('should return an empty string if an empty string is provided', () => {
		assert.equal(initialInPath(''), '');
	});

	it('should return the initial keys in a string of keys', () => {
		assert.equal(initialInPath('test1.test2.test3'), 'test1.test2');
	});

	it('should return the path if there is only one key', () => {
		assert.equal(initialInPath('test1'), '');
	});
});
