import { bench, describe } from 'hippogriff';
import { has } from '../index.js';

describe('has', () => {
	// @ts-expect-error unused var
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	let sandbox = false;

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
		sandbox = has(object, 'level1.2.level2');
	});

	bench('first level', () => {
		sandbox = has(object, 'level1');
	});

	bench('non-existant', () => {
		sandbox = has(object, 'one.two');
	});
});
