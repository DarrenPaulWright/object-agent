import { assert } from 'type-enforcer';
import { get } from '../index.js';

describe('get', () => {
	it('should return the object if the path is empty', () => {
		const object = {
			level1: 'something'
		};

		assert.equal(get(object, ''), object);
	});

	it('should return the object if the path is empty and the object is falsey', () => {
		const object = false;

		assert.equal(get(object, ''), object);
	});

	it('should get the value of a first level key if a string is provided', () => {
		const object = {
			level1: 'something'
		};

		assert.equal(get(object, 'level1'), 'something');
	});

	it('should get the value of a first level key', () => {
		const object = {
			level1: 'something'
		};

		assert.equal(get(object, 'level1'), 'something');
	});

	it('should get the value of a second level key', () => {
		const object = {
			level1: {
				level2: 'something'
			}
		};

		assert.equal(get(object, 'level1.level2'), 'something');
	});

	it('should get the value of a second level key in an array', () => {
		const object = {
			level1: [{
				level2: 'something'
			}]
		};

		assert.equal(get(object, 'level1.0.level2'), 'something');
	});

	it('should get the value of a second level key in an array with multiple items', () => {
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

		assert.equal(get(object, 'level1.2.level2'), 'test 2');
	});

	it('should get the value of a third level key in an array with multiple items', () => {
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

		assert.equal(get(object, 'level1.2.level2.level3'), 'test 2');
	});

	it('should get undefined for a path that doesn\'t exist', () => {
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

		assert.equal(get(object, 'level1.2.level3.level4'), undefined);
	});

	it('should get undefined if undefined is provided', () => {
		assert.equal(get(undefined, 'level1.2.level3.level4'), undefined);
	});

	it('should get undefined if null is provided', () => {
		assert.equal(get(null, 'level1.2.level3.level4'), undefined);
	});

	it('should get undefined if 0 is provided', () => {
		assert.equal(get(0, 'level1.2.level3.level4'), undefined);
	});

	it('should get undefined if \'\' is provided', () => {
		assert.equal(get('', 'level1.2.level3.level4'), undefined);
	});
});
