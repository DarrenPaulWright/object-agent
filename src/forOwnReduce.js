import forOwn from './forOwn';

/**
 * Iterates over own properties of an object and returns a reduced value
 *
 * @example
 * ``` javascript
 * import { forOwnReduce } from 'object-agent';
 *
 * const thing = {
 *     a: 'b',
 *     c: 'd'
 * };
 *
 * const output = forOwnReduce(thing, (result, value, key) => {
 *     result.push([value, key]);
 *     return result;
 * }, []);
 *
 * console.log(output);
 * // => [['b', 'a'], ['d', 'c']]
 * ```
 *
 * @function forOwnReduce
 *
 * @arg {Object} object
 * @arg {Function} callback - Provides three args: result, value, and key. If the result is only mutated then you may not need to return it.
 * @arg {*} initialValue
 *
 * @returns {*} The accumulated result
 */
export default (object, callback, initialValue) => {
	forOwn(object, (value, key) => {
		initialValue = callback(initialValue, value, key) || initialValue;
	});

	return initialValue;
};
