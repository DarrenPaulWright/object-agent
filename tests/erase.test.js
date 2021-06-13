import displayValue from 'display-value';
import { assert } from 'type-enforcer';
import { erase } from '../index.js';
import { testValues } from './helper/testValues.js';

describe('erase', () => {
	it('should delete a key and return true', () => {
		const object = {
			level1: 'something'
		};
		const compare = {};

		const result = erase(object, 'level1');

		assert.equal(object, compare);
		assert.equal(result, true);
	});

	it('should not delete a key that isnt there and return false', () => {
		const object = {
			level1: 'something'
		};
		const compare = {};

		const result = erase(object, 'level2');

		assert.notEqual(object, compare);
		assert.equal(result, false);
	});

	testValues.forEach((value) => {
		it(`should do nothing if the non-object ${displayValue(value)} is provided`, () => {
			const object = value;
			const compare = value;

			const result = erase(object, 'level2');

			assert.equal(object, compare);
			assert.equal(result, false);
		});
	});
});
