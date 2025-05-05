import { assert, describe, it } from 'hippogriff';
import { mapOwn } from '../index.js';

describe('mapOwn', () => {
	it('should return a cloned object if the callback isn\'t given', () => {
		const object = {
			key1: 'something1',
			key2: 'something2',
			key3: 'something3'
		};

		const output = {
			key1: 'something1',
			key2: 'something2',
			key3: 'something3'
		};

		assert.equal(mapOwn(object), output);
	});

	it('should return a mapped object', () => {
		const object = {
			key1: 'something1',
			key2: 'something2',
			key3: 'something3'
		};

		const output = {
			key1: 'something1_2',
			key2: 'something2_2',
			key3: 'something3_2'
		};

		assert.equal(mapOwn(object, (value) => `${ value }_2`), output);
		assert.notEqual(object, output);
	});

	it('should ignore the keys provided', () => {
		const object = {
			key1: 'something1',
			key2: 'something2',
			key3: 'something3'
		};

		const output = {
			key1: 'something1_2',
			key3: 'something3_2'
		};

		assert.equal(mapOwn(object, (value) => `${ value }_2`, ['key2']), output);
	});

	it('should return null if null is given', () => {
		const object = null;

		// @ts-expect-error needed for testing
		assert.equal(mapOwn(object, (value) => value), null);
	});

	it('should return undefined if undefined is given', () => {
		// eslint-disable-next-line no-unassigned-vars
		let object;

		// @ts-expect-error needed for testing
		assert.equal(mapOwn(object, (value) => value), undefined);
	});
});
