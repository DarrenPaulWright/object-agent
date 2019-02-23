import { assert } from 'chai';
import { mapOwn } from '../src/';

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

		assert.deepEqual(mapOwn(object), output);
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
		const mapper = (value) => value + '_2';

		assert.deepEqual(mapOwn(object, mapper), output);
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
		const mapper = (value) => value + '_2';

		assert.deepEqual(mapOwn(object, mapper, ['key2']), output);
	});

	it('should return null if null is given', () => {
		let object = null;
		const mapper = (value) => value;

		assert.deepEqual(mapOwn(object, mapper), null);
	});

	it('should return undefined if undefined is given', () => {
		let object;
		const mapper = (value) => value;

		assert.deepEqual(mapOwn(object, mapper), undefined);
	});
});
