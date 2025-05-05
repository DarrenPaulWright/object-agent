import repeat from './repeat.js';

const defaultCallback = (index: number): number => index;

interface OverloadedFill {
	<ReturnValue>(length: number, callback: ((index: number) => ReturnValue)): Array<ReturnValue>;

	(length: number): Array<number>;
}

/**
 * Returns an array of specified length filled with either the index value or the value returned from the provided callback.
 *
 * @example
 * ``` javascript
 * import { fill } from 'object-agent';
 *
 * fill(5);
 * // => [0, 1, 2, 3, 4]
 *
 * fill(3, (index) => index * 3);
 * // => [0, 3, 6]
 * ```
 */
const fill: OverloadedFill = <ReturnValue>(
	length: number,
	// eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
	callback: (index: number) => ReturnValue = defaultCallback as (index: number) => ReturnValue
): Array<typeof callback extends never ? number : ReturnValue> => {
	const output = new Array<ReturnValue>(length);

	repeat(length, (index) => {
		output[index] = callback(index);
	});

	return output;
};

export default fill;
