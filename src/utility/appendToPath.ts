import type { PathOf } from '../types.js';

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
 */
export default <Type extends object>(
	path: string,
	key: string | number | symbol, // keyof TypeAtPath<Type, InputPath>,
	separator = '.'
): PathOf<Type> => {
	return path === '' ?
		// eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
		key.toString() as PathOf<Type> :
		// eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
		path + separator + key.toString() as PathOf<Type>;
};
