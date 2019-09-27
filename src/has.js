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
 * has(thing, 'a.1.b');
 * // => true
 * ```
 *
 * @function has
 *
 * @arg {Object} object
 * @arg {String} path - Dot delimited string
 *
 * @returns {*}
 */
export default (object, path) => get(object, path) !== undefined;
