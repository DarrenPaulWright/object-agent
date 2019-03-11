import parsePath from './utility/parsePath';

/**
 * Determines if a nested value is defined
 *
 * @example
 * ``` javascript
 * import { has } from 'object-agent';
 *
 * const thing = {
 *     a: [{
 *         b: 'c'
 *     }, {
 *         b: 'd'
 *     }]
 * };
 *
 * has(['a', 1, 'b'], thing);
 * // => true
 * ```
 *
 * @function has
 *
 * @arg {Object} object
 * @arg {Array|String} path - If a string, gets split on '.'
 *
 * @returns {*}
 */
export default (object, path) => {
	parsePath(path).some((key) => !(object = object[key]));
	return object !== undefined;
};
