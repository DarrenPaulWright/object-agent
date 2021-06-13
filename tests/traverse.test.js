import { assert } from 'type-enforcer';
import { deepEqual, traverse } from '../index.js';

describe('traverse', () => {
	it('should call the callback for all paths and return true', () => {
		let total = 0;
		let testVariable = 0;
		const testObject = {
			test: [{
				test2: {
					test3: ['string1', 'string2']
				},
				test4: null
			}]
		};

		const isCanceled = traverse(testObject, (path, value) => {
			total++;

			if (deepEqual(path, '')) {
				testVariable++;
			}
			if (deepEqual(path, 'test')) {
				testVariable++;
			}
			if (deepEqual(path, 'test.0')) {
				testVariable++;
			}
			if (deepEqual(path, 'test.0.test2')) {
				testVariable++;
			}
			if (deepEqual(path, 'test.0.test2.test3')) {
				testVariable++;
			}
			if (deepEqual(path, 'test.0.test2.test3.0') && value === 'string1') {
				testVariable++;
			}
			if (deepEqual(path, 'test.0.test2.test3.1') && value === 'string2') {
				testVariable++;
			}
			if (deepEqual(path, 'test.0.test4') && value === null) {
				testVariable++;
			}
		});

		assert.equal(total, 8);
		assert.equal(testVariable, 8);
		assert.is(isCanceled, false);
	});

	it('should NOT traverse deeper when true is returned', () => {
		let total = 0;
		let testVariable = 0;
		const testObject = {
			test: [{
				test2: {
					test3: ['string1', 'string2']
				},
				test4: null
			}]
		};

		const isCanceled = traverse(testObject, (path, value) => {
			total++;

			if (deepEqual(path, '')) {
				testVariable++;
			}
			if (deepEqual(path, 'test')) {
				testVariable++;
			}
			if (deepEqual(path, 'test.0')) {
				testVariable++;
			}
			if (deepEqual(path, 'test.0.test2')) {
				testVariable++;
				return true;
			}
			if (deepEqual(path, 'test.0.test2.test3')) {
				testVariable++;
			}
			if (deepEqual(path, 'test.0.test2.test3.0') && value === 'string1') {
				testVariable++;
			}
			if (deepEqual(path, 'test.0.test2.test3.1') && value === 'string2') {
				testVariable++;
			}
			if (deepEqual(path, 'test.0.test4') && value === null) {
				testVariable++;
			}
		});

		assert.equal(total, 4);
		assert.equal(testVariable, 4);
		assert.is(isCanceled, true);
	});

	it('should NOT traverse further array items when true is returned', () => {
		let total = 0;
		let testVariable = 0;
		const testObject = {
			test: [{
				test2: {
					test3: ['string1', 'string2']
				},
				test4: null
			}]
		};

		const isCanceled = traverse(testObject, (path, value) => {
			total++;

			if (deepEqual(path, '')) {
				testVariable++;
			}
			if (deepEqual(path, 'test')) {
				testVariable++;
			}
			if (deepEqual(path, 'test.0')) {
				testVariable++;
			}
			if (deepEqual(path, 'test.0.test2')) {
				testVariable++;
			}
			if (deepEqual(path, 'test.0.test2.test3')) {
				testVariable++;
			}
			if (deepEqual(path, 'test.0.test2.test3.0') && value === 'string1') {
				testVariable++;
				return true;
			}
			if (deepEqual(path, 'test.0.test2.test3.1') && value === 'string2') {
				testVariable++;
			}
			if (deepEqual(path, 'test.0.test4') && value === null) {
				testVariable++;
			}
		});

		assert.equal(total, 6);
		assert.equal(testVariable, 6);
		assert.is(isCanceled, true);
	});

	it('should NOT traverse circular objects twice', () => {
		let total = 0;
		let testVariable = 0;
		const testObject = {
			key1: 'something',
			key2: {
				key3: 'another'
			}
		};
		testObject.key2.key4 = [testObject.key2];

		const isCanceled = traverse(testObject, (path) => {
			total++;

			if (path === '') {
				testVariable++;
			}
			if (path === 'key1') {
				testVariable++;
			}
			if (path === 'key2') {
				testVariable++;
			}
			if (path === 'key2.key3') {
				testVariable++;
			}
			if (path === 'key2.key4') {
				testVariable++;
			}
			if (path === 'key2.key4.0') {
				testVariable++;
			}
		});

		assert.equal(total, 6);
		assert.equal(testVariable, 6);
		assert.is(isCanceled, false);
	});

	describe('isOptimistic', () => {
		it('should NOT traverse deeper when true is returned', () => {
			let total = 0;
			let testVariable = 0;
			const testObject = {
				test: [{
					test2: {
						test3: ['string1', 'string2']
					},
					test4: null
				}]
			};

			const isCanceled = traverse(testObject, (path, value) => {
				total++;

				if (deepEqual(path, '')) {
					testVariable++;
				}
				if (deepEqual(path, 'test')) {
					testVariable++;
				}
				if (deepEqual(path, 'test.0')) {
					testVariable++;
				}
				if (deepEqual(path, 'test.0.test2')) {
					testVariable++;
					return true;
				}
				if (deepEqual(path, 'test.0.test2.test3')) {
					testVariable++;
				}
				if (deepEqual(path, 'test.0.test2.test3.0') && value === 'string1') {
					testVariable++;
				}
				if (deepEqual(path, 'test.0.test2.test3.1') && value === 'string2') {
					testVariable++;
				}
				if (deepEqual(path, 'test.0.test4') && value === null) {
					testVariable++;
				}
			}, true);

			assert.equal(total, 5);
			assert.equal(testVariable, 5);
			assert.is(isCanceled, true);
		});

		it('should NOT traverse further array items when true is returned', () => {
			let total = 0;
			let testVariable = 0;
			const testObject = {
				test: [{
					test2: {
						test3: ['string1', 'string2']
					},
					test4: null
				}, {
					test4: null
				}]
			};

			const isCanceled = traverse(testObject, (path, value) => {
				total++;

				if (deepEqual(path, '')) {
					testVariable++;
				}
				if (deepEqual(path, 'test')) {
					testVariable++;
				}
				if (deepEqual(path, 'test.0')) {
					testVariable++;
					return true;
				}
				if (deepEqual(path, 'test.0.test2')) {
					testVariable++;
				}
				if (deepEqual(path, 'test.0.test2.test3')) {
					testVariable++;
				}
				if (deepEqual(path, 'test.0.test2.test3.0') && value === 'string1') {
					testVariable++;
				}
				if (deepEqual(path, 'test.0.test2.test3.1') && value === 'string2') {
					testVariable++;
				}
				if (deepEqual(path, 'test.0.test4') && value === null) {
					testVariable++;
				}
				if (deepEqual(path, 'test.1')) {
					testVariable++;
				}
				if (deepEqual(path, 'test.1.test4')) {
					testVariable++;
				}
			}, true);

			assert.equal(total, 5);
			assert.equal(testVariable, 5);
			assert.is(isCanceled, true);
		});
	});
});
