import { assert } from 'chai';
import { unset } from '../src/';

describe('unset', () => {
	it('should set the value of a first level key if a string is provided', () => {
		const object = {
			level1: 'something'
		};
		const compare = {};

		unset(object, 'level1');

		assert.deepEqual(object, compare);
	});

	it('should set the value of a first level key', () => {
		const object = {
			level1: 'something'
		};
		const compare = {};

		unset(object, ['level1']);

		assert.deepEqual(object, compare);
	});

	it('should set the value of a second level key', () => {
		const object = {
			level1: {
				level2: 'something'
			}
		};
		const compare = {
			level1: {}
		};

		unset(object, ['level1', 'level2']);

		assert.deepEqual(object, compare);
	});

	it('should set the value of a second level key in an array', () => {
		const object = {
			level1: [{
				level2: 'something'
			}]
		};
		const compare = {
			level1: [{}]
		};

		unset(object, ['level1', '0', 'level2']);

		assert.deepEqual(object, compare);
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
			}, {}, {
				level2: 'test 3'
			}, {
				level2: 'test 4'
			}]
		};

		unset(object, ['level1', '2', 'level2']);

		assert.deepEqual(object, compare);
	});

	it('should set the value of a second level key in an array with multiple items', () => {
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
				level2: {}
			}, {
				level2: 'test 3'
			}, {
				level2: 'test 4'
			}]
		};

		unset(object, ['level1', '2', 'level2', 'level3']);

		assert.deepEqual(object, compare);
	});

});
