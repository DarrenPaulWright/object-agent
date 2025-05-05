import forOwn from './forOwn.js';
import isEmpty from './isEmpty.js';
import isEqual from './isEqual.js';
import pull from './pull.js';
import set from './set.js';
import type { PathOf } from './types.js';
import isArray from './utility/isArray.js';
import isObject from './utility/isObject.js';
import multiArgs from './utility/multiArgs.js';

const intersectionOther = (args: Array<unknown>): unknown => {
	return isEqual(args) ? args[0] : undefined;
};

const intersectionArrays = <Type>(args: Array<Array<Type>>): Array<Type> => {
	const array1 = args.shift()!;
	const otherArrays: Array<Type> = [];

	args.forEach((arg) => {
		if (isArray(arg)) {
			arg.forEach((item) => {
				otherArrays.push(item);
			});
		}
	});

	return array1.filter((item) => {
		return otherArrays.some((diffItem) => isEqual(diffItem, item));
	});
};

const intersectionObjects = <Type extends object>(args: Array<Type>): Type => {
	const output: Partial<Type> = {};

	forOwn(args[0], (_value, key) => {
		// eslint-disable-next-line @typescript-eslint/no-use-before-define,@typescript-eslint/no-unsafe-type-assertion
		const diff = intersectionValues(pull(args, key as unknown as PathOf<Type>));

		if (!isEmpty(diff) || diff === null) {
			// @ts-expect-error unknown
			set(output, key, diff);
		}
	});

	// eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
	return output as Type;
};

const intersectionValues = <Type>(values: Array<Type>): Type => {
	return isArray(values[0]) ?

		// @ts-expect-error unknown
		intersectionArrays(values) :
		(
			isObject(values[0]) ?

				// @ts-expect-error unknown
				intersectionObjects(values) :

				// @ts-expect-error unknown
				intersectionOther(values)
		);
};

/**
 * Performs a deep comparison of objects and returns a new object of values that are equal in all given objects.
 *
 * @example
 * ``` javascript
 * import { intersection } from 'object-agent';
 *
 * intersection([1, 2, 3], [2, 3, 4], [5, 6, 2, 3]); // => [2, 3]
 *
 * intersection({
 *     a: 'b',
 *     c: [1, 2, 3],
 *     d: null
 * }, {
 *     a: 'b',
 *     c: [1, 3, 4]
 * })
 * // => { a: 'b', c: [1, 3] }
 * ```
 */
export default <Type>(...args: Array<Type>): Partial<Type> => {
	return intersectionValues(multiArgs(args));
};
