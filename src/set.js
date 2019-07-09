import firstInPath from './utility/firstInPath';
import walkPath from './utility/walkPath';

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
 * set(thing, ['a', '1', 'b'], 'e');
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
 *
 * @arg {Object} object
 * @arg {Array|String} path - If a string, gets split on '.'
 * @arg {*} value
 */
export default (object, path, value) => {
	let baseItem;
	let baseKey;
	let baseValue;

	const buildNew = (key) => !isNaN(key - 0) ? [] : {};

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
			object = object[key];
		}

		return false;
	});

	if (baseItem) {
		baseItem[baseKey] = baseValue;
	}
};
