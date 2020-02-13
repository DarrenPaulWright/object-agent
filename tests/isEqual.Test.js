import { assert } from 'chai';
import displayValue from 'display-value';
import { clone, isEqual } from '../index.js';
import { testSimpleValues } from './testValues.js';

class Thing1 {
	constructor(value) {
		this.value = value;
	}

	doSomething() {
		this.value += ' done';
	}
}

class Thing2 extends Thing1 {}

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

	it(`should return true for two instances of a class`, () => {
		assert.strictEqual(isEqual(new Thing1(1), new Thing1(1)), true);
	});

	it(`should return false for two instances of a class with different property values`, () => {
		assert.strictEqual(isEqual(new Thing1(1), new Thing1(2)), false);
	});

	it(`should return false for instances of different classes`, () => {
		assert.strictEqual(isEqual(new Thing1(1), new Thing2(1)), false);
	});
});
