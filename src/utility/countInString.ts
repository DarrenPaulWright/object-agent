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
 */
export default (string: string, match: string): number => {
	let total = -1;

	for (let index = -2; index !== -1; total++) {
		index = string.indexOf(match, index + 1);
	}

	return total;
};
