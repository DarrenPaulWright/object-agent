/**
 * Returns the path without the last key
 *
 * @example
 * ``` javascript
 * import { initialInPath } from 'object-agent';
 *
 * initialInPath('first.0.last');
 * // => 'first.0'
 * ```
 *
 * @function initialInPath
 * @category Path Utility
 *
 * @arg {String} path
 * @arg {String} [separator=.] - Defines the boundary between steps in the path.
 *
 * @returns {String}
 */
export default (path, separator = '.') => {
	let index = path.lastIndexOf(separator);

	return (index === -1) ? '' : path.slice(0, index);
};
