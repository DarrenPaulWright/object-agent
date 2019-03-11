import forOwn from './forOwn';
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
export default (object, callback, isOptimistic) => {
	const processValue = (path, value) => {
		if (callback(path, value)) {
			return true;
		}
		if (Array.isArray(value)) {
			return value.some((value, key) => processValue(path.concat(key), value));
		}
		if (isObject(value)) {
			return forOwn(value, (value, key) => processValue(path.concat(key), value));
		}
	};

	const processValueOptimistic = (path, value) => {
		let isCanceled = false;

		const loopCallback = (value, key) => {
			if (processValueOptimistic(path.concat(key), value)) {
				isCanceled = true;
			}
		};

		if (callback(path, value)) {
			isCanceled = true;
		}
		else if (Array.isArray(value)) {
			value.some(loopCallback);
		}
		else if (isObject(value)) {
			forOwn(value, loopCallback);
		}

		return isCanceled;
	};

	return isOptimistic ? processValueOptimistic([], object) : processValue([], object);
};
