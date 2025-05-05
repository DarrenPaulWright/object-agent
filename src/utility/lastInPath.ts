/**
 * Returns the last key in a path.
 *
 * @example
 * ``` javascript
 * import { lastInPath } from 'object-agent';
 *
 * lastInPath('first.0.last');
 * // => 'last'
 * ```
 */
export default (path: string, separator = '.'): string => {
	return path.slice(path.lastIndexOf(separator) + 1);
};
