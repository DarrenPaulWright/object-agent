import { benchSettings } from 'karma-webpack-bundle';
import { isEqual } from '../index.js';

class Thing1 {
	constructor(value) {
		this.value = value;
	}

	doSomething() {
		this.value += ' done';
	}
}

suite('isEqual', () => {
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

	benchmark('object true (many)', () => {
		isEqual({
			'test1': 1,
			'test2': 2,
			'test3': 3
		}, {
			'test1': 1,
			'test2': 2,
			'test3': 3
		}, {
			'test1': 1,
			'test2': 2,
			'test3': 3
		}, {
			'test1': 1,
			'test2': 2,
			'test3': 3
		}, {
			'test1': 1,
			'test2': 2,
			'test3': 3
		}, {
			'test1': 1,
			'test2': 2,
			'test3': 3
		}, {
			'test1': 1,
			'test2': 2,
			'test3': 3
		}, {
			'test1': 1,
			'test2': 2,
			'test3': 3
		}, {
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
		isEqual(/\d/, /\d/);
	}, benchSettings);

	benchmark('regexp false', () => {
		isEqual(/\d/, /[a-z]/);
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

	benchmark('instances true', () => {
		isEqual(new Thing1(1), new Thing1(1));
	}, benchSettings);

	benchmark('instances false', () => {
		isEqual(new Thing1(1), new Thing1(2));
	}, benchSettings);
});
