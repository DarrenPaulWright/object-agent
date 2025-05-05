import { bench, describe } from 'hippogriff';
import { intersection } from '../index.js';

describe('intersection', () => {
	// @ts-expect-error unused var
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	let sandbox: unknown = {};

	const object1 = {
		test1: 'test',
		test2: 'test',
		test3: 'test'
	};

	const object2 = {
		test1: 'test2',
		test2: 'test3',
		test3: 'test'
	};

	const array1 = [
		'test1',
		'test2',
		'test3'
	];

	const array2 = [
		'test1',
		'test2',
		'test4'
	];

	bench('object', () => {
		sandbox = intersection(object1, object2);
	});

	bench('array', () => {
		sandbox = intersection(array1, array2);
	});
});
