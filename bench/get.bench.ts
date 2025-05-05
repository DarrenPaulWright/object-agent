import { bench, describe } from 'hippogriff';
import { get } from '../index.js';

describe('get', () => {
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

	bench('native', () => {
		sandbox = object.level1[2].level2;
	});

	bench('no path', () => {
		sandbox = get(object, '');
	});

	bench('first level', () => {
		sandbox = get(object, 'level1');
	});

	bench('leaf', () => {
		sandbox = get(object, 'level1.2.level2');
	});

	bench('non-existant', () => {
		sandbox = get(object, 'one.two');
	});
});
