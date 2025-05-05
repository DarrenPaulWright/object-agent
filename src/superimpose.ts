import clone from './clone.js';
import get from './get.js';
import set from './set.js';
import traverse from './traverse.js';
import isArray from './utility/isArray.js';
import isObject from './utility/isObject.js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any,@stylistic/max-len
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

/**
 * Deeply superimposes two or more items on each other.
 *
 * Notes:
 * - Undefined values will not overwrite defined values
 * - Array order is maintained
 * - if the final parameter is true then the first parameter will be mutated and returned
 *
 * @example
 * ``` javascript
 * import { superimpose } from 'object-agent';
 *
 * const thing1 = {
 *     a: 1,
 *     c: {
 *         d: 3
 *         e: 5
 *     },
 *     f: [1, 2]
 * };
 *
 * const thing2 = {
 *     b: 2,
 *     c: {
 *         d: 4
 *     },
 *     f: [3]
 * };
 *
 * const result = superimpose(thing1, thing2);
 * // => {
 * //	a: 1,
 * //	b: 2,
 * //	c: {
 * //		d: 4,
 * //		e: 5
 * //	},
 * //	f: [3, 2]
 * //}
 *
 * console.log(result === thing1);
 * // => false
 * ```
 */
export default <Type extends Array<unknown>>(
	...args: Type
): UnionToIntersection<Type> => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
	let output = args.shift() as UnionToIntersection<Type>;

	if (args[args.length - 1] === true) {
		args.pop();
	}
	else {
		output = clone(output);
	}

	args.forEach((object2) => {
		traverse(object2, (path, value) => {
			if (value === undefined) {
				return false;
			}

			if (
				!(isArray(value) || isObject(value)) ||
				typeof get(output, path) !== typeof value
			) {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-expect-error
				// eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
				output = set(output, path, value) as UnionToIntersection<Type>;
			}

			return false;
		});
	});

	return output;
};
