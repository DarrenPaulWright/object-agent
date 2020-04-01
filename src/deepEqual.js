import get from './get.js';
import isEqual from './isEqual.js';
import traverse from './traverse.js';

/**
 * Deeply compares two items.
 *
 * @example
 * ``` javascript
 * import { deepEqual } from 'object-agent';
 *
 * deepEqual(null, undefined);
 * // => false
 *
 * const item1 = {
 *     a: ['b']
 * }
 * const item2 = {
 *     a: ['c']
 * }
 *
 * deepEqual(item1, item2);
 * // => false
 * ```
 *
 * @function deepEqual
 * @category Comparison
 *
 * @arg {*} item1
 * @arg {*} item2
 *
 * @returns {Boolean}
 */
export default (item1, item2) => {
	return Object.is(item1, item2) || !traverse(item1, (path, value, isCircular) => {
		if (isCircular && Object.is(value, get(item2, path))) {
			return false;
		}

		return !isEqual(value, get(item2, path));
	});
};
