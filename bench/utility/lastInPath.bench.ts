import { bench, describe } from 'hippogriff';
import { lastInPath } from '../../index.js';

describe('lastInPath', () => {
	// @ts-expect-error unused var
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	let sandbox = '';

	bench('single item path', () => {
		sandbox = lastInPath('one');
	});

	bench('multi item path', () => {
		sandbox = lastInPath('one.two.three');
	});
});
