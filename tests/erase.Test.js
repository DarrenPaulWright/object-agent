import { assert } from 'chai';
import { erase } from '../index';

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
});
