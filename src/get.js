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
 *
 * @arg {Object} object
 * @arg {String} path - Dot delimited string
 *
 * @returns {*}
 */
export default (object, path) => {
	return walkPath(path, (key) => undefined === (object = object ? object[key] : undefined)) || object;
};
