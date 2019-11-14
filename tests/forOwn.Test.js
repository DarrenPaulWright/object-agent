import { assert } from 'chai';
import { forOwn } from '../index';

describe('forOwn', () => {
	it('should call the callback for each key', () => {
		let total = 0;
		let testVar = 0;
		const object = {
			key1: 'something1',
			key2: 'something2',
			key3: 'something3'
		};

		const isCanceled = forOwn(object, (value, key) => {
			total++;
			if (key === 'key1' && value === 'something1') {
				testVar++;
			}
			if (key === 'key2' && value === 'something2') {
				testVar++;
			}
			if (key === 'key3' && value === 'something3') {
				testVar++;
			}
		});

		assert.equal(total, 3);
		assert.equal(testVar, 3);
		assert.isFalse(isCanceled);
	});

	it('should stop calling the callbacks if true is returned', () => {
		let total = 0;
		let testVar = 0;
		const object = {
			key1: 'something1',
			key2: 'something2',
			key3: 'something3'
		};

		const isCanceled = forOwn(object, (value, key) => {
			total++;
			if (key === 'key1' && value === 'something1') {
				testVar++;
			}
			if (key === 'key2' && value === 'something2') {
				testVar++;
				return true;
			}
		});

		assert.equal(total, 2);
		assert.equal(testVar, 2);
		assert.isTrue(isCanceled);
	});

	it('should NOT call the callback for keys that are deleted in a previous callback', () => {
		let total = 0;
		let testVar = 0;
		const object = {
			key1: 'something1',
			key2: 'something2',
			key3: 'something3'
		};

		const isCanceled = forOwn(object, (value, key) => {
			total++;
			if (key === 'key1' && value === 'something1') {
				testVar++;
			}
			if (key === 'key2' && value === 'something2') {
				testVar++;
				delete object.key3;
			}
		});

		assert.equal(total, 2);
		assert.equal(testVar, 2);
		assert.isFalse(isCanceled);
	});

	it('should not call the callback for inherited properties', () => {
		let total = 0;
		let testVar = 0;
		const Thing = function() {
			this.key1 = 'something1';
		};
		Thing.prototype.key2 = 'something2';
		const object = new Thing();

		const isCanceled = forOwn(object, (value, key) => {
			total++;
			if (key === 'key1' && value === 'something1') {
				testVar++;
			}
		});

		assert.equal(total, 1);
		assert.equal(testVar, 1);
		assert.isFalse(isCanceled);
	});

	it('should not call the callback if object is undefined', () => {
		let total = 0;
		let object;

		const isCanceled = forOwn(object, () => {
			total++;
		});

		assert.equal(total, 0);
		assert.isFalse(isCanceled);
	});
});
