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
 *
 * @arg {String} path
 *
 * @returns {String}
 */
export default (path) => {
	let index = path.lastIndexOf('.');

	return (index === -1) ? '' : path.substring(0, index);
};
