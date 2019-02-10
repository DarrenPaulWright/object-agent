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
 * get(['a', 1, 'b'], thing);
 * // => 'd'
 * ```
 *
 * @function get
 *
 * @arg {Array} path
 * @arg {Object} object
 *
 * @returns {*}
 */
export default (path, object) => {
	path.some((key) => !(object = object[key]));
	return object;
};
