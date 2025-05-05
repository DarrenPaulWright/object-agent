/**
 * Iterates over own and inherited properties of an object. Stops iterating as soon as the callback returns a truthy value.
 *
 * @example
 * ``` javascript
 * import { forIn } from 'object-agent';
 *
 * const Thing = {
 *     this.a = 'b';
 * };
 *
 * Thing.prototype.c = 'd';
 *
 * forIn(new Thing(), (value, key) => {
 *     console.log(value, key);
 * });
 * // => 'b', 'a'
 * // => 'd', 'c'
 * ```
 */
const forIn = <Type extends object>(
	object: Type,
	callback: (value: Type[keyof Type], key: keyof Type) => unknown
): boolean => {
	for (const key in object) {
		if (key !== 'constructor' && callback(object[key], key)) {
			return true;
		}
	}

	return false;
};

export default forIn;
