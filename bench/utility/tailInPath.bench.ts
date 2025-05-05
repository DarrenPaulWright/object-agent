import { bench, describe } from 'hippogriff';
import { tailInPath } from '../../index.js';

describe('tailInPath', () => {
	// @ts-expect-error unused var
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	let sandbox = '';

	bench('single item path', () => {
		sandbox = tailInPath('one');
	});

	bench('multi item path', () => {
		sandbox = tailInPath('one.two.three');
	});
});
