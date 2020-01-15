import { benchSettings } from 'karma-webpack-bundle';
import { unset } from '../index.js';

suite('unset', () => {
	let sandbox = '';
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

	benchmark('leaf', () => {
		sandbox = unset(object, 'level1.2.level2');
	}, benchSettings);

	benchmark('first level', () => {
		sandbox = unset(object, 'foo', 'bar');
	}, benchSettings);
});
