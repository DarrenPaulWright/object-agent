import { benchSettings } from 'karma-webpack-bundle';
import { forOwn, repeat } from '../index.js';

suite('forOwn', () => {
	let sandbox = '';

	const largeObject = {};

	repeat(100, (index) => largeObject[index] = index);

	benchmark('small', () => {
		forOwn({
			'test1': 1,
			'test2': 2,
			'test3': 3
		}, (value, key) => {
			sandbox = key;
		});
	}, benchSettings);

	benchmark('large', () => {
		forOwn(largeObject, (value, key) => {
			sandbox = key;
		});
	}, benchSettings);
});
