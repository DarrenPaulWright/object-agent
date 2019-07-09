import { assert } from 'chai';
import { has } from '../src/';

describe('has', () => {
	it('should return true for a first level key if astring is provided', () => {
		const object = {
			level1: 'something'
		};

		assert.isTrue(has(object, 'level1'));
	});

	it('should return true for a first level key', () => {
		const object = {
			level1: 'something'
		};

		assert.isTrue(has(object, 'level1'));
	});

	it('should return true for a second level key', () => {
		const object = {
			level1: {
				level2: 'something'
			}
		};

		assert.isTrue(has(object, 'level1', 'level2'));
	});

	it('should return true for a second level key in an array', () => {
		const object = {
			level1: [{
				level2: 'something'
			}]
		};

		assert.isTrue(has(object, 'level1.0.level2'));
	});

	it('should return true for a second level key in an array with multiple items', () => {
		const object = {
			level1: [{
				level2: 'test 0'
			}, {
				level2: 'test 1'
			}, {
				level2: 'test 2'
			}, {
				level2: 'test 3'
			}, {
				level2: 'test 4'
			}]
		};

		assert.isTrue(has(object, 'level1.2.level2'));
	});

	it('should return true for a third level key in an array with multiple items', () => {
		const object = {
			level1: [{
				level2: 'test 0'
			}, {
				level2: 'test 1'
			}, {
				level2: {
					level3: null
				}
			}, {
				level2: 'test 3'
			}, {
				level2: 'test 4'
			}]
		};

		assert.isTrue(has(object, 'level1.2.level2.level3'));
	});

	it('should return false for a path that doesn\'t exist', () => {
		const object = {
			level1: [{
				level2: 'test 0'
			}, {
				level2: 'test 1'
			}, {
				level2: {
					level3: 'test 2'
				}
			}, {
				level2: 'test 3'
			}, {
				level2: 'test 4'
			}]
		};

		assert.isFalse(has(object, 'level1.2.level3.level4'));
	});
});
