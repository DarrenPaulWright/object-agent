import { bench, describe } from 'hippogriff';
import { initialInPath } from '../../index.js';

describe('initialInPath', () => {
	// @ts-expect-error unused var
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	let sandbox = '';

	bench('single item path', () => {
		sandbox = initialInPath('one');
	});

	bench('multi item path', () => {
		sandbox = initialInPath('one.two.three');
	});
});
