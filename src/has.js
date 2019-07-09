import get from './get';

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
 * has(thing, ['a', 1, 'b']);
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
export default (object, path) => get(object, path) !== undefined;
