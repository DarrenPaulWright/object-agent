/**
 * Returns the first key in a path.
 *
 * @example
 * ``` javascript
 * import { firstInPath } from 'object-agent';
 *
 * firstInPath('first.0.last');
 * // => 'first'
 * ```
 *
 * @function firstInPath
 * @category Path Utility
 *
 * @param {string} path - The path.
 * @param {string} [separator=.] - Defines the boundary between steps in the path.
 *
 * @returns {string}
 */
export default (path, separator = '.') => {
	const index = path.indexOf(separator);

	return (index === -1) ? path : path.slice(0, index);
};
