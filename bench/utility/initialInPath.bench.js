import { benchSettings } from 'karma-webpack-bundle';
import { initialInPath } from '../../index';

suite('initialInPath', () => {
	let sandbox = '';

	benchmark('single item path', () => {
		sandbox = initialInPath('one');
	}, benchSettings);

	benchmark('multi item path', () => {
		sandbox = initialInPath('one.two.three');
	}, benchSettings);
});
