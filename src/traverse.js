import forOwn from './forOwn.js';
import appendToPath from './utility/appendToPath.js';
import isArray from './utility/isArray.js';
import isObject from './utility/isObject.js';

const processValue = (path, value, callback, isOptimistic) => {
	const loopCallback = (value, key) => {
		return processValue(appendToPath(path, key), value, callback, isOptimistic) === true && !isOptimistic;
	};

	return callback(path, value) === true || (isArray(value) ? value.some(loopCallback) : isObject(value) ? forOwn(value, loopCallback) : false) || isOptimistic;
};

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
 *
 * @arg {Object} object
 * @arg {Function} callback - Provides two args, path and value. If true is returned then stop traversing and return true.
 * @arg {Boolean} [isOptimistic=false] - If true then returning true in the callback will prevent going deeper down that branch, but will otherwise continue traversing.
 *
 * @returns {Boolean} true if the callback function returns a truthy value for any path; otherwise, false.
 */
export default (object, callback, isOptimistic = false) => {
	return processValue('', object, callback, isOptimistic === true);
};
