import { bench, describe } from 'hippogriff';
import { superimpose } from '../index.js';

describe('superimpose', () => {
	// @ts-expect-error unused var
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	let sandbox = {};

	bench('main', () => {
		sandbox = superimpose({
			test1: new Date('1/2/2001'),
			test2: /test/,
			test3: 'test',
			test4: [1, 2, 3, 4]
		}, {
			test1: new Date('1/2/2001'),
			test2: /test/,
			test3: 'test',
			test4: [1, 2, 3, 4, 5, 6],
			test5: 23
		});
	});
});
