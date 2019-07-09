import { assert } from 'chai';
import { appendToPath } from '../../src/';

describe('appendToPath', () => {
	it('should add on to an empty string', () => {
		assert.equal(appendToPath('', 'test'), 'test');
	});

	it('should add on to a string', () => {
		assert.equal(appendToPath('test1.test2', 'test'), 'test1.test2.test');
	});

	it('should add a number', () => {
		assert.equal(appendToPath('test1.test2', 50), 'test1.test2.50');
	});
});
