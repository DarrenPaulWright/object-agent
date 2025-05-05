import { bench, describe } from 'hippogriff';
import { forOwn, repeat } from '../index.js';

describe('forOwn', () => {
	// @ts-expect-error unused var
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	let sandbox: string | number = 0;

	const largeObject: { [key: number]: number } = {};

	repeat(100, (index) => {
		largeObject[index] = index;
	});

	bench('small', () => {
		forOwn({
			test1: 1,
			test2: 2,
			test3: 3
		}, (_value, key) => {
			sandbox = key;
		});
	});

	bench('large', () => {
		forOwn(largeObject, (_value, key) => {
			sandbox = key;
		});
	});
});
