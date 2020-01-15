import { assert } from 'chai';
import { lastInPath } from '../../index.js';

describe('lastInPath', () => {
	it('should return an empty string if an empty string is provided', () => {
		assert.equal(lastInPath(''), '');
	});

	it('should return the initial keys in a string of keys', () => {
		assert.equal(lastInPath('test1.test2.test3'), 'test3');
	});

	it('should return the path if there is only one key', () => {
		assert.equal(lastInPath('test1'), 'test1');
	});
});
