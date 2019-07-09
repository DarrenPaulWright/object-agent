/**
 * Iterates over own properties of an object. Stops iterating as soon as the callback returns a truthy value.
 *
 * @example
 * ``` javascript
 * import { forOwn } from 'object-agent';
 *
 * const thing = {
 *     a: 'b',
 *     c: 'd'
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
 * @arg {Function} callback - Provides two args: value and key
 *
 * @returns {Boolean} true if the callback function returns a truthy value for any key; otherwise, false.
 */
export default (object, callback) => {
	if (!object) {
		return false;
	}
	let isCanceled = false;

	for (let key in object) {
		if (object.hasOwnProperty(key)) {
			if (callback(object[key], key)) {
				isCanceled = true;
				break;
			}
		}
	}

	return isCanceled;
};
