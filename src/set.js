import firstInPath from './utility/firstInPath.js';
import walkPath from './utility/walkPath.js';

const buildNew = (key) => isNaN(parseInt(key, 10)) ? {} : [];

const prototypeKeys = ['__proto__', 'constructor', 'prototype'];
const isPrototypePolluted = (key) => prototypeKeys.includes(key);

/**
 * Sets a nested value in an object. Keys in the path that don't exist at any point in the object will be created and added to the object once.
 *
 * @example
 * ``` javascript
 * import { set } from 'object-agent';
 *
 * const thing = {
 *     a: [{
 *         b: 'c'
 *     }, {
 *         b: 'd'
 *     }]
 * };
 *
 * set(thing, 'a.1.b', 'e');
 * console.log(thing);
 * // => {
 * //    a: [{
 * //        b: 'c'
 * //    }, {
 * //        b: 'e'
 * //    }]
 * //}
 * ```
 *
 * @function set
 * @category Interaction
 *
 * @param {object} object - The object to mutate.
 * @param {string} path - Dot delimited string.
 * @param {*} value - The value to set at the end of the path.
 *
 * @returns {object} The mutated object.
 */
export default (object, path, value) => {
	const original = path === '' ? value : object;
	let baseItem = null;
	let baseKey = '';
	let baseValue = null;

	walkPath(path, (key, innerPath) => {
		if (innerPath === '') {
			object[key] = value;
			return true;
		}

		if (object[key] === undefined) {
			if (baseItem) {
				object[key] = buildNew(firstInPath(innerPath));
				object = object[key];
			}
			else {
				baseItem = object;
				baseKey = key;
				baseValue = object = buildNew(firstInPath(innerPath));
			}
		}
		else {
			if (isPrototypePolluted(key)) {
				return true;
			}

			object = object[key];
		}
	});

	if (baseItem) {
		baseItem[baseKey] = baseValue;
	}

	return original;
};
