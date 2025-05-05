import nestedEach from './nestedEach.js';

interface Mix {
	<Type>(
		...args: [Array<Type>]
	): Array<[Type]>;

	<Type1, Type2>(
		...args: [Array<Type1>, Array<Type2>]
	): Array<[Type1, Type2]>;

	<Type1, Type2, Type3>(
		...args: [Array<Type1>, Array<Type2>, Array<Type3>]
	): Array<[Type1, Type2, Type3]>;

	<Type1, Type2, Type3, Type4>(
		...args: [Array<Type1>, Array<Type2>, Array<Type3>, Array<Type4>]
	): Array<[Type1, Type2, Type3, Type4]>;

	<Type>(...args: Array<Array<Type>>): Array<Array<Type>>;

	(...args: Array<Array<unknown>>): Array<Array<unknown>>;
}

/**
 * Mix the contents of multiple arrays into a nested array where all variations of one item from each array is in each of the nested arrays.
 *
 * @example
 * ``` javascript
 * import { mix } from 'object-agent';
 *
 * mix([1, 2, 3], ['a', 'b', 'c']);
 * // => [[1, 'a'], [1, 'b'], [1, 'c'], [2, 'a'], [2, 'b'], [2, 'c'], [3, 'a'], [3, 'b'], [3, 'c']]
 *
 * mix([1, 2],  ['a', 'b'],  ['x', 'y']);
 * // => [[1, 'a', 'x'], [1, 'a', 'y'], [1, 'b', 'x'], [1, 'b', 'y'], [2, 'a', 'x'], [2, 'a', 'y'], [2, 'b', 'x'], [2, 'b', 'y']]
 * ```
 */
// @ts-expect-error issue with overload
const mix: Mix = (...args: Array<Array<unknown>>): Array<Array<unknown>> => {
	const output: Array<Array<unknown>> = [];

	nestedEach(args, (...values) => output.push(values));

	return output;
};

export default mix;
