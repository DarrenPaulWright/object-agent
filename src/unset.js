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
	walkPath(path, (key, path) => {
		if (path === '') {
			delete object[key];
			return true;
		}

		return undefined === (object = object[key]);
	});

	return object;
};
