import { isArray, isObject } from 'type-enforcer';
import forOwn from './forOwn';
import isEmpty from './isEmpty';
import isEqual from './isEqual';
import pull from './pull';
import set from './set';
import multiArgs from './utility/multiArgs';

const diffValue = (values) => {
	if (isArray(values[0])) {
		return diffArray(values);
	}
	else if (isObject(values[0])) {
		return diffObject(values);
	}

	return diffOther(values);
};

const diffOther = (args) => {
	return isEqual(args) ? args[0] : undefined;
};

const diffArray = (args) => {
	const array1 = args.shift();
	let diffArrays = [].concat(...args);
	return array1.filter((item) => diffArrays.findIndex((diffItem) => isEqual(diffItem, item)) !== -1);
};

const diffObject = (args) => {
	const output = {};
	let diff;

	forOwn(args[0], (value, key) => {
		diff = diffValue(pull(args, key));

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
export default (...args) => diffValue(multiArgs(args));
