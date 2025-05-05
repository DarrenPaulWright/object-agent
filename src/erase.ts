/**
 * Deletes a property from an object, if the property exists.
 *
 * @example
 * ``` javascript
 * import { erase } from 'object-agent';
 *
 * const foo = {
 *     bar: 1,
 *     also: 2
 * };
 *
 * erase(foo, 'bar');
 *
 * console.log(foo);
 * // => {also: 2}
 * ```
 */
export default (object: object, key: string): unknown => {
	return typeof object === 'object' &&
		object !== null &&
		key in object &&
		// eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
		delete object[key as keyof object];
};
