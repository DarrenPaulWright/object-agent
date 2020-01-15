import { benchSettings } from 'karma-webpack-bundle';
import { has } from '../index.js';

suite('has', () => {
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
		sandbox = has(object, 'level1.2.level2');
	}, benchSettings);

	benchmark('first level', () => {
		sandbox = has(object, 'level1');
	}, benchSettings);

	benchmark('non-existant', () => {
		sandbox = has(object, 'one.two');
	}, benchSettings);
});
