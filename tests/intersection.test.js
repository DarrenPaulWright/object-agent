import { assert } from 'type-enforcer';
import { intersection } from '../index.js';

describe('intersection', () => {
	it('should return an identical string if the two inputs are equal', () => {
		assert.equal(intersection(['test', 'test']), 'test');
	});

	it('should return the same values from different arrays', () => {
		assert.equal(intersection([1, 2, 3, 4], [3, 4, 5, 6], [3,
			4,
			5,
			6,
			7,
			8]), [3, 4]);
	});

	it('should return an array with the values that are the same dates and regexps from both arrays', () => {
		assert.equal(intersection([
			[new Date('2007/12/12'), 'test2', /test/u],
			[/test/u,
				/test2/u,
				'test2',
				new Date('2007/12/12'),
				new Date('2007/12/13')]]
		), [new Date('2007/12/12'), 'test2', /test/u]);
	});

	it('should return an identical object if the two inputs are equal simple objects', () => {
		const firstObject = {
			one: 'something'
		};
		const secondObject = {
			one: 'something'
		};
		const diffedObject = {
			one: 'something'
		};

		assert.equal(intersection(firstObject, secondObject), diffedObject);
	});

	it('should return an identical object if the two inputs are equal', () => {
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
		const diffedObject = {
			one: 'something',
			two: null,
			three: ['test', 'test2'],
			four: {
				sub: 'test'
			}
		};

		assert.equal(intersection(firstObject, secondObject), diffedObject);
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

		assert.equal(intersection([firstObject, secondObject]), diffedObject);
	});

	it('should return an empty object if the first input is empty', () => {
		const firstObject = {};
		const secondObject = {
			one: 'something',
			two: null,
			three: ['test', 'test2'],
			four: {
				sub: 'test'
			}
		};
		const diffedObject = {};

		assert.equal(intersection(firstObject, secondObject), diffedObject);
	});

	it('should return all the properties that are the same between two objects', () => {
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
			three: ['test', 'test2']
		};

		assert.equal(intersection(firstObject, secondObject), diffedObject);
	});

	it('should return all the nested properties that are the same between two objects', () => {
		const firstObject = {
			one: 'something',
			three: ['test', 'test2', new Date('2007/12/12')],
			four: {
				sub: 'test'
			}
		};
		const secondObject = {
			one: 'something else',
			three: ['test',
				'test2',
				'test3',
				new Date('2007/12/12'),
				new Date('2007/12/20')],
			four: {
				sub: 'test',
				sub2: 'test2'
			}
		};
		const diffedObject = {
			three: ['test', 'test2', new Date('2007/12/12')],
			four: {
				sub: 'test'
			}
		};

		assert.equal(intersection(firstObject, secondObject), diffedObject);
	});

	it('should return an empty object if the two objects have only different keys', () => {
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
		const diffedObject = {};

		assert.equal(intersection(firstObject, secondObject), diffedObject);
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
		const diffedObject = undefined;

		assert.equal(intersection(firstObject, secondObject), diffedObject);
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

		assert.equal(intersection(firstObject, secondObject), diffedObject);
	});
});
