import erase from './erase';
import walkPath from './utility/walkPath';

/**
 * Deletes a property from a nested object.
 *
 * @example
 * ``` javascript
 * import { unset } from 'object-agent';
 *
 * const thing = {
 *     a: [{
 *         b: 'c'
 *     }, {
 *         b: 'd'
 *     }]
 * };
 *
 * unset(thing, ['a.1.b']);
 * console.log(thing);
 * // => {
 * //    a: [{ b: 'c' }, {}]
 * //}
 * ```
 *
 * @function unset
 *
 * @arg {Object} object
 * @arg {String} path - Dot delimited string
 *
 * @returns {Object} The mutated object.
 */
export default (object, path) => {
	let ref = object;

	return walkPath(path, (key, path) => {
		return ref === undefined ||
			ref === null ||
			(path === '' ?
				erase(ref, key) :
				undefined === (ref = ref[key]));
	}) || object;
};
