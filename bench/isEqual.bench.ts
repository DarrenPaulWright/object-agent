import { bench, describe } from 'hippogriff';
import { isEqual } from '../index.js';

class Thing1 {
	value = 0;

	constructor(value: number) {
		this.value = value;
	}

	doSomething(): void {
		this.value += 10;
	}
}

describe('isEqual', () => {
	bench('object true', () => {
		isEqual(
			{ test1: 1, test2: 2, test3: 3 },
			{ test1: 1, test2: 2, test3: 3 }
		);
	});

	bench('object true (many)', () => {
		isEqual(
			{ test1: 1, test2: 2, test3: 3 },
			{ test1: 1, test2: 2, test3: 3 },
			{ test1: 1, test2: 2, test3: 3 },
			{ test1: 1, test2: 2, test3: 3 },
			{ test1: 1, test2: 2, test3: 3 },
			{ test1: 1, test2: 2, test3: 3 },
			{ test1: 1, test2: 2, test3: 3 },
			{ test1: 1, test2: 2, test3: 3 },
			{ test1: 1, test2: 2, test3: 3 },
			{ test1: 1, test2: 2, test3: 3 }
		);
	});

	bench('object false', () => {
		isEqual(
			{ test1: 1, test2: 2, test3: 3 },
			{ test1: 1 }
		);
	});

	bench('array true', () => {
		isEqual([1, 2, 3], [1, 2, 3]);
	});

	bench('array false', () => {
		isEqual([1, 2, 3], [1]);
	});

	bench('date true', () => {
		isEqual(new Date('01/01/2000'), new Date('01/01/2000'));
	});

	bench('date false', () => {
		isEqual(new Date('01/01/2000'), new Date('01/02/2000'));
	});

	bench('regexp true', () => {
		isEqual(/\d/, /\d/);
	});

	bench('regexp false', () => {
		isEqual(/\d/, /[a-z]/);
	});

	bench('NaN true', () => {
		isEqual(NaN, NaN);
	});

	bench('NaN false', () => {
		isEqual(NaN, 23);
	});

	bench('other true', () => {
		isEqual('test', 'test');
	});

	bench('other false', () => {
		isEqual('test', 23);
	});

	bench('instances true', () => {
		isEqual(new Thing1(1), new Thing1(1));
	});

	bench('instances false', () => {
		isEqual(new Thing1(1), new Thing1(2));
	});
});
