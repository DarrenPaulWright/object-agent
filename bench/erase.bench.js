import { benchSettings } from 'karma-webpack-bundle';
import { erase } from '../index.js';

let object = {id: 23};
const settings = {
	...benchSettings,
	onCycle() {
		object = {id: 23};
	}
};

const purge = (key, object) => {
	if (key in object) {
		delete object[key];
	}
};

const purge2 = (key, object) => key in object && delete object[key];

suite.skip('delete variants', () => {
	benchmark('delete existing key', () => {
		delete object.id;
	}, settings);

	benchmark('delete non-existing key', () => {
		delete object.dsg;
	}, settings);

	benchmark('dont delete non-existing key (if)', () => {
		if (object.dsg) {
			delete object.dsg;
		}
	}, settings);

	benchmark('dont delete non-existing key (if in)', () => {
		if ('dsg' in object) {
			delete object.dsg;
		}
	}, settings);

	benchmark('purge func 1 non-existing key', () => {
		purge('dsg', object);
	}, settings);

	benchmark('purge func 1 existing key', () => {
		purge('id', object);
	}, settings);

	benchmark('purge func 2 non-existing key', () => {
		purge2('dsg', object);
	}, settings);

	benchmark('purge func 2 existing key', () => {
		purge2('id', object);
	}, settings);
});

suite('erase', () => {
	let object = {id: 23};

	benchmark('delete', () => {
		erase(object, 'id');
	}, settings);

	benchmark('delete non-exists', () => {
		erase(object, 'dsg');
	}, settings);
});
