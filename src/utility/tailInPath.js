/**
 * Returns the path without the first key
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
 *
 * @arg {String} path
 * @arg {String} [separator=.] - Defines the boundary between steps in the path.
 *
 * @returns {String}
 */
export default (path, separator = '.') => {
	let index = path.indexOf(separator);
	
	return (index === -1) ? '' : path.substring(index + 1);
};
