/**
 * Iterates over own properties of an object. Stops iterating as soon as the callback returns a truthy value.
 *
 * @example
 * ``` javascript
 * import { forOwn } from 'object-agent';
 *
 * const thing = {
 *     a: 'b',
 *     c: 'd'
 * };
 *
 * forOwn(thing, (value, key) => {
 *     console.log(value, key);
 * });
 * // => 'b', 'a'
 * // => 'd', 'c'
 * ```
 */
const forOwn = <Type extends object>(
	object: Type | undefined | null,
	callback: <Key extends keyof Type = keyof Type>(value: Type[Key], key: Key) => unknown
): boolean => {
	if (object) {
		for (const key in object) {
			if (Object.hasOwn(object, key) && callback(object[key], key)) {
				return true;
			}
		}
	}

	return false;
};

export default forOwn;
