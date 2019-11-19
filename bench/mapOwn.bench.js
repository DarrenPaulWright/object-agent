import { benchSettings } from 'karma-webpack-bundle';
import { mapOwn, repeat } from '../index';

suite('mapOwn', () => {
	let sandbox = '';

	const largeObject = {};

	repeat(100, (index) => largeObject[index] = index);

	benchmark('small', () => {
		mapOwn({
			'test1': 1,
			'test2': 2,
			'test3': 3
		}, (value, key) => {
			sandbox = key;
		});
	}, benchSettings);

	benchmark('small ignoreKeys', () => {
		mapOwn({
			'test1': 1,
			'test2': 2,
			'test3': 3
		}, (value, key) => {
			sandbox = key;
		}, ['test2']);
	}, benchSettings);

	benchmark('large', () => {
		mapOwn(largeObject, (value, key) => {
			sandbox = key;
		});
	}, benchSettings);

	benchmark('large destructuring', () => {
		sandbox = {...largeObject};
	}, benchSettings);
});
