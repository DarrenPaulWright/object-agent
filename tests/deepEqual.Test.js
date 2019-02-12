import { assert } from 'chai';
import clone from 'clone';
import { deepEqual } from '../src/';
import { testValues } from './testValues';

describe('deepEqual', () => {
	testValues.forEach((value1, index1) => {
		clone(testValues).forEach((value2, index2) => {
			if (index1 !== index2) {
				it(`should return false for ${value1} [${index1}] and ${value2} [${index2}]`, () => {
					assert.isFalse(deepEqual(value1, value2));
				});
			}
			else {
				it(`should return true for ${value1} [${index1}] and ${value2} [${index2}]`, () => {
					assert.isTrue(deepEqual(value1, value2));
				});
			}
		});
	});
});
