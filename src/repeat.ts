/**
 * Calls a callback a specified number of times.
 *
 * @example
 * ``` javascript
 * import { repeat } from 'object-agent';
 *
 * repeat(5, (index) => console.log(index));
 * // => 0
 * // => 1
 * // => 2
 * // => 3
 * // => 4
 * ```
 */
export default (times: number, callback: (index: number) => void): void => {
	for (let index = 0; index < times; index++) {
		callback(index);
	}
};
