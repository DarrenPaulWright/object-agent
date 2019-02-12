import { isDate, isRegExp } from 'type-enforcer';
import multiArgs from './utility/multiArgs';

/**
 * Shallow compares two or more items. All items are compared with strict equality except Dates and RegExps which compare their _values_ with strict equality.
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
	args = multiArgs(args)
	const base = args.shift();
	const isBaseDate = isDate(base);
	const isBaseRegExp = isRegExp(base);

	return args.every((item) => {
		if (isBaseDate) {
			return isDate(item) && item.getTime() === base.getTime();
		}
		if (isBaseRegExp) {
			return isRegExp(item) && String(item) === String(base);
		}
		return item === base;
	});
};
