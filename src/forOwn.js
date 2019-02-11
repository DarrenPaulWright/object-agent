/**
 * Iterates over own properties of an object. Stops iterating as soon as the callback returns a truthy value.
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
 *
 * @returns {Boolean} true if the callback function returns a truthy value for any key; otherwise, false.
 */
export default (object, callback) => {
	let isCanceled = false;

	if (object) {
		const keys = Object.keys(object);

		for (let i = 0, l = keys.length; i < l; i++) {
			if (object.hasOwnProperty(keys[i])) {
				if (callback(object[keys[i]], keys[i])) {
					isCanceled = true;
					break;
				}
			}
		}
	}

	return isCanceled;
};
