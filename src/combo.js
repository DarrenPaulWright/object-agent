import nestedEach from './nestedEach';

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
 *
 * @arg {array} array
 * @arg {length} [length=2]
 *
 * @returns {array}
 */
export default (array, length = 2) => {
	const input = [];
	const output = [];

	while (length) {
		input.push(array);
		length--;
	}

	nestedEach(input, (...args) => output.push(args), true);

	return output;
}


