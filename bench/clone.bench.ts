import { bench, describe } from 'hippogriff';
import { clone } from '../index.js';

describe('clone', () => {
	// @ts-expect-error unused var
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	let sandbox: unknown = {};

	const extra = {
		foo: 'bar'
	};

	bench('main', () => {
		sandbox = clone({
			test1: new Date('1/2/2001'),
			test2: /asdf/,
			test3: [
				new Date('1/2/2001'),
				/asdf/,
				3
			],
			test4: 'bar',
			test5: extra,
			test6: extra
		});
	});

	bench('isCircular', () => {
		sandbox = clone({
			test1: new Date('1/2/2001'),
			test2: /asdf/,
			test3: [
				new Date('1/2/2001'),
				/asdf/,
				3
			],
			test4: 'bar',
			test5: extra,
			test6: extra
		}, {
			isCircular: true
		});
	});
});
