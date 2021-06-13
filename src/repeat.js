/**
 * Calls a callback a specified number of times.
 *
 * @example
 * ``` javascript
 * import { repeat } from 'object-agent';
 *
 * repeat(5, (index) => console.log(index));
 * // => 0
 * // => 1
 * // => 2
 * // => 3
 * // => 4
 * ```
 *
 * @function repeat
 * @category Iteration
 *
 * @param {number.integer} times - The number of times to call the callback.
 * @param {Function} callback - Provides one argument, a zero based index value of the call count.
 */
export default (times, callback) => {
	for (let index = 0; index < times; index++) {
		callback(index);
	}
};
