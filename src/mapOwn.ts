import forOwn from './forOwn.js';
import isArray from './utility/isArray.js';

/**
 * Builds a new object by iterating over own properties of an object.
 *
 * @example
 * ``` javascript
 * import { mapOwn } from 'object-agent';
 *
 * const thing = {
 *     a: 'b',
 *     c: 'd'
 * };
 *
 * mapOwn(thing, (value, key) => value + ' ' + key);
 * // => { a: 'b a', c: 'd c' }
 * ```
 */
const mapOwn = <Input extends object>(
	object: Input,
	callback?: (value: unknown, key: keyof Input) => unknown,
	ignoreKeys: Array<keyof Input> = []
): { [Property in keyof Omit<Input, typeof ignoreKeys[number]>]: unknown } => {
	if (!object) {
		return object;
	}

	const result: ReturnType<typeof mapOwn<Input>> = {};

	const ignore: Array<keyof Input> = isArray(ignoreKeys) ? ignoreKeys : [ignoreKeys];

	forOwn(object, (value, key) => {
		if (!ignore.includes(key)) {
			// @ts-expect-error typescript doesn't recognize the includes line above
			result[key] = callback ? callback(value, key) : value;
		}
	});

	return result;
};

export default mapOwn;
