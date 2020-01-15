import { assert } from 'chai';
import { tailInPath } from '../../index.js';

describe('tailInPath', () => {
	it('should return an empty string if an empty string is provided', () => {
		assert.equal(tailInPath(''), '');
	});

	it('should return the initial keys in a string of keys', () => {
		assert.equal(tailInPath('test1.test2.test3'), 'test2.test3');
	});

	it('should return an empty string if there is only one key', () => {
		assert.equal(tailInPath('test1'), '');
	});
});
