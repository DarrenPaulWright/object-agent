import { bench, describe } from 'hippogriff';
import { forOwnReduce } from '../index.js';

describe('forOwnReduce', () => {
	bench('with return', () => {
		forOwnReduce<Array<[string, number]>>({
			test1: 1,
			test2: 2,
			test3: 3
		}, (result, value, key) => {
			result.push([key, value]);

			return result;
		}, []);
	});

	bench('without return', () => {
		forOwnReduce<Array<[string, number]>>({
			test1: 1,
			test2: 2,
			test3: 3
		}, (result, value, key) => {
			result.push([key, value]);
		}, []);
	});
});
