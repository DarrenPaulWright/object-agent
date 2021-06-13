/**
 * Returns the last key in a path.
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
 * @param {string} path - The path.
 * @param {string} [separator=.] - Defines the boundary between steps in the path.
 *
 * @returns {string}
 */
export default (path, separator = '.') => {
	return path.slice(path.lastIndexOf(separator) + 1);
};
