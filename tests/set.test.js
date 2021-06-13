import onChange from 'on-change';
import { assert } from 'type-enforcer';
import { set } from '../index.js';

describe('set', () => {
	it('should set the value of a first level key', () => {
		const object = {
			level1: 'something'
		};
		const compare = {
			level1: 'meh'
		};

		const result = set(object, 'level1', 'meh');

		assert.equal(object, compare);
		assert.equal(object, result);
	});

	it('should set the value of a second level key', () => {
		const object = {
			level1: {
				level2: 'something'
			}
		};
		const compare = {
			level1: {
				level2: 'meh'
			}
		};

		const result = set(object, 'level1.level2', 'meh');

		assert.equal(object, compare);
		assert.equal(object, result);
	});

	it('should set the value of a second level key in an array', () => {
		const object = {
			level1: [{
				level2: 'something'
			}]
		};
		const compare = {
			level1: [{
				level2: 'meh'
			}]
		};

		const result = set(object, 'level1.0.level2', 'meh');

		assert.equal(object, compare);
		assert.equal(object, result);
	});

	it('should set the value of a second level key in an array with multiple items', () => {
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
		const compare = {
			level1: [{
				level2: 'test 0'
			}, {
				level2: 'test 1'
			}, {
				level2: 'meh'
			}, {
				level2: 'test 3'
			}, {
				level2: 'test 4'
			}]
		};

		const result = set(object, 'level1.2.level2', 'meh');

		assert.equal(object, compare);
		assert.equal(object, result);
	});

	it('should set the value of a third level key in an array with multiple items', () => {
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
		const compare = {
			level1: [{
				level2: 'test 0'
			}, {
				level2: 'test 1'
			}, {
				level2: {
					level3: 'meh'
				}
			}, {
				level2: 'test 3'
			}, {
				level2: 'test 4'
			}]
		};

		const result = set(object, 'level1.2.level2.level3', 'meh');

		assert.equal(object, compare);
		assert.equal(object, result);
	});

	it('should create objects and arrays then set the value', () => {
		const object = onChange({}, () => {
			testVariable++;
		});
		let testVariable = 0;
		const compare = {
			level1: [, , { // eslint-disable-line no-sparse-arrays
				level2: {
					level3: 'meh'
				}
			}]
		};

		const result = set(object, 'level1.2.level2.level3', 'meh');

		assert.equal(object, compare);
		assert.equal(testVariable, 1);
		assert.equal(object, result);
	});
});
