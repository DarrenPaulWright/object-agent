/**
 * Returns the path without the first key
 *
 * @function tailInPath
 *
 * @arg {String} path
 *
 * @returns {String}
 */
export default (path) => {
	return path.substring(path.indexOf('.') + 1);
};
