/**
 * Calls a callback a specified number of times
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
 * @arg {integer} times
 * @arg {Function} callback - Provides one argument, an index value of the call count
 *
 * @returns {Array}
 */
export default (times, callback) => {
	for (let index = 0; index < times; index++) {
		callback(index);
	}
};
