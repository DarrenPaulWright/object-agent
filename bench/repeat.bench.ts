import { bench, describe } from 'hippogriff';
import { repeat } from '../index.js';

describe('repeat', () => {
	// @ts-expect-error unused var
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	let sandbox = 0;

	bench('2 arrays', () => {
		repeat(10, (x) => {
			sandbox = x;
		});
	});
});
