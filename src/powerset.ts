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
 */
export default <Type>(values: Array<Type>): Array<Array<Type>> => {
	const output: Array<Array<Type>> = [[]];

	nestedEach(
		[values, output],
		(item: Type, out: Array<Type>) => {
			output.push(out.concat([item]));
		}
	);

	return output;
};
