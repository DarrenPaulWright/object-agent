import { isArray, isObject } from 'type-enforcer';
import forOwn from './forOwn';

/**
 * Traverses a nested object.
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
 */
export default (object, callback) => {
	const processValue = (path, value) => {
		if (!path.length || callback(path, value) !== true) {
			if (isArray(value)) {
				value.forEach((value, key) => processValue(path.concat(key), value));
			}
			else if (isObject(value)) {
				forOwn(value, (value, key) => processValue(path.concat(key), value));
			}
		}
	};

	processValue([], object);
};
