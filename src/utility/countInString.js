/**
 * Counts the number of instances of a string within another string
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
 *
 * @arg {String} string
 * @arg {String} match
 *
 * @returns {Number}
 */
export default (string, match) => {
	let total = -1;

	for (let index = -2; index !== -1; total++) {
		index = string.indexOf(match, index + 1);
	}

	return total;
};
