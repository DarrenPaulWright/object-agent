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
 *
 * @arg {String} path
 *
 * @returns {String}
 */
export default (path) => {
	return path.substring(path.lastIndexOf('.') + 1);
};
