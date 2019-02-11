import { assert } from 'chai';
import clone from 'clone';
import { deepEqual } from '../src/';

const testValues = [
	undefined,
	null,
	{},
	[],
	/test/,
	new RegExp('something'),
	3,
	true,
	false,
	new Date(),
	() => {
	},
	['test1', 'test2', 'test3'],
	['test3', 'test1', 'test2'],
	{
		key1: 'test1'
	},
	{
		key1: 'test1',
		key2: 'test2'
	},
	{
		one: 'something',
		two: null,
		three: ['test', 'test2'],
		four: {
			sub: 'test'
		}
	},
	{
		one: 'something',
		two: null,
		three: ['test', 'test4'],
		four: {
			sub: 'test'
		}
	},
	{
		one: 'something',
		two: null,
		three: ['test', 'test2', 'test3'],
		four: {
			sub: 'test5'
		}
	},
	{
		one: 'something',
		two: null,
		three: ['test', 'test2'],
		four: {
			sub: 'test5'
		}
	},
	{
		one: 'something',
		two: null,
		three: ['test', 'test2'],
		four: {
			sub: null
		}
	}
];

describe('deepEqual', () => {
	testValues.forEach((value1, index1) => {
		clone(testValues).forEach((value2, index2) => {
			if (index1 !== index2) {
				it(`should return false for ${value1} [${index1}] and ${value2} [${index2}]`, () => {
					assert.isFalse(deepEqual(value1, value2));
				});
			}
			else {
				it(`should return true for ${value1} [${index1}] and ${value2} [${index2}]`, () => {
					assert.isTrue(deepEqual(value1, value2));
				});
			}
		});
	});
});
