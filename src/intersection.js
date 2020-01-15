import forOwn from './forOwn.js';
import isEmpty from './isEmpty.js';
import isEqual from './isEqual.js';
import pull from './pull.js';
import set from './set.js';
import isArray from './utility/isArray.js';
import isObject from './utility/isObject.js';
import multiArgs from './utility/multiArgs.js';

const intersectionValues = (values) => {
	return isArray(values[0]) ? intersectionArrays(values) : isObject(values[0]) ? intersectionObjects(values) : intersectionOther(values);
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

	forOwn(args[0], (value, key) => {
		const diff = intersectionValues(pull(args, key));

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
