/**
 * Calls a callback for every key in a path. If true is returned from the callback then no further calls will be made.
 *
 * @example
 * ``` javascript
 * import { walkPath } from 'object-agent';
 *
 * walkPath('first.0.last', (key, tail) => {
 *     console.log(key, tail);
 * });
 * // => 'first', '0.last'
 * // => '0', 'last'
 * // => 'last', ''
 *
 * walkPath('first.0.last', (key, tail) => {
 *     console.log(key, tail);
 *     if (key === '0') {
 *         return true;
 *     }
 * });
 * // => 'first', '0.last'
 * // => '0', 'last'
 * ```
 *
 * @function walkPath
 * @category Path Utility
 *
 * @param {string} path - The path.
 * @param {Function} callback - Provides two args, the key and the tail path after key.
 * @param {string} [separator=.] - Defines the boundary between steps in the path.
 */
export default (path, callback, separator = '.') => {
	while (path !== '') {
		const offset = path.indexOf(separator);

		switch (offset) {
			case -1:
				callback(path, '');
				return;
			case 0:
				path = path.slice(offset + 1);
				break;
			default:
				if (callback(path.slice(0, offset), path = path.slice(offset + 1))) {
					return;
				}
		}
	}
};
