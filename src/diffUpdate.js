import deepEqual from './deepEqual.js';
import forOwn from './forOwn.js';

/**
 * Performs a deep comparison of two objects, returns a new object with only the first level values that have been changed or added on the second object.
 *
 * @example
 * ``` javascript
 * import { diffUpdate } from 'object-agent';
 *
 * const item1 = {
 *     a: ['b'],
 *     c: 'd',
 *     e: null
 * }
 * const item2 = {
 *     a: ['b'],
 *     c: null,
 *     e: null,
 *     f: 'g'
 * }
 *
 * diffUpdate(item1, item2);
 * // => { c: null, f: 'g' }
 * ```
 *
 * @function diffUpdate
 * @category Comparison
 *
 * @param {object} object1 - The initial object.
 * @param {object} object2 - The changed object.
 *
 * @returns {object}
 */
export default (object1, object2) => {
	const output = {};

	forOwn(object2, (value, key) => {
		if (!object1 || !deepEqual(value, object1[key])) {
			output[key] = value;
		}
	});

	return output;
};
