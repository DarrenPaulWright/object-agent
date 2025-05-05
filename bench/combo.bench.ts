import { bench, describe } from 'hippogriff';
import { combo } from '../index.js';

describe('combo', () => {
	// @ts-expect-error unused var
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	let sandbox = [];

	bench('length 2', () => {
		sandbox = combo([1, 2, 3, 4]);
	});

	bench('length 3', () => {
		sandbox = combo([1, 2, 3, 4], 3);
	});
});
