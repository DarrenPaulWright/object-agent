import { bench, describe } from 'hippogriff';
import { mix } from '../index.js';

describe('mix', () => {
	// @ts-expect-error unused var
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	let sandbox = [];

	bench('2 arrays', () => {
		sandbox = mix([1, 2], [3, 4]);
	});

	bench('3 arrays', () => {
		sandbox = mix([1, 2], [3, 4], [5, 6]);
	});
});
