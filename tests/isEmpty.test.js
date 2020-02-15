import { assert } from 'type-enforcer';
import { isEmpty } from '../index.js';

describe('isEmpty', () => {
	it('should return true for empty arrays', () => {
		assert.equal(isEmpty([]), true);
	});

	it('should return false for non-empty arrays', () => {
		assert.equal(isEmpty(['string']), false);
	});

	it('should return true if an empty object is provided', () => {
		assert.equal(isEmpty({}), true);
	});

	it('should return false if an object with one property is provided', () => {
		assert.equal(isEmpty({
			something: 'else'
		}), false);
	});

	it('should return false if an object with multiple properties is provided', () => {
		assert.equal(isEmpty({
			something: 'else',
			another: 'asdf',
			yetAnother: 'sakljdhfklasdhf'
		}), false);
	});

	it('should return true if an empty string is provided', () => {
		assert.equal(isEmpty(''), true);
	});

	it('should return false if a string is provided', () => {
		assert.equal(isEmpty('test'), false);
	});

	it('should return true if null is provided', () => {
		assert.equal(isEmpty(null), true);
	});

	it('should return true if undefined is provided', () => {
		assert.equal(isEmpty(), true);
	});
});
