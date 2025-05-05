import { bench, describe } from 'hippogriff';
import { pull } from '../index.js';

interface ITest {
	test1: Date;
	test2: RegExp;
	test3: string;
	test4: Array<number>;
	test5?: number;
}

describe('pull', () => {
	// @ts-expect-error unused var
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	let sandbox = [];

	const testArray: Array<ITest> = [{
		test1: new Date('1/2/2001'),
		test2: /test/,
		test3: 'test',
		test4: [1, 2, 3, 4]
	}, {
		test1: new Date('1/2/2001'),
		test2: /test/,
		test3: 'test',
		test4: [1, 2, 3, 4, 5, 6],
		test5: 23
	}];

	bench('main', () => {
		sandbox = pull<ITest>(testArray, 'test4.2');
	});

	bench('array.map', () => {
		sandbox = [{
			test1: new Date('1/2/2001'),
			test2: /test/,
			test3: 'test',
			test4: [1, 2, 3, 4]
		}, {
			test1: new Date('1/2/2001'),
			test2: /test/,
			test3: 'test',
			test4: [1, 2, 3, 4, 5, 6],
			test5: 23
		}].map((item) => item.test4[2]);
	});
});
