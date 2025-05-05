import { bench, describe } from 'hippogriff';
import { appendToPath } from '../../index.js';

describe('appendToPath', () => {
	// @ts-expect-error unused var
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	let sandbox = '';

	bench('empty path', () => {
		sandbox = appendToPath('', 'one');
	});

	bench('existing path', () => {
		sandbox = appendToPath('one.two', 'three');
	});
});
