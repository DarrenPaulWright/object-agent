import { bench, describe } from 'hippogriff';
import { traverse } from '../index.js';

describe('traverse', () => {
	bench('isOptimistic false', () => {
		traverse({
			test1: 1,
			test2: 2,
			test3: [1, 2, 3]
		}, () => {
		});
	});

	bench('isOptimistic true', () => {
		traverse({
			test1: 1,
			test2: 2,
			test3: [1, 2, 3]
		}, () => {
		}, true);
	});

	bench('isOptimistic true, return early', () => {
		traverse({
			test1: 1,
			test2: 2,
			test3: [1, 2, 3]
		}, (path) => {
			return path === 'test3.2';
		}, true);
	});
});
