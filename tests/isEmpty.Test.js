import { assert } from 'chai';
import { isEmpty } from '../index';

describe('isEmpty', () => {
	it('should return true for empty arrays', () => {
		assert.deepEqual(isEmpty([]), true);
	});

	it('should return false for non-empty arrays', () => {
		assert.deepEqual(isEmpty(['string']), false);
	});

	it('should return true if an empty object is provided', () => {
		assert.deepEqual(isEmpty({}), true);
	});

	it('should return false if an object with one property is provided', () => {
		assert.deepEqual(isEmpty({
			something: 'else'
		}), false);
	});

	it('should return false if an object with multiple properties is provided', () => {
		assert.deepEqual(isEmpty({
			something: 'else',
			another: 'asdf',
			yetAnother: 'sakljdhfklasdhf'
		}), false);
	});

	it('should return true if an empty string is provided', () => {
		assert.deepEqual(isEmpty(''), true);
	});

	it('should return false if a string is provided', () => {
		assert.deepEqual(isEmpty('test'), false);
	});

	it('should return true if null is provided', () => {
		assert.deepEqual(isEmpty(null), true);
	});

	it('should return true if undefined is provided', () => {
		assert.deepEqual(isEmpty(), true);
	});
});
