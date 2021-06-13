const loop = (depth, index, arrays, callback, accrue, result) => { // eslint-disable-line max-params
	for (const length = arrays[depth].length; index < length; index++) {
		result[depth] = arrays[depth][index];

		if (depth === arrays.length - 1) {
			callback(...result);
		}
		else {
			loop(depth + 1, accrue ? index + 1 : 0, arrays, callback, accrue, result);
		}
	}
};

/**
 * Iterate over the values of multiple arrays.
 *
 * @example
 * ``` javascript
 * import { nestedEach } from 'object-agent';
 *
 * const output = [];
 * const save = (item1, item2) => output.push([item1, item2]);
 *
 * nestedEach([[1, 2], ['a', 'b']], save);
 *
 * console.log(output);
 * // => [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
 * ```
 *
 * @function nestedEach
 * @category Iteration
 *
 * @param {Array} arrays - The arrays to iterate over.
 * @param {Function} callback - Provides one item from each array.
 * @param {boolean} [accrue=false] - If true then each successive array in arrays will start it's loop on the next index instead of 0.
 */
export default (arrays, callback, accrue = false) => {
	loop(0, 0, arrays, callback, accrue, []);
};

