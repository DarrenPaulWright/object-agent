import { castArray } from 'type-enforcer';

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
 * @arg {Object} object
 * @arg {Array|String} path - If a string, only applies to first level keys
 *
 * @returns {*}
 */
export default (object, path) => {
	castArray(path).some((key) => !(object = object[key]));
	return object;
};
