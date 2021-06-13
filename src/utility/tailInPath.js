/**
 * Returns the path without the first key.
 *
 * @example
 * ``` javascript
 * import { tailInPath } from 'object-agent';
 *
 * tailInPath('first.0.last');
 * // => '0.last'
 * ```
 *
 * @function tailInPath
 * @category Path Utility
 *
 * @param {string} path - The path.
 * @param {string} [separator=.] - Defines the boundary between steps in the path.
 *
 * @returns {string}
 */
export default (path, separator = '.') => {
	const index = path.indexOf(separator);

	return (index === -1) ? '' : path.slice(index + 1);
};
