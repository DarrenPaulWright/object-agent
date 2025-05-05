import { beforeEach, bench, describe } from 'hippogriff';
import { set } from '../index.js';

describe('set', () => {
	// @ts-expect-error unused var
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	let sandbox: unknown = '';

	let object = {
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

	beforeEach(() => {
		object = {
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
	});

	bench('leaf', () => {
		sandbox = set(object, 'level1.2.level2', 'another');
	});

	bench('first level', () => {
		sandbox = set(object, 'foo', 'bar');
	});

	bench('non-existant', () => {
		sandbox = set(object, 'one.0', 'bar');
	});
});
