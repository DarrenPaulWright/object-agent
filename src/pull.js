import get from './get';
import parsePath from './utility/parsePath';

/**
 * Pulls values from an array of objects into a new array.
 *
 * @example
 * ``` javascript
 * import { pull } from 'object-agent';
 *
 * const array = [{
 *     a: { b: [1, 2, 3] }
 * }, {
 *     a: { b: [4, 5, 6] }
 * }];
 *
 * pull(array, ['a', 'b', 1]); // => [2, 5]
 * ```
 *
 * @function pull
 *
 * @arg {Array} array
 * @arg {Array|String} path - If a string, gets split on '.'
 *
 * @returns {Array}
 */
export default (array, path) => {
	path = parsePath(path);
	return array.map((item) => item ? get(item, path) : undefined);
};
