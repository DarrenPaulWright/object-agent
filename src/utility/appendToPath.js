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
 * @arg {String} [separator=.] - Defines the boundary between steps in the path.
 *
 * @returns {String}
 */
export default (path, key, separator = '.') => {
	if (path !== '') {
		path += separator;
	}

	return path + key;
};
