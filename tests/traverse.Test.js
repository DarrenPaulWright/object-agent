import { assert } from 'chai';
import { deepEqual, traverse } from '../src/';

describe('traverse', () => {
	it('should call the callback for all paths and return true', () => {
		let total = 0;
		let testVar = 0;
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

			if (deepEqual(path, [])) {
				testVar++;
			}
			if (deepEqual(path, ['test'])) {
				testVar++;
			}
			if (deepEqual(path, ['test', 0])) {
				testVar++;
			}
			if (deepEqual(path, ['test', 0, 'test2'])) {
				testVar++;
			}
			if (deepEqual(path, ['test', 0, 'test2', 'test3'])) {
				testVar++;
			}
			if (deepEqual(path, ['test', 0, 'test2', 'test3', 0]) && value === 'string1') {
				testVar++;
			}
			if (deepEqual(path, ['test', 0, 'test2', 'test3', 1]) && value === 'string2') {
				testVar++;
			}
			if (deepEqual(path, ['test', 0, 'test4']) && value === null) {
				testVar++;
			}
		});

		assert.equal(total, 8);
		assert.equal(testVar, 8);
		assert.isFalse(isCanceled);
	});

	it('should NOT traverse deeper when true is returned', () => {
		let total = 0;
		let testVar = 0;
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

			if (deepEqual(path, [])) {
				testVar++;
			}
			if (deepEqual(path, ['test'])) {
				testVar++;
			}
			if (deepEqual(path, ['test', 0])) {
				testVar++;
			}
			if (deepEqual(path, ['test', 0, 'test2'])) {
				testVar++;
				return true;
			}
			if (deepEqual(path, ['test', 0, 'test2', 'test3'])) {
				testVar++;
			}
			if (deepEqual(path, ['test', 0, 'test2', 'test3', 0]) && value === 'string1') {
				testVar++;
			}
			if (deepEqual(path, ['test', 0, 'test2', 'test3', 1]) && value === 'string2') {
				testVar++;
			}
			if (deepEqual(path, ['test', 0, 'test4']) && value === null) {
				testVar++;
			}
		});

		assert.equal(total, 4);
		assert.equal(testVar, 4);
		assert.isTrue(isCanceled);
	});

	it('should NOT traverse further array items when true is returned', () => {
		let total = 0;
		let testVar = 0;
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

			if (deepEqual(path, [])) {
				testVar++;
			}
			if (deepEqual(path, ['test'])) {
				testVar++;
			}
			if (deepEqual(path, ['test', 0])) {
				testVar++;
			}
			if (deepEqual(path, ['test', 0, 'test2'])) {
				testVar++;
			}
			if (deepEqual(path, ['test', 0, 'test2', 'test3'])) {
				testVar++;
			}
			if (deepEqual(path, ['test', 0, 'test2', 'test3', 0]) && value === 'string1') {
				testVar++;
				return true
			}
			if (deepEqual(path, ['test', 0, 'test2', 'test3', 1]) && value === 'string2') {
				testVar++;
			}
			if (deepEqual(path, ['test', 0, 'test4']) && value === null) {
				testVar++;
			}
		});

		assert.equal(total, 6);
		assert.equal(testVar, 6);
		assert.isTrue(isCanceled);
	});
});
