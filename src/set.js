import firstInPath from './utility/firstInPath.js';
import walkPath from './utility/walkPath.js';

const buildNew = (key) => !isNaN(parseInt(key)) ? [] : {};

const isPrototypePolluted = (key) => ['__proto__', 'constructor', 'prototype'].includes(key);

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
 * @arg {Object} object
 * @arg {String} path - Dot delimited string
 * @arg {*} value
 *
 * @returns {Object} The mutated object.
 */
export default (object, path, value) => {
	const original = path === '' ? value : object;
	let baseItem;
	let baseKey;
	let baseValue;

	walkPath(path, (key, path) => {
		if (path === '') {
			object[key] = value;
			return true;
		}
		
		if (object[key] === undefined) {
			if (!baseItem) {
				baseItem = object;
				baseKey = key;
				baseValue = object = buildNew(firstInPath(path));
			}
			else {
				object[key] = buildNew(firstInPath(path));
				object = object[key];
			}
		}
		else {
			if (isPrototypePolluted(key)) return;
			object = object[key];
		}
	});

	if (baseItem) {
		baseItem[baseKey] = baseValue;
	}

	return original;
};
