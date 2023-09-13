import get from './get.js';
import mapOwn from './mapOwn.js';
import set from './set.js';
import appendToPath from './utility/appendToPath.js';
import isArray from './utility/isArray.js';
import isObject from './utility/isObject.js';

const cloneObject = (value, path, settings) => {
	if (settings.isCircular) {
		if (settings.objectRefs.has(value)) {
			return settings.circularRefs.push([path,
				settings.objectRefs.get(value)]);
		}

		settings.objectRefs.set(value, path);
	}

	return mapOwn(value, (innerValue, key) => {
		return doClone(innerValue, appendToPath(path, key), settings);
	}, settings.ignoreKeys);
};

const doClone = (value, path, settings) => {
	if (isObject(value)) {
		return cloneObject(value, path, settings);
	}

	if (isArray(value)) {
		return value.map((innerValue, index) => {
			return doClone(innerValue, appendToPath(path, index), settings);
		});
	}

	if (value instanceof Date) {
		return new Date(value.valueOf());
	}

	if (value instanceof RegExp) {
		return new RegExp(value); // eslint-disable-line require-unicode-regexp
	}

	return value;
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
 * @param {unknown} value - The data to clone.
 * @param {object} [settings] - Settings object.
 * @param {Array | string} [settings.ignoreKeys] - Any keys in this array will not be cloned.
 * @param {boolean} [settings.isCircular=false] - If true then circular references will be handled.
 *
 * @returns {unknown}
 */
export default function clone(value, settings = {}) {
	if (settings.isCircular) {
		settings.objectRefs = new Map();
		settings.circularRefs = [];
	}

	const result = doClone(value, '', settings);

	if (settings.isCircular) {
		let reference = '';

		for (let index = 0; index < settings.circularRefs.length; index++) {
			reference = settings.circularRefs[index];
			set(result, reference[0], get(result, reference[1]));
		}

		settings.objectRefs.clear();
		settings.objectRefs = null;
		settings.circularRefs = null;
	}

	return result;
}
