import { assert } from 'chai';
import { get } from '../src/';

describe('get', () => {
	it('should get the value of a first level key', () => {
		const object = {
			level1: 'something'
		};

		assert.equal(get(['level1'], object), 'something');
	});

	it('should get the value of a second level key', () => {
		const object = {
			level1: {
				level2: 'something'
			}
		};

		assert.equal(get(['level1', 'level2'], object), 'something');
	});

	it('should get the value of a second level key in an array', () => {
		const object = {
			level1: [{
				level2: 'something'
			}]
		};

		assert.equal(get(['level1', 0, 'level2'], object), 'something');
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

		assert.equal(get(['level1', '2', 'level2'], object), 'test 2');
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

		assert.equal(get(['level1', '2', 'level2', 'level3'], object), 'test 2');
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

		assert.equal(get(['level1', '2', 'level3'], object), undefined);
	});
});
