import type { NotObject, PathOf } from './types.js';
import firstInPath from './utility/firstInPath.js';
import walkPath from './utility/walkPath.js';

const buildNew = (key: string): Array<unknown> | object => isNaN(parseInt(key, 10)) ? {} : [];

const prototypeKeys = {
	__proto__: true,
	constructor: true,
	prototype: true
};

interface Set {
	<Type extends NotObject>(
		object: unknown,
		path: '',
		value: Type
	): Type;

	<Type extends object>(
		object: Type,
		path: PathOf<Type>,
		value: unknown
	): Type;

	<Type extends object>(
		object: Type,
		path: string,
		value: unknown
	): Type;
}

/**
 * Sets a nested value in an object. Keys in the path that don't exist at any point in the object will be created and added to the object once.
 *
 * @example
 * ``` javascript
 * import { set } from 'object-agent';
 *
 * const thing = {
 *     a: [{
 *         b: 'c'
 *     }, {
 *         b: 'd'
 *     }]
 * };
 *
 * set(thing, 'a.1.b', 'e');
 * console.log(thing);
 * // => {
 * //    a: [{
 * //        b: 'c'
 * //    }, {
 * //        b: 'e'
 * //    }]
 * //}
 * ```
 */
const set: Set = <Type extends object>(
	object: Type,
	path: PathOf<Type>,
	value: unknown
): unknown => {
	const original = path === '' ? value : object;
	let runningValue: object = object;
	let baseItem: unknown = null;
	let baseKey = '';
	let baseValue = null;

	walkPath(path, (key, tailPath) => {
		if (tailPath === '') {
			// @ts-expect-error unknown index type
			runningValue[key] = value;

			return true;
		}

		// @ts-expect-error unknown index type
		if (runningValue[key] === undefined) {
			if (baseItem === null) {
				baseItem = runningValue;
				baseKey = key;
				runningValue = buildNew(firstInPath(tailPath));
				baseValue = runningValue;
			}
			else {
				// @ts-expect-error unknown index type
				runningValue[key] = buildNew(firstInPath(tailPath));

				// @ts-expect-error unknown index type
				// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
				runningValue = runningValue[key];
			}
		}
		else {
			if (key in prototypeKeys) {
				return true;
			}

			// @ts-expect-error unknown index type
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			runningValue = runningValue[key];
		}

		return false;
	});

	if (baseItem) {
		// @ts-expect-error unknown index type
		baseItem[baseKey] = baseValue;
	}

	return original;
};

export default set;
