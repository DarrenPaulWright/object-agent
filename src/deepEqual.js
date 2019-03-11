import get from './get';
import isEqual from './isEqual';
import traverse from './traverse';
import isObject from './utility/isObject';

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
 *
 * @arg {*} item1
 * @arg {*} item2
 *
 * @returns {Boolean}
 */
export default (item1, item2) => {
	return !traverse(item1, (path, value1) => {
		const value2 = get(item2, path);

		if (isObject(value1)) {
			return !isObject(value2) || Object.keys(value1).length !== Object.keys(value2).length;
		}
		else if (Array.isArray(value1)) {
			return !Array.isArray(value2) || value1.length !== value2.length;
		}
		return !isEqual(value1, value2);
	});
}
