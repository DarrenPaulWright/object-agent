/**
 * Iterates over own and inherited properties of an object. Stops iterating as soon as the callback returns a truthy value.
 *
 * @example
 * ``` javascript
 * import { forIn } from 'object-agent';
 *
 * const Thing = {
 *     this.a = 'b';
 * };
 *
 * Thing.prototype.c = 'd';
 *
 * forIn(new Thing(), (value, key) => {
 *     console.log(value, key);
 * });
 * // => 'b', 'a'
 * // => 'd', 'c'
 * ```
 *
 * @function forIn
 * @category Iteration
 *
 * @arg {Object} object
 * @arg {Function} callback - Provides two args: value and key
 *
 * @returns {Boolean} true if the callback function returns a truthy value for any key; otherwise, false.
 */
export default (object, callback) => {
	for (let key in object) {
		if (key !== 'constructor' && callback(object[key], key)) {
			return true;
		}
	}

	return false;
}
