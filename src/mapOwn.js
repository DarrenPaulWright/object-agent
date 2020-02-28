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
 * @arg {Object} object
 * @arg {Function} callback - Provides two args: value and key
 * @arg {Array|String} [ignoreKeys] - Any keys in this array will be ignored
 *
 * @returns {Object|*} If null or undefined are passed in then the same is returned, otherwise a new object
 */
export default (object, callback, ignoreKeys = []) => {
	if (!object) {
		return object;
	}
	const result = {};

	for (let key in object) {
		if (Object.hasOwnProperty.call(object, key) && ignoreKeys.indexOf(key) === -1) {
			result[key] = callback ? callback(object[key], key) : object[key];
		}
	}

	return result;
};
