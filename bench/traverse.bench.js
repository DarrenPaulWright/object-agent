import { benchSettings } from 'karma-webpack-bundle';
import { traverse } from '../index.js';

suite('traverse', () => {
	benchmark('isOptimistic false', () => {
		traverse({
			'test1': 1,
			'test2': 2,
			'test3': [1, 2, 3]
		}, () => {
		});
	}, benchSettings);

	benchmark('isOptimistic true', () => {
		traverse({
			'test1': 1,
			'test2': 2,
			'test3': [1, 2, 3]
		}, () => {
		}, true);
	}, benchSettings);

	benchmark('isOptimistic true, return early', () => {
		traverse({
			'test1': 1,
			'test2': 2,
			'test3': [1, 2, 3]
		}, (path, value) => {
			return path === 'test3.2';
		}, true);
	}, benchSettings);

});
