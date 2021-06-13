import { assert } from 'type-enforcer';
import { nestedEach } from '../index.js';

describe('nestedEach', () => {
	it('should call the callback for every combination of values', () => {
		let count = 0;
		let total = 0;

		nestedEach([[1, 2, 3], [1, 2, 3], [1, 2, 3]], (...args) => { // eslint-disable-line complexity
			total++;

			if (args[0] === 1) {
				if (args[1] === 1) {
					if (args[2] === 1) {
						count++;
					}
					if (args[2] === 2) {
						count++;
					}
					if (args[2] === 3) {
						count++;
					}
				}
				if (args[1] === 2) {
					if (args[2] === 1) {
						count++;
					}
					if (args[2] === 2) {
						count++;
					}
					if (args[2] === 3) {
						count++;
					}
				}
				if (args[1] === 3) {
					if (args[2] === 1) {
						count++;
					}
					if (args[2] === 2) {
						count++;
					}
					if (args[2] === 3) {
						count++;
					}
				}
			}
			if (args[0] === 2) {
				if (args[1] === 1) {
					if (args[2] === 1) {
						count++;
					}
					if (args[2] === 2) {
						count++;
					}
					if (args[2] === 3) {
						count++;
					}
				}
				if (args[1] === 2) {
					if (args[2] === 1) {
						count++;
					}
					if (args[2] === 2) {
						count++;
					}
					if (args[2] === 3) {
						count++;
					}
				}
				if (args[1] === 3) {
					if (args[2] === 1) {
						count++;
					}
					if (args[2] === 2) {
						count++;
					}
					if (args[2] === 3) {
						count++;
					}
				}
			}
			if (args[0] === 3) {
				if (args[1] === 1) {
					if (args[2] === 1) {
						count++;
					}
					if (args[2] === 2) {
						count++;
					}
					if (args[2] === 3) {
						count++;
					}
				}
				if (args[1] === 2) {
					if (args[2] === 1) {
						count++;
					}
					if (args[2] === 2) {
						count++;
					}
					if (args[2] === 3) {
						count++;
					}
				}
				if (args[1] === 3) {
					if (args[2] === 1) {
						count++;
					}
					if (args[2] === 2) {
						count++;
					}
					if (args[2] === 3) {
						count++;
					}
				}
			}
		});

		assert.equal(total, 27);
		assert.equal(count, 27);
	});

	it('should call the callback for every unique combination of values if accrue = true', () => {
		let count = 0;
		let total = 0;

		nestedEach([[1, 2, 3, 4], [1, 2, 3, 4]], (...args) => {
			total++;

			if (args[0] === 1) {
				if (args[1] === 2) {
					count++;
				}
				if (args[1] === 3) {
					count++;
				}
				if (args[1] === 4) {
					count++;
				}
			}
			if (args[0] === 2) {
				if (args[1] === 3) {
					count++;
				}
				if (args[1] === 4) {
					count++;
				}
			}
			if (args[0] === 3) {
				if (args[1] === 4) {
					count++;
				}
			}
		}, true);

		assert.equal(total, 6);
		assert.equal(count, 6);
	});
});
