import isArray from './isArray';

export default (path) => isArray(path) ? path : path.split('.');
