import get from './get.js';
import mapOwn from './mapOwn.js';
import set from './set.js';
import appendToPath from './utility/appendToPath.js';
import isArray from './utility/isArray.js';
import isObject from './utility/isObject.js';

const cloneObject = (value, path, settings) => {
	if (settings.isCircular) {
		if (settings.objectRefs.has(value)) {
			return settings.circularRefs.push([path, settings.objectRefs.get(value)]);
		}

		settings.objectRefs.set(value, path);
	}

	return mapOwn(value, (value, key) => doClone(value, appendToPath(path, key), settings), settings.ignoreKeys);
};

const cloneArray = (value, path, settings) => value.map((value, index) => doClone(value, appendToPath(path, index), settings));

const cloneDate = (value) => new Date(value.valueOf());

const cloneRegExp = (value) => new RegExp(value);

const doClone = (value, path, settings) => {
	return isObject(value) ? cloneObject(value, path, settings) :
		isArray(value) ? cloneArray(value, path, settings) :
			value instanceof Date ? cloneDate(value) :
				value instanceof RegExp ? cloneRegExp(value) :
					value;
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
 * @category Interaction
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
		settings.objectRefs = new Map();
		settings.circularRefs = [];
	}

	const result = doClone(item, '', settings);

	if (settings.isCircular) {
		let ref = '';

		for (let index = 0; index < settings.circularRefs.length; index++) {
			ref = settings.circularRefs[index];
			set(result, ref[0], get(result, ref[1]));
		}

		settings.objectRefs.clear();
		settings.objectRefs = null;
		settings.circularRefs = null;
	}

	return result;
}
