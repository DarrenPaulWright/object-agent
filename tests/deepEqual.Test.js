import { assert } from 'chai';
import displayValue from 'display-value';
import { clone, deepEqual } from '../src/';
import { testValues } from './testValues';

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
});
