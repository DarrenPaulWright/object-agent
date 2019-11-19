import isArray from './utility/isArray';
import isObject from './utility/isObject';
import multiArgs from './utility/multiArgs';

/**
 * Shallow compares two or more items. All items are compared with [SameValue](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Same-value_equality) equality except Dates and RegExps which compare their _values_ with [SameValue](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Same-value_equality) equality and Objects and Arrays which compare key lengths.
 *
 * @example
 * ``` javascript
 * import { isEqual } from 'object-agent';
 *
 * isEqual(null, undefined);
 * // => false
 *
 * isEqual('a', 'a', 'a');
 * // => true
 *
 * isEqual('a', 'a', 'a', null);
 * // => false
 * ```
 *
 * @function isEqual
 *
 * @arg {...*|Array} - Can be an array of items or multiple args of items.
 *
 * @returns {Boolean}
 */
export default (...args) => {
	args = multiArgs(args);

	const a = args.pop();

	return args.every(isObject(a) ? (b) => isObject(b) && Object.keys(a).length === Object.keys(b).length :
		isArray(a) ? (b) => isArray(b) && a.length === b.length :
			a instanceof Date ? (b) => b instanceof Date && Object.is(b.getTime(), a.getTime()) :
				a instanceof RegExp ? (b) => b instanceof RegExp && Object.is(b + '', a + '') :
					(a !== a) ? (b) => b !== b :
						(b) => Object.is(b, a));
};
