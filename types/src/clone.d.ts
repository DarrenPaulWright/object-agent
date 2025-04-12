/**
 * Deep clone a value.
 *
 * @example
 * ``` javascript
 * import { clone } from 'object-agent';
 *
 * clone({ a: 'b', c: 'd' });
 * // => { a: 'b', c: 'd' }
 * ```
 *
 * @function clone
 * @category Interaction
 *
 * @param {unknown} value - The data to clone.
 * @param {object} [settings] - Settings object.
 * @param {Array | string} [settings.ignoreKeys] - Any keys in this array will not be cloned.
 * @param {boolean} [settings.isCircular=false] - If true then circular references will be handled.
 *
 * @returns {unknown}
 */
export default function clone<Value>(value: Value, settings?: {
	ignoreKeys?: string | Array<string>;
	isCircular?: boolean;
}): Value;
