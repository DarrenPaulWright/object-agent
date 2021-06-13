import erase from './erase.js';
import walkPath from './utility/walkPath.js';

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
 * @category Interaction
 *
 * @param {object} object - The object to mutate.
 * @param {string} path - Dot delimited string.
 *
 * @returns {object} The mutated object.
 */
export default (object, path) => {
	let reference = object;

	return walkPath(path, (key, innerPath) => {
		return reference === undefined ||
			reference === null ||
			(innerPath === '' ?
				erase(reference, key) :
				undefined === (reference = reference[key]));
	}) || object;
};
