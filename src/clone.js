import { isArray, isDate, isObject, isRegExp } from 'type-enforcer';
import get from './get';
import mapOwn from './mapOwn';
import set from './set';

/**
 * Deep clone a value.
 *
 * @example
 * ``` javascript
 * import { clone } from 'object-agent';
 *
 * clone({ a: 'b', c: 'd' });
 * // => { a: 'b', c: 'd' }
 * ```
 *
 * @function clone
 *
 * @arg {*} value
 * @arg {Array|String} [ignoreKeys] - Any keys in this array will not be cloned
 *
 * @returns {*}
 */
export default function clone(item, ignoreKeys = []) {
	const objectRefs = [];
	const circularRefs = [];

	const doClone = (item, path) => {
		if (isObject(item)) {
			const ref = objectRefs.find((data) => data[0] === item);
			if (ref) {
				circularRefs.push([path, ref[1]]);
				return null;
			}
			objectRefs.push([item, path]);

			return mapOwn(item, (value, key) => doClone(value, path.concat(key)), ignoreKeys);
		}
		if (isArray(item)) {
			return item.map((value, index) => doClone(value, path.concat(index)));
		}
		if (isDate(item)) {
			return new Date(item.valueOf());
		}
		if (isRegExp(item)) {
			return new RegExp(item);
		}
		return item;
	};

	const result = doClone(item, []);

	circularRefs.forEach((ref) => set(result, ref[0], get(result, ref[1])));

	return result;
}
