/**
 * Calls a callback for every key in a path. If true is returned from the callback then no further calls will be made.
 *
 * @example
 * ``` javascript
 * import { walkPath } from 'object-agent';
 *
 * walkPath('first.0.last', (key, tail) => {
 *     console.log(key, tail);
 * });
 * // => 'first', '0.last'
 * // => '0', 'last'
 * // => 'last', ''
 *
 * walkPath('first.0.last', (key, tail) => {
 *     console.log(key, tail);
 *     if (key === '0') {
 *         return true;
 *     }
 * });
 * // => 'first', '0.last'
 * // => '0', 'last'
 * ```
 */
export default (
	path: string,
	callback: (key: string, tail: string) => unknown,
	separator = '.'
): void => {
	let runningPath = path;

	while (runningPath !== '') {
		const offset = runningPath.indexOf(separator);

		switch (offset) {
			case -1: {
				if (runningPath !== '') {
					callback(runningPath, '');
				}

				return;
			}

			case 0: {
				runningPath = runningPath.slice(offset + 1);
				break;
			}

			default: {
				if (callback(
					runningPath.slice(0, offset),
					runningPath = runningPath.slice(offset + 1)
				)) {
					return;
				}
			}
		}
	}
};
