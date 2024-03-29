import repeat from './repeat.js';

const defaultCallback = (index) => index;

/**
 * Returns an array of specified length filled with either the index value or the value returned from the provided callback.
 *
 * @example
 * ``` javascript
 * import { fill } from 'object-agent';
 *
 * fill(5);
 * // => [0, 1, 2, 3, 4]
 *
 * fill(3, (index) => index * 3);
 * // => [0, 3, 6]
 * ```
 *
 * @function fill
 * @category Iteration
 *
 * @param {number} length - The desired length of the returned array.
 * @param {Function} [callback] - Provides one argument, the index of the returned array.
 *
 * @returns {Array<unknown>}
 */
export default (length, callback = defaultCallback) => {
	const output = new Array(length);

	repeat(length, (index) => output[index] = callback(index));

	return output;
};
