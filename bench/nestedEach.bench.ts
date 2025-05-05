import { bench, describe } from 'hippogriff';
import { nestedEach } from '../index.js';

describe('nestedEach', () => {
	bench('accrue false', () => {
		nestedEach([[1, 2], [3, 4]], () => {
		});
	});

	bench('accrue true', () => {
		nestedEach([[1, 2], [3, 4]], () => {
		}, true);
	});
});
