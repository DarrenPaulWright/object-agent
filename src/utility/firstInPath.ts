import type { PathOf } from '../types.js';

/**
 * Returns the first key in a path.
 *
 * @example
 * ``` javascript
 * import { firstInPath } from 'object-agent';
 *
 * firstInPath('first.0.last');
 * // => 'first'
 * ```
 */
export default <Type extends object>(path: string, separator = '.'): PathOf<Type> => {
	const index = path.indexOf(separator);

	// eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
	return ((index === -1) ? path : path.slice(0, index)) as PathOf<Type>;
};
