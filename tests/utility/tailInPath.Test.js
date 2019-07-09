import { assert } from 'chai';
import { tailInPath } from '../../src/';

describe('tailInPath', () => {
	it('should return an empty string if an empty string is provided', () => {
		assert.equal(tailInPath(''), '');
	});

	it('should return the initial keys in a string of keys', () => {
		assert.equal(tailInPath('test1.test2.test3'), 'test2.test3');
	});

	it('should return the path if there is only one key', () => {
		assert.equal(tailInPath('test1'), 'test1');
	});
});
