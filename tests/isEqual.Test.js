import { assert } from 'chai';
import displayValue from 'display-value';
import { clone, isEqual } from '../src/';
import { testSimpleValues } from './testValues';

describe('isEqual', () => {
	testSimpleValues.forEach((value1, index1) => {
		clone(testSimpleValues).forEach((value2, index2) => {
			if (index1 !== index2) {
				it(`should return false for ${displayValue(value1)} and ${displayValue(value2)}`, () => {
					assert.isFalse(isEqual(value1, value2));
				});

				it(`should return false for two instances of ${displayValue(value1)} and one ${displayValue(value2)}`, () => {
					assert.isFalse(isEqual(value1, clone(value1), value2));
				});

				it(`should return false for two instances of ${displayValue(value1)} and one ${displayValue(value2)} in an array`, () => {
					assert.isFalse(isEqual([value1, clone(value1), value2]));
				});
			}
			else {
				it(`should return true for ${displayValue(value1)} and ${displayValue(value2)}`, () => {
					assert.isTrue(isEqual(value1, value2));
				});

				it(`should return true for three instances of ${displayValue(value1)}`, () => {
					assert.isTrue(isEqual(value1, value2, clone(value2)));
				});

				it(`should return true for three instances of ${displayValue(value1)} in an array`, () => {
					assert.isTrue(isEqual([value1, value2, clone(value2)]));
				});
			}
		});
	});
});
