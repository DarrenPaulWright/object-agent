import nestedEach from './nestedEach.js';

/**
 * Mix the contents of multiple arrays into a nested array where all variations of one item from each array is in each of the nested arrays.
 *
 * @example
 * ``` javascript
 * import { mix } from 'object-agent';
 *
 * mix([1, 2, 3], ['a', 'b', 'c']);
 * // => [[1, 'a'], [1, 'b'], [1, 'c'], [2, 'a'], [2, 'b'], [2, 'c'], [3, 'a'], [3, 'b'], [3, 'c']]
 *
 * mix([1, 2],  ['a', 'b'],  ['x', 'y']);
 * // => [[1, 'a', 'x'], [1, 'a', 'y'], [1, 'b', 'x'], [1, 'b', 'y'], [2, 'a', 'x'], [2, 'a', 'y'], [2, 'b', 'x'], [2, 'b', 'y']]
 * ```
 *
 * @function mix
 *
 * @arg {Array} args - All of the arrays to mix together
 *
 * @returns {Array}
 */
export default (...args) => {
	const output = [];

	nestedEach(args, (...args) => output.push(args));

	return output;
}
