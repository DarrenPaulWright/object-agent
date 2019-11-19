import { benchSettings } from 'karma-webpack-bundle';
import { walkPath } from '../../index';

suite('walkPath', () => {
	let sandbox = '';

	const count = (string, match) => {
		let index = -1;
		let total = 0;

		while ((index = string.indexOf(match, index + 1)) !== -1) {
			total++;
		}

		return total;
	};

	benchmark('single item path', () => {
		walkPath('one', (key, path) => {
			sandbox = path;
		});
	}, benchSettings);

	benchmark('multi item path', () => {
		walkPath('one.two.three', (key, path) => {
			sandbox = path;
		});
	}, benchSettings);
});
