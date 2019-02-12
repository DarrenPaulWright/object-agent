import { assert } from 'chai';
import { isEqual } from '../src/';

describe('isEqual', () => {
	it('should accept an array of values', () => {
		assert.isTrue(isEqual(['test', 'test', 'test']));
	});

	it('should return true if all the args are the same', () => {
		assert.isTrue(isEqual('test', 'test', 'test'));
	});

	it('should return true if all the args are null', () => {
		assert.isTrue(isEqual(null, null, null));
	});

	it('should return true if all the args are the same date', () => {
		assert.isTrue(isEqual(new Date('2007/3/15'), new Date('2007/3/15'), new Date('2007/3/15')));
	});

	it('should return true if all the args are the same RegExp', () => {
		assert.isTrue(isEqual(/test/, /test/, /test/));
	});

	it('should return false if all the args are NOT the same', () => {
		assert.isFalse(isEqual('test', 'test2', 'test'));
	});

	it('should return false if all the args are the same date', () => {
		assert.isFalse(isEqual(new Date('2007/3/15'), null, new Date('2007/3/15')));
	});

	it('should return false if all the args are the same RegExp', () => {
		assert.isFalse(isEqual(/test/, null, /test/));
	});
});
