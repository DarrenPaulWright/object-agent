import displayValue from 'display-value';
import { assert } from 'type-enforcer';
import { clone } from '../index.js';
import { testValues } from './testValues.js';

describe('clone', () => {
	testValues.forEach((value) => {
		it(`should clone ${displayValue(value)}`, () => {
			assert.equal(clone(value), value);
		});
	});

	it('should clone a circular reference', () => {
		const object = {};
		object.key1 = object;

		assert.equal(clone(object, {
			isCircular: true
		}), object);
	});

	it('should clone a nested circular reference', () => {
		const object = {
			key1: 'something',
			key2: {
				key3: 'another'
			}
		};
		object.key2.key4 = [object.key2];

		assert.equal(clone(object, {
			isCircular: true
		}), object);
	});

	it('should ignore a key in the ignoreKeys setting', () => {
		const object = {
			key1: 'something',
			key2: {
				key3: 'another'
			}
		};
		const output = {
			key1: 'something'
		};

		assert.equal(clone(object, {
			ignoreKeys: 'key2'
		}), output);
	});

	it('should ignore multiple keys in the ignoreKeys setting', () => {
		const object = {
			key1: 'something',
			key2: {
				key3: 'another'
			}
		};
		const output = {
			key2: {}
		};

		assert.equal(clone(object, {
			ignoreKeys: ['key1', 'key3']
		}), output);
	});

	it('should clone a reference to an instance of a class', () => {
		class Thing {
			doSomething() {

			}
		}

		const object = {
			key1: 'something',
			key2: {
				key3: new Thing()
			}
		};

		const cloned = clone(object);

		assert.equal(cloned, object);
		assert.is(cloned.key2.key3 === object.key2.key3, true);
	});
});
