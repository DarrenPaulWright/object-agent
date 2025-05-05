import { assert, describe, it } from 'hippogriff';
import { diffUpdate } from '../index.js';

interface ITestObject {
	one?: string;
	two?: string | null;
	three?: Array<string>;
	four?: {
		sub: string;
	} | null;
	five?: string;
}

describe('diffUpdate', () => {
	it('should return an empty object if the two inputs are equal', () => {
		const firstObject: ITestObject = {
			one: 'something',
			two: null,
			three: ['test', 'test2'],
			four: {
				sub: 'test'
			}
		};

		const secondObject: ITestObject = {
			one: 'something',
			two: null,
			three: ['test', 'test2'],
			four: {
				sub: 'test'
			}
		};

		const diffedObject = {};

		assert.equal(diffUpdate(firstObject, secondObject), diffedObject);
	});

	it('should return an empty object if the second input is empty', () => {
		const firstObject: ITestObject = {
			one: 'something',
			two: null,
			three: ['test', 'test2'],
			four: {
				sub: 'test'
			}
		};

		const secondObject: ITestObject = {};
		const diffedObject = {};

		assert.equal(diffUpdate(firstObject, secondObject), diffedObject);
	});

	it('should return the second object if the first input is empty', () => {
		const firstObject: ITestObject = {};
		const secondObject: ITestObject = {
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

		assert.equal(diffUpdate(firstObject, secondObject), diffedObject);
	});

	it('should return all the properties that differ between two objects', () => {
		const firstObject: ITestObject = {
			one: 'something',
			three: ['test', 'test2'],
			four: {
				sub: 'test'
			}
		};

		const secondObject: ITestObject = {
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

		assert.equal(diffUpdate(firstObject, secondObject), diffedObject);
	});

	it('should return an added property', () => {
		const firstObject: ITestObject = {
			one: 'something',
			three: ['test', 'test2'],
			four: {
				sub: 'test'
			}
		};

		const secondObject: ITestObject = {
			five: 'something'
		};

		const diffedObject = {
			five: 'something'
		};

		assert.equal(diffUpdate(firstObject, secondObject), diffedObject);
	});

	it('should return an empty object if the first arg is undefined', () => {
		const firstObject = undefined;
		const secondObject: ITestObject = {
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

		assert.equal(diffUpdate(firstObject, secondObject), diffedObject);
	});

	it('should return an empty object if the second arg is undefined', () => {
		const firstObject: ITestObject = {
			one: 'something',
			three: ['test', 'test2'],
			four: {
				sub: 'test'
			}
		};

		const secondObject = undefined;
		const diffedObject = {};

		assert.equal(diffUpdate(firstObject, secondObject), diffedObject);
	});
});
