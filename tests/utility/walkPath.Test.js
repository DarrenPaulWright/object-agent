import { assert } from 'chai';
import { walkPath } from '../../index';

describe('walkPath', () => {
	it('should not execute the callback if the path is empty', () => {
		let total = 0;

		walkPath('', () => {
			total++;
		});

		assert.equal(total, 0);
	});

	it('should not execute the callback if a step in the path is empty', () => {
		let total = 0;

		walkPath('.a..b.', () => {
			total++;
		});

		assert.equal(total, 2);
	});

	it('should call the callback for each key in path', () => {
		let total = 0;
		let count = 0;

		walkPath('test1.2.test3', (key, tail) => {
			total++;
			if (key === 'test1' && tail === '2.test3') {
				count++;
			}
			if (key === '2' && tail === 'test3') {
				count++;
			}
			if (key === 'test3' && tail === '') {
				count++;
			}
			return false;
		});

		assert.equal(total, 3);
		assert.equal(count, 3);
	});

	it('should call the callback for each key in path until true is returned', () => {
		let total = 0;
		let count = 0;

		walkPath('test1.2.test3', (key, tail) => {
			total++;
			if (key === 'test1' && tail === '2.test3') {
				count++;
			}
			if (key === '2' && tail === 'test3') {
				count++;
				return true;
			}
			if (key === 'test3' && tail === '') {
				count++;
			}
			return false;
		});

		assert.equal(total, 2);
		assert.equal(count, 2);
	});

	it('should call the callback for each key in path with a custom separator until true is returned', () => {
		let total = 0;
		let count = 0;

		walkPath('test1 2 test3', (key, tail) => {
			total++;
			if (key === 'test1' && tail === '2 test3') {
				count++;
			}
			if (key === '2' && tail === 'test3') {
				count++;
				return true;
			}
			if (key === 'test3' && tail === '') {
				count++;
			}
			return false;
		}, ' ');

		assert.equal(total, 2);
		assert.equal(count, 2);
	});
});
