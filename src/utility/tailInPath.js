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
 *
 * @returns {String}
 */
export default (path) => {
	return path.substring(path.indexOf('.') + 1);
};
