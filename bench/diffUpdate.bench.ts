import { bench, describe } from 'hippogriff';
import { diffUpdate } from '../index.js';

describe('diffUpdate', () => {
	// @ts-expect-error unused var
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	let sandbox = {};

	bench('main', () => {
		sandbox = diffUpdate({
			test1: 1,
			test2: 2,
			test3: [1, 2, 3]
		}, {
			test1: 1,
			test2: 2,
			test3: [1, 2, 4]
		});
	});
});
