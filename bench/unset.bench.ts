import { bench, describe } from 'hippogriff';
import { unset } from '../index.js';

describe('unset', () => {
	// @ts-expect-error unused var
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	let sandbox: unknown = '';

	const object = {
		level1: [{
			level2: 'test 0'
		}, {
			level2: 'test 1'
		}, {
			level2: 'test 2'
		}, {
			level2: 'test 3'
		}, {
			level2: 'test 4'
		}]
	};

	bench('leaf', () => {
		sandbox = unset(object, 'level1.2.level2');
	});

	bench('first level', () => {
		sandbox = unset(object, 'foo.bar');
	});
});
