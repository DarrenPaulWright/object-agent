import { assert } from 'chai';
import { countInString } from '../../index';

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
