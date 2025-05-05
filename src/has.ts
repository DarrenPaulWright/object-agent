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
 */
const has = (object: object, path: string): boolean => get(object, path) !== undefined;

export default has;
