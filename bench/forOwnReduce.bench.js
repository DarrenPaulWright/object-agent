import { benchSettings } from 'karma-webpack-bundle';
import { forOwnReduce } from '../index.js';

suite('forOwnReduce', () => {
	benchmark('with return', () => {
		forOwnReduce({
			'test1': 1,
			'test2': 2,
			'test3': 3
		}, (result, value, key) => {
			result.push([key, value]);
			return result;
		}, []);
	}, benchSettings);

	benchmark('without return', () => {
		forOwnReduce({
			'test1': 1,
			'test2': 2,
			'test3': 3
		}, (result, value, key) => {
			result.push([key, value]);
		}, []);
	}, benchSettings);
});
