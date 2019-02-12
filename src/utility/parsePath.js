import { isArray } from 'type-enforcer';

export default (path) => isArray(path) ? path : path.split('.');
