/**
 * Returns the last key in a path
 *
 * @function lastInPath
 *
 * @arg {String} path
 *
 * @returns {String}
 */
export default (path) => {
	return path.substring(path.lastIndexOf('.') + 1);
};
