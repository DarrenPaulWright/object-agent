import parsePath from './utility/parsePath';

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
 * set(['a', '1', 'b'], thing, 'e');
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
	path = parsePath(path);
	const last = path.length - 1;
	const buildNew = (index) => !isNaN(path[index + 1] - 0) ? [] : {};
	let baseItem;
	let baseKey;
	let baseValue;

	path.forEach((key, index) => {
		if (index === last) {
			object[key] = value;
		}
		else if (!(key in object)) {
			if (!baseItem) {
				baseItem = object;
				baseKey = key;
				baseValue = object = buildNew(index);
				return;
			}
			object[key] = buildNew(index);
		}
		object = object[key];
	});

	if (baseItem) {
		baseItem[baseKey] = baseValue;
	}
};
