import { assert, describe, it } from 'hippogriff';
import { appendToPath } from '../../index.js';

const symbol = Symbol();

interface ITest {
	test: string;
	test1: {
		test2: {
			test: string;
			50: string;
			[symbol]: string;
		};
	};
}

describe('appendToPath', () => {
	it('should add on to an empty string', () => {
		assert.equal(appendToPath('', 'test'), 'test');
	});

	it('should add on to a string', () => {
		assert.equal(appendToPath<ITest>('test1.test2', 'test'), 'test1.test2.test');
	});

	it('should add a number', () => {
		assert.equal(appendToPath<ITest>('test1.test2', 50), 'test1.test2.50');
	});

	it('should add a symbol', () => {
		assert.equal(appendToPath<ITest>('test1.test2', symbol), 'test1.test2.Symbol()');
	});
});
