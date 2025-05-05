import { bench, describe } from 'hippogriff';
import { fill } from '../index.js';

describe('fill', () => {
	// @ts-expect-error unused var
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	let sandbox = [];

	bench('main', () => {
		sandbox = fill(10, (x) => `${ x }t`);
	});
});
