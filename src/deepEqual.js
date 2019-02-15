import { isArray, isObject } from 'type-enforcer';
import get from './get';
import isEqual from './isEqual';
import traverse from './traverse';

const diff = (value1, value2) => {
	if (isObject(value1)) {
		return !isObject(value2) || Object.keys(value1).length !== Object.keys(value2).length;
	}
	else if (isArray(value1)) {
		return !isArray(value2) || value1.length !== value2.length;
	}
	return !isEqual(value1, value2);
};

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
	return !traverse(item1, (path, value1) => diff(value1, get(item2, path)));
}
