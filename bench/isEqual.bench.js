import { benchSettings } from 'karma-webpack-bundle';
import { isEqual } from '../index.js';

suite('isEqual', () => {
	let sandbox = '';

	benchmark('object true', () => {
		isEqual({
			'test1': 1,
			'test2': 2,
			'test3': 3
		}, {
			'test1': 1,
			'test2': 2,
			'test3': 3
		});
	}, benchSettings);

	benchmark('object false', () => {
		isEqual({
			'test1': 1,
			'test2': 2,
			'test3': 3
		}, {
			'test1': 1
		});
	}, benchSettings);

	benchmark('array true', () => {
		isEqual([1, 2, 3], [1, 2, 3]);
	}, benchSettings);

	benchmark('array false', () => {
		isEqual([1, 2, 3], [1]);
	}, benchSettings);

	benchmark('date true', () => {
		isEqual(new Date('01/01/2000'), new Date('01/01/2000'));
	}, benchSettings);

	benchmark('date false', () => {
		isEqual(new Date('01/01/2000'), new Date('01/02/2000'));
	}, benchSettings);

	benchmark('regexp true', () => {
		isEqual(/[0-9]/, /[0-9]/);
	}, benchSettings);

	benchmark('regexp false', () => {
		isEqual(/[0-9]/, /[a-z]/);
	}, benchSettings);

	benchmark('NaN true', () => {
		isEqual(NaN, NaN);
	}, benchSettings);

	benchmark('NaN false', () => {
		isEqual(NaN, 23);
	}, benchSettings);

	benchmark('other true', () => {
		isEqual('test', 'test');
	}, benchSettings);

	benchmark('other false', () => {
		isEqual('test', 23);
	}, benchSettings);
});
