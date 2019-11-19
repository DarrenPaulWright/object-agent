/**
 * Calls a callback for every key in a path. If true is returned from the callback then no further calls will be made.
 *
 * @example
 * ``` javascript
 * import { walkPath } from 'object-agent';
 *
 * walkPath('first.0.last', (key, tail) => {
 *     console.log(key, tail);
 * });
 * // => 'first', '0.last'
 * // => '0', 'last'
 * // => 'last', ''
 *
 * walkPath('first.0.last', (key, tail) => {
 *     console.log(key, tail);
 *     if (key === '0') {
 *         return true;
 *     }
 * });
 * // => 'first', '0.last'
 * // => '0', 'last'
 * ```
 *
 * @function walkPath
 *
 * @arg {String} path
 * @arg {function} callback - Provides two args, the key and the tail path after key
 * @arg {String} [separator=.] - Defines the boundary between steps in the path.
 *
 * @returns {String}
 */
export default (path, callback, separator = '.') => {
	for (let prev = 0, index = -1, length = path.length; ((index = path.indexOf(separator, prev)) === -1 ? (index = length) : 1) !== -1 &&
	(prev === index ||
		callback(path.slice(prev, index), path.slice(index + 1)) !== true) &&
	index !== length;) {
		prev = index + 1;
	}
};
