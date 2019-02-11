import { assert } from 'chai';
import { diffUpdate } from '../src/';

describe('diffUpdate', () => {
	it('should return an empty object if the two inputs are equal', () => {
		const firstObject = {
			one: 'something',
			two: null,
			three: ['test', 'test2'],
			four: {
				sub: 'test'
			}
		};
		const secondObject = {
			one: 'something',
			two: null,
			three: ['test', 'test2'],
			four: {
				sub: 'test'
			}
		};
		const diffedObject = {};

		assert.deepEqual(diffUpdate(firstObject, secondObject), diffedObject);
	});

	it('should return an empty object if the second input is empty', () => {
		const firstObject = {
			one: 'something',
			two: null,
			three: ['test', 'test2'],
			four: {
				sub: 'test'
			}
		};
		const secondObject = {};
		const diffedObject = {};

		assert.deepEqual(diffUpdate(firstObject, secondObject), diffedObject);
	});

	it('should return the second object if the first input is empty', () => {
		const firstObject = {};
		const secondObject = {
			one: 'something',
			two: null,
			three: ['test', 'test2'],
			four: {
				sub: 'test'
			}
		};
		const diffedObject = {
			one: 'something',
			two: null,
			three: ['test', 'test2'],
			four: {
				sub: 'test'
			}
		};

		assert.deepEqual(diffUpdate(firstObject, secondObject), diffedObject);
	});

	it('should return all the properties that differ between two objects', () => {
		const firstObject = {
			one: 'something',
			three: ['test', 'test2'],
			four: {
				sub: 'test'
			}
		};
		const secondObject = {
			one: 'something else',
			two: null,
			three: ['test', 'test2'],
			four: null
		};
		const diffedObject = {
			one: 'something else',
			two: null,
			four: null
		};

		assert.deepEqual(diffUpdate(firstObject, secondObject), diffedObject);
	});

	it('should return an added property', () => {
		const firstObject = {
			one: 'something',
			three: ['test', 'test2'],
			four: {
				sub: 'test'
			}
		};
		const secondObject = {
			five: 'something'
		};
		const diffedObject = {
			five: 'something'
		};

		assert.deepEqual(diffUpdate(firstObject, secondObject), diffedObject);
	});

	it('should return an empty object if the first arg is undefined', () => {
		const firstObject = undefined;
		const secondObject = {
			one: 'something',
			three: ['test', 'test2'],
			four: {
				sub: 'test'
			}
		};
		const diffedObject = {
			one: 'something',
			three: ['test', 'test2'],
			four: {
				sub: 'test'
			}
		};

		assert.deepEqual(diffUpdate(firstObject, secondObject), diffedObject);
	});

	it('should return an empty object if the second arg is undefined', () => {
		const firstObject = {
			one: 'something',
			three: ['test', 'test2'],
			four: {
				sub: 'test'
			}
		};
		const secondObject = undefined;
		const diffedObject = {};

		assert.deepEqual(diffUpdate(firstObject, secondObject), diffedObject);
	});
});
