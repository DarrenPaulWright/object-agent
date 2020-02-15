import { assert } from 'chai';
import displayValue from 'display-value';
import { clone, deepEqual } from '../index.js';
import { testValues } from './testValues.js';

describe('deepEqual', () => {
	testValues.forEach((value1, index1) => {
		clone(testValues).forEach((value2, index2) => {
			if (index1 !== index2) {
				it(`should return false for ${displayValue(value1)} [${index1}] and ${displayValue(value2)} [${index2}]`, () => {
					assert.isFalse(deepEqual(value1, value2));
				});
			}
			else {
				it(`should return true for ${displayValue(value1)} [${index1}] and ${displayValue(value2)} [${index2}]`, () => {
					assert.isTrue(deepEqual(value1, value2));
				});
			}
		});
	});

	it('should compare a circular reference', () => {
		const object = {
			key1: 'something',
			key2: {
				key3: 'another'
			}
		};
		object.key2.key4 = [object.key2];
		const object2 = {
			key1: 'something',
			key2: {
				key3: 'another'
			}
		};
		object2.key2.key4 = [object2.key2];

		assert.isTrue(deepEqual(object, object2));
	});
});
