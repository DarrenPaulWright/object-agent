import nestedEach from './nestedEach.js';

/**
 * Create a [power set](https://en.wikipedia.org/wiki/Power_set) from a set of values.
 *
 * @example
 * ``` javascript
 * import { powerset } from 'object-agent';
 *
 * powerset([1, 2, 3]);
 * // => [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
 * ```
 *
 * @function powerset
 * @category Data Generation
 *
 * @param {Array} values - Initial set of values.
 *
 * @returns {Array}
 */
export default (values) => {
	const output = [[]];

	nestedEach([values,
		output], (item, out) => output.push(out.concat([item])));

	return output;
};
