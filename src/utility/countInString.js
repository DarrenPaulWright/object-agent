/**
 * Counts the number of instances of a string within another string.
 *
 * @example
 * ``` javascript
 * import { countInString } from 'object-agent';
 *
 * countInString('first.0', '.');
 * // => 1
 * ```
 *
 * @function countInString
 * @category Interaction
 *
 * @param {string} string - The string to search.
 * @param {string} match - The string to find.
 *
 * @returns {number}
 */
export default (string, match) => {
	let total = -1;

	for (let index = -2; index !== -1; total++) {
		index = string.indexOf(match, index + 1);
	}

	return total;
};
