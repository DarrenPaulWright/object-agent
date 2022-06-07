import isArray from './utility/isArray.js';

/**
 * Tests if an object or array has any set keys. The values of each key are not considered.
 *
 * @example
 * ``` javascript
 * import { isEmpty } from 'object-agent';
 *
 * isEmpty(['a', 1, 'b']);
 * // => false
 *
 * isEmpty([]);
 * // => true
 *
 * isEmpty({ a: 'b' });
 * // => false
 *
 * isEmpty({});
 * // => true
 *
 * isEmpty(null);
 * // => true
 *
 * isEmpty(undefined);
 * // => true
 * ```
 *
 * @function isEmpty
 * @category Comparison
 *
 * @param {*} item - The item to test.
 *
 * @returns {boolean}
 */
export default (item) => {
	if (!item) {
		return true;
	}

	if (isArray(item)) {
		return item.length === 0;
	}

	for (const x in item) {
		return false;
	}

	return true;
};
