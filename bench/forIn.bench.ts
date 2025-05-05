import { bench, describe } from 'hippogriff';
import { forIn, repeat } from '../index.js';

describe('forIn', () => {
	// @ts-expect-error unused var
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	let sandbox: string | number = '';

	const largeObject: { [key: number]: number } = {};

	repeat(100, (index) => {
		largeObject[index] = index;
	});

	bench('small', () => {
		forIn({
			test1: 1,
			test2: 2,
			test3: 3
		}, (_value, key) => {
			sandbox = key;
		});
	});

	bench('large', () => {
		forIn(largeObject, (_value, key) => {
			sandbox = key;
		});
	});
});
