import { benchSettings } from 'karma-webpack-bundle';
import { get } from '../index.js';

suite('get', () => {
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
		sandbox = get(object, 'level1.2.level2');
	}, benchSettings);

	benchmark('first level', () => {
		sandbox = get(object, 'level1');
	}, benchSettings);

	benchmark('non-existant', () => {
		sandbox = get(object, 'one.two');
	}, benchSettings);
});
