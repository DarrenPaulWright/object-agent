import { benchSettings } from 'karma-webpack-bundle';
import { isEmpty } from '../index.js';

suite('isEmpty', () => {
	let sandbox = 0;

	const nonEmptyObject = {
		'test1': new Date('1/2/2001'),
		'test2': /test/,
		'test3': 'test'
	};
	const emptyObject = {};
	const nonEmptyArray = [
		'test1',
		'test2',
		'test3'
	];
	const emptyArray = [];

	benchmark('object false', () => {
		sandbox = isEmpty(nonEmptyObject);
	}, benchSettings);

	benchmark('object true', () => {
		sandbox = isEmpty(emptyObject);
	}, benchSettings);

	benchmark('array false', () => {
		sandbox = isEmpty(nonEmptyArray);
	}, benchSettings);

	benchmark('array true', () => {
		sandbox = isEmpty(emptyArray);
	}, benchSettings);
});
