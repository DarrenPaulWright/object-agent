import walkPath from './utility/walkPath';

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
 *
 * @arg {Object} object
 * @arg {String} path - Dot delimited string
 *
 * @returns {*}
 */
export default (object, path) => {
	if (!path) {
		return object;
	}
	if (!object) {
		return undefined;
	}

	walkPath(path, (key) => undefined === (object = object[key]));

	return object;
};
