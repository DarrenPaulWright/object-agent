/**
 * Returns the path without the last key.
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
 * @param {string} path - The path.
 * @param {string} [separator=.] - Defines the boundary between steps in the path.
 *
 * @returns {string}
 */
export default (path, separator = '.') => {
	const index = path.lastIndexOf(separator);

	return (index === -1) ? '' : path.slice(0, index);
};
