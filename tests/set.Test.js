import { assert } from 'chai';
import { set } from '../src/';

describe('set', () => {
	it('should set the value of a first level key', () => {
		const object = {
			level1: 'something'
		};
		const compare = {
			level1: 'meh'
		};

		set(['level1'], object, 'meh');

		assert.deepEqual(object, compare);
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

		set(['level1', 'level2'], object, 'meh');

		assert.deepEqual(object, compare);
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

		set(['level1', '0', 'level2'], object, 'meh');

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
			}, {
				level2: 'meh'
			}, {
				level2: 'test 3'
			}, {
				level2: 'test 4'
			}]
		};

		set(['level1', 2, 'level2'], object, 'meh');

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
				level2: {
					level3: 'meh'
				}
			}, {
				level2: 'test 3'
			}, {
				level2: 'test 4'
			}]
		};

		set(['level1', 2, 'level2', 'level3'], object, 'meh');

		assert.deepEqual(object, compare);
	});

	it('should create objects and arrays then set the value', () => {
		const object = {};
		const compare = {
			level1: [, , {
				level2: {
					level3: 'meh'
				}
			}]
		};

		set(['level1', 2, 'level2', 'level3'], object, 'meh');

		assert.deepEqual(object, compare);
	});

});
