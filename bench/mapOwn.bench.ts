import { bench, describe } from 'hippogriff';
import { mapOwn, repeat } from '../index.js';

describe('mapOwn', () => {
	// @ts-expect-error unused var
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	let sandbox: unknown = '';

	const largeObject: { [key: number]: number } = {};

	repeat(100, (index) => {
		largeObject[index] = index;
	});

	bench('small', () => {
		mapOwn({
			test1: 1,
			test2: 2,
			test3: 3
		}, (_value, key) => {
			sandbox = key;
		});
	});

	bench('small ignoreKeys', () => {
		mapOwn({
			test1: 1,
			test2: 2,
			test3: 3
		}, (_value, key) => {
			sandbox = key;
		}, ['test2']);
	});

	bench('large', () => {
		mapOwn(largeObject, (_value, key) => {
			sandbox = key;
		});
	});

	bench('large destructuring', () => {
		sandbox = { ...largeObject };
	});
});
