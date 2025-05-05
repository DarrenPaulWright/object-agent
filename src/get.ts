import type { NotObject, PathOf, TypeAtPath } from './types.js';
import walkPath from './utility/walkPath.js';

interface Get {
	<Type>(object: Type, path: ''): Type;

	<Type extends NotObject>(object: Type, path: string): Type;

	<Type extends object>(
		object: Type,
		path: PathOf<Type>
	): TypeAtPath<Type, typeof path> | undefined;

	(object: unknown, path: string): unknown;

	(object: undefined, path: string): undefined;
}

/**
 * Gets a nested value from an object.
 *
 * @example
 * ``` javascript
 * import { get } from 'object-agent';
 *
 * const thing = {
 *     a: [{
 *         b: 'c'
 *     }, {
 *         b: 'd'
 *     }]
 * };
 *
 * get(thing, 'a.1.b');
 * // => 'd'
 * ```
 */
const get: Get = <Type extends object, Path extends string>(
	object: Type,
	path: Path
): TypeAtPath<Type, Path> | undefined => {
	let output: unknown = object;

	walkPath(path, (key) => {
		output = (output !== undefined && output !== null) ?

			// @ts-expect-error key is handled
			output[key] :
			undefined;

		return output === undefined;
	});

	// eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
	return output as TypeAtPath<Type, Path> | undefined;
};

export default get;
