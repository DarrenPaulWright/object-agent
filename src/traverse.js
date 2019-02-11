import { isArray, isObject } from 'type-enforcer';
import forOwn from './forOwn';

/**
 * Traverses a nested object. The traversal stops as soon as the callback returns a truthy value.
 *
 * @example
 * ``` javascript
 * import { traverse } from 'object-agent';
 *
 * const thing = {
 *     a: [{
 *         b: 'c'
 *     }, {
 *         b: 'd'
 *     }],
 *     e: 'f
 * };
 *
 * traverse(thing, (path, value) => {
 *     console.log(path, value);
 * });
 * // => ['a'], [{ b: 'c' }, { b: 'd' }]
 * // => ['a', 0], { b: 'c' }
 * // => ['a', 0, 'b'], 'c'
 * // => ['a', 1], { b: 'd' }
 * // => ['a', 1, 'b'], 'd'
 * // => ['e'], 'f'
 * ```
 *
 * @function traverse
 *
 * @arg {Object} object
 * @arg {Function} callback
 *
 * @returns {Boolean} true if the callback function returns a truthy value for any path; otherwise, false.
 */
export default (object, callback) => {
	const processValue = (path, value) => {
		if (path.length && callback(path, value)) {
			return true;
		}
		if (isArray(value)) {
			return value.some((value, key) => processValue(path.concat(key), value));
		}
		if (isObject(value)) {
			return forOwn(value, (value, key) => processValue(path.concat(key), value));
		}
	};

	return processValue([], object);
};
