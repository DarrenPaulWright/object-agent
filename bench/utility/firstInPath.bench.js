import { benchSettings } from 'karma-webpack-bundle';
import { firstInPath } from '../../index';

suite('firstInPath', () => {
	let sandbox = '';

	benchmark('single item path', () => {
		sandbox = firstInPath('one');
	}, benchSettings);

	benchmark('multi item path', () => {
		sandbox = firstInPath('one.two.three');
	}, benchSettings);
});
