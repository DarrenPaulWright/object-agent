import get from './get.js';

/**
 * Pulls values from an array of objects into a new array.
 *
 * @example
 * ``` javascript
 * import { pull } from 'object-agent';
 *
 * const array = [{
 *     a: { b: [1, 2, 3] }
 * }, {
 *     a: { b: [4, 5, 6] }
 * }];
 *
 * pull(array, 'a.b.1'); // => [2, 5]
 * ```
 *
 * @function pull
 * @category Iteration
 *
 * @param {Array} array - Array of objects.
 * @param {string} path - Dot delimited string of the path within each object.
 *
 * @returns {Array}
 */
export default (array, path) => array.map((item) => get(item, path));
