import { assert } from 'chai';
import { forIn } from '../src/';

describe('forIn', () => {
	it('should call the callback for each key', () => {
		let total = 0;
		let testVar = 0;
		const object = {
			key1: 'something1',
			key2: 'something2',
			key3: 'something3'
		};

		const isCanceled = forIn(object, (value, key) => {
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

		const isCanceled = forIn(object, (value, key) => {
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

		const isCanceled = forIn(object, (value, key) => {
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

	it('should call the callback for traditionally inherited properties and methods', () => {
		let total = 0;
		let testVar = 0;

		const inherit = function(target, source) {
			target.prototype = Object.create(source.prototype);
			target.prototype.constructor = target;
		};

		const Base = function() {
			this.prop1 = '1';
		};
		Base.prototype.method1 = function() {
			return this.prop1;
		};

		const InheritedThing = function() {
			Base.call(this);
			this.prop2 = '2';
		};
		inherit(InheritedThing, Base);
		InheritedThing.prototype.method1 = function() {
			return this.prop2;
		};

		const Thing = function() {
			InheritedThing.call(this);
			this.prop2 = '3';
		};
		inherit(Thing, InheritedThing);
		Thing.prototype.method2 = function() {
			return this.prop2;
		};

		const thing = new Thing();

		InheritedThing.prototype.method3 = function() {
			return this.prop1 + this.prop2;
		};

		const isCanceled = forIn(thing, (value, key) => {
			total++;

			if (key === 'prop1' && value === '1') {
				testVar++;
			}
			if (key === 'prop2' && value === '3') {
				testVar++;
			}
			if (key === 'method1' && typeof value === 'function' && thing[key]() === '3') {
				testVar++;
			}
			if (key === 'method2' && typeof value === 'function' && thing[key]() === '3') {
				testVar++;
			}
			if (key === 'method3' && typeof value === 'function' && thing[key]() === '13') {
				testVar++;
			}
		});

		assert.equal(total, 5);
		assert.equal(testVar, 5);
		assert.isFalse(isCanceled);
	});

	it('should not call the callback if object is undefined', () => {
		let total = 0;
		let object;

		const isCanceled = forIn(object, () => {
			total++;
		});

		assert.equal(total, 0);
		assert.isFalse(isCanceled);
	});
});
