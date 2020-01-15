import { benchSettings } from 'karma-webpack-bundle';
import { forIn, repeat } from '../index.js';

suite('forIn', () => {
	let sandbox = '';

	const largeObject = {};

	repeat(100, (index) => largeObject[index] = index);

	benchmark('small', () => {
		forIn({
			'test1': 1,
			'test2': 2,
			'test3': 3
		}, (value, key) => {
			sandbox = key;
		});
	}, benchSettings);

	benchmark('large', () => {
		forIn(largeObject, (value, key) => {
			sandbox = key;
		});
	}, benchSettings);
});
