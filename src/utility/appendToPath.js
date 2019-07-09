/**
 * Adds a key to the end of a path
 *
 * @example
 * ``` javascript
 * import { appendToPath } from 'object-agent';
 *
 * appendToPath('first.0', 'last');
 * // => 'first.0.last'
 * ```
 *
 * @function appendToPath
 *
 * @arg {String} path
 * @arg {String|Number} key
 *
 * @returns {String}
 */
export default (path, key) => {
	if (path !== '') {
		path += '.';
	}

	return path + key;
};
