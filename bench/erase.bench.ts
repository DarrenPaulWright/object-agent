import { afterEach, bench, describe } from 'hippogriff';
import { erase } from '../index.js';

let object: { id?: number; dsg?: number } = { id: 23 };

const purge = <Type extends object>(key: keyof Type, thisObject: Type): void => {
	if (key in thisObject) {
		delete thisObject[key];
	}
};

afterEach(() => {
	object = { id: 23 };
});

const purge2 = <Type extends object>(key: keyof Type, thisObject: Type): boolean => {
	return key in thisObject && delete thisObject[key];
};

describe.skip('delete variants', () => {
	bench('delete existing key', () => {
		delete object.id;
	});

	bench('delete non-existing key', () => {
		delete object.dsg;
	});

	bench('dont delete non-existing key (if)', () => {
		if (object.dsg) {
			delete object.dsg;
		}
	});

	bench('dont delete non-existing key (if in)', () => {
		if ('dsg' in object) {
			delete object.dsg;
		}
	});

	bench('purge func 1 non-existing key', () => {
		purge('dsg', object);
	});

	bench('purge func 1 existing key', () => {
		purge('id', object);
	});

	bench('purge func 2 non-existing key', () => {
		purge2('dsg', object);
	});

	bench('purge func 2 existing key', () => {
		purge2('id', object);
	});
});

describe('erase', () => {
	bench('delete', () => {
		erase(object, 'id');
	});

	bench('delete non-exists', () => {
		erase(object, 'dsg');
	});
});
