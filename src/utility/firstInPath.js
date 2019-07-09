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
 *
 * @arg {String} path
 *
 * @returns {String}
 */
export default (path) => {
	let index = path.indexOf('.');

	return (index === -1) ? path : path.substring(0, index);
};
