import { benchSettings } from 'karma-webpack-bundle';
import { clone } from '../index.js';

suite('clone', () => {
	const sandbox = '';

	const extra = {
		'foo': 'bar'
	};

	benchmark('main', () => {
		clone({
			'test1': new Date('1/2/2001'),
			'test2': /asdf/,
			'test3': [
				new Date('1/2/2001'),
				/asdf/,
				3
			],
			'test4': 'bar',
			'test5': extra,
			'test6': extra
		});
	}, benchSettings);

	benchmark('isCircular', () => {
		clone({
			'test1': new Date('1/2/2001'),
			'test2': /asdf/,
			'test3': [
				new Date('1/2/2001'),
				/asdf/,
				3
			],
			'test4': 'bar',
			'test5': extra,
			'test6': extra
		}, {
			isCircular: true
		});
	}, benchSettings);
});
