import { isArray, isObject } from 'type-enforcer';
import forOwn from './forOwn';
import isEmpty from './isEmpty';
import isEqual from './isEqual';
import pull from './pull';
import set from './set';
import multiArgs from './utility/multiArgs';

const intersectionValues = (values) => {
	if (isArray(values[0])) {
		return intersectionArrays(values);
	}
	else if (isObject(values[0])) {
		return intersectionObjects(values);
	}

	return intersectionOther(values);
};

const intersectionOther = (args) => {
	return isEqual(args) ? args[0] : undefined;
};

const intersectionArrays = (args) => {
	const array1 = args.shift();
	let otherArrays = [].concat(...args);
	return array1.filter((item) => otherArrays.findIndex((diffItem) => isEqual(diffItem, item)) !== -1);
};

const intersectionObjects = (args) => {
	const output = {};
	let diff;

	forOwn(args[0], (value, key) => {
		diff = intersectionValues(pull(args, key));

		if (!isEmpty(diff) || diff === null) {
			set(output, key, diff);
		}
	});

	return output;
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
 *
 * @function intersection
 *
 * @arg {...*|Array}
 *
 * @returns {Object}
 */
export default (...args) => intersectionValues(multiArgs(args));
