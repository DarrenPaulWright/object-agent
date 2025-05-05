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
 */
export default <Type>(array: Array<Type>, length = 2): Array<Array<Type>> => {
	const output: Array<Array<Type>> = [];

	nestedEach(
		fill(length, () => array),
		(...args) => output.push(args),
		true
	);

	return output;
};
