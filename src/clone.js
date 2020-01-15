import get from './get.js';
import mapOwn from './mapOwn.js';
import set from './set.js';
import appendToPath from './utility/appendToPath.js';
import isArray from './utility/isArray.js';
import isObject from './utility/isObject.js';

const doClone = (item, path, settings) => {
	if (isObject(item)) {
		if (settings.isCircular) {
			if (settings.objectRefs.has(item)) {
				return settings.circularRefs.push([path, settings.objectRefs.get(item)]);
			}
			settings.objectRefs.set(item, path);
		}

		return mapOwn(item, (value, key) => doClone(value, appendToPath(path, key), settings), settings.ignoreKeys);
	}

	return isArray(item) ? item.map((value, index) => doClone(value, appendToPath(path, index), settings)) :
		item instanceof Date ? new Date(item.valueOf()) :
			item instanceof RegExp ? new RegExp(item) :
				item;
};

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
	if (settings.isCircular) {
		settings.objectRefs = new WeakMap();
		settings.circularRefs = [];
	}

	const result = doClone(item, '', settings);

	if (settings.isCircular) {
		let ref = '';

		for (let index = 0; index < settings.circularRefs.length; index++) {
			ref = settings.circularRefs[index];
			set(result, ref[0], get(result, ref[1]));
		}

		settings.objectRefs = null;
		settings.circularRefs = null;
	}

	return result;
}
