/**
 * Tests if an object or array has any set keys. The values of each key are not considered.
 *
 * @example
 * ``` javascript
 * import { isEmpty } from 'object-agent';
 *
 * isEmpty(['a', 1, 'b']);
 * // => false
 *
 * isEmpty([]);
 * // => true
 *
 * isEmpty({ a: 'b' });
 * // => false
 *
 * isEmpty({});
 * // => true
 *
 * isEmpty(null);
 * // => true
 *
 * isEmpty(undefined);
 * // => true
 * ```
 *
 * @function isEmpty
 *
 * @arg {*} item
 *
 * @returns {Boolean}
 */
export default (item) => !item || !Object.keys(item).length;
