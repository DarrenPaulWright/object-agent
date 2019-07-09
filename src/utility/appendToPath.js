/**
 * Adds a key to the end of a path
 *
 * @function appendToPath
 *
 * @arg {String} path
 * @arg {String|Number} key
 *
 * @returns {String}
 */
export default (path, key) => {
	if (path !== '') {
		path += '.';
	}

	return path + key;
};
