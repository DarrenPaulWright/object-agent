import { isArray, isDate, isObject, isRegExp } from 'type-enforcer';
import get from './get';
import traverse from './traverse';

const diff = (value1, value2) => {
	if (isObject(value1)) {
		return !isObject(value2) || Object.keys(value1).length !== Object.keys(value2).length;
	}
	else if (isArray(value1)) {
		return !isArray(value2) || value1.length !== value2.length;
	}
	else if (isDate(value1)) {
		return !isDate(value2) || value1.toString() !== value2.toString();
	}
	else if (isRegExp(value1)) {
		return !isRegExp(value2) || String(value1) !== String(value2);
	}
	return value1 !== value2;
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
	return !(diff(item1, item2) || traverse(item1, (path, value1) => diff(value1, get(item2, path))));
}
