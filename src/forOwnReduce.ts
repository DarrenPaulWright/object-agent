import forOwn from './forOwn.js';

/**
 * Iterates over own properties of an object and returns a reduced value.
 *
 * @example
 * ``` javascript
 * import { forOwnReduce } from 'object-agent';
 *
 * const thing = {
 *     a: 'b',
 *     c: 'd'
 * };
 *
 * const output = forOwnReduce(thing, (result, value, key) => {
 *     result.push([value, key]);
 *     return result;
 * }, []);
 *
 * console.log(output);
 * // => [['b', 'a'], ['d', 'c']]
 * ```
 */
const forOwnReduce = <ReturnType, Type extends object = object>(
	object: Type,
	callback: (
		accumulator: ReturnType,
		value: Type[keyof Type],
		key: keyof Type
	) => ReturnType | void,
	initialValue: ReturnType
): ReturnType => {
	let accumulator = initialValue;

	forOwn(object, (value, key) => {
		accumulator = callback(accumulator, value, key) || initialValue;
	});

	return accumulator;
};

export default forOwnReduce;
