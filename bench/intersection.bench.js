import { benchSettings } from 'karma-webpack-bundle';
import { intersection } from '../index.js';

suite('intersection', () => {
	let sandbox = 0;

	const object1 = {
		'test1': 'test',
		'test2': 'test',
		'test3': 'test'
	};
	const object2 = {
		'test1': 'test2',
		'test2': 'test3',
		'test3': 'test'
	};
	const array1 = [
		'test1',
		'test2',
		'test3'
	];
	const array2 = [
		'test1',
		'test2',
		'test4'
	];

	benchmark('object', () => {
		sandbox = intersection(object1, object2);
	}, benchSettings);

	benchmark('array', () => {
		sandbox = intersection(array1, array2);
	}, benchSettings);
});
