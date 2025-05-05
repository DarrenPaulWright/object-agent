import { bench, describe } from 'hippogriff';
import { firstInPath } from '../../index.js';

describe('firstInPath', () => {
	// @ts-expect-error unused var
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	let sandbox = '';

	bench('single item path', () => {
		sandbox = firstInPath('one');
	});

	bench('multi item path', () => {
		sandbox = firstInPath('one.two.three');
	});
});
