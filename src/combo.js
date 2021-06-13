import fill from './fill.js';
import nestedEach from './nestedEach.js';

/**
 * Takes an array of values and returns a new array of the unique sets of the values of a given length.
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
 * @param {Array} array - The array of values.
 * @param {length} [length=2] - The length of returned sets.
 *
 * @returns {Array}
 */
export default (array, length = 2) => {
	const output = [];

	nestedEach(fill(length, () => array), (...args) => output.push(args), true);

	return output;
};


