import { assert, describe, it } from 'hippogriff';
import { forIn } from '../index.js';

describe('forIn', () => {
	it('should call the callback for each key', () => {
		let total = 0;
		let testVariable = 0;
		const object = {
			key1: 'something1',
			key2: 'something2',
			key3: 'something3'
		};

		const isCanceled = forIn(object, (value, key) => {
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

		const isCanceled = forIn(object, (value, key) => {
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

		const isCanceled = forIn(object, (value, key) => {
			total++;
			if (key === 'key1' && value === 'something1') {
				testVariable++;
			}

			if (key === 'key2' && value === 'something2') {
				testVariable++;

				// @ts-expect-error needed for testing
				delete object.key3;
			}
		});

		assert.equal(total, 2);
		assert.equal(testVariable, 2);
		assert.is(isCanceled, false);
	});

	it('should call the callback for traditionally inherited properties and methods', () => {
		let total = 0;
		let testVariable = 0;

		const inherit = (target: object, source: object): void => {
			// @ts-expect-error needed for testing
			// eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-assignment
			target.prototype = Object.create(source.prototype);

			// @ts-expect-error needed for testing
			target.prototype.constructor = target;
		};

		const Base = function(this: object): void {
			// @ts-expect-error needed for testing
			this.prop1 = '1';
		};

		Base.prototype.method1 = function(this: typeof Base): string {
			// @ts-expect-error needed for testing
			// eslint-disable-next-line @typescript-eslint/no-unsafe-return
			return this.prop1;
		};

		const InheritedThing = function(this: object): void {
			Base.call(this);

			// @ts-expect-error needed for testing
			this.prop2 = '2';
		};

		inherit(InheritedThing, Base);
		InheritedThing.prototype.method1 = function(
			this: typeof InheritedThing
		): string {
			// @ts-expect-error needed for testing
			// eslint-disable-next-line @typescript-eslint/no-unsafe-return
			return this.prop2;
		};

		const Thing = function(this: typeof InheritedThing): void {
			InheritedThing.call(this);

			// @ts-expect-error needed for testing
			this.prop2 = '3';
		};

		inherit(Thing, InheritedThing);
		Thing.prototype.method2 = function(this: typeof Thing): string {
			// @ts-expect-error needed for testing
			// eslint-disable-next-line @typescript-eslint/no-unsafe-return
			return this.prop2;
		};

		// @ts-expect-error needed for testing
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		const thing = new Thing();

		InheritedThing.prototype.method3 = function(
			this: typeof InheritedThing
		): string {
			// @ts-expect-error needed for testing
			// eslint-disable-next-line @typescript-eslint/no-unsafe-return
			return this.prop1 + this.prop2;
		};

		const isCanceled = forIn(thing, (value, key) => {
			total++;

			if (key === 'prop1' && value === '1') {
				testVariable++;
			}

			if (key === 'prop2' && value === '3') {
				testVariable++;
			}

			if (key === 'method1' && typeof value === 'function' && thing[key]() === '3') {
				testVariable++;
			}

			if (key === 'method2' && typeof value === 'function' && thing[key]() === '3') {
				testVariable++;
			}

			if (key === 'method3' && typeof value === 'function' && thing[key]() === '13') {
				testVariable++;
			}
		});

		assert.equal(total, 5);
		assert.equal(testVariable, 5);
		assert.is(isCanceled, false);
	});

	it('should not call the callback if object is undefined', () => {
		let total = 0;
		// eslint-disable-next-line no-unassigned-vars
		let object;

		// @ts-expect-error needed for testing
		const isCanceled = forIn(object, () => {
			total++;
		});

		assert.equal(total, 0);
		assert.is(isCanceled, false);
	});
});
