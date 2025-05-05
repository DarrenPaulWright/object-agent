import { bench, describe } from 'hippogriff';
import { isEmpty } from '../index.js';

describe('isEmpty', () => {
	// @ts-expect-error unused var
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	let sandbox = false;

	const nonEmptyObject = {
		test1: new Date('1/2/2001'),
		test2: /test/,
		test3: 'test'
	};

	const emptyObject = {};
	const nonEmptyArray = [
		'test1',
		'test2',
		'test3'
	];

	const emptyArray: Array<unknown> = [];

	bench('object false', () => {
		sandbox = isEmpty(nonEmptyObject);
	});

	bench('object true', () => {
		sandbox = isEmpty(emptyObject);
	});

	bench('array false', () => {
		sandbox = isEmpty(nonEmptyArray);
	});

	bench('array true', () => {
		sandbox = isEmpty(emptyArray);
	});
});
