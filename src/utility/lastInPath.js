/**
 * Returns the last key in a path
 *
 * @example
 * ``` javascript
 * import { lastInPath } from 'object-agent';
 *
 * lastInPath('first.0.last');
 * // => 'last'
 * ```
 *
 * @function lastInPath
 * @category Path Utility
 *
 * @arg {String} path
 * @arg {String} [separator=.] - Defines the boundary between steps in the path.
 *
 * @returns {String}
 */
export default (path, separator = '.') => {
	return path.slice(path.lastIndexOf(separator) + 1);
};
