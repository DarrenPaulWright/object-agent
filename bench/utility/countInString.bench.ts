import { bench, describe } from 'hippogriff';
import { countInString } from '../../index.js';

describe('countInString', () => {
	// @ts-expect-error unused var
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	let sandbox = 0;

	bench('no matches', () => {
		sandbox = countInString('one.two.three', ',');
	});

	bench('one match', () => {
		sandbox = countInString('one.two', '.');
	});

	bench('multiple matches', () => {
		sandbox = countInString('one.two.three.four', '.');
	});
});
