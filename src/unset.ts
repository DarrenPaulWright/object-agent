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
 */
export default (object: object, path: string): unknown => {
	let reference: unknown = object;

	walkPath(path, (key, innerPath) => {
		return reference === undefined ||
			reference === null ||
			(innerPath === '' ?
				erase(reference, key) :

				// @ts-expect-error key index
				undefined === (reference = reference[key] as unknown));
	});

	return object;
};
