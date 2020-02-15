import { assert } from 'type-enforcer';
import { has } from '../index.js';

describe('has', () => {
	it('should return true for a first level key if astring is provided', () => {
		const object = {
			level1: 'something'
		};

		assert.is(has(object, 'level1'), true);
	});

	it('should return true for a first level key', () => {
		const object = {
			level1: 'something'
		};

		assert.is(has(object, 'level1'), true);
	});

	it('should return true for a second level key', () => {
		const object = {
			level1: {
				level2: 'something'
			}
		};

		assert.is(has(object, 'level1', 'level2'), true);
	});

	it('should return true for a second level key in an array', () => {
		const object = {
			level1: [{
				level2: 'something'
			}]
		};

		assert.is(has(object, 'level1.0.level2'), true);
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

		assert.is(has(object, 'level1.2.level2'), true);
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

		assert.is(has(object, 'level1.2.level2.level3'), true);
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

		assert.is(has(object, 'level1.2.level3.level4'), false);
	});
});
