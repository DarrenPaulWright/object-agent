import walkPath from './utility/walkPath.js';

/**
 * Gets a nested value from an object.
 *
 * @example
 * ``` javascript
 * import { get } from 'object-agent';
 *
 * const thing = {
 *     a: [{
 *         b: 'c'
 *     }, {
 *         b: 'd'
 *     }]
 * };
 *
 * get(thing, 'a.1.b');
 * // => 'd'
 * ```
 *
 * @function get
 * @category Interaction
 *
 * @param {object} object - The object to traverse.
 * @param {string} path - Dot delimited string.
 *
 * @returns {unknown} The value at the end of the path or undefined.
 */
export default (object, path) => {
	walkPath(path, (key) => {
		object = (object !== undefined && object !== null) ? object[key] : undefined;
		return object === undefined;
	});

	return object;
};
