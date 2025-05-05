const loop = (
	depth: number,
	initialIndex: number,
	arrays: Array<Array<unknown>>,
	callback: (...args: Array<unknown>) => void,
	accrue: boolean,
	result: Array<unknown>
	// eslint-disable-next-line @typescript-eslint/max-params
): void => {
	let index = initialIndex;

	for (const length = arrays[depth].length; index < length; index++) {
		result[depth] = arrays[depth][index];

		if (depth === arrays.length - 1) {
			callback(...result);
		}
		else {
			loop(depth + 1, accrue ? index + 1 : 0, arrays, callback, accrue, result);
		}
	}
};

interface NestedEach {
	<Type>(
		arrays: [Array<Type>],
		callback: (value: Type) => void,
		accrue?: boolean
	): void;

	<Type1, Type2>(
		arrays: [Array<Type1>, Array<Type2>],
		callback: (value1: Type1, value2: Type2) => void,
		accrue?: boolean
	): void;

	<Type1, Type2, Type3>(
		arrays: [Array<Type1>, Array<Type2>, Array<Type3>],
		callback: (value1: Type1, value2: Type2, value3: Type3) => void,
		accrue?: boolean
	): void;

	<Type1, Type2, Type3, Type4>(
		arrays: [Array<Type1>, Array<Type2>, Array<Type3>, Array<Type4>],
		callback: (value1: Type1, value2: Type2, value3: Type3, value4: Type4) => void,
		accrue?: boolean
	): void;

	<Type>(
		arrays: Array<Array<Type>>,
		callback: (...args: Array<Type>) => void,
		accrue?: boolean
	): void;

	(
		arrays: Array<Array<unknown>>,
		callback: (...args: Array<unknown>) => void,
		accrue?: boolean
	): void;
}

/**
 * Iterate over the values of multiple arrays.
 *
 * @example
 * ``` javascript
 * import { nestedEach } from 'object-agent';
 *
 * const output = [];
 * const save = (item1, item2) => output.push([item1, item2]);
 *
 * nestedEach([[1, 2], ['a', 'b']], save);
 *
 * console.log(output);
 * // => [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
 * ```
 */
const nestedEach: NestedEach = (
	arrays: Array<Array<unknown>>,
	callback: (...args: Array<unknown>) => void,
	accrue = false
): void => {
	loop(0, 0, arrays, callback, accrue, []);
};

export default nestedEach;
