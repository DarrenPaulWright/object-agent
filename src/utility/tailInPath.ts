/**
 * Returns the path without the first key.
 *
 * @example
 * ``` javascript
 * import { tailInPath } from 'object-agent';
 *
 * tailInPath('first.0.last');
 * // => '0.last'
 * ```
 */
export default (path: string, separator = '.'): string => {
	const index = path.indexOf(separator);

	return (index === -1) ? '' : path.slice(index + 1);
};
