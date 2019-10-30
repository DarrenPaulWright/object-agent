import { assert } from 'chai';
import { superimpose } from '../src/';

describe('superimpose', () => {
	const object1 = {
		test1: 1,
		test4: 1,
		testUndefined: 1,
		testNull: 1,
		test5: {
			test1: 1,
			test4: 1,
			testUndefined: 1,
			testNull: 1
		},
		test6: [1],
		test7: [{
			test1: 1,
			test4: 1,
			testUndefined: 1,
			testNull: 1
		}]
	};
	const object2 = {
		test2: 2,
		test3: 2,
		testUndefined: undefined,
		test5: {
			test2: 2,
			test3: 2,
			testUndefined: undefined
		},
		test6: [1, 2],
		test7: [{
			test2: 2,
			test3: 2,
			testUndefined: undefined
		}]
	};
	const object3 = {
		test3: 3,
		test4: 3,
		testNull: null,
		test5: {
			test3: 3,
			test4: 3,
			testNull: null
		},
		test6: [3],
		test7: [{
			test3: 3,
			test4: 3,
			testNull: null
		}]
	};

	it('should return a clone of the object if only one object is provided', () => {
		const result = superimpose(object1);

		assert.deepEqual(result, object1);
		assert.notEqual(result, object1);
	});

	it('should handle simple values', () => {
		const result = superimpose('test1', 'test2');

		assert.deepEqual(result, 'test2');
	});

	it('should superimpose one object onto another', () => {
		const result = superimpose(object1, object2, object3);

		const output = {
			test1: 1,
			test2: 2,
			test3: 3,
			test4: 3,
			testUndefined: 1,
			testNull: null,
			test5: {
				test1: 1,
				test2: 2,
				test3: 3,
				test4: 3,
				testUndefined: 1,
				testNull: null
			},
			test6: [3, 2],
			test7: [{
				test1: 1,
				test2: 2,
				test3: 3,
				test4: 3,
				testUndefined: 1,
				testNull: null
			}]
		};

		assert.deepEqual(result, output);
		assert.notDeepEqual(object1, output);
	});

	it('should mutate the first object if the last argument is true', () => {
		const input = {};
		const result = superimpose(input, object1, object2, object3, true);

		const output = {
			test1: 1,
			test2: 2,
			test3: 3,
			test4: 3,
			testUndefined: 1,
			testNull: null,
			test5: {
				test1: 1,
				test2: 2,
				test3: 3,
				test4: 3,
				testUndefined: 1,
				testNull: null
			},
			test6: [3, 2],
			test7: [{
				test1: 1,
				test2: 2,
				test3: 3,
				test4: 3,
				testUndefined: 1,
				testNull: null
			}]
		};

		assert.deepEqual(result, output);
		assert.deepEqual(input, output);
	});

});
