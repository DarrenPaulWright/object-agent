import { assert } from 'type-enforcer';
import { countInString } from '../../index.js';

describe('countInString', () => {
	it('should return 0 if an empty string is provided', () => {
		assert.equal(countInString('', '.'), 0);
	});

	it('should return 0 if no matches are found', () => {
		assert.equal(countInString('1, 2, 3, 4', '.'), 0);
	});

	it('should count spaced out single characters in a string', () => {
		assert.equal(countInString(',,,,,', ','), 5);
	});

	it('should count spaced out single characters in a string', () => {
		assert.equal(countInString('1, 2, 3, 4', ','), 3);
	});

	it('should count multiple characters in a string', () => {
		assert.equal(countInString('1, 2, 3, 4', ', '), 3);
	});
});
