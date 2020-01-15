import { benchSettings } from 'karma-webpack-bundle';
import { set } from '../index.js';

suite('set', () => {
	let sandbox = '';
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

	benchmark('leaf', () => {
		sandbox = set(object, 'level1.2.level2', 'another');
	}, benchSettings);

	benchmark('first level', () => {
		sandbox = set(object, 'foo', 'bar');
	}, benchSettings);

	benchmark('non-existant', () => {
		sandbox = set(object, 'one.0', 'bar');
	}, {
		...benchSettings,
		onStart() {
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
		}
	});
});
