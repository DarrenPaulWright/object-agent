/**
 * Returns the first key in a path
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
 * @arg {String} path
 * @arg {String} [separator=.] - Defines the boundary between steps in the path.
 *
 * @returns {String}
 */
export default (path, separator = '.') => {
	let index = path.indexOf(separator);

	return (index === -1) ? path : path.slice(0, index);
};
