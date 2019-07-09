import forOwn from './forOwn';
import appendToPath from './utility/appendToPath';
import isArray from './utility/isArray';
import isObject from './utility/isObject';

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
 * // => [], { a: [{ b: 'c' }, { b: 'd' }] }
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
 * @arg {Function} callback - Provides two args, path and value. If true is returned then stop traversing and return true.
 * @arg {Boolean} [isOptimistic=false] - If true then returning true in the callback will prevent going deeper down that branch, but will otherwise continue traversing.
 *
 * @returns {Boolean} true if the callback function returns a truthy value for any path; otherwise, false.
 */
export default (object, callback, isOptimistic = false) => {
	const processValue = (path, value) => {
		let isCanceled = false;
		let result;

		const loopCallback = (value, key) => {
			if (processValue(appendToPath(path, key), value) === true) {
				if (!isOptimistic) {
					return true;
				}
				isCanceled = true;
			}
		};

		if (callback(path, value) === true) {
			return true;
		}

		if (isArray(value)) {
			result = value.some(loopCallback);
			if (!isOptimistic) {
				return result;
			}
		}
		else if (isObject(value)) {
			result = forOwn(value, loopCallback);
			if (!isOptimistic) {
				return result;
			}
		}

		return isCanceled;
	};

	return processValue('', object);
};
