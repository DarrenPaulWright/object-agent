import clone from './clone';
import get from './get';
import set from './set';
import traverse from './traverse';
import isArray from './utility/isArray';
import isObject from './utility/isObject';

/**
 * Deeply superimposes two or more items on each other.
 *
 * Notes:
 * - Undefined values will not overwrite defined values
 * - Array order is maintained
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
 *
 * @function superimpose
 *
 * @arg {*} args - two or more items to superimpose on each other. Each item is superimposed on the item before it.
 * @arg {Boolean} [mutateFirst=false] - If a final argument of true is provided, then the first object will be mutated in place and returned.
 *
 * @returns {*} The resulting object
 */
export default (...args) => {
	let output;

	if (args[args.length - 1] === true) {
		output = args.shift();
		args.pop();
	}
	else {
		output = clone(args.shift());
	}

	args.forEach((object2) => {
		traverse(object2, (path, value) => {
			const outputValue = get(output, path);

			if (value === undefined) {
				return false;
			}

			if (!outputValue ||
				(typeof outputValue !== typeof value) ||
				!(isArray(value) || isObject(value))) {

				if (path === '') {
					output = value;
				}
				else {
					set(output, path, value);
				}
			}
		});
	});

	return output;
}
