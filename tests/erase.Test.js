import { assert } from 'chai';
import displayValue from 'display-value';
import { erase } from '../index';
import { testValues } from './testValues';

describe('erase', () => {
	it('should delete a key and return true', () => {
		const object = {
			level1: 'something'
		};
		const compare = {};

		const result = erase(object, 'level1');

		assert.deepEqual(object, compare);
		assert.equal(result, true);
	});

	it('should not delete a key that isnt there and return false', () => {
		const object = {
			level1: 'something'
		};
		const compare = {};

		const result = erase(object, 'level2');

		assert.notDeepEqual(object, compare);
		assert.equal(result, false);
	});

	testValues.forEach((value) => {
		it(`should do nothing if the non-object ${displayValue(value)} is provided`, () => {
			const object = value;
			const compare = value;

			const result = erase(object, 'level2');

			assert.deepEqual(object, compare);
			assert.equal(result, false);
		});
	});
});
