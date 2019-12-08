import { assert } from 'chai';
import displayValue from 'display-value';
import { unset } from '../index';
import { testValues } from './testValues';

describe('unset', () => {
	it('should set the value of a first level key', () => {
		const object = {
			level1: 'something'
		};
		const compare = {};

		const result = unset(object, 'level1');

		assert.deepEqual(object, compare);
		assert.equal(result, object);
	});

	it('should set the value of a second level key', () => {
		const object = {
			level1: {
				level2: 'something'
			}
		};
		const compare = {
			level1: {}
		};

		const result = unset(object, 'level1.level2');

		assert.deepEqual(object, compare);
		assert.equal(result, object);
	});

	it('should set the value of a second level key in an array', () => {
		const object = {
			level1: [{
				level2: 'something'
			}]
		};
		const compare = {
			level1: [{}]
		};

		const result = unset(object, 'level1.0.level2');

		assert.deepEqual(object, compare);
		assert.equal(result, object);
	});

	it('should set the value of a second level key in an array with multiple items', () => {
		const object = {
			level1: [{
				level2: 'test 0'
			}, {
				level2: 'test 1'
			}, {
				level2: 'test 2'
			}, {
				level2: 'test 3'
			}, {
				level2: 'test 4'
			}]
		};
		const compare = {
			level1: [{
				level2: 'test 0'
			}, {
				level2: 'test 1'
			}, {}, {
				level2: 'test 3'
			}, {
				level2: 'test 4'
			}]
		};

		const result = unset(object, 'level1.2.level2');

		assert.deepEqual(object, compare);
		assert.equal(result, object);
	});

	it('should set the value of a second level key in an array with multiple items', () => {
		const object = {
			level1: [{
				level2: 'test 0'
			}, {
				level2: 'test 1'
			}, {
				level2: {
					level3: 'test 2'
				}
			}, {
				level2: 'test 3'
			}, {
				level2: 'test 4'
			}]
		};
		const compare = {
			level1: [{
				level2: 'test 0'
			}, {
				level2: 'test 1'
			}, {
				level2: {}
			}, {
				level2: 'test 3'
			}, {
				level2: 'test 4'
			}]
		};

		const result = unset(object, 'level1.2.level2.level3');

		assert.deepEqual(object, compare);
		assert.equal(result, object);
	});

	testValues.forEach((value) => {
		it(`should do nothing if the non-object ${displayValue(value)} is provided`, () => {
			const object = value;
			const compare = value;

			const result = unset(object, 'level1.level2');

			if (value === value) {
				assert.deepEqual(object, compare);
				assert.equal(result, object);
			}
		});

		it(`should do nothing if the non-object ${displayValue(value)} is encountered`, () => {
			const object = {
				level1: value
			};
			const compare = {
				level1: value
			};

			const result = unset(object, 'level1.level2');

			assert.deepEqual(object, compare);
			assert.equal(result, object);
		});
	});
});
