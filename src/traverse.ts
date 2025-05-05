import forOwn from './forOwn.js';
import type { PathOf, TypeAtPath } from './types.js';
import appendToPath from './utility/appendToPath.js';
import isArray from './utility/isArray.js';
import isObject from './utility/isObject.js';

const processValue = <Type, Path extends PathOf<Type> = PathOf<Type>>(
	path: Path,
	value: TypeAtPath<Type, Path>,
	callback: <InnerPath extends PathOf<Type>>(
		path: InnerPath,
		value: TypeAtPath<Type, InnerPath>,
		isCircular: boolean
	) => unknown,
	isOptimistic: boolean,
	references: Map<unknown, unknown>
): boolean => {
	// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
	const loopCallback = <InnerPath extends PathOf<Type>>(
		innerValue: unknown,
		key: string | number | symbol
	): boolean => {
		return processValue<Type, InnerPath>(
			// eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
			appendToPath(path as string, key) as InnerPath,
			// eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
			innerValue as TypeAtPath<Type, InnerPath>,
			callback,
			isOptimistic,
			references
		) && !isOptimistic;
	};

	const isCircular = references.has(value);

	if (callback(path, value, isCircular)) {
		return true;
	}

	if (isArray(value)) {
		return value.some(loopCallback);
	}

	if (isObject(value) && !isCircular) {
		references.set(value, true);

		return forOwn(value, loopCallback) || isOptimistic;
	}

	return isOptimistic;
};

/**
 * Traverses a nested object. Circular objects are only traversed once.
 *
 * @example
 * ``` javascript
 * import { traverse } from 'object-agent';
 *
 * const thing = {
 *     a: [{
 *         b: 'c'
 *     }, {
 *         b: 'd'
 *     }],
 *     e: 'f
 * };
 *
 * traverse(thing, (path, value) => {
 *     console.log(path, value);
 * });
 * // => '', { a: [{ b: 'c' }, { b: 'd' }] }
 * // => 'a', [{ b: 'c' }, { b: 'd' }]
 * // => 'a.0', { b: 'c' }
 * // => 'a.0.b', 'c'
 * // => 'a.1', { b: 'd' }
 * // => 'a.1.b', 'd'
 * // => 'e', 'f'
 * ```
 */
const traverse = <Type>(
	object: Type,
	callback: <Path extends PathOf<Type>>(
		path: Path,
		value: TypeAtPath<Type, Path>,
		isCircular: boolean
	) => unknown,
	isOptimistic = false
): boolean => {
	const map = new Map();

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-expect-error
	const result = processValue('', object, callback, isOptimistic, map);

	map.clear();

	return result;
};

export default traverse;
