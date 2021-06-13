import forIn from './forIn.js';
import isArray from './utility/isArray.js';
import isObject from './utility/isObject.js';
import multiArgs from './utility/multiArgs.js';

const getComparer = (a) => {
	if (isObject(a)) {
		const alt = Object.keys(a).length;
		return (b) => isObject(b) && alt === Object.keys(b).length;
	}
	if (isArray(a)) {
		const alt = a.length;
		return (b) => isArray(b) && alt === b.length;
	}
	if (a instanceof Date) {
		const alt = a.getTime();
		return (b) => b instanceof Date && Object.is(b.getTime(), alt);
	}
	if (a instanceof RegExp) {
		const alt = a + '';
		return (b) => b instanceof RegExp && Object.is(b + '', alt);
	}
	if (a !== a) { // eslint-disable-line no-self-compare
		return (b) => b !== b; // eslint-disable-line no-self-compare
	}
	if (typeof a === 'object' && a !== null) {
		return (b) => b !== null &&
			b.constructor === a.constructor &&
			!forIn(b, (value, key) => a[key] !== value);
	}

	return (b) => Object.is(b, a);
};

/**
 * Shallow compares two or more items. All items are compared with [SameValue](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Same-value_equality) equality except Dates and RegExps which compare their _values_ with [SameValue](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Same-value_equality) equality, Objects and Arrays which compare key lengths, and instances of objects that compare all properties and prototype objects.
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
 * @category Comparison
 *
 * @param {...*|Array} args - Can be an array of items or multiple args of items.
 *
 * @returns {boolean}
 */
export default (...args) => {
	args = multiArgs(args);

	const a = args.pop();

	return args.every(getComparer(a));
};
