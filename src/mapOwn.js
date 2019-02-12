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
 *
 * @arg {Object} object
 * @arg {Function} callback
 *
 * @returns {Object|*} If null or undefined are passed in then the same is returned, otherwise a new object
 */
export default (object, callback) => {
	return !object ? object : Object.entries(object).reduce((result, data) => {
		result[data[0]] = callback ? callback(data[1], data[0]) : data[1];
		return result;
	}, {});
}
