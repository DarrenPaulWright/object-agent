/**
 * Iterates over own properties of an object.
 *
 * @example
 * ``` javascript
 * import { forOwn } from 'object-agent';
 *
 * const thing = {
 *     a: 'b',
 *     c: 'd
 * };
 *
 * forOwn(thing, (value, key) => {
 *     console.log(value, key);
 * });
 * // => 'b', 'a'
 * // => 'd', 'c'
 * ```
 *
 * @function forOwn
 *
 * @arg {Object} object
 * @arg {Function} callback
 */
export default (object, callback) => {
	if (object) {
		const keys = Object.keys(object);

		for (let i = 0, l = keys.length; i < l; i++) {
			if (object.hasOwnProperty(keys[i])) {
				if (callback(object[keys[i]], keys[i]) === true) {
					break;
				}
			}
		}
	}
};
