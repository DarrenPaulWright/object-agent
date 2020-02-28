import fill from './fill.js';
import nestedEach from './nestedEach.js';

/**
 * Takes a set of values and creates an array of the unique sets of the values of a given length.
 *
 * @example
 * ``` javascript
 * import { combo } from 'object-agent';
 *
 * combo([1, 2, 3]);
 * // => [[1, 2], [1, 3], [2, 3]]
 *
 * combo([1, 2, 3, 4], 3);
 * // => [[1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4]]
 * ```
 *
 * @function combo
 * @category Data Generation
 *
 * @arg {array} array
 * @arg {length} [length=2]
 *
 * @returns {array}
 */
export default (array, length = 2) => {
	const output = [];

	nestedEach(fill(length, () => array), (...args) => output.push(args), true);

	return output;
}


