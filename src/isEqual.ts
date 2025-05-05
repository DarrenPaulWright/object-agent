import forIn from './forIn.js';
import isArray from './utility/isArray.js';
import isObject from './utility/isObject.js';
import multiArgs from './utility/multiArgs.js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getComparer = (a: any): (b: unknown) => boolean => {
	if (isObject(a)) {
		const alt = Object.keys(a).length;

		return (b) => isObject(b) && alt === Object.keys(b).length;
	}

	if (isArray(a)) {
		return (b) => isArray(b) && a.length === b.length;
	}

	if (a instanceof Date) {
		const alt = a.getTime();

		return (b) => b instanceof Date && Object.is(b.getTime(), alt);
	}

	if (a instanceof RegExp) {
		const alt = `${ a }`;

		return (b) => b instanceof RegExp && Object.is(`${ b }`, alt);
	}

	if (a !== a) { // eslint-disable-line no-self-compare
		return (b) => b !== b; // eslint-disable-line no-self-compare
	}

	if (typeof a === 'object' && a !== null) {
		return (b) => typeof b === 'object' &&
			b !== null &&
			// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
			b.constructor === a.constructor &&
			// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
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
 */
export default (...args: Array<unknown>): boolean => {
	const values = multiArgs(args);

	const first = values.pop();

	return values.every(getComparer(first));
};
