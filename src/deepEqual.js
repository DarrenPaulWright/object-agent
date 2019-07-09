import get from './get';
import isEqual from './isEqual';
import traverse from './traverse';

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
	return Object.is(item1, item2) || !traverse(item1, (path, value1) => !isEqual(value1, get(item2, path)));
};
