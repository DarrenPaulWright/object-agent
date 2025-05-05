import { bench, describe } from 'hippogriff';
import { powerset } from '../index.js';

describe('powerset', () => {
	// @ts-expect-error unused var
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	let sandbox = [];

	bench('main', () => {
		sandbox = powerset([1, 2, 3, 4]);
	});
});
