import parsePath from './utility/parsePath';

/**
 * Deletes a property from a nested object.
 *
 * @example
 * ``` javascript
 * import { set } from 'object-agent';
 *
 * const thing = {
 *     a: [{
 *         b: 'c'
 *     }, {
 *         b: 'd'
 *     }]
 * };
 *
 * unset(thing, ['a', '1', 'b']);
 * console.log(thing);
 * // => {
 * //    a: [{
 * //        b: 'c'
 * //    }, {}]
 * //}
 * ```
 *
 * @function unset
 *
 * @arg {Object} object
 * @arg {Array|String} path - If a string, gets split on '.'
 */
export default (object, path) => {
	parsePath(path).some((key, index, path) => {
		if (index === path.length - 1) {
			delete object[key];
		}
		return !(object = object[key]);
	});
};
