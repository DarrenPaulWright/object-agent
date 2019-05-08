/**
 * Iterate over the values of multiple arrays
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
 *
 * @arg {array} arrays
 * @arg {function} callback - Provides one item from each array.
 * @arg {boolean} [accrue=false] - If true then each successive array in arrays will start it's loop on the next index instead of 0.
 *
 * @returns {array}
 */
export default (arrays, callback, accrue = false) => {
	const indexes = [];

	const loop = (depth, index) => {
		const length = arrays[depth].length;
		const depthPlus = depth + 1;

		while (length > index++) {
			indexes[depth] = index;

			if (depthPlus < arrays.length) {
				loop(depthPlus, accrue ? index : 0);
			}
			else {
				callback.apply(null, arrays.map((array, index) => array[indexes[index] - 1]));
			}
		}
	};

	loop(0, 0);
};
