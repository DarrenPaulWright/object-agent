/**
 * Returns the path without the last key
 *
 * @function initialInPath
 *
 * @arg {String} path
 *
 * @returns {String}
 */
export default (path) => {
	let index = path.lastIndexOf('.');

	return (index === -1) ? '' : path.substring(0, index);
};
