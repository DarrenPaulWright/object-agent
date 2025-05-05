import get from './get.js';
import type { PathOf, TypeAtPath } from './types.js';

/**
 * Pulls values from an array of objects into a new array.
 *
 * @example
 * ``` javascript
 * import { pull } from 'object-agent';
 *
 * const array = [{
 *     a: { b: [1, 2, 3] }
 * }, {
 *     a: { b: [4, 5, 6] }
 * }];
 *
 * pull(array, 'a.b.1'); // => [2, 5]
 * ```
 */
export default <Type extends object, Path extends PathOf<Type> = PathOf<Type>>(
	array: Array<Type>,
	path: Path
): Array<TypeAtPath<Type, Path> | undefined> => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
	return array.map((item) => get(item, path) as TypeAtPath<Type, Path> | undefined);
};
