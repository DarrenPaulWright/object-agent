/**
 * Builds a new object by iterating over own properties of an object.
 *
 * @example
 * ``` javascript
 * import { mapOwn } from 'object-agent';
 *
 * const thing = {
 *     a: 'b',
 *     c: 'd'
 * };
 *
 * mapOwn(thing, (value, key) => value + ' ' + key);
 * // => { a: 'b a', c: 'd c' }
 * ```
 *
 * @function mapOwn
 * @category Iteration
 *
 * @param {object} object - The object to map.
 * @param {Function} callback - Provides two args: value and key.
 * @param {Array | string} [ignoreKeys] - Any keys that should be ignored.
 *
 * @returns {object | *} If null or undefined are passed in then the same is returned, otherwise a new object
 */
import isArray from './utility/isArray.js';

export default (object, callback, ignoreKeys = []) => {
	if (!object) {
		return object;
	}
	const result = {};

	if (!isArray(ignoreKeys)) {
		ignoreKeys = [ignoreKeys];
	}

	for (const key in object) {
		if (Object.hasOwnProperty.call(object, key) && !ignoreKeys.includes(key)) {
			result[key] = callback ? callback(object[key], key) : object[key];
		}
	}

	return result;
};
