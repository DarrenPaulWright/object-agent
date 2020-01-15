import { benchSettings } from 'karma-webpack-bundle';
import { countInString } from '../../index.js';

suite('countInString', () => {
	let sandbox = '';

	benchmark('no matches', () => {
		sandbox = countInString('one.two.three', ',');
	}, benchSettings);

	benchmark('one match', () => {
		sandbox = countInString('one.two', '.');
	}, benchSettings);

	benchmark('multiple matches', () => {
		sandbox = countInString('one.two.three.four', '.');
	}, benchSettings);
});
