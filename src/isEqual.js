import isArray from './utility/isArray';
import isObject from './utility/isObject';
import multiArgs from './utility/multiArgs';

/**
 * Shallow compares two or more items. All items are compared with strict equality except Dates and RegExps which compare their _values_ with strict equality and Objects and Arrays which compare key lengths.
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
	const base = args.shift();
	let baseType = '';

	if (isObject(base)) {
		baseType = 'Object';
	}
	else if (isArray(base)) {
		baseType = 'Array';
	}
	else if (base instanceof Date) {
		baseType = 'Date';
	}
	else if (base instanceof RegExp) {
		baseType = 'RegExp';
	}
	else if (base !== base) {
		baseType = 'NaN';
	}

	return args.every((item) => {
		if (baseType === 'Object') {
			return isObject(item) && Object.keys(base).length === Object.keys(item).length;
		}
		if (baseType === 'Array') {
			return isArray(item) && base.length === item.length;
		}
		if (baseType === 'NaN') {
			return item !== item;
		}
		if (baseType === 'Date') {
			return item instanceof Date && item.getTime() === base.getTime();
		}
		if (baseType === 'RegExp') {
			return item instanceof RegExp && String(item) === String(base);
		}
		return item === base;
	});
};
