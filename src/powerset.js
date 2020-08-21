import nestedEach from './nestedEach.js';

/**
 * Create a [power set](https://en.wikipedia.org/wiki/Power_set) from a set of values
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
 * @arg {array} input
 *
 * @returns {array}
 */
export default (input) => {
	const output = [[]];

	nestedEach([input, output], (item, out) => output.push(out.concat([item])));

	return output;
};
