import forOwn from './forOwn.js';
import appendToPath from './utility/appendToPath.js';
import isArray from './utility/isArray.js';
import isObject from './utility/isObject.js';

const processValue = (path, value, callback, isOptimistic, references) => {
	const loopCallback = (innerValue, key) => {
		return processValue(appendToPath(path, key), innerValue, callback, isOptimistic, references) === true && !isOptimistic;
	};

	if (callback(path, value, references.has(value)) === true) {
		return true;
	}

	if (isArray(value)) {
		return value.some(loopCallback);
	}

	if (isObject(value)) {
		if (!references.has(value)) {
			references.set(value, true);
			return forOwn(value, loopCallback) || isOptimistic;
		}
	}

	return isOptimistic;
};

/**
 * Traverses a nested object. Circular objects are only traversed once.
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
 * // => '', { a: [{ b: 'c' }, { b: 'd' }] }
 * // => 'a', [{ b: 'c' }, { b: 'd' }]
 * // => 'a.0', { b: 'c' }
 * // => 'a.0.b', 'c'
 * // => 'a.1', { b: 'd' }
 * // => 'a.1.b', 'd'
 * // => 'e', 'f'
 * ```
 *
 * @function traverse
 * @category Iteration
 *
 * @param {object} object - The object to traverse.
 * @param {Function} callback - Provides two args, path and value. If true is returned then stop traversing and return true.
 * @param {boolean} [isOptimistic=false] - If true then returning true in the callback will prevent going deeper down that branch, but will otherwise continue traversing.
 *
 * @returns {boolean} True if the callback function returns a truthy value for any path, otherwise false.
 */
export default (object, callback, isOptimistic = false) => {
	const map = new Map();

	const result = processValue('', object, callback, isOptimistic === true, map);

	map.clear();

	return result;
};
