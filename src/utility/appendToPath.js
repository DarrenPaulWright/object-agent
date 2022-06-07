/**
 * Adds a key to the end of a path.
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
 * @category Path Utility
 *
 * @param {string} path - The path.
 * @param {string | number} key - The next key to append.
 * @param {string} [separator=.] - Defines the boundary between steps in the path.
 *
 * @returns {string}
 */
export default (path, key, separator = '.') => {
	return path === '' ?
		key + '' :
		path + separator + key;
};
