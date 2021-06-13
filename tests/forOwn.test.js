import { assert } from 'type-enforcer';
import { forOwn } from '../index.js';

describe('forOwn', () => {
	it('should call the callback for each key', () => {
		let total = 0;
		let testVariable = 0;
		const object = {
			key1: 'something1',
			key2: 'something2',
			key3: 'something3'
		};

		const isCanceled = forOwn(object, (value, key) => {
			total++;
			if (key === 'key1' && value === 'something1') {
				testVariable++;
			}
			if (key === 'key2' && value === 'something2') {
				testVariable++;
			}
			if (key === 'key3' && value === 'something3') {
				testVariable++;
			}
		});

		assert.equal(total, 3);
		assert.equal(testVariable, 3);
		assert.is(isCanceled, false);
	});

	it('should stop calling the callbacks if true is returned', () => {
		let total = 0;
		let testVariable = 0;
		const object = {
			key1: 'something1',
			key2: 'something2',
			key3: 'something3'
		};

		const isCanceled = forOwn(object, (value, key) => {
			total++;
			if (key === 'key1' && value === 'something1') {
				testVariable++;
			}
			if (key === 'key2' && value === 'something2') {
				testVariable++;
				return true;
			}
		});

		assert.equal(total, 2);
		assert.equal(testVariable, 2);
		assert.is(isCanceled, true);
	});

	it('should NOT call the callback for keys that are deleted in a previous callback', () => {
		let total = 0;
		let testVariable = 0;
		const object = {
			key1: 'something1',
			key2: 'something2',
			key3: 'something3'
		};

		const isCanceled = forOwn(object, (value, key) => {
			total++;
			if (key === 'key1' && value === 'something1') {
				testVariable++;
			}
			if (key === 'key2' && value === 'something2') {
				testVariable++;
				delete object.key3;
			}
		});

		assert.equal(total, 2);
		assert.equal(testVariable, 2);
		assert.is(isCanceled, false);
	});

	it('should not call the callback for inherited properties', () => {
		let total = 0;
		let testVariable = 0;
		const Thing = function() {
			this.key1 = 'something1';
		};
		Thing.prototype.key2 = 'something2';
		const object = new Thing();

		const isCanceled = forOwn(object, (value, key) => {
			total++;
			if (key === 'key1' && value === 'something1') {
				testVariable++;
			}
		});

		assert.equal(total, 1);
		assert.equal(testVariable, 1);
		assert.is(isCanceled, false);
	});

	it('should not call the callback if object is undefined', () => {
		let total = 0;
		let object; // eslint-disable-line init-declarations

		const isCanceled = forOwn(object, () => {
			total++;
		});

		assert.equal(total, 0);
		assert.is(isCanceled, false);
	});
});
