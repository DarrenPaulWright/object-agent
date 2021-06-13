import get from './get.js';

/**
 * Determines if a nested value is defined.
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
 * @category Interaction
 *
 * @param {object} object - The object to check.
 * @param {string} path - Dot delimited string.
 *
 * @returns {boolean}
 */
export default (object, path) => get(object, path) !== undefined;
