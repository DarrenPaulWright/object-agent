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
 */
export default (item: unknown): boolean => {
	if (!item) {
		return true;
	}

	if (isArray(item)) {
		return item.length === 0;
	}

	// @ts-expect-error using x is shortcut
	// eslint-disable-next-line no-unreachable-loop
	for (const x in item) {
		return false;
	}

	return true;
};
