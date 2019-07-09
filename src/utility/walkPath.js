/**
 * Calls a callback for every key in a path. If true is returned from the callback then no further calls will be made.
 *
 * @function walkPath
 *
 * @arg {String} path
 * @arg {function} callback - Provides two args, the key and the tail path after key
 *
 * @returns {String}
 */
export default (path, callback) => {
	let index;
	let key;

	while (path !== '') {
		index = path.indexOf('.');

		if (index === -1) {
			index = path.length;
		}

		key = path.substring(0, index);
		path = path.substring(index + 1);

		if (callback(key, path) === true) {
			break;
		}
	}
};
