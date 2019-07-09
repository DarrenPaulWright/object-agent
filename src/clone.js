import get from './get';
import mapOwn from './mapOwn';
import set from './set';
import appendToPath from './utility/appendToPath';
import isArray from './utility/isArray';
import isObject from './utility/isObject';

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
 * @arg {Object} [settings]
 * @arg {Array|String} [settings.ignoreKeys] - Any keys in this array will not be cloned
 * @arg {Boolean} [settings.isCircular=false] - If true then circular references will be handled
 *
 * @returns {*}
 */
export default function clone(item, settings = {}) {
	const objectRefs = new WeakMap();
	const circularRefs = [];

	const doClone = (item, path) => {
		if (isObject(item)) {
			if (settings.isCircular) {
				const ref = objectRefs.get(item);
				if (ref !== undefined) {
					circularRefs.push([path, ref]);
					return null;
				}
				objectRefs.set(item, path);
			}

			return mapOwn(item, (value, key) => doClone(value, appendToPath(path, key)), settings.ignoreKeys);
		}
		if (isArray(item)) {
			return item.map((value, index) => doClone(value, appendToPath(path, index)));
		}
		if (item instanceof Date) {
			return new Date(item.valueOf());
		}
		if (item instanceof RegExp) {
			return new RegExp(item);
		}
		return item;
	};

	const result = doClone(item, '');

	if (settings.isCircular) {
		circularRefs.forEach((ref) => set(result, ref[0], get(result, ref[1])));
		circularRefs.length = 0;
	}

	return result;
}
