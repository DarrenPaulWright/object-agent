import type { PathOf } from '../types.js';

/**
 * Returns the path without the last key.
 *
 * @example
 * ``` javascript
 * import { initialInPath } from 'object-agent';
 *
 * initialInPath('first.0.last');
 * // => 'first.0'
 * ```
 */
export default <Type extends object>(path: string, separator = '.'): PathOf<Type> => {
	const index = path.lastIndexOf(separator);

	// eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
	return ((index === -1) ? '' : path.slice(0, index)) as PathOf<Type>;
};
